const sequelize = require('sequelize')
const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    name: {
        type: Sequelize.TEXT,
        alloowNull: false   
    },
   summary: {
        type: Sequelize.TEXT,
        alloowNull: false
    },
    description: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    experiences_offered: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    neighborhood_overview: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    transit: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    house_rules: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_id: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_since: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_response_time: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_response_rate: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_is_superhost: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_listings_count: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_identity_verified: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    street: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    neighbourhood: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    latitude: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    longitude: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    property_type: {
        type: sequelize.STRING,
        alloowNull: false
    },
    room_type: {
        type: sequelize.STRING,
        alloowNull: false
    },
    accommodates: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    bathrooms: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    bedrooms: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    beds: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    bed_type: {
        type: sequelize.STRING,
        alloowNull: false
    },
    amenities: {
        type: sequelize.STRING,
        alloowNull: false
    },
    price: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    guests_included: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    extra_people: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    minimum_nights: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    calendar_updated: {
        type: sequelize.STRING,
        alloowNull: false
    },
    has_availability: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    availability_30: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    availability_60: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    availability_90: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    availability_365: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    number_of_reviews: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    number_of_reviews_ltm: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_rating: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_accuracy: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_cleanliness: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_checkin: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_checkin: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_communication: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_location: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    review_scores_value: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    instant_bookable: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    cancellation_policy: {
        type: sequelize.TEXT,
        alloowNull: false
    },
    calculated_host_listings_count: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    calculated_host_listings_count_entire_homes: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    calculated_host_listings_count_private_rooms: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    calculated_host_listings_count_shared_rooms: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    reviews_per_month: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    check_in_24h: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    air_conditioning: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    high_end_electronics: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    bbq: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    balcony: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    nature_and_views: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    bed_linen: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    breakfast: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    tv: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    coffee_machine: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    cooking_basics: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    white_goods: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    elevator: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    gym: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    child_friendly: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    parking: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    outdoor_space: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    host_greeting : {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    hot_tub_sauna_or_pool: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    internet: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    long_term_stays: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    pets_allowed: {
        type: sequelize.FLOAT,
        alloowNull: false
    },

    private_entrance: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    secure: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    self_check_in: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    smoking_allowed: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    accBL: {
        type: sequelize.FLOAT,
        alloowNull: false
    },
    event_suitBL: {
        type: sequelize.FLOAT,
        alloowNull: false
    }
    



}

const opcoes = {
    freezeTableName: true,
    tableName: 'Airbnb_nyc2',
    timestamps: false,
}

module.exports = instancia.define('Airbnb_nyc2', colunas, opcoes)