export default (context, inject) => {
  const staffMap = [
    {
      keywords: ["ທັດໄຊ", "ຕັ໊ກ"],
      image: require("@/assets/staff/ທັດໄຊ.png"),
    },
    {
      keywords: ["ທະນູທອງ", "ແປັບຊີ"],
      image: require("@/assets/staff/ທະນູທອງ.png"),
    },
    {
      keywords: ["ສອນສັກສິດ", "ນ້ອຍ"],
      image: require("@/assets/staff/ສອນສັກສິດ.png"),
    },
    {
      keywords: ["ສີສົມພອນ", "ກີ້"],
      image: require("@/assets/staff/ສີສົມພອນ.png"),
    },
    {
      keywords: ["ເພັດສົມພູ", "ເພັດ"],
      image: require("@/assets/staff/ເພັດສົມພູ.png"),
    },
    {
      keywords: ["ສະຖາພອນ", "ເອສ"],
      image: require("@/assets/staff/ສະຖາພອນ.png"),
    },
    {
      keywords: ["ແອນດີ້"],
      image: require("@/assets/staff/ແອນດີ້.png"),
    },
    {
      keywords: ["ມີນາ"],
      image: require("@/assets/staff/ມີນາ.png"),
    },
    {
      keywords: ["ໄຊຍະສອນ", "ແບ້ງ"],
      image: require("@/assets/staff/ໄຊຍະສອນ.png"),
    },
    {
      keywords: ["ນຸດຕາ", "ນຸດ"],
      image: require("@/assets/staff/ນຸດຕາ.png"),
    },
  ];

  const staffImage = (name) => {
    if (!name || typeof name !== "string") {
      return require("@/assets/staff/default.jpg");
    }

    const found = staffMap.find((item) =>
      item.keywords.some((keyword) => name.includes(keyword))
    );

    return found ? found.image : require("@/assets/staff/default.jpg");
  };

  inject("staffImage", staffImage);
};
