export interface ITestimonalsData {
  id: number;
  name: string;
  location: string;
  text: string | string[];
}

const data: ITestimonalsData[] = [
  {
    id: 1,
    name: "Mark S",
    location: "Colma, CA",
    text: [
      "Great communication and Excellent workmanship. Extremely pleased and happy that I was referred to these guys.",
      "I am very satisfied with the window type, the color, and design as described to me. The contractors were gentlemen craftsmen one of the best contractors I ever had in my home. They did a clean, professional job at a good pace and were friendly. They completed my whole house in one working day with little noise, no disruption, and good cheer, too. He made it easy to understand the benefits and quality accompanying our new windows and the change it would make.",
      "I most certainly would recommend Window Station to all of my friends and family members – these guys are the best in the area.",
    ],
  },
  {
    id: 2,
    name: "Larysa J",
    location: "Pacifica, CA",
    text: "Perfect, timely, professional work with our windows. I ordered windows from Window Station, Inc less than two weeks ago and, as promised, they were custom manufactured and delivered on time. Yesterday, the crew of Window Station appeared at 8am. They quickly removed the old metal windows, installed the new windows, and cleaned up the workspaces. It was amazing and top quality work, and they were consummate professionals. I’d recommend them.",
  },
  {
    id: 3,
    name: "Joe G",
    location: "San Bruno, CA",
    text: [
      "Alex, Igor, and crew did an awesome job on our window project. Every step of the process was clearly explained to us. Communication was consistent, honest, and very professional. We were referred to Window Station by friends and are very, very happy we made the decision to go with them. We replaced every single window in the house. Alex and Igor were very informative in regards to California codes and requirements because our house is older. In the end, we got exactly what we envisioned. We then called the Window Station to replace our main doors which turned out so nice.",
      "The crew that performed the work was very friendly, clean, and efficient. At the end of both the door and windows projects, they walked the house with us and explained and demonstrated the newly installed components. If you want great quality, sit with them and discuss your project so you know what must take place. It really helped us to understand and allowed both Window Station and us to work together to get solutions we’re extremely happy with. Thanks again, guys.",
    ],
  },
  {
    id: 4,
    name: "Marion M",
    location: "Walnut Creek, CA",
    text: [
      "I needed to replace two patio doors and all windows in my bedrooms. I also needed a fix for some of my in-house doors. So I began getting in-house quotes from other companies first, but Window Station gave me the best quote. While corresponding and talking to Igor (the owner) on the phone about my concerns he patiently explained all the details I needed to know.",
      "Must say I felt very comfortable working with him. The work was done quickly, highly professional and the craftsmanship great.",
      "VERY happy and giving a 5-star review for a great company offering a great service. Thank you Window Station Inc!",
    ],
  },
  {
    id: 5,
    name: "Jacob Y",
    location: "Pacifica, CA",
    text: "I would greatly recommend Window Station Inc. for windows and doors installation. I’ve received the best customer service from these guys. They are very knowledgeable and reliable. They explained different options and provided us with an excellent price that would best suit our budget. The quality of work is outstanding and service is friendly and professional.",
  },
  {
    id: 6,
    name: "Alison B",
    location: "Concord, CA",
    text: "I was very impressed with the work done by WIndows Station. My roommate and I were very satisfied with the work done and would definitely recommend the company to others. The workers were professional and all the work was done within one day with minimal noise",
  },
  {
    id: 7,
    name: "Kate B",
    location: "San Ramon, CA",
    text: "So happy with the Window Station! They were recommended by our friends, who just had new windows and doors installed and were extremely satisfied. We did not know much about the windows, so we really appreciate them being very patient with all our questions and explaining the difference between multiple types and styles of windows, all of the pros and cons, and for helping us to make the right choice. The office people, as well as the installers, were very responsive, knowledgeable and professional. We were also very surprised at how good the price was when we received the estimate. We would highly recommend the window station.",
  },
];

export default data;
