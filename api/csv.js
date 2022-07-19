const csvtojson = require('csvtojson');
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


const fileName = (__dirname + "/airbnb_nyc.csv")
csvtojson().fromFile(fileName).then(source => {
  
    for (var i = 0; i < source.length; i++) {
        let 
            id = source[i]["id"],
            name = source[i]["name"],
            summary = source[i]["summary"],
            description = source[i]["description"],
            experiences_offered = source[i]["experiences_offered"],
            neighborhood_overview = source[i]["neighborhood_overview"],
            transit = source[i]["transit"],
            house_rules = source[i]["house_rules"],
            host_id = source[i]["host_id"],
            host_since = source[i]["host_since"],
            host_response_time = source[i]["host_response_time"],
            host_response_rate = source[i]["host_response_rate"],
            host_is_superhost = source[i]["host_is_superhost"],
            host_listings_count = source[i]["host_listings_count"],
            host_identity_verified = source[i]["host_identity_verified"],
            street = source[i]["street"],
            neighbourhood = source[i]["neighbourhood"],
            latitude = source[i]["latitude"],
            longitude = source[i]["longitude"],
            property_type = source[i]["property_type"],
            room_type = source[i]["room_type"],
            accommodates = source[i]["accommodates"],
            bathrooms = source[i]["bathrooms"],
            bedrooms = source[i]["bedrooms"],
            beds = source[i]["beds"],
            bed_type = source[i]["bed_type"],
            amenities = source[i]["amenities"],
            price = source[i]["price"],
            guests_included = source[i]["guests_included"],
            extra_people = source[i]["extra_people"],
            minimum_nights = source[i]["minimum_nights"],
            calendar_updated = source[i]["calendar_updated"],
            has_availability = source[i]["has_availability"],
            availability_30 = source[i]["availability_30"],
            availability_60 = source[i]["availability_60"],
            availability_90 = source[i]["availability_90"],
            availability_365 = source[i]["availability_365"],
            number_of_reviews = source[i]["number_of_reviews"],
            number_of_reviews_ltm = source[i]["number_of_reviews_ltm"],
            review_scores_rating = source[i]["review_scores_rating"],
            review_scores_accuracy = source[i]["review_scores_accuracy"],
            review_scores_cleanliness = source[i]["review_scores_cleanliness"],
            review_scores_checkin = source[i]["review_scores_checkin"],
            review_scores_communication = source[i]["review_scores_communication"],
            review_scores_location = source[i]["review_scores_location"],
            review_scores_value = source[i]["review_scores_value"],
            instant_bookable = source[i]["instant_bookable"],
            cancellation_policy = source[i]["cancellation_policy"],
            calculated_host_listings_count = source[i]["calculated_host_listings_count"],
            calculated_host_listings_count_entire_homes = source[i]["calculated_host_listings_count_entire_homes"],
            calculated_host_listings_count_private_rooms = source[i]["calculated_host_listings_count_private_rooms"],
            calculated_host_listings_count_shared_rooms = source[i]["calculated_host_listings_count_shared_rooms"],
            reviews_per_month = source[i]["reviews_per_month"],
            check_in_24h = source[i]["check_in_24h"],
            air_conditioning = source[i]["air_conditioning"],
            high_end_electronics = source[i]["high_end_electronics"],
            bbq = source[i]["bbq"],
            balcony = source[i]["balcony"],
            nature_and_views = source[i]["nature_and_views"],
            bed_linen = source[i]["bed_linen"],
            breakfast = source[i]["breakfast"],
            tv = source[i]["tv"],
            coffee_machine = source[i]["coffee_machine"],
            cooking_basics = source[i]["cooking_basics"],
            white_goods = source[i]["white_goods"],
            elevator = source[i]["elevator"],
            gym = source[i]["gym"],
            child_friendly = source[i]["child_friendly"],
            parking = source[i]["parking"],
            outdoor_space = source[i]["outdoor_space"],
            host_greeting = source[i]["host_greeting"],
            hot_tub_sauna_or_pool = source[i]["hot_tub_sauna_or_pool"],
            internet = source[i]["internet"],
            long_term_stays = source[i]["long_term_stays"],
            pets_allowed = source[i]["pets_allowed"],
            private_entrance = source[i]["private_entrance"],
            secure = source[i]["secure"],
            self_check_in = source[i]["self_check_in"],
            smoking_allowed = source[i]["smoking_allowed"],
            accessible = source[i]["accessible"],
            event_suitable = source[i]["event_suitable"]
        var insertStatement = 
        `INSERT INTO Airbnb_nyc2 values(?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`
        var items = [id, name, summary, description, experiences_offered, neighborhood_overview, transit, house_rules, host_id, host_since, host_response_time,	host_response_rate,	host_is_superhost, host_listings_count,	host_identity_verified,	street,	neighbourhood, latitude, longitude,	property_type, room_type, accommodates, bathrooms, bedrooms, beds, bed_type, amenities, price, guests_included, extra_people, minimum_nights, calendar_updated, has_availability, availability_30, availability_60, availability_90, availability_365, number_of_reviews, number_of_reviews_ltm, review_scores_rating, review_scores_accuracy, review_scores_cleanliness, review_scores_checkin, review_scores_communication, review_scores_location, review_scores_value, instant_bookable, cancellation_policy, calculated_host_listings_count, calculated_host_listings_count_entire_homes, calculated_host_listings_count_private_rooms, calculated_host_listings_count_shared_rooms, reviews_per_month, check_in_24h, air_conditioning, high_end_electronics, bbq, balcony, nature_and_views, bed_linen, breakfast,tv, coffee_machine, cooking_basics, white_goods, elevator, gym, child_friendly, parking, outdoor_space, host_greeting , hot_tub_sauna_or_pool, internet, long_term_stays, pets_allowed, private_entrance, secure, self_check_in, smoking_allowed, accessible, event_suitable];
  
        con.query(insertStatement, items, 
            (err, results, fields) => {
            if (err) {
                console.log(
    "Unable to insert item at row ", i + 1);
                return console.log(err);
            }
        });
    }
    console.log("Todos os itens foram inseridos na tabela com sucesso!!!");
   
});