db.listingsAndReviews.find(
    
    {
        "property_type":"House"
    }, 
    {
        "property_type": 1 //Sadece istenilen kolonu getirmek için kullanılır.
    }
    ) 