// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.artists.insertMany([
{ 
  "_id" : 1, 
  "last_name" : "Bernard", 
  "first_name" : "Emil", 
  "year_born" : 1868, 
  "year_died" : 1941, 
  "nationality" : "France" 
},
{ 
  "_id" : 2, 
  "last_name" : "Rippl-Ronai", 
  "first_name" : "Joszef", 
  "year_born" : 1861, 
  "year_died" : 1927, 
  "nationality" : "Hungary" 
},
{ 
  "_id" : 3, 
  "last_name" : "Ostroumova", 
  "first_name" : "Anna", 
  "year_born" : 1871, 
  "year_died" : 1955, 
  "nationality" : "Russia" 
},
{ 
  "_id" : 4, 
  "last_name" : "Van Gogh", 
  "first_name" : "Vincent", 
  "year_born" : 1853, 
  "year_died" : 1890, 
  "nationality" : "Holland" 
},
{ 
  "_id" : 5, 
  "last_name" : "Maurer", 
  "first_name" : "Alfred", 
  "year_born" : 1868, 
  "year_died" : 1932, 
  "nationality" : "USA" 
},
{ 
  "_id" : 6, 
  "last_name" : "Munch", 
  "first_name" : "Edvard", 
  "year_born" : 1863, 
  "year_died" : 1944, 
  "nationality" : "Norway" 
},
{ 
  "_id" : 7, 
  "last_name" : "Redon", 
  "first_name" : "Odilon", 
  "year_born" : 1840, 
  "year_died" : 1916, 
  "nationality" : "France" 
},
{ 
  "_id" : 8, 
  "last_name" : "Diriks", 
  "first_name" : "Edvard", 
  "year_born" : 1855, 
  "year_died" : 1930, 
  "nationality" : "Norway" 
}
])


// QUERYS

//Bucket Documents: https://www.mongodb.com/docs/manual/reference/operator/aggregation/bucket/

db.artists.aggregate([{
    $bucket: {
      groupBy:"$year_born",  
      boundaries:[1840, 1860, 1880],
      default: "Other"
              }
}])

//---------------------------------------------------------
    
db.artists.aggregate([{
    $bucket: {
      groupBy:"$year_born",
      boundaries:[1840, 1850, 1860, 1880],
      default: "Other",
      output:
        {
          "count":{$sum:1},
          "avg_year_born":{$avg:"$year_born"},
          "min_year_born":{$min:"$year_born"},
          "max_year_born":{$max:"$year_born"}
        }
        }
}])

//---------------------------------------------------------

db.artists.aggregate([{
  $bucket: {
    groupBy:"$year_born",
    boundaries:[1840, 1850, 1860, 1880],
    default: "Other",
    output:
      {
        "count":{$sum:1},
        "avg_year_born":{$avg:"$year_born"},
        "min_year_born":{$min:"$year_born"},
        "max_year_born":{$max:"$year_born"},
        "artists":{
          $push:{
            "year_born":"$year_born"
          }
        }
      }
      }
}])

//---------------------------------------------------------

db.artists.aggregate([{
  $bucket: {
    groupBy:"$year_born",
    boundaries:[1840, 1850, 1860, 1880],
    default: "Other",
    output:
      {
        "count":{$sum:1},
        "avg_year_born":{$avg:"$year_born"},
        "min_year_born":{$min:"$year_born"},
        "max_year_born":{$max:"$year_born"},
        "artists":{
        $push:{
            "name":{
              $concat:[
                "$first_name"," ","$last_name"
              ]
            },
            "year_born":"$year_born"
          }
        }
      }
      }
}])

//---------------------------------------------------------

/*
db.artists.aggregate([{
  $bucket: {
    groupBy:"$year_born",
    boundaries:[1840, 1850, 1860, 1880],
    default: "Other",
    output:
      {
        "count":{$sum:1},
        "avg_year_born":{$avg:"$year_born"},
        "min_year_born":{$min:"$year_born"},              3.22 12. Dakika
        "max_year_born":{$max:"$year_born"}
      }
      },
      {
        $out:
        {
          db:"test", coll:"artistsInformations"
        }
           }
}])
*/

/*
Index Nedir ? 

-Sorgu performansını arttırmak amacıyla kullanılan yöntemdir.
-Sorgu sonucu için tüm tabloyu taramaz.
-Diskte index lookup table için ekstra yer tutmaktadır.

db.collectionname.createIndex({"field_name": 1})
db.collectionname.createIndex({"field_name": 1, "field_name_2": 1})

*/