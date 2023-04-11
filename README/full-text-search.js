db.stores.find(

    {
        $text:
        {
            $search:"coffee shop -Just" //-name olmamasını istediğimiz verileri göstermez.
            }
        },
        {
            score:{$meta:"textScore"} //Eşleşme oranı 
        }
                )