// 1) создать интерфейс на основе этого объекта:
//
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu.be/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }


// import {IMission} from "./user.interface";
// const mission_1:IMission={
//     mission_name: "Starlink-15 (v1.0)",
//         launch_date_local: "2020-10-24T11:31:00-04:00",
//         launch_site: {
//         site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
//     },
//     links: {
//         article_link: null,
//             video_link: "https://youtu.be/J442-ti-Dhg"
//     },
//     rocket: {
//         rocket_name: "Falcon 9",
//             first_stage: {
//             cores: [
//                 {
//                     flight: 7,
//                     core: {
//                         reuse_count: 6,
//                         status: "unknown"
//                     }
//                 }
//             ]
//         },
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: "Satellite",
//                     payload_mass_kg: 15400,
//                     payload_mass_lbs: 33951.2
//                 }
//             ]
//         }
//     }
// }
// console.log(mission_1.rocket.first_stage.cores[0])


// ---------------------------------------------------------------------------—————————
// 2) протипизировать функции:
//
//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }
//

// class User {
//     name: string;
//     age: number;
//     gender: string;
//
//     constructor( name: string,age: number,gender: string) {
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//
// }
// const user = new User('Kim',15,'f')
// console.log(user)

// ---------------------------------------------------------------------------—————————
// function sum(a,b){
//     return a+b
// }


// function sum(a:number,b:number):number{
//     return a+b;
// }
//
// console.log(sum(1, 2));

// ---------------------------------------------------------------------------—————————

// function showSum(a,b){
//     console.log(a + b);
// }
//

function showSum(a:number,b:number) {
    console.log(a + b);
}
showSum(2,3)
// ---------------------------------------------------------------------------—————————
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }


interface ISomeUser{
    name:string,
    age:number
}

function incAge(someUser:ISomeUser, inc:number){
    someUser.age+=inc
    console.log(someUser)
    return someUser

}

const user:ISomeUser={name:"era",age:12}

incAge(user, 2)
