db.listingsAndReviews.find(

    {
    "property_type":     
    {        
        $in:        
        [           
            "House", "Apartment"           
        ]           
    },            
            "bedrooms":           
            {
                $gt:2               
            }             
}
                            )