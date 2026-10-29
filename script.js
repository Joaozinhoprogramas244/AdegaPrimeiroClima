const ORIGINAL_PRODUCTS = [
  {
    "id": "p001",
    "category": "Cervejas",
    "brand": "Heineken",
    "name": "Lager",
    "size": "600 ml",
    "price": 12.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lager 600 ml"
  },
  {
    "id": "p002",
    "category": "Cervejas",
    "brand": "Heineken",
    "name": "Long Neck",
    "size": "330 ml",
    "price": 6.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 330 ml"
  },
  {
    "id": "p003",
    "category": "Cervejas",
    "brand": "Heineken",
    "name": "Lata",
    "size": "350 ml",
    "price": 4.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p004",
    "category": "Cervejas",
    "brand": "Corona Extra",
    "name": "Long Neck",
    "size": "330 ml",
    "price": 7.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 330 ml"
  },
  {
    "id": "p005",
    "category": "Cervejas",
    "brand": "Corona Cero",
    "name": "Long Neck sem álcool",
    "size": "330 ml",
    "price": 6.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck sem álcool 330 ml"
  },
  {
    "id": "p006",
    "category": "Cervejas",
    "brand": "Budweiser",
    "name": "Lata",
    "size": "350 ml",
    "price": 4.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p007",
    "category": "Cervejas",
    "brand": "Budweiser",
    "name": "Long Neck",
    "size": "330 ml",
    "price": 5.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 330 ml"
  },
  {
    "id": "p008",
    "category": "Cervejas",
    "brand": "Stella Artois",
    "name": "Long Neck",
    "size": "330 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 330 ml"
  },
  {
    "id": "p009",
    "category": "Cervejas",
    "brand": "Stella Artois",
    "name": "Pure Gold",
    "size": "330 ml",
    "price": 6.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Pure Gold 330 ml"
  },
  {
    "id": "p010",
    "category": "Cervejas",
    "brand": "Spaten",
    "name": "Lata",
    "size": "350 ml",
    "price": 4.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p011",
    "category": "Cervejas",
    "brand": "Eisenbahn",
    "name": "Pilsen",
    "size": "350 ml",
    "price": 4.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Pilsen 350 ml"
  },
  {
    "id": "p012",
    "category": "Cervejas",
    "brand": "Amstel",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p013",
    "category": "Cervejas",
    "brand": "Brahma",
    "name": "Chopp lata",
    "size": "350 ml",
    "price": 3.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Chopp lata 350 ml"
  },
  {
    "id": "p014",
    "category": "Cervejas",
    "brand": "Brahma Duplo Malte",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p015",
    "category": "Cervejas",
    "brand": "Skol",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p016",
    "category": "Cervejas",
    "brand": "Antarctica Original",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p017",
    "category": "Cervejas",
    "brand": "Original",
    "name": "Garrafa",
    "size": "600 ml",
    "price": 8.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Garrafa 600 ml"
  },
  {
    "id": "p018",
    "category": "Cervejas",
    "brand": "Beck's",
    "name": "Long Neck",
    "size": "330 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 330 ml"
  },
  {
    "id": "p019",
    "category": "Cervejas",
    "brand": "Patagonia",
    "name": "Amber Lager",
    "size": "355 ml",
    "price": 7.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Amber Lager 355 ml"
  },
  {
    "id": "p020",
    "category": "Cervejas",
    "brand": "Blue Moon",
    "name": "Belgian White",
    "size": "355 ml",
    "price": 10.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Belgian White 355 ml"
  },
  {
    "id": "p021",
    "category": "Cervejas",
    "brand": "Colorado",
    "name": "Appia",
    "size": "600 ml",
    "price": 14.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Appia 600 ml"
  },
  {
    "id": "p022",
    "category": "Cervejas",
    "brand": "Colorado",
    "name": "Ribeirão Lager",
    "size": "600 ml",
    "price": 13.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Ribeirão Lager 600 ml"
  },
  {
    "id": "p023",
    "category": "Cervejas",
    "brand": "Therezópolis",
    "name": "Gold",
    "size": "500 ml",
    "price": 8.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Gold 500 ml"
  },
  {
    "id": "p024",
    "category": "Cervejas",
    "brand": "Kaiser",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.29,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p025",
    "category": "Cervejas",
    "brand": "Petra",
    "name": "Puro Malte",
    "size": "350 ml",
    "price": 3.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Puro Malte 350 ml"
  },
  {
    "id": "p026",
    "category": "Cervejas",
    "brand": "Itaipava",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.29,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p027",
    "category": "Cervejas",
    "brand": "Michelob Ultra",
    "name": "Long Neck",
    "size": "330 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 330 ml"
  },
  {
    "id": "p028",
    "category": "Cervejas",
    "brand": "Modelo Especial",
    "name": "Long Neck",
    "size": "355 ml",
    "price": 7.49,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Long Neck 355 ml"
  },
  {
    "id": "p029",
    "category": "Cervejas",
    "brand": "Hoegaarden",
    "name": "Witbier",
    "size": "330 ml",
    "price": 8.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Witbier 330 ml"
  },
  {
    "id": "p030",
    "category": "Cervejas",
    "brand": "Guinness",
    "name": "Draught lata",
    "size": "440 ml",
    "price": 19.99,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=85",
    "description": "Draught lata 440 ml"
  },
  {
    "id": "p031",
    "category": "Whisky",
    "brand": "Jack Daniel's",
    "name": "Old No. 7",
    "size": "1 L",
    "price": 159.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Old No. 7 1 L"
  },
  {
    "id": "p032",
    "category": "Whisky",
    "brand": "Jack Daniel's",
    "name": "Honey",
    "size": "1 L",
    "price": 169.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Honey 1 L"
  },
  {
    "id": "p033",
    "category": "Whisky",
    "brand": "Jack Daniel's",
    "name": "Fire",
    "size": "1 L",
    "price": 169.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Fire 1 L"
  },
  {
    "id": "p034",
    "category": "Whisky",
    "brand": "Johnnie Walker",
    "name": "Red Label",
    "size": "1 L",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Red Label 1 L"
  },
  {
    "id": "p035",
    "category": "Whisky",
    "brand": "Johnnie Walker",
    "name": "Black Label",
    "size": "1 L",
    "price": 189.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Black Label 1 L"
  },
  {
    "id": "p036",
    "category": "Whisky",
    "brand": "Johnnie Walker",
    "name": "Double Black",
    "size": "1 L",
    "price": 249.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Double Black 1 L"
  },
  {
    "id": "p037",
    "category": "Whisky",
    "brand": "Johnnie Walker",
    "name": "Blonde",
    "size": "750 ml",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Blonde 750 ml"
  },
  {
    "id": "p038",
    "category": "Whisky",
    "brand": "Chivas Regal",
    "name": "12 anos",
    "size": "1 L",
    "price": 199.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "12 anos 1 L"
  },
  {
    "id": "p039",
    "category": "Whisky",
    "brand": "Ballantine's",
    "name": "Finest",
    "size": "1 L",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Finest 1 L"
  },
  {
    "id": "p040",
    "category": "Whisky",
    "brand": "Jameson",
    "name": "Irish Whiskey",
    "size": "750 ml",
    "price": 159.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Irish Whiskey 750 ml"
  },
  {
    "id": "p041",
    "category": "Whisky",
    "brand": "Jim Beam",
    "name": "White",
    "size": "1 L",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "White 1 L"
  },
  {
    "id": "p042",
    "category": "Whisky",
    "brand": "Maker's Mark",
    "name": "Bourbon",
    "size": "750 ml",
    "price": 199.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Bourbon 750 ml"
  },
  {
    "id": "p043",
    "category": "Whisky",
    "brand": "Old Parr",
    "name": "12 anos",
    "size": "1 L",
    "price": 189.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "12 anos 1 L"
  },
  {
    "id": "p044",
    "category": "Whisky",
    "brand": "White Horse",
    "name": "Blended Scotch",
    "size": "1 L",
    "price": 89.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Blended Scotch 1 L"
  },
  {
    "id": "p045",
    "category": "Whisky",
    "brand": "The Famous Grouse",
    "name": "Blended Scotch",
    "size": "1 L",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Blended Scotch 1 L"
  },
  {
    "id": "p046",
    "category": "Whisky",
    "brand": "Passport",
    "name": "Scotch",
    "size": "1 L",
    "price": 69.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Scotch 1 L"
  },
  {
    "id": "p047",
    "category": "Whisky",
    "brand": "Black & White",
    "name": "Scotch",
    "size": "1 L",
    "price": 79.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Scotch 1 L"
  },
  {
    "id": "p048",
    "category": "Whisky",
    "brand": "Grant's",
    "name": "Triple Wood",
    "size": "1 L",
    "price": 89.9,
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=700&q=85",
    "description": "Triple Wood 1 L"
  },
  {
    "id": "p049",
    "category": "Vodka",
    "brand": "Absolut",
    "name": "Original",
    "size": "1 L",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Original 1 L"
  },
  {
    "id": "p050",
    "category": "Vodka",
    "brand": "Absolut",
    "name": "Raspberri",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Raspberri 750 ml"
  },
  {
    "id": "p051",
    "category": "Vodka",
    "brand": "Absolut",
    "name": "Citron",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Citron 750 ml"
  },
  {
    "id": "p052",
    "category": "Vodka",
    "brand": "Smirnoff",
    "name": "Nº 21",
    "size": "998 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Nº 21 998 ml"
  },
  {
    "id": "p053",
    "category": "Vodka",
    "brand": "Smirnoff",
    "name": "Infusions",
    "size": "750 ml",
    "price": 54.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Infusions 750 ml"
  },
  {
    "id": "p054",
    "category": "Vodka",
    "brand": "Cîroc",
    "name": "Vodka",
    "size": "750 ml",
    "price": 199.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Vodka 750 ml"
  },
  {
    "id": "p055",
    "category": "Vodka",
    "brand": "Grey Goose",
    "name": "Vodka",
    "size": "750 ml",
    "price": 249.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Vodka 750 ml"
  },
  {
    "id": "p056",
    "category": "Vodka",
    "brand": "Skyy",
    "name": "Vodka",
    "size": "980 ml",
    "price": 44.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Vodka 980 ml"
  },
  {
    "id": "p057",
    "category": "Vodka",
    "brand": "Orloff",
    "name": "Vodka",
    "size": "1 L",
    "price": 34.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Vodka 1 L"
  },
  {
    "id": "p058",
    "category": "Vodka",
    "brand": "Ketel One",
    "name": "Vodka",
    "size": "750 ml",
    "price": 139.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Vodka 750 ml"
  },
  {
    "id": "p059",
    "category": "Vodka",
    "brand": "Stolichnaya",
    "name": "Premium",
    "size": "750 ml",
    "price": 89.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Premium 750 ml"
  },
  {
    "id": "p060",
    "category": "Vodka",
    "brand": "Belvedere",
    "name": "Vodka",
    "size": "700 ml",
    "price": 229.9,
    "image": "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd4?auto=format&fit=crop&w=700&q=85",
    "description": "Vodka 700 ml"
  },
  {
    "id": "p061",
    "category": "Gin",
    "brand": "Tanqueray",
    "name": "London Dry",
    "size": "750 ml",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "London Dry 750 ml"
  },
  {
    "id": "p062",
    "category": "Gin",
    "brand": "Tanqueray",
    "name": "Ten",
    "size": "750 ml",
    "price": 189.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "Ten 750 ml"
  },
  {
    "id": "p063",
    "category": "Gin",
    "brand": "Bombay Sapphire",
    "name": "London Dry",
    "size": "750 ml",
    "price": 129.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "London Dry 750 ml"
  },
  {
    "id": "p064",
    "category": "Gin",
    "brand": "Beefeater",
    "name": "London Dry",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "London Dry 750 ml"
  },
  {
    "id": "p065",
    "category": "Gin",
    "brand": "Gordon's",
    "name": "London Dry",
    "size": "750 ml",
    "price": 69.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "London Dry 750 ml"
  },
  {
    "id": "p066",
    "category": "Gin",
    "brand": "Seagers",
    "name": "Gin",
    "size": "1 L",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "Gin 1 L"
  },
  {
    "id": "p067",
    "category": "Gin",
    "brand": "Gin Amazzoni",
    "name": "Traditional",
    "size": "750 ml",
    "price": 139.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "Traditional 750 ml"
  },
  {
    "id": "p068",
    "category": "Gin",
    "brand": "Yvy",
    "name": "Mar",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "Mar 750 ml"
  },
  {
    "id": "p069",
    "category": "Gin",
    "brand": "Monkey 47",
    "name": "Schwarzwald Dry",
    "size": "500 ml",
    "price": 299.9,
    "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=85",
    "description": "Schwarzwald Dry 500 ml"
  },
  {
    "id": "p070",
    "category": "Rum",
    "brand": "Bacardi",
    "name": "Carta Blanca",
    "size": "980 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Carta Blanca 980 ml"
  },
  {
    "id": "p071",
    "category": "Rum",
    "brand": "Bacardi",
    "name": "Carta Oro",
    "size": "980 ml",
    "price": 54.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Carta Oro 980 ml"
  },
  {
    "id": "p072",
    "category": "Rum",
    "brand": "Havana Club",
    "name": "Añejo 3 Años",
    "size": "700 ml",
    "price": 79.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Añejo 3 Años 700 ml"
  },
  {
    "id": "p073",
    "category": "Rum",
    "brand": "Captain Morgan",
    "name": "Spiced Gold",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Spiced Gold 750 ml"
  },
  {
    "id": "p074",
    "category": "Rum",
    "brand": "Malibu",
    "name": "Coconut Rum",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Coconut Rum 750 ml"
  },
  {
    "id": "p075",
    "category": "Tequila",
    "brand": "José Cuervo",
    "name": "Especial Gold",
    "size": "750 ml",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Especial Gold 750 ml"
  },
  {
    "id": "p076",
    "category": "Tequila",
    "brand": "José Cuervo",
    "name": "Especial Silver",
    "size": "750 ml",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Especial Silver 750 ml"
  },
  {
    "id": "p077",
    "category": "Tequila",
    "brand": "Olmeca",
    "name": "Blanco",
    "size": "750 ml",
    "price": 109.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Blanco 750 ml"
  },
  {
    "id": "p078",
    "category": "Tequila",
    "brand": "Patrón",
    "name": "Silver",
    "size": "750 ml",
    "price": 299.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Silver 750 ml"
  },
  {
    "id": "p079",
    "category": "Tequila",
    "brand": "Sierra",
    "name": "Tequila Silver",
    "size": "700 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Tequila Silver 700 ml"
  },
  {
    "id": "p080",
    "category": "Vinhos",
    "brand": "Casillero del Diablo",
    "name": "Cabernet Sauvignon",
    "size": "750 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Cabernet Sauvignon 750 ml"
  },
  {
    "id": "p081",
    "category": "Vinhos",
    "brand": "Casillero del Diablo",
    "name": "Merlot",
    "size": "750 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Merlot 750 ml"
  },
  {
    "id": "p082",
    "category": "Vinhos",
    "brand": "Casillero del Diablo",
    "name": "Sauvignon Blanc",
    "size": "750 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Sauvignon Blanc 750 ml"
  },
  {
    "id": "p083",
    "category": "Vinhos",
    "brand": "Concha y Toro",
    "name": "Reservado Cabernet",
    "size": "750 ml",
    "price": 29.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Reservado Cabernet 750 ml"
  },
  {
    "id": "p084",
    "category": "Vinhos",
    "brand": "Concha y Toro",
    "name": "Reservado Merlot",
    "size": "750 ml",
    "price": 29.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Reservado Merlot 750 ml"
  },
  {
    "id": "p085",
    "category": "Vinhos",
    "brand": "Santa Helena",
    "name": "Cabernet Sauvignon",
    "size": "750 ml",
    "price": 34.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Cabernet Sauvignon 750 ml"
  },
  {
    "id": "p086",
    "category": "Vinhos",
    "brand": "Miolo",
    "name": "Seleção Tinto",
    "size": "750 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Seleção Tinto 750 ml"
  },
  {
    "id": "p087",
    "category": "Vinhos",
    "brand": "Miolo",
    "name": "Seleção Branco",
    "size": "750 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Seleção Branco 750 ml"
  },
  {
    "id": "p088",
    "category": "Vinhos",
    "brand": "Salton",
    "name": "Intenso Tinto",
    "size": "750 ml",
    "price": 29.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Intenso Tinto 750 ml"
  },
  {
    "id": "p089",
    "category": "Vinhos",
    "brand": "Gato Negro",
    "name": "Cabernet Sauvignon",
    "size": "750 ml",
    "price": 34.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Cabernet Sauvignon 750 ml"
  },
  {
    "id": "p090",
    "category": "Vinhos",
    "brand": "Porta 6",
    "name": "Tinto",
    "size": "750 ml",
    "price": 59.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Tinto 750 ml"
  },
  {
    "id": "p091",
    "category": "Vinhos",
    "brand": "JP Azeitão",
    "name": "Tinto",
    "size": "750 ml",
    "price": 44.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Tinto 750 ml"
  },
  {
    "id": "p092",
    "category": "Vinhos",
    "brand": "Pérgola",
    "name": "Tinto suave",
    "size": "1 L",
    "price": 22.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Tinto suave 1 L"
  },
  {
    "id": "p093",
    "category": "Vinhos",
    "brand": "Sangue de Boi",
    "name": "Tinto suave",
    "size": "750 ml",
    "price": 19.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Tinto suave 750 ml"
  },
  {
    "id": "p094",
    "category": "Vinhos",
    "brand": "Chilano",
    "name": "Rosé",
    "size": "750 ml",
    "price": 34.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Rosé 750 ml"
  },
  {
    "id": "p095",
    "category": "Vinhos",
    "brand": "Aurora",
    "name": "Bordô suave",
    "size": "750 ml",
    "price": 24.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Bordô suave 750 ml"
  },
  {
    "id": "p096",
    "category": "Vinhos",
    "brand": "Trapiche",
    "name": "Malbec",
    "size": "750 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Malbec 750 ml"
  },
  {
    "id": "p097",
    "category": "Vinhos",
    "brand": "Almadén",
    "name": "Chardonnay",
    "size": "750 ml",
    "price": 29.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Chardonnay 750 ml"
  },
  {
    "id": "p098",
    "category": "Vinhos",
    "brand": "Cono Sur",
    "name": "Bicicleta Pinot Noir",
    "size": "750 ml",
    "price": 54.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Bicicleta Pinot Noir 750 ml"
  },
  {
    "id": "p099",
    "category": "Vinhos",
    "brand": "Santa Carolina",
    "name": "Carmenere",
    "size": "750 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85",
    "description": "Carmenere 750 ml"
  },
  {
    "id": "p100",
    "category": "Espumantes",
    "brand": "Chandon",
    "name": "Réserve Brut",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Réserve Brut 750 ml"
  },
  {
    "id": "p101",
    "category": "Espumantes",
    "brand": "Salton",
    "name": "Moscatel",
    "size": "750 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Moscatel 750 ml"
  },
  {
    "id": "p102",
    "category": "Espumantes",
    "brand": "Salton",
    "name": "Brut",
    "size": "750 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Brut 750 ml"
  },
  {
    "id": "p103",
    "category": "Espumantes",
    "brand": "Casa Perini",
    "name": "Moscatel",
    "size": "750 ml",
    "price": 49.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Moscatel 750 ml"
  },
  {
    "id": "p104",
    "category": "Espumantes",
    "brand": "Freixenet",
    "name": "Cordon Negro Brut",
    "size": "750 ml",
    "price": 89.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Cordon Negro Brut 750 ml"
  },
  {
    "id": "p105",
    "category": "Espumantes",
    "brand": "Freixenet",
    "name": "Cordon Rosado",
    "size": "750 ml",
    "price": 89.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Cordon Rosado 750 ml"
  },
  {
    "id": "p106",
    "category": "Espumantes",
    "brand": "Aurora",
    "name": "Prosecco",
    "size": "750 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Prosecco 750 ml"
  },
  {
    "id": "p107",
    "category": "Espumantes",
    "brand": "Garibaldi",
    "name": "Moscatel",
    "size": "750 ml",
    "price": 34.9,
    "image": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=85",
    "description": "Moscatel 750 ml"
  },
  {
    "id": "p108",
    "category": "Drinks prontos",
    "brand": "Smirnoff Ice",
    "name": "Original",
    "size": "275 ml",
    "price": 6.99,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Original 275 ml"
  },
  {
    "id": "p109",
    "category": "Drinks prontos",
    "brand": "Smirnoff Ice",
    "name": "Green Apple",
    "size": "275 ml",
    "price": 6.99,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Green Apple 275 ml"
  },
  {
    "id": "p110",
    "category": "Drinks prontos",
    "brand": "Beats",
    "name": "Senses",
    "size": "269 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Senses 269 ml"
  },
  {
    "id": "p111",
    "category": "Drinks prontos",
    "brand": "Beats",
    "name": "GT",
    "size": "269 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "GT 269 ml"
  },
  {
    "id": "p112",
    "category": "Drinks prontos",
    "brand": "Beats",
    "name": "Red Mix",
    "size": "269 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Red Mix 269 ml"
  },
  {
    "id": "p113",
    "category": "Drinks prontos",
    "brand": "51 Ice",
    "name": "Limão",
    "size": "275 ml",
    "price": 5.49,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Limão 275 ml"
  },
  {
    "id": "p114",
    "category": "Drinks prontos",
    "brand": "Skol Beats",
    "name": "Blue",
    "size": "269 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Blue 269 ml"
  },
  {
    "id": "p115",
    "category": "Drinks prontos",
    "brand": "Mike's",
    "name": "Hard Lemonade",
    "size": "275 ml",
    "price": 7.99,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "Hard Lemonade 275 ml"
  },
  {
    "id": "p116",
    "category": "Drinks prontos",
    "brand": "Jack Daniel's",
    "name": "& Cola",
    "size": "330 ml",
    "price": 12.99,
    "image": "https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=700&q=85",
    "description": "& Cola 330 ml"
  },
  {
    "id": "p117",
    "category": "Licores e aperitivos",
    "brand": "Baileys",
    "name": "Original Irish Cream",
    "size": "750 ml",
    "price": 119.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Original Irish Cream 750 ml"
  },
  {
    "id": "p118",
    "category": "Licores e aperitivos",
    "brand": "Jägermeister",
    "name": "Herbal Liqueur",
    "size": "700 ml",
    "price": 139.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Herbal Liqueur 700 ml"
  },
  {
    "id": "p119",
    "category": "Licores e aperitivos",
    "brand": "Campari",
    "name": "Bitter",
    "size": "748 ml",
    "price": 69.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Bitter 748 ml"
  },
  {
    "id": "p120",
    "category": "Licores e aperitivos",
    "brand": "Aperol",
    "name": "Aperitivo",
    "size": "750 ml",
    "price": 69.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Aperitivo 750 ml"
  },
  {
    "id": "p121",
    "category": "Licores e aperitivos",
    "brand": "Licor 43",
    "name": "Original",
    "size": "700 ml",
    "price": 169.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Original 700 ml"
  },
  {
    "id": "p122",
    "category": "Licores e aperitivos",
    "brand": "Cointreau",
    "name": "Triple Sec",
    "size": "700 ml",
    "price": 199.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Triple Sec 700 ml"
  },
  {
    "id": "p123",
    "category": "Licores e aperitivos",
    "brand": "Amarula",
    "name": "Cream Liqueur",
    "size": "750 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Cream Liqueur 750 ml"
  },
  {
    "id": "p124",
    "category": "Licores e aperitivos",
    "brand": "Sheridan's",
    "name": "Coffee Layered Liqueur",
    "size": "500 ml",
    "price": 129.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Coffee Layered Liqueur 500 ml"
  },
  {
    "id": "p125",
    "category": "Licores e aperitivos",
    "brand": "Stock",
    "name": "Chocolate",
    "size": "720 ml",
    "price": 39.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Chocolate 720 ml"
  },
  {
    "id": "p126",
    "category": "Conhaques e brandy",
    "brand": "Dreher",
    "name": "Conhaque",
    "size": "900 ml",
    "price": 19.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Conhaque 900 ml"
  },
  {
    "id": "p127",
    "category": "Conhaques e brandy",
    "brand": "Presidente",
    "name": "Conhaque",
    "size": "900 ml",
    "price": 24.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Conhaque 900 ml"
  },
  {
    "id": "p128",
    "category": "Conhaques e brandy",
    "brand": "Hennessy",
    "name": "Very Special VS",
    "size": "700 ml",
    "price": 249.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Very Special VS 700 ml"
  },
  {
    "id": "p129",
    "category": "Conhaques e brandy",
    "brand": "Fundador",
    "name": "Brandy",
    "size": "700 ml",
    "price": 99.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Brandy 700 ml"
  },
  {
    "id": "p130",
    "category": "Conhaques e brandy",
    "brand": "Domus",
    "name": "Conhaque",
    "size": "1 L",
    "price": 29.9,
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=85",
    "description": "Conhaque 1 L"
  },
  {
    "id": "p131",
    "category": "Energéticos",
    "brand": "Red Bull",
    "name": "Original",
    "size": "250 ml",
    "price": 8.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Original 250 ml"
  },
  {
    "id": "p132",
    "category": "Energéticos",
    "brand": "Red Bull",
    "name": "Sugarfree",
    "size": "250 ml",
    "price": 8.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Sugarfree 250 ml"
  },
  {
    "id": "p133",
    "category": "Energéticos",
    "brand": "Monster",
    "name": "Energy Original",
    "size": "473 ml",
    "price": 9.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Energy Original 473 ml"
  },
  {
    "id": "p134",
    "category": "Energéticos",
    "brand": "Monster",
    "name": "Mango Loco",
    "size": "473 ml",
    "price": 9.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Mango Loco 473 ml"
  },
  {
    "id": "p135",
    "category": "Energéticos",
    "brand": "Monster",
    "name": "Ultra Paradise",
    "size": "473 ml",
    "price": 9.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Ultra Paradise 473 ml"
  },
  {
    "id": "p136",
    "category": "Energéticos",
    "brand": "TNT",
    "name": "Original",
    "size": "269 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Original 269 ml"
  },
  {
    "id": "p137",
    "category": "Energéticos",
    "brand": "Baly",
    "name": "Melancia",
    "size": "2 L",
    "price": 12.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Melancia 2 L"
  },
  {
    "id": "p138",
    "category": "Energéticos",
    "brand": "Fusion",
    "name": "Energy",
    "size": "2 L",
    "price": 10.99,
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=700&q=85",
    "description": "Energy 2 L"
  },
  {
    "id": "p139",
    "category": "Sem álcool e mixers",
    "brand": "Heineken 0.0",
    "name": "Cerveja sem álcool",
    "size": "330 ml",
    "price": 6.49,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Cerveja sem álcool 330 ml"
  },
  {
    "id": "p140",
    "category": "Sem álcool e mixers",
    "brand": "Budweiser Zero",
    "name": "Cerveja sem álcool",
    "size": "330 ml",
    "price": 5.99,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Cerveja sem álcool 330 ml"
  },
  {
    "id": "p141",
    "category": "Sem álcool e mixers",
    "brand": "Corona Cero",
    "name": "Cerveja sem álcool",
    "size": "330 ml",
    "price": 6.99,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Cerveja sem álcool 330 ml"
  },
  {
    "id": "p142",
    "category": "Sem álcool e mixers",
    "brand": "Chandon",
    "name": "Delice sem álcool? verificar rótulo",
    "size": "750 ml",
    "price": 69.9,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Delice sem álcool? verificar rótulo 750 ml"
  },
  {
    "id": "p143",
    "category": "Sem álcool e mixers",
    "brand": "Água tônica",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.49,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  },
  {
    "id": "p144",
    "category": "Sem álcool e mixers",
    "brand": "Água com gás",
    "name": "Garrafa",
    "size": "500 ml",
    "price": 2.99,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Garrafa 500 ml"
  },
  {
    "id": "p145",
    "category": "Sem álcool e mixers",
    "brand": "Refrigerante cola",
    "name": "Lata",
    "size": "350 ml",
    "price": 3.99,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=700&q=85",
    "description": "Lata 350 ml"
  }
];
const STORAGE_KEY = 'adegaDigitalCatalogV2';
const CART_KEY = 'adegaDigitalCartV2';
let products = loadProducts();
let cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}');
let activeCategory = '';
const $ = id => document.getElementById(id);
function loadProducts() { try { const saved=localStorage.getItem(STORAGE_KEY); return saved ? JSON.parse(saved) : structuredClone(ORIGINAL_PRODUCTS); } catch { return ORIGINAL_PRODUCTS; } }
function saveProducts() { localStorage.setItem(STORAGE_KEY, JSON.stringify(products)); }
function money(value) { return Number(value).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}); }
function escapeHtml(v) { return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function categories() { return [...new Set(products.map(p=>p.category))].sort((a,b)=>a.localeCompare(b,'pt-BR')); }
function renderCategories() {
  const cats=categories();
  $('categoryFilter').innerHTML='<option value="">Todas as categorias</option>'+cats.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  $('categoryChips').innerHTML=[`<button class="chip ${activeCategory===''?'active':''}" data-category="">Todas</button>`,...cats.map(c=>`<button class="chip ${activeCategory===c?'active':''}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`)].join('');
  $('categoryChips').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.category;$('categoryFilter').value=activeCategory;renderCategories();renderProducts();}));
}
function renderProducts() {
  const q=$('searchInput').value.trim().toLocaleLowerCase('pt-BR');
  let list=products.filter(p=>(!activeCategory||p.category===activeCategory)&&(!$('categoryFilter').value||p.category===$('categoryFilter').value)&&[p.name,p.brand,p.category,p.size,p.description].join(' ').toLocaleLowerCase('pt-BR').includes(q));
  const sort=$('sortFilter').value;
  if(sort==='name') list.sort((a,b)=>(a.brand+' '+a.name).localeCompare(b.brand+' '+b.name,'pt-BR'));
  if(sort==='priceAsc') list.sort((a,b)=>a.price-b.price);
  if(sort==='priceDesc') list.sort((a,b)=>b.price-a.price);
  $('productGrid').innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img loading="lazy" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.brand+' '+p.name)}" onerror="this.onerror=null;this.src='https://placehold.co/600x600/20221b/d7b56d?text='+encodeURIComponent('${escapeHtml(p.category)}')"><span class="category-label">${escapeHtml(p.category)}</span></div><div class="product-info"><span class="product-brand">${escapeHtml(p.brand)}</span><h3>${escapeHtml(p.name)}</h3><span class="product-size">${escapeHtml(p.size)}</span><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}" aria-label="Adicionar ${escapeHtml(p.brand+' '+p.name)}">+</button></div></div></article>`).join('');
  $('emptyState').classList.toggle('hidden',list.length>0); $('productCount').textContent=products.length.toLocaleString('pt-BR');
  $('productGrid').querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>addToCart(b.dataset.add)));
}
function cartQty() { return Object.values(cart).reduce((a,b)=>a+b,0); }
function addToCart(id) { cart[id]=(cart[id]||0)+1; saveCart(); renderCart(); }
function saveCart() { localStorage.setItem(CART_KEY,JSON.stringify(cart)); $('cartCount').textContent=cartQty(); $('adminCart').textContent=cartQty(); }
function changeQty(id,delta) { cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];saveCart();renderCart(); }
function renderCart() {
 const lines=Object.entries(cart).filter(([id,qty])=>qty>0&&products.some(p=>p.id===id));
 $('cartItems').innerHTML=lines.length?lines.map(([id,qty])=>{const p=products.find(x=>x.id===id);return `<div class="cart-line"><div><b>${escapeHtml(p.brand)} — ${escapeHtml(p.name)}</b><small>${escapeHtml(p.size)} · ${money(p.price)} cada</small><div class="quantity"><button data-qty="${id}" data-delta="-1">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1">+</button></div></div><strong>${money(p.price*qty)}</strong></div>`;}).join(''):'<p class="muted">Sua sacola está vazia.</p>';
 const total=lines.reduce((sum,[id,qty])=>sum+products.find(p=>p.id===id).price*qty,0);$('cartTotal').textContent=money(total);
 $('cartItems').querySelectorAll('[data-qty]').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.qty,Number(b.dataset.delta))));
 saveCart();
}
function download(filename,text) { const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'application/json'}));a.download=filename;a.click();URL.revokeObjectURL(a.href); }
$('searchInput').addEventListener('input',renderProducts);
$('categoryFilter').addEventListener('change',()=>{activeCategory=$('categoryFilter').value;renderCategories();renderProducts();});
$('sortFilter').addEventListener('change',renderProducts);
$('cartOpen').addEventListener('click',()=>$('cartDrawer').classList.remove('hidden'));
$('cartClose').addEventListener('click',()=>$('cartDrawer').classList.add('hidden'));
$('cartDrawer').addEventListener('click',e=>{if(e.target===$('cartDrawer'))$('cartDrawer').classList.add('hidden')});
$('checkoutBtn').addEventListener('click',()=>alert('Esta é uma demonstração. Para receber pedidos reais, será necessário configurar backend, estoque e uma integração de pagamento ou WhatsApp.'));
$('adminOpen').addEventListener('click',()=>{$('adminProducts').textContent=products.length;$('adminModal').classList.remove('hidden')});
$('adminClose').addEventListener('click',()=> $('adminModal').classList.add('hidden'));
$('adminModal').addEventListener('click',e=>{if(e.target===$('adminModal'))$('adminModal').classList.add('hidden')});
$('exportBtn').addEventListener('click',()=>download('catalogo-adega-digital.json',JSON.stringify(products,null,2)));
$('importInput').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const parsed=JSON.parse(await f.text());if(!Array.isArray(parsed)||!parsed.every(p=>p.id&&p.name&&p.brand&&p.category&&Number.isFinite(Number(p.price))))throw new Error('Formato inválido');products=parsed.map(p=>({...p,price:Number(p.price)}));saveProducts();renderCategories();renderProducts();$('adminProducts').textContent=products.length;alert('Catálogo importado neste navegador.');}catch(err){alert('Não foi possível importar: '+err.message)}e.target.value='';});
$('resetBtn').addEventListener('click',()=>{if(confirm('Restaurar o catálogo original desta versão?')){products=structuredClone(ORIGINAL_PRODUCTS);saveProducts();renderCategories();renderProducts();$('adminProducts').textContent=products.length;}});
$('ageYes').addEventListener('click',()=>{sessionStorage.setItem('ageVerified','yes');$('ageGate').classList.add('hidden')});
$('ageNo').addEventListener('click',()=>{document.querySelector('.age-card').innerHTML='<h1>Acesso não permitido</h1><p>Este site é destinado a maiores de 18 anos.</p>'});
if(sessionStorage.getItem('ageVerified')==='yes')$('ageGate').classList.add('hidden');
renderCategories();renderProducts();renderCart();
