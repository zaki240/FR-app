import Pocketbase from "pocketbase";
const url = "https://jealous-garage.pockethost.io";
const pb = new Pocketbase(url);
// globally disable auto cancellation
pb.autoCancellation(false);
export default pb;
// export async function Create(name, address, price, hours, tel) {
//   const data = {
//     name: name,
//     address: address,
//     price: price,
//     hours: hours,
//     tel: tel,
//   };
//   await pb.collection("restaurant").create(data);
// }
