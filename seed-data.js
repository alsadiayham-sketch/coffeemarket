var SEED_PRODUCTS = [
  {
    name: "قهوة عربية سادة",
    brand: "قهوة عربية",
    category: "قهوة عربية",
    price: 35,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    description: "قهوة عربية سادة محمصة طازجة بنكهة أصيلة",
    sizes: ["250g", "500g", "1kg"],
    status: "bestseller"
  },
  {
    name: "قهوة عربية بالهيل",
    brand: "قهوة عربية",
    category: "قهوة عربية",
    price: 40,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
    description: "قهوة عربية مميزة بنكهة الهيل الطبيعي",
    sizes: ["250g", "500g", "1kg"],
    status: "bestseller"
  },
  {
    name: "قهوة تركية وسط",
    brand: "قهوة تركية",
    category: "قهوة تركية",
    price: 30,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "قهوة تركية محمصة وسط بطعم غني",
    sizes: ["200g", "500g"],
    status: ""
  },
  {
    name: "قهوة تركية غامقة",
    brand: "قهوة تركية",
    category: "قهوة تركية",
    price: 32,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop",
    description: "قهوة تركية محمصة غامقة بنكهة قوية",
    sizes: ["200g", "500g"],
    status: ""
  },
  {
    name: "إسبريسو كلاسيك",
    brand: "إسبريسو",
    category: "إسبريسو",
    price: 45,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop",
    description: "حبوب إسبريسو إيطالية كلاسيكية",
    sizes: ["250g", "500g", "1kg"],
    status: "bestseller"
  },
  {
    name: "إسبريسو دارك روست",
    brand: "إسبريسو",
    category: "إسبريسو",
    price: 50,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    description: "حبوب إسبريسو محمصة غامقة بنكهة مركزة",
    sizes: ["250g", "500g"],
    status: ""
  },
  {
    name: "قهوة مختصة إثيوبية",
    brand: "قهوة مختصة",
    category: "قهوة مختصة",
    price: 65,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "حبوب قهوة مختصة من إثيوبيا بنكهة فواكه",
    sizes: ["250g"],
    status: "special"
  },
  {
    name: "قهوة مختصة كولومبية",
    brand: "قهوة مختصة",
    category: "قهوة مختصة",
    price: 60,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=400&fit=crop",
    description: "قهوة كولومبية مختصة بنكهة شوكولاتة وجوز",
    sizes: ["250g"],
    status: "special"
  },
  {
    name: "كابتشينو فوري",
    brand: "مشروبات فورية",
    category: "مشروبات فورية",
    price: 25,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop",
    description: "كابتشينو فوري بالرغوة الكريمية",
    sizes: ["عبوة 10 أكياس", "عبوة 20 كيس"],
    status: ""
  },
  {
    name: "لاتيه فوري",
    brand: "مشروبات فورية",
    category: "مشروبات فورية",
    price: 25,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop",
    description: "لاتيه فوري بالحليب الكريمي",
    sizes: ["عبوة 10 أكياس", "عبوة 20 كيس"],
    status: ""
  },
  {
    name: "هوت شوكليت",
    brand: "مشروبات فورية",
    category: "مشروبات فورية",
    price: 22,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop",
    description: "شوكولاتة ساخنة فورية بنكهة غنية",
    sizes: ["عبوة 10 أكياس"],
    status: ""
  },
  {
    name: "ركوة قهوة نحاسية",
    brand: "أدوات القهوة",
    category: "أدوات القهوة",
    price: 80,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    description: "ركوة نحاسية أصلية لتحضير القهوة العربية",
    sizes: ["صغيرة", "وسط", "كبيرة"],
    status: "bestseller"
  },
  {
    name: "طقم فناجين قهوة عربية",
    brand: "أدوات القهوة",
    category: "أدوات القهوة",
    price: 120,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    description: "طقم 6 فناجين قهوة عربية مع صحون",
    sizes: ["6 قطع", "12 قطعة"],
    status: ""
  },
  {
    name: "مطحنة قهوة يدوية",
    brand: "أدوات القهوة",
    category: "أدوات القهوة",
    price: 95,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
    description: "مطحنة يدوية خشبية كلاسيكية لطحن البن",
    sizes: ["قطعة واحدة"],
    status: ""
  },
  {
    name: "فرنش بريس",
    brand: "أدوات القهوة",
    category: "أدوات القهوة",
    price: 75,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=400&fit=crop",
    description: "فرنش بريس زجاجي لتحضير قهوة مفلترة",
    sizes: ["350ml", "600ml", "1L"],
    status: ""
  },
  {
    name: "V60 سيراميك",
    brand: "أدوات القهوة",
    category: "أدوات القهوة",
    price: 55,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "V60 سيراميك لتحضير القهوة المقطرة",
    sizes: ["01", "02"],
    status: "special"
  },
  {
    name: "قهوة عربية بالزعفران",
    brand: "قهوة عربية",
    category: "قهوة عربية",
    price: 55,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
    description: "قهوة عربية فاخرة بالزعفران والهيل",
    sizes: ["250g", "500g"],
    status: "special"
  },
  {
    name: "قهوة تركية بالمستكة",
    brand: "قهوة تركية",
    category: "قهوة تركية",
    price: 38,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop",
    description: "قهوة تركية بنكهة المستكة الفاخرة",
    sizes: ["200g", "500g"],
    status: ""
  },
  {
    name: "حبوب بن خام",
    brand: "قهوة مختصة",
    category: "قهوة مختصة",
    price: 70,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
    description: "حبوب بن أخضر خام للتحميص المنزلي",
    sizes: ["500g", "1kg"],
    status: ""
  },
  {
    name: "كولد برو جاهز",
    brand: "مشروبات جاهزة",
    category: "مشروبات جاهزة",
    price: 18,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    description: "كولد برو قهوة باردة جاهزة للشرب",
    sizes: ["250ml", "500ml"],
    status: ""
  },
  {
    name: "آيس لاتيه جاهز",
    brand: "مشروبات جاهزة",
    category: "مشروبات جاهزة",
    price: 15,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
    description: "آيس لاتيه بالحليب جاهز للشرب",
    sizes: ["250ml"],
    status: ""
  },
  {
    name: "سيرب فانيلا",
    brand: "إضافات",
    category: "إضافات",
    price: 28,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    description: "سيرب فانيلا لتنكيه القهوة والمشروبات",
    sizes: ["250ml", "750ml"],
    status: ""
  },
  {
    name: "سيرب كراميل",
    brand: "إضافات",
    category: "إضافات",
    price: 28,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop",
    description: "سيرب كراميل لتنكيه القهوة والمشروبات",
    sizes: ["250ml", "750ml"],
    status: ""
  },
  {
    name: "ميزان قهوة رقمي",
    brand: "أدوات القهوة",
    category: "أدوات القهوة",
    price: 65,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "ميزان رقمي دقيق لقياس حبوب القهوة",
    sizes: ["قطعة واحدة"],
    status: ""
  }
];

var DEFAULT_PRODUCTS = [];

function seedFirestoreData(forceOverwrite) {
  var db = firebase.firestore();
  var projectId = "coffeemarket";
  var batch = db.batch();
  var productsRef = db.collection("projects").doc(projectId).collection("products");
  
  if (forceOverwrite) {
    return productsRef.get().then(function(snapshot) {
      var deleteBatch = db.batch();
      snapshot.forEach(function(doc) { deleteBatch.delete(doc.ref); });
      return deleteBatch.commit();
    }).then(function() {
      var addBatch = db.batch();
      SEED_PRODUCTS.forEach(function(product, index) {
        var docRef = productsRef.doc("product_" + (index + 1));
        product.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        product.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        addBatch.set(docRef, product);
      });
      return addBatch.commit();
    }).then(function() {
      console.log("Seeded " + SEED_PRODUCTS.length + " products successfully!");
      return SEED_PRODUCTS.length;
    });
  }
}