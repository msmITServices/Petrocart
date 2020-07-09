const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount= require("./petrocart-cebcf86fe29f")

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://petrocart-92031.firebaseio.com"
      });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const app = express();
const https =require('https');

/**
* import checksum generation utility
* You can get this utility from https://developer.paytm.com/docs/checksum/
*/
const checksum_lib = require('./paytm/checksum');



/**
* Generate checksum by parameters we have in body
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/


        
app.use(cors({ origin: true }));

app.post('/payment', (req, resp) => {


    var orderId=req.body.orderId
    var amount=req.body.amount
    var id=req.body.id



    var paytmParams = {};

    /* body parameters */
    paytmParams.body = {
    
        /* for custom checkout value is 'Payment' and for intelligent router is 'UNI_PAY' */
        "requestType" : "Payment",
    
        /* Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
        "mid" : "IbwCCo11174667937785",
    
        /* Find your Website Name in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
        "websiteName" : "DEFAULT",
    
        /* Enter your unique order id */
        "orderId" :orderId,
    
        /* on completion of transaction, we will send you the response on this URL */
        "callbackUrl" : "https://google.com",
    
        /* Order Transaction Amount here */
        "txnAmount" : {
    
            /* Transaction Amount Value */
            "value" : amount,
    
            /* Transaction Amount Currency */
            "currency" : "INR",
        },
    
        /* Customer Infomation here */
        "userInfo" : {
    
            /* unique id that belongs to your customer */
            "custId" : id
        },
    };
    





    checksum_lib.genchecksumbystring(JSON.stringify(paytmParams.body), "fvVqfEd2XaaWBSFD", function(err, checksum){


        /* initialize an object */



        /* head parameters */
        paytmParams.head = {
            
            /* put generated checksum value here */
            "signature"	: checksum
        };
    
        /* prepare JSON string for request */
        var post_data = JSON.stringify(paytmParams);
    
        var options = {
    
            /* for Staging */
          //  hostname: 'securegw-stage.paytm.in',
    
            /* for Production */
         hostname: 'securegw.paytm.in',
    
            port: 443,
            path: '/theia/api/v1/initiateTransaction?mid=IbwCCo11174667937785&orderId='+orderId,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            }
        };
    
        // Set up the request
    
        var response = "";
        var post_req = https.request(options, function(post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });
    
            post_res.on('end', function(){
                if(!JSON.parse(response).body){
                    resp.status(400).send(err)
                }
              //  resp.status(200).send(response)
               resp.status(200).send({token:JSON.parse(response).body.txnToken,mid:"IbwCCo11174667937785",callback:"https://google.com"})
            });
        });
    
        // post the data
        post_req.write(post_data);
        post_req.end();
    });


});

app.post("/verify", (req, resp) => {
    var body=req.body
    var orderId=body.ORDERID
    var txnAmount=body.TXNAMOUNT
    var user=body.USER
    /* initialize an object */
    var paytmParams = {};
    
    /* Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys */
    paytmParams["MID"] = "IbwCCo11174667937785";
    
    /* Enter your order id which needs to be check status for */
    paytmParams["ORDERID"] = orderId;
    
    /**
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    checksum_lib.genchecksum(paytmParams, "fvVqfEd2XaaWBSFD", function(err, checksum){
    
        /* put generated checksum value here */
        paytmParams["CHECKSUMHASH"] = checksum;
    
        /* prepare JSON string for request */
        var post_data = JSON.stringify(paytmParams);
    
        var options = {
    
             hostname: 'securegw.paytm.in',
    
            port: 443,
            path: '/order/status',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            }
        };
    
        // admin.firestore().collection('order').getDocuments()
        // .then(result=>{
        //     if(result.empty){
        //         console.log("nothing here")
        //     }
        //     // var data=result.docs.map(doc=>{
        //     //     const {color,created_at,name,quantity,regular_price,sale_price,stock,thumbnail}=doc.data()
        //     //    return {
        //     //        color:color,
        //     //        name:name,
        //     //        id:doc.id,
        //     //        quantity:quantity
        //     //    }
        //     // })
        //     console.log(result.docs)

        //     // admin.firestore().collection('orders')
        //     // .doc(user).collection('product').doc(orderId).set(result.data)
        // })



        // Set up the request
        var response = "";
        var post_req = https.request(options, function(post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });
    
            post_res.on('end', function(){
                if(!JSON.parse(response)){
                    resp.status(400).send(err)
                }else{
                    if(JSON.parse(response).STATUS==="TXN_SUCCESS" && JSON.parse(response).TXNAMOUNT===txnAmount){
                        resp.status(200).send({success:true})

                      admin.firestore().collection('transactions').doc(user).collection('transaction')
                      .doc(JSON.parse(response).TXNID).set(JSON.parse(response)).then(result=>{
           

                        }).catch(res=>{
                            console.log(res)
                        })
                      

                    }
                }
            });
        });
    
        post_req.write(post_data);
        post_req.end();
    });
                 



});

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);

