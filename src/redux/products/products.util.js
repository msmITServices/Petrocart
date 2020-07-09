export const productsWithFullUri=products=>{
    
    for(var element in products){
        for(var el in products[element].image){
           // products.element.image[el]="https://petrocart-92031.web.app/assets/img/web/"+el

           products[element].image[el]="https://petrocart-92031.web.app/assets/img/web/"+products[element].image[el]

        }
        

    }
    return products;
    
}