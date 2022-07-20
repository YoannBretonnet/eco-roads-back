
## MCD


![mcd](./images/mcd.png)


## MLD


USER ( <u>code_user</u>, __email, password, username, address, car, category, #code_car, #code_category )
CAR ( <u>code_car</u>, brand, model, network, image, #code_network )
CATEGORY ( <u>code_category</u>, name )
USER_LIKE_CATEGORY ( <u>code_user</u>, <u>code_category</u> )
CHARGING_NETWORK ( <u>code_network</u>, name )
CHARGING_STATION ( <u>code_station</u>, gps_coordinate, network, #code_network )
INTERESTING_POINT ( <u>code_interesting_point</u>, name, gps_coordinate, eco_friendly, category, #code_category )
ROAD ( <u>code_road</u>, genarated_road, favorite, user, #code_user )


## MPD