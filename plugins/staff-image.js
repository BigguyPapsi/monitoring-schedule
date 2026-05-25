export default (context, inject) => {
  const staffMap = [
    {
      keywords: ["ທັດໄຊ", "ຕັ໊ກ"],
      image: require("@/assets/staff/ທັດໄຊ.webp"),
    },
    {
      keywords: ["ທະນູທອງ", "ແປັບຊີ"],
      image: require("@/assets/staff/ທະນູທອງ.webp"),
    },
    {
      keywords: ["ສອນສັກສິດ", "ນ້ອຍ"],
      image: require("@/assets/staff/ສອນສັກສິດ.webp"),
    },
    {
      keywords: ["ສີສົມພອນ", "ກີ້"],
      image: require("@/assets/staff/ສີສົມພອນ.webp"),
    },
    {
      keywords: ["ເພັດສົມພູ", "ເພັດ"],
      image: require("@/assets/staff/ເພັດສົມພູ.webp"),
    },
    {
      keywords: ["ສະຖາພອນ", "ເອສ"],
      image: require("@/assets/staff/ສະຖາພອນ.webp"),
    },
    {
      keywords: ["ແອນດີ້"],
      image: require("@/assets/staff/ແອນດີ້.webp"),
    },
    {
      keywords: ["ມີນາ"],
      image: require("@/assets/staff/ມີນາ.webp"),
    },
    {
      keywords: ["ໄຊຍະສອນ", "ແບ້ງ"],
      image: require("@/assets/staff/ໄຊຍະສອນ.webp"),
    },
    {
      keywords: ["ນຸດຕາ", "ນຸດ"],
      image: require("@/assets/staff/ນຸດຕາ.webp"),
    },
  ];

  const staffImage = (name) => {
    if (!name || typeof name !== "string") {
      return require("@/assets/staff/default.webp");
    }

    const found = staffMap.find((item) =>
      item.keywords.some((keyword) => name.includes(keyword))
    );

    return found ? found.image : require("@/assets/staff/default.webp");
  };

  inject("staffImage", staffImage);
};
