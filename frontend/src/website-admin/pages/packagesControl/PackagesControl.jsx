import DataControl from "../../components/dataControl/DataControl"
import { packagesControlRows } from "../../data";

const PackagesControl = () => {

  const categories = [
    "صوره الفئة الاقتصادية",
    "صوره الفئة الاقتصادية2",
    "صوره الفئة الاقتصادية",
    "صوره الفئة الاقتصادية",
    "صوره الفئة الاقتصادية2",
    "صوره الفئة الاقتصادية"
  ]

  const columns = [
    {
      id: "id",
      label: "م",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "place",
      label: "اماكن الزيارات",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "car1",
      label: "سيارة سيدان سوناتا/كامرى",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "car2",
      label: "سيارات عائلية جمس بوكن XL",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "car3",
      label: "سيارات عائلية(فئة اتش وان)",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "car4",
      label: "باصات",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "car5",
      label: "سيارات VIP لكزس ES",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "car6",
      label: "السيارات الفارهة(مرسيدس. بى ام)",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData(id, place, car1, car2, car3, car4, car5, car6,) {
    return { id, place, car1, car2, car3 ,car4, car5, car6};
  }
  const rows = packagesControlRows.map((item) => (
    createBookingData(
      item.id,
      item.place,
      item.car1,
      item.car2,
      item.car3,
      item.car4,
      item.car5,
      item.car6,
    )
  ));

  return (
    <div>
      <DataControl
        columns={ columns }
        rows={ rows }
        numbers={ 2 }
        navTitle="الباقات"
        title="تحكم فى الباقات"
        addNew_btn="اضافة باقة جديدة "
        categories ={categories}
      />
    </div>
  )
}

export default PackagesControl