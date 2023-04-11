db.listingsViewReviews.find(

    {
        "property_type": "House",       
         $or:        
        [      
        {         
            "bedrooms":         
            {        
                $gt:3             
            }   
        },
        {
            "beds":
            {

                $gt:10
            }
        }
        ]
    }
)