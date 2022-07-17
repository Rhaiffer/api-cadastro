const mysql = require("mysql2");

const hostname = "localhost",
    username = "root",
    password = "Ch1__94wi@",
    databsename = "Airbnb_NY2"
  
  
// Establish connection to the database
let con = mysql.createConnection({
    host: hostname,
    user: username,
    password: password,
    database: databsename,
});

con.connect((err) => {
    if (err) return console.error(
            'error: ' + err.message);

        
  
    con.query("DROP TABLE Airbnb_nyc2", 
        (err, drop) => {
  
        var createStatament = 
        "CREATE TABLE Airbnb_nyc2 (ID INT, name TEXT, summary TEXT, description TEXT, experiences_offered TEXT, neighborhood_overview TEXT, transit TEXT, house_rules TEXT, host_id FLOAT, host_since INT, host_response_time VARCHAR(250), host_response_rate TEXT, host_is_superhost FLOAT, host_listings_count FLOAT, host_identity_verified FLOAT, street TEXT, neighbourhood TEXT, latitude FLOAT, longitude FLOAT, property_type VARCHAR(255), room_type VARCHAR(255), accommodates FLOAT, bathrooms FLOAT, bedrooms FLOAT, beds FLOAT, bed_type VARCHAR(255), amenities TEXT, price FLOAT, guests_included FLOAT, extra_people FLOAT, minimum_nights FLOAT, calendar_updated VARCHAR(255), has_availability FLOAT, availability_30 FLOAT, availability_60 FLOAT, availability_90 FLOAT, availability_365 FLOAT, number_of_reviews FLOAT, number_of_reviews_ltm FLOAT, review_scores_rating VARCHAR(250), review_scores_accuracy VARCHAR(250), review_scores_cleanliness VARCHAR(250), review_scores_checkin VARCHAR(250), review_scores_communication VARCHAR(250), review_scores_location VARCHAR(250), review_scores_value VARCHAR(250), instant_bookable FLOAT, cancellation_policy TEXT, calculated_host_listings_count FLOAT, calculated_host_listings_count_entire_homes FLOAT, calculated_host_listings_count_private_rooms FLOAT, calculated_host_listings_count_shared_rooms FLOAT, reviews_per_month varchar(250), check_in_24h INT, air_conditioning FLOAT, high_end_electronics int, bbq FLOAT, balcony FLOAT, nature_and_views FLOAT, bed_linen FLOAT, breakfast FLOAT, tv FLOAT, coffee_machine FLOAT, cooking_basics FLOAT, white_goods FLOAT, elevator FLOAT, gym FLOAT, child_friendly FLOAT, parking FLOAT, outdoor_space FLOAT, host_greeting FLOAT, hot_tub_sauna_or_pool FLOAT, internet FLOAT, long_term_stays FLOAT, pets_allowed FLOAT, private_entrance FLOAT, secure FLOAT, self_check_in FLOAT, smoking_allowed FLOAT, accBL INT, event_suitBL INT)"
  
       
        con.query(createStatament, (err, drop) => {
            if (err)
                console.log("ERROR: ", err);
                return console.log("tabela criada")
            });
    });
});
