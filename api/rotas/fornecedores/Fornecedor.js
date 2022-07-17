const TabelaFornecedor = require('./TabelaFornecedor');
const CampoInvalido = require('../../erro/CampoInvalido');
const DadosNaoFornecidos = require('../../erro/DadosNaoFornecidos');
const instancia = require('../../banco-de-dados');

class Fornecedor {
    constructor({ id, name, summary, description, experiences_offered, neighborhood_overview, transit, house_rules, host_id, host_since, host_response_time, host_response_rate, host_is_superhost, host_listings_count, host_identity_verified, street, neighbourhood, latitude, longitude, property_type, room_type, accommodates, bathrooms, bedrooms, beds, bed_type, amenities, price, guests_included, extra_people, minimum_nights, calendar_updated, has_availability, availability_30, availability_60, availability_90, availability_365, number_of_reviews, number_of_reviews_ltm, review_scores_rating, review_scores_accuracy, review_scores_cleanliness, review_scores_checkin, review_scores_communication, review_scores_location, review_scores_value, instant_bookable, cancellation_policy, calculated_host_listings_count, calculated_host_listings_count_entire_homes, calculated_host_listings_count_private_rooms, calculated_host_listings_count_shared_rooms, reviews_per_month, check_in_24h, air_conditioning, high_end_electronics, bbq, balcony, nature_and_views, bed_linen, breakfast, tv, coffee_machine, cooking_basics, white_goods, elevator, gym, child_friendly, parking, outdoor_space, host_greeting, hot_tub_sauna_or_pool, internet, long_term_stays, pets_allowed, private_entrance, secure, self_check_in, smoking_allowed, accBL, event_suitBL
    }) {
        this.id = id
        this.name = name
        this.summary = summary
        this.description = description
        this.experiences_offered = experiences_offered
        this.neighborhood_overview = neighborhood_overview
        this.transit = transit
        this.house_rules = house_rules
        this.host_id = host_id
        this.host_since = host_since
        this.host_response_time = host_response_time
        this.host_response_rate = host_response_rate
        this.host_is_superhost = host_is_superhost
        this.host_listings_count = host_listings_count
        this.host_identity_verified = host_identity_verified
        this.street = street
        this.neighbourhood = neighbourhood
        this.latitude = latitude
        this.longitude = longitude
        this.property_type = property_type
        this.room_type = room_type
        this.accommodates = accommodates
        this.bathrooms = bathrooms
        this.bedrooms = bedrooms
        this.beds = beds
        this.bed_type = bed_type
        this.amenities = amenities
        this.price = price
        this.guests_included = guests_included
        this.extra_people = extra_people
        this.minimum_nights = minimum_nights
        this.calendar_updated = calendar_updated
        this.has_availability = has_availability
        this.availability_30 = availability_30
        this.availability_60 = availability_60
        this.availability_90 = availability_90
        this.availability_365 = availability_365
        this.number_of_reviews = number_of_reviews
        this.number_of_reviews_ltm = number_of_reviews_ltm
        this.review_scores_rating = review_scores_rating
        this.review_scores_accuracy = review_scores_accuracy
        this.review_scores_cleanlines = review_scores_cleanliness
        this.review_scores_cleanliness = review_scores_checkin
        this.review_scores_checkin = review_scores_checkin
        this.review_scores_communication = review_scores_communication
        this.review_scores_location = review_scores_location
        this.review_scores_value = review_scores_value
        this.instant_bookable = instant_bookable
        this.cancellation_policy = cancellation_policy
        this.calculated_host_listings_count = calculated_host_listings_count
        this.calculated_host_listings_count_entire_homes = calculated_host_listings_count_entire_homes
        this.calculated_host_listings_count_private_rooms = calculated_host_listings_count_private_rooms
        this.calculated_host_listings_count_shared_rooms = calculated_host_listings_count_shared_rooms
        this.reviews_per_month = reviews_per_month
        this.check_in_24h = check_in_24h
        this.air_conditioning = air_conditioning
        this.high_end_electronics = high_end_electronics
        this.bbq = bbq
        this.balcony = balcony
        this.nature_and_views = nature_and_views
        this.bed_linen = bed_linen
        this.breakfast = breakfast
        this.tv = tv
        this.coffee_machine = coffee_machine
        this.cooking_basics = cooking_basics
        this.white_goods = white_goods
        this.elevator = elevator
        this.gym = gym
        this.child_friendly = child_friendly
        this.parking = parking
        this.outdoor_space = outdoor_space
        this.host_greeting = host_greeting
        this.hot_tub_sauna_or_pool = hot_tub_sauna_or_pool
        this.internet = internet
        this.long_term_stays = long_term_stays
        this.pets_allowed = pets_allowed
        this.private_entrance = private_entrance
        this.secure = secure
        this.self_check_in = self_check_in
        this.smoking_allowed = smoking_allowed
        this.accBL = accBL
        this.eevent_suitBL = event_suitBL
    }



