interface customerDeatails {
  order_id: number;
  date: string;
  time: string;
  shippig_address: string;
  method: string;
  amount: number;
}

interface customer {
  customer_id: number;
  joining_date: string;
  name: string;
  email: string;
  phone: string;
  details?: customerDeatails[];
}

const customers: customer[] = [
  {
    customer_id: 101,
    joining_date: "2023-01-15",
    name: "Rahim Ahmed",
    email: "rahim.ahmed@example.com",
    phone: "01711223344",
    details: [
      {
        order_id: 5001,
        date: "2024-02-10",
        time: "14:30",
        shippig_address: "Dhanmondi, Dhaka",
        method: "bkash",
        amount: 1250,
      },
      {
        order_id: 5002,
        date: "2024-02-20",
        time: "10:15",
        shippig_address: "Dhanmondi, Dhaka",
        method: "Cash on Delivery",
        amount: 450,
      },
    ],
  },
  {
    customer_id: 102,
    joining_date: "2023-02-10",
    name: "Sumaiya Akter",
    email: "sumaiya.a@testmail.com",
    phone: "01822334455",
    details: [
      {
        order_id: 5003,
        date: "2024-02-12",
        time: "18:00",
        shippig_address: "Banani, Dhaka",
        method: "Visa Card",
        amount: 3200,
      },
    ],
  },
  {
    customer_id: 103,
    joining_date: "2023-03-05",
    name: "Tanvir Hossain",
    email: "tanvir.h@provider.net",
    phone: "01933445566",
    details: [],
  },
  {
    customer_id: 104,
    joining_date: "2023-03-22",
    name: "Nusrat Jahan",
    email: "nusrat.j@example.com",
    phone: "01544556677",
    details: [
      {
        order_id: 5004,
        date: "2024-01-05",
        time: "11:20",
        shippig_address: "Chittagong City",
        method: "Nagad",
        amount: 890,
      },
    ],
  },
  {
    customer_id: 105,
    joining_date: "2023-04-12",
    name: "Ariful Islam",
    email: "arif.islam@web.com",
    phone: "01355667788",
    details: [
      {
        order_id: 5005,
        date: "2024-02-25",
        time: "09:45",
        shippig_address: "Uttara, Dhaka",
        method: "bkash",
        amount: 2100,
      },
    ],
  },
  {
    customer_id: 106,
    joining_date: "2023-05-18",
    name: "Sadia Afrin",
    email: "sadia.a@mail.com",
    phone: "01666778899",
    details: [
      {
        order_id: 5006,
        date: "2024-02-26",
        time: "20:10",
        shippig_address: "Sylhet Town",
        method: "Cash on Delivery",
        amount: 1500,
      },
    ],
  },
  {
    customer_id: 107,
    joining_date: "2023-06-01",
    name: "Kamrul Hasan",
    email: "kamrul.h@company.com",
    phone: "01777889900",
    details: [],
  },
  {
    customer_id: 108,
    joining_date: "2023-06-25",
    name: "Farhana Yasmin",
    email: "farhana.y@test.com",
    phone: "01888990011",
    details: [
      {
        order_id: 5007,
        date: "2024-02-22",
        time: "15:30",
        shippig_address: "Rajshahi",
        method: "Nagad",
        amount: 550,
      },
    ],
  },
  {
    customer_id: 109,
    joining_date: "2023-07-14",
    name: "Mahmudul Hasan",
    email: "mahmud.h@service.net",
    phone: "01999001122",
    details: [
      {
        order_id: 5008,
        date: "2024-01-15",
        time: "12:00",
        shippig_address: "Khulna",
        method: "MasterCard",
        amount: 4200,
      },
    ],
  },
  {
    customer_id: 110,
    joining_date: "2023-08-05",
    name: "Jannatul Ferdous",
    email: "jannat.f@example.com",
    phone: "01555112233",
    details: [
      {
        order_id: 5009,
        date: "2024-02-28",
        time: "16:45",
        shippig_address: "Mirpur, Dhaka",
        method: "bkash",
        amount: 780,
      },
    ],
  },
  {
    customer_id: 111,
    joining_date: "2023-08-20",
    name: "Sabbir Ahmed",
    email: "sabbir.a@domain.com",
    phone: "01333224455",
    details: [
      {
        order_id: 5010,
        date: "2024-02-01",
        time: "19:20",
        shippig_address: "Barishal",
        method: "Cash on Delivery",
        amount: 1100,
      },
    ],
  },
  {
    customer_id: 112,
    joining_date: "2023-09-10",
    name: "Mehedi Hasan",
    email: "mehedi.h@webmail.com",
    phone: "01644335566",
    details: [],
  },
  {
    customer_id: 113,
    joining_date: "2023-10-02",
    name: "Anika Tabassum",
    email: "anika.t@test.com",
    phone: "01755446677",
    details: [
      {
        order_id: 5011,
        date: "2024-02-15",
        time: "13:10",
        shippig_address: "Comilla",
        method: "Nagad",
        amount: 2500,
      },
    ],
  },
  {
    customer_id: 114,
    joining_date: "2023-10-25",
    name: "Fahim Shahriar",
    email: "fahim.s@example.org",
    phone: "01866557788",
    details: [
      {
        order_id: 5012,
        date: "2024-01-20",
        time: "10:00",
        shippig_address: "Gazipur",
        method: "Visa Card",
        amount: 1350,
      },
    ],
  },
  {
    customer_id: 115,
    joining_date: "2023-11-12",
    name: "Rifat Bin Azad",
    email: "rifat.a@mail.net",
    phone: "01977668899",
    details: [
      {
        order_id: 5013,
        date: "2024-02-18",
        time: "21:30",
        shippig_address: "Mymensingh",
        method: "bkash",
        amount: 920,
      },
    ],
  },
  {
    customer_id: 116,
    joining_date: "2023-11-28",
    name: "Sultana Razia",
    email: "sultana.r@provider.com",
    phone: "01588779900",
    details: [],
  },
  {
    customer_id: 117,
    joining_date: "2023-12-05",
    name: "Imtiaz Ahmed",
    email: "imtiaz.a@example.com",
    phone: "01399880011",
    details: [
      {
        order_id: 5014,
        date: "2024-02-24",
        time: "08:50",
        shippig_address: "Bogra",
        method: "Cash on Delivery",
        amount: 670,
      },
    ],
  },
  {
    customer_id: 118,
    joining_date: "2023-12-15",
    name: "Laila Hasan",
    email: "laila.h@test.net",
    phone: "01611223344",
    details: [
      {
        order_id: 5015,
        date: "2024-02-05",
        time: "17:15",
        shippig_address: "Rangpur",
        method: "Nagad",
        amount: 1800,
      },
    ],
  },
  {
    customer_id: 119,
    joining_date: "2024-01-02",
    name: "Nasir Uddin",
    email: "nasir.u@company.org",
    phone: "01722334455",
    details: [
      {
        order_id: 5016,
        date: "2024-02-14",
        time: "11:40",
        shippig_address: "Noakhali",
        method: "bkash",
        amount: 3100,
      },
    ],
  },
  {
    customer_id: 120,
    joining_date: "2024-01-10",
    name: "Tasnim Ara",
    email: "tasnim.a@mail.com",
    phone: "01833445566",
    details: [
      {
        order_id: 5017,
        date: "2024-02-27",
        time: "14:25",
        shippig_address: "Gulshan, Dhaka",
        method: "MasterCard",
        amount: 5500,
      },
    ],
  },
];
