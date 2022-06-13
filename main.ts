import { ArrayList } from "./ArrayList";


interface Post {
    title: string;
}

let arrayList1 = new ArrayList<Post>();
arrayList1.add({title: "123"});
arrayList1.add({title: "456"});
arrayList1.add({title: "789"});
console.log(arrayList1.container)