    async criar() {
        const resultado = await TabelaFornecedor.inserir({
            name: this.name,
            summary: this.summary,
            description: this.description,
            experiences_offered: this.experiences_offered,
            neighborhood_overview: this.neighborhood_overview,
            transit: this.transit,
            gouse_roules: this.house_rules,
            host_id: this.host_id,
            host_since: this.host,
            host_reponse_time: this.host_response_time,
            host_respon_rate: this.host_response_rate,
            host_is_superhost: this.host_is_superhost,
            host_listings_count: this.host_listings_count,
            host_identity_verified: this.host_identity_verified,
            street: this.street,
            neighbourhood: this.neighbourhood,
            latitude: this.latitude,
            longitude: this.longitude,
            property_type: this.property_type,
            room_type: this.room_type,
            accomodates: this.accommodates,
            bedrooms: this.bedrooms,
            beds: this.beds,
            bed_type: this.bed_type,
            amenities: this.amenities,
            price: this.price,
            guests_inclued: this.guests_included,
            extra_people: this.extra_people,
            minimum_nights: this.minimum_nights,
            calendar_updtate: this.calendar_updated,
            has_availability: this.has_availability,
            availability_30: this.availability_30,
            availability_60: this.availability_60,
            availability_90: this.availability_90,
            availability_365: this.availability_365,
            number_of_reviews: this.number_of_reviews,
            number_of_reviews_ltm: this.number_of_reviews_ltm,
            reviewe_scores_rating: this.review_scores_rating,
            review_scores_accuracy: this.review_scores_accuracy,
            review_scores_cleanliness: this.review_scores_cleanlines,
            review_scores_checkin: this.review_scores_cleanliness,
            review_scores_checkin: this.review_scores_checkin,
            review_scores_communication: this.review_scores_communication,
            review_scores_location: this.review_scores_location,
            review_scores_value: this.review_scores_value,
            instant_bookable: this.instant_bookable,
            cancellation_policy: this.cancellation_policy,
            calculated_host_listings_count: this.calculated_host_listings_count,
            calculated_host_listings_count_entire_homes: this.calculated_host_listings_count_entire_homes,
            calculated_host_listings_count_private_rooms: this.calculated_host_listings_count_private_rooms,
            calculated_host_listings_count_shared_rooms: this.calculated_host_listings_count_shared_rooms,
            reviews_per_month: this.reviews_per_month,
            check_in_24h: this.check_in_24h,
            air_conditioning: this.air_conditioning,
            high_end_electronics: this.high_end_electronics,
            bbq: this.bbq,
            balcony: this.balcony,
            nature_and_views: this.nature_and_views,
            bed_linen: this.bed_linen,
            breakfas: this.breakfast,
            tv: this.tv,
            coffee_machine: this.coffee_machine,
            cooking_basics: this.cooking_basics,
            white_goods: this.white_goods,
            elevator: this.elevator,
            gym: this.gym,
            child_friendly: this.child_friendly,
            parking: this.parking,
            outdoor_space: this.outdoor_space,
            host_greeting: this.host_greeting,
            hot_tub_sauna_or_pool: this.hot_tub_sauna_or_pool,
            internet: this.internet,
            long_term_stays: this.long_term_stays,
            pets_allowed: this.pets_allowed,
            private_entrance: this.private_entrance,
            secure: this.secure,
            self_check_in: this.self_check_in,
            smoking_allowed: this.smoking_allowed,
            accBL: this.accBL,
            event_suitBL: this.event_suitBL,
        })
    }

