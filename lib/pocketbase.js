import Pocketbase from "pocketbase";
const url = "https://jealous-garage.pockethost.io";
const pb = new Pocketbase(url);
// globally disable auto cancellation
pb.autoCancellation(false);
export default pb;