    async carregar() {
        const encontrado = await TabelaFornecedor.pegarPorId
            (this.id)
        this.name = encontrado.name
        this.summary = encontrado.summary
        this.description = encontrado.description
        this.experiences_offered = encontrado.CampoInvalidoexperiences_offered
        this.neighborhood_overview = encontrado.neighborhood_overview
        this.transit = encontrado.transit
        this.house_rules = encontrado.house_rules
        this.host_id = encontrado.host_id
        this.host_since = encontrado.host_since
        this.host_response_time = encontrado.host_response_time
        this.host_response_rate = encontrado.host_response_rate
        this.host_is_superhost = encontrado.host_is_superhost
        this.host_listings_count = encontrado.host_listings_count
        this.host_identity_verified = encontrado.host_identity_verified
        this.street = encontrado.street
        this.neighbourhood = encontrado.neighbourhood
        this.latitude = encontrado.latitude
        this.longitude = encontrado.longitude
        this.property_type = encontrado.property_type
        this.room_type = encontrado.room_type
        this.accommodates = encontrado.accommodates
        this.bathrooms = encontrado.bathrooms
        this.bedrooms = encontrado.bedrooms
        this.beds = encontrado.beds
        this.bed_type = encontrado.bed_type
        this.amenities = encontrado.amenities
        this.price = encontrado.price
        this.guests_included = encontrado.guests_included
        this.extra_people = encontrado.extra_people
        this.minimum_nights = encontrado.minimum_nights
        this.calendar_updated = encontrado.calendar_updated
        this.has_availability = encontrado.has_availability
        this.availability_30 = encontrado.availability_30
        this.availability_60 = encontrado.availability_60
        this.availability_90 = encontrado.availability_90
        this.availability_365 = encontrado.availability_365
        this.number_of_reviews = encontrado.number_of_reviews
        this.number_of_reviews_ltm = encontrado.number_of_reviews_ltm
        this.review_scores_rating = encontrado.review_scores_rating
        this.review_scores_accuracy = encontrado.review_scores_accuracy
        this.review_scores_cleanlines = encontrado.review_scores_cleanliness
        this.review_scores_cleanliness = encontrado.review_scores_checkin
        this.review_scores_checkin = encontrado.review_scores_checkin
        this.review_scores_communication = encontrado.review_scores_communication
        this.review_scores_location = encontrado.review_scores_location
        this.review_scores_value = encontrado.review_scores_value
        this.instant_bookable = encontrado.instant_bookable
        this.cancellation_policy = encontrado.cancellation_policy
        this.calculated_host_listings_count = encontrado.calculated_host_listings_count
        this.calculated_host_listings_count_entire_homes = encontrado.calculated_host_listings_count_entire_homes
        this.calculated_host_listings_count_private_rooms = encontrado.calculated_host_listings_count_private_rooms
        this.calculated_host_listings_count_shared_rooms = encontrado.calculated_host_listings_count_shared_rooms
        this.reviews_per_month = encontrado.reviews_per_month
        this.check_in_24h = encontrado.check_in_24h
        this.air_conditioning = encontrado.air_conditioning
        this.high_end_electronics = encontrado.high_end_electronics
        this.bbq = encontrado.bbq
        this.balcony = encontrado.balcony
        this.nature_and_views = encontrado.nature_and_views
        this.bed_linen = encontrado.bed_linen
        this.breakfast = encontrado.breakfast
        this.tv = encontrado.tv
        this.coffee_machine = encontrado.coffee_machine
        this.cooking_basics = encontrado.cooking_basics
        this.white_goods = encontrado.white_goods
        this.elevator = encontrado.elevator
        this.gym = encontrado.gym
        this.child_friendly = encontrado.child_friendly
        this.parking = encontrado.parking
        this.outdoor_space = encontrado.outdoor_space
        this.host_greeting = encontrado.host_greeting
        this.hot_tub_sauna_or_pool = encontrado.hot_tub_sauna_or_pool
        this.internet = encontrado.internet
        this.long_term_stays = encontrado.long_term_stays
        this.pets_allowed = encontrado.pets_allowed
        this.private_entrance = encontrado.private_entrance
        this.secure = encontrado.secure
        this.self_check_in = encontrado.self_check_in
        this.smoking_allowed = encontrado.smoking_allowed
        this.accBL = encontrado.accBL
        this.event_suitBL = encontrado.event_suitBL
    }

    async atualizar() {
        await TabelaFornecedor.pegarPorId(this.id)
        const campos = ['name', 'summary', 'description', 'experiences_offered', 'neighborhood_overview', 'transit,house_rules', 'host_id', 'host_since', 'host_response_time', 'host_response_rate', 'host_is_superhost', 'host_listings_count', 'host_identity_verified', 'street', 'neighbourhood', 'latitude, longitude', 'property_type', 'room_type', 'accommodates', 'bathrooms', 'bedrooms', 'beds', 'bed_type', 'amenities', 'price', 'guests_included', 'extra_people', 'minimum_nights', 'calendar_updated', 'has_availability', 'availability_30', 'availability_60', 'availability_90', 'availability_365', 'number_of_reviews', 'number_of_reviews_ltm', 'review_scores_rating', 'review_scores_accuracy', 'review_scores_cleanliness', 'review_scores_checkin', 'review_scores_communication', 'review_scores_location', 'review_scores_value', 'instant_bookable', 'cancellation_policy', 'calculated_host_listings_count', 'calculated_host_listings_count_entire_homes', 'calculated_host_listings_count_private_rooms', 'calculated_host_listings_count_shared_rooms', 'reviews_per_month', 'check_in_24h', 'air_conditioning', 'high_end_electronics', 'bbq', 'balcony', 'nature_and_views', 'bed_linen', 'breakfast', 'tv', 'coffee_machine', 'cooking_basics', 'white_goods', 'elevator', 'gym', 'child_friendly', 'parking', 'outdoor_space', 'host_greeting', 'hot_tub_sauna_or_pool', 'internet', 'long_term_stays', 'pets_allowed', 'private_entrance', 'secure', 'self_check_in', 'smoking_allowed', 'accBL', 'event_suitBL']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new DadosNaoFornecidos('')
        }

        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar)

    }

    remover() {
        return TabelaFornecedor.remover(this.id)
    }

}


module.exports = Fornecedor