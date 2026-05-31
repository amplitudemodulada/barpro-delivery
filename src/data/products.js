export const categories = [
  { id: 'cervejas', name: 'Cervejas e Chopes', icon: '🍺', color: 'amber', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  { id: 'destilados', name: 'Destilados e Coquetéis', icon: '🥃', color: 'indigo', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700' },
  { id: 'refrigerantes', name: 'Refrigerantes e Não Alcoólicas', icon: '🥤', color: 'green', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
  { id: 'gelo', name: 'Gelo, Carvão e Churrasco', icon: '🧊', color: 'cyan', bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700' },
  { id: 'conveniencia', name: 'Conveniência e Mercearia', icon: '🥨', color: 'rose', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
]

export const products = [
  // ═══════════════════════════════════════════
  // CERVEJAS NACIONAIS
  // ═══════════════════════════════════════════
  { id: 1,  name: 'Brahma Lata',          category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 4.50,  emoji: '🍺', popular: true,  alcohol: true  },
  { id: 2,  name: 'Brahma Latão',         category: 'cervejas', subcategory: 'Nacionais',     volume: 'Latão 473ml',  price: 6.00,  emoji: '🍺', popular: true,  alcohol: true  },
  { id: 3,  name: 'Brahma Garrafa',       category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 9.00,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 4,  name: 'Brahma Long Neck',     category: 'cervejas', subcategory: 'Nacionais',     volume: 'Long Neck 330ml', price: 6.50, emoji: '🍺', popular: false, alcohol: true  },
  { id: 5,  name: 'Brahma Zero',          category: 'cervejas', subcategory: 'Zero Álcool',   volume: 'Lata 350ml',   price: 4.50,  emoji: '🍺', popular: false, alcohol: false, zeroAlcohol: true },
  { id: 6,  name: 'Skol Lata',            category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 4.00,  emoji: '🍺', popular: true,  alcohol: true  },
  { id: 7,  name: 'Skol Latão',           category: 'cervejas', subcategory: 'Nacionais',     volume: 'Latão 473ml',  price: 5.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 8,  name: 'Skol Garrafa',         category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 8.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 9,  name: 'Antarctica Lata',      category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 4.00,  emoji: '🍺', popular: true,  alcohol: true  },
  { id: 10, name: 'Antarctica Latão',     category: 'cervejas', subcategory: 'Nacionais',     volume: 'Latão 473ml',  price: 5.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 11, name: 'Antarctica Garrafa',   category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 8.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 12, name: 'Heineken Lata',        category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 6.50,  emoji: '🍺', popular: true,  alcohol: true  },
  { id: 13, name: 'Heineken Long Neck',   category: 'cervejas', subcategory: 'Nacionais',     volume: 'Long Neck 330ml', price: 8.00, emoji: '🍺', popular: true,  alcohol: true  },
  { id: 14, name: 'Heineken Garrafa',     category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 12.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 15, name: 'Heineken Zero',        category: 'cervejas', subcategory: 'Zero Álcool',   volume: 'Lata 350ml',   price: 6.00,  emoji: '🍺', popular: false, alcohol: false, zeroAlcohol: true },
  { id: 16, name: 'Amstel Lata',          category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 5.00,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 17, name: 'Amstel Long Neck',     category: 'cervejas', subcategory: 'Nacionais',     volume: 'Long Neck 330ml', price: 7.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 18, name: 'Amstel Garrafa',       category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 10.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 19, name: 'Petra Lata',           category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 4.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 20, name: 'Petra Latão',          category: 'cervejas', subcategory: 'Nacionais',     volume: 'Latão 473ml',  price: 5.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 21, name: 'Original Garrafa',     category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 10.00, emoji: '🍺', popular: true,  alcohol: true  },
  { id: 22, name: 'Original Long Neck',   category: 'cervejas', subcategory: 'Nacionais',     volume: 'Long Neck 330ml', price: 7.50, emoji: '🍺', popular: false, alcohol: true  },
  { id: 23, name: 'Spaten Lata',          category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 5.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 24, name: 'Spaten Long Neck',     category: 'cervejas', subcategory: 'Nacionais',     volume: 'Long Neck 330ml', price: 7.50, emoji: '🍺', popular: false, alcohol: true  },
  { id: 25, name: 'Eisenbahn Lata',       category: 'cervejas', subcategory: 'Nacionais',     volume: 'Lata 350ml',   price: 5.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 26, name: 'Eisenbahn Long Neck',  category: 'cervejas', subcategory: 'Nacionais',     volume: 'Long Neck 330ml', price: 7.50, emoji: '🍺', popular: false, alcohol: true  },
  { id: 27, name: 'Eisenbahn Garrafa',    category: 'cervejas', subcategory: 'Nacionais',     volume: 'Garrafa 600ml', price: 11.00, emoji: '🍺', popular: false, alcohol: true  },

  // CERVEJAS PREMIUM / IMPORTADAS
  { id: 28, name: 'Corona Long Neck',     category: 'cervejas', subcategory: 'Premium',       volume: 'Long Neck 330ml', price: 9.00, emoji: '🍺', popular: true,  alcohol: true  },
  { id: 29, name: 'Stella Artois Long Neck', category: 'cervejas', subcategory: 'Premium',    volume: 'Long Neck 330ml', price: 8.50, emoji: '🍺', popular: true,  alcohol: true  },
  { id: 30, name: 'Stella Artois Garrafa', category: 'cervejas', subcategory: 'Premium',      volume: 'Garrafa 600ml', price: 14.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 31, name: 'Budweiser Lata',       category: 'cervejas', subcategory: 'Premium',       volume: 'Lata 350ml',   price: 6.50,  emoji: '🍺', popular: false, alcohol: true  },
  { id: 32, name: 'Budweiser Long Neck',  category: 'cervejas', subcategory: 'Premium',       volume: 'Long Neck 330ml', price: 7.50, emoji: '🍺', popular: false, alcohol: true  },
  { id: 33, name: 'Guinness Long Neck',   category: 'cervejas', subcategory: 'Premium',       volume: 'Long Neck 330ml', price: 14.00, emoji: '🍺', popular: true,  alcohol: true  },
  { id: 34, name: 'Blue Moon Long Neck',  category: 'cervejas', subcategory: 'Premium',       volume: 'Long Neck 330ml', price: 12.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 35, name: 'Paulaner Long Neck',   category: 'cervejas', subcategory: 'Premium',       volume: 'Long Neck 330ml', price: 12.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 36, name: 'Paulaner Garrafa',     category: 'cervejas', subcategory: 'Premium',       volume: 'Garrafa 600ml', price: 18.00, emoji: '🍺', popular: false, alcohol: true  },
  { id: 37, name: 'Erdinger Long Neck',   category: 'cervejas', subcategory: 'Premium',       volume: 'Long Neck 330ml', price: 13.00, emoji: '🍺', popular: false, alcohol: true  },

  // ═══════════════════════════════════════════
  // DESTILADOS E COQUETÉIS
  // ═══════════════════════════════════════════
  // Cachaças
  { id: 38, name: 'Sagatiba Pura',        category: 'destilados', subcategory: 'Cachaças',     volume: 'Garrafa 700ml', price: 39.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 39, name: 'Salinas',              category: 'destilados', subcategory: 'Cachaças',     volume: 'Garrafa 700ml', price: 45.00, emoji: '🥃', popular: false, alcohol: true },
  { id: 40, name: 'Velho Barreiro',       category: 'destilados', subcategory: 'Cachaças',     volume: 'Garrafa 910ml', price: 14.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 41, name: 'Pitú',                 category: 'destilados', subcategory: 'Cachaças',     volume: 'Garrafa 965ml', price: 16.90, emoji: '🥃', popular: false, alcohol: true },

  // Vodkas
  { id: 42, name: 'Smirnoff',             category: 'destilados', subcategory: 'Vodkas',       volume: 'Garrafa 1L',    price: 34.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 43, name: 'Absolut',              category: 'destilados', subcategory: 'Vodkas',       volume: 'Garrafa 750ml', price: 69.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 44, name: 'Grey Goose',           category: 'destilados', subcategory: 'Vodkas',       volume: 'Garrafa 750ml', price: 129.90, emoji: '🥃', popular: false, alcohol: true },
  { id: 45, name: 'Skyy',                 category: 'destilados', subcategory: 'Vodkas',       volume: 'Garrafa 750ml', price: 29.90, emoji: '🥃', popular: false, alcohol: true },

  // Gins
  { id: 46, name: 'Tanqueray',            category: 'destilados', subcategory: 'Gins',         volume: 'Garrafa 750ml', price: 64.90, emoji: '🍸', popular: true,  alcohol: true },
  { id: 47, name: 'Bombay Sapphire',      category: 'destilados', subcategory: 'Gins',         volume: 'Garrafa 750ml', price: 74.90, emoji: '🍸', popular: true,  alcohol: true },
  { id: 48, name: 'Gordon\'s',            category: 'destilados', subcategory: 'Gins',         volume: 'Garrafa 750ml', price: 29.90, emoji: '🍸', popular: false, alcohol: true },
  { id: 49, name: 'Beefeater',            category: 'destilados', subcategory: 'Gins',         volume: 'Garrafa 750ml', price: 49.90, emoji: '🍸', popular: false, alcohol: true },

  // Whiskies
  { id: 50, name: 'Johnnie Walker Red Label',   category: 'destilados', subcategory: 'Whiskies', volume: 'Garrafa 750ml', price: 59.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 51, name: 'Johnnie Walker Black Label',  category: 'destilados', subcategory: 'Whiskies', volume: 'Garrafa 750ml', price: 99.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 52, name: 'Johnnie Walker Gold Label',   category: 'destilados', subcategory: 'Whiskies', volume: 'Garrafa 750ml', price: 159.90, emoji: '🥃', popular: false, alcohol: true },
  { id: 53, name: 'Jack Daniel\'s Old No. 7',    category: 'destilados', subcategory: 'Whiskies', volume: 'Garrafa 750ml', price: 79.90, emoji: '🥃', popular: true,  alcohol: true },
  { id: 54, name: 'Jack Daniel\'s Honey',         category: 'destilados', subcategory: 'Whiskies', volume: 'Garrafa 750ml', price: 84.90, emoji: '🥃', popular: false, alcohol: true },
  { id: 55, name: 'Jack Daniel\'s Apple',         category: 'destilados', subcategory: 'Whiskies', volume: 'Garrafa 750ml', price: 84.90, emoji: '🥃', popular: false, alcohol: true },
  { id: 56, name: 'Chivas Regal 12',      category: 'destilados', subcategory: 'Whiskies',    volume: 'Garrafa 750ml', price: 119.90, emoji: '🥃', popular: false, alcohol: true },
  { id: 57, name: 'Passport',             category: 'destilados', subcategory: 'Whiskies',    volume: 'Garrafa 750ml', price: 39.90, emoji: '🥃', popular: false, alcohol: true },

  // Outros Destilados
  { id: 58, name: 'Campari',              category: 'destilados', subcategory: 'Outros',       volume: 'Garrafa 750ml', price: 49.90, emoji: '🍹', popular: false, alcohol: true },
  { id: 59, name: 'Aperol',               category: 'destilados', subcategory: 'Outros',       volume: 'Garrafa 750ml', price: 54.90, emoji: '🍹', popular: true,  alcohol: true },
  { id: 60, name: 'Tequila Jose Cuervo',  category: 'destilados', subcategory: 'Outros',       volume: 'Garrafa 750ml', price: 89.90, emoji: '🍹', popular: false, alcohol: true },
  { id: 61, name: 'Licor 43',             category: 'destilados', subcategory: 'Outros',       volume: 'Garrafa 700ml', price: 59.90, emoji: '🍹', popular: false, alcohol: true },
  { id: 62, name: 'Jägermeister',         category: 'destilados', subcategory: 'Outros',       volume: 'Garrafa 700ml', price: 69.90, emoji: '🍹', popular: true,  alcohol: true },

  // ═══════════════════════════════════════════
  // REFRIGERANTES E NÃO ALCOÓLICAS
  // ═══════════════════════════════════════════
  { id: 63, name: 'Coca-Cola Original',   category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 5.00,  emoji: '🥤', popular: true,  alcohol: false },
  { id: 64, name: 'Coca-Cola Zero',       category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 5.00,  emoji: '🥤', popular: false, alcohol: false },
  { id: 65, name: 'Coca-Cola Garrafa',    category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Garrafa 2L',  price: 9.00,  emoji: '🥤', popular: true,  alcohol: false },
  { id: 66, name: 'Coca-Cola Zero Garrafa', category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Garrafa 2L', price: 9.00, emoji: '🥤', popular: false, alcohol: false },
  { id: 67, name: 'Pepsi Lata',           category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 4.50,  emoji: '🥤', popular: false, alcohol: false },
  { id: 68, name: 'Guaraná Antarctica Lata', category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 4.50, emoji: '🥤', popular: true,  alcohol: false },
  { id: 69, name: 'Guaraná Antarctica Garrafa', category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Garrafa 2L', price: 8.00, emoji: '🥤', popular: true, alcohol: false },
  { id: 70, name: 'Fanta Guaraná',        category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 4.50,  emoji: '🥤', popular: false, alcohol: false },
  { id: 71, name: 'Fanta Laranja',        category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 4.50,  emoji: '🥤', popular: false, alcohol: false },
  { id: 72, name: 'Fanta Uva',            category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 4.50,  emoji: '🥤', popular: false, alcohol: false },
  { id: 73, name: 'Sprite Lata',          category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 4.50,  emoji: '🥤', popular: false, alcohol: false },
  { id: 74, name: 'Itubaína',             category: 'refrigerantes', subcategory: 'Nacionais',     volume: 'Garrafa 1,5L', price: 6.00, emoji: '🥤', popular: false, alcohol: false },
  { id: 75, name: 'Tubaína Orlando',      category: 'refrigerantes', subcategory: 'Nacionais',     volume: 'Garrafa 290ml', price: 3.50, emoji: '🥤', popular: false, alcohol: false },
  { id: 76, name: 'Schweppes Citrus',     category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 5.00, emoji: '🥤', popular: false, alcohol: false },
  { id: 77, name: 'Schweppes Tônica',     category: 'refrigerantes', subcategory: 'Refrigerantes', volume: 'Lata 350ml', price: 5.00, emoji: '🥤', popular: false, alcohol: false },
  { id: 78, name: 'Água Tônica Antarctica', category: 'refrigerantes', subcategory: 'Nacionais', volume: 'Lata 350ml', price: 4.00, emoji: '🥤', popular: false, alcohol: false },
  { id: 79, name: 'Red Bull',             category: 'refrigerantes', subcategory: 'Energéticos',   volume: 'Lata 250ml', price: 12.00, emoji: '⚡', popular: true,  alcohol: false },
  { id: 80, name: 'Monster Energy',       category: 'refrigerantes', subcategory: 'Energéticos',   volume: 'Lata 473ml', price: 11.00, emoji: '⚡', popular: false, alcohol: false },

  // Sucos
  { id: 81, name: 'Suco Maguary',         category: 'refrigerantes', subcategory: 'Sucos',        volume: 'Garrafa 1L',  price: 6.50,  emoji: '🧃', popular: false, alcohol: false },
  { id: 82, name: 'Suco Del Valle',       category: 'refrigerantes', subcategory: 'Sucos',        volume: 'Garrafa 1L',  price: 7.00,  emoji: '🧃', popular: false, alcohol: false },

  // Hidratação
  { id: 83, name: 'Água Mineral s/ Gás',  category: 'refrigerantes', subcategory: 'Hidratação',    volume: 'Garrafa 500ml', price: 3.00, emoji: '💧', popular: true,  alcohol: false },
  { id: 84, name: 'Água Mineral c/ Gás',  category: 'refrigerantes', subcategory: 'Hidratação',    volume: 'Garrafa 500ml', price: 3.50, emoji: '💧', popular: false, alcohol: false },
  { id: 85, name: 'Água Mineral Galão',   category: 'refrigerantes', subcategory: 'Hidratação',    volume: 'Galão 5L',   price: 7.00,  emoji: '💧', popular: true,  alcohol: false },
  { id: 86, name: 'Gatorade',             category: 'refrigerantes', subcategory: 'Hidratação',    volume: 'Garrafa 500ml', price: 8.00, emoji: '⚡', popular: false, alcohol: false },
  { id: 87, name: 'Powerade',             category: 'refrigerantes', subcategory: 'Hidratação',    volume: 'Garrafa 500ml', price: 7.00, emoji: '⚡', popular: false, alcohol: false },

  // ═══════════════════════════════════════════
  // GELO, CARVÃO E CHURRASCO
  // ═══════════════════════════════════════════
  { id: 88, name: 'Gelo em Cubos',        category: 'gelo', subcategory: 'Gelo',             volume: 'Saco 5kg',     price: 8.00,  emoji: '🧊', popular: true,  alcohol: false },
  { id: 89, name: 'Gelo Moído',           category: 'gelo', subcategory: 'Gelo',             volume: 'Saco 5kg',     price: 8.00,  emoji: '🧊', popular: false, alcohol: false },
  { id: 90, name: 'Gelo de Coco Unidade', category: 'gelo', subcategory: 'Gelo',             volume: 'Unidade',      price: 10.00, emoji: '🥥', popular: false, alcohol: false },
  { id: 91, name: 'Gelo de Coco Pacote',  category: 'gelo', subcategory: 'Gelo',             volume: 'Pacote 4 unid', price: 35.00, emoji: '🥥', popular: false, alcohol: false },
  { id: 92, name: 'Gelo Saborizado Melancia', category: 'gelo', subcategory: 'Gelo',         volume: 'Pacote 400ml', price: 12.00, emoji: '🍉', popular: false, alcohol: false },
  { id: 93, name: 'Gelo Saborizado Maracujá', category: 'gelo', subcategory: 'Gelo',         volume: 'Pacote 400ml', price: 12.00, emoji: '🥭', popular: false, alcohol: false },

  { id: 94, name: 'Carvão Vegetal Premium',    category: 'gelo', subcategory: 'Carvão',      volume: 'Saco 3kg',     price: 15.00, emoji: '🔥', popular: true,  alcohol: false },
  { id: 95, name: 'Carvão Vegetal Premium',    category: 'gelo', subcategory: 'Carvão',      volume: 'Saco 5kg',     price: 22.00, emoji: '🔥', popular: true,  alcohol: false },
  { id: 96, name: 'Lenha Ecológica',     category: 'gelo', subcategory: 'Carvão',           volume: 'Pacote 2kg',   price: 18.00, emoji: '🪵', popular: false, alcohol: false },

  { id: 97, name: 'Espetinho de Carne',  category: 'gelo', subcategory: 'Churrasco',        volume: 'Pacote 10 unid', price: 28.00, emoji: '🥩', popular: true,  alcohol: false },
  { id: 98, name: 'Espetinho de Frango', category: 'gelo', subcategory: 'Churrasco',        volume: 'Pacote 10 unid', price: 24.00, emoji: '🍗', popular: false, alcohol: false },
  { id: 99, name: 'Espetinho de Queijo Coalho', category: 'gelo', subcategory: 'Churrasco', volume: 'Pacote 8 unid', price: 22.00, emoji: '🧀', popular: true,  alcohol: false },
  { id: 100, name: 'Sal Grosso Tradicional',   category: 'gelo', subcategory: 'Churrasco', volume: 'Pacote 1kg',    price: 6.00,  emoji: '🧂', popular: false, alcohol: false },
  { id: 101, name: 'Sal Grosso Temperado',     category: 'gelo', subcategory: 'Churrasco', volume: 'Pacote 500g',   price: 8.00,  emoji: '🧂', popular: false, alcohol: false },
  { id: 102, name: 'Acendedor Líquido',  category: 'gelo', subcategory: 'Churrasco',        volume: 'Garrafa 1L',   price: 10.00, emoji: '🔥', popular: false, alcohol: false },
  { id: 103, name: 'Acendedor Sólido',   category: 'gelo', subcategory: 'Churrasco',        volume: 'Caixa 24 unid', price: 8.00,  emoji: '🔥', popular: false, alcohol: false },
  { id: 104, name: 'Pratos Descartáveis', category: 'gelo', subcategory: 'Churrasco',        volume: 'Pacote 20 unid', price: 5.00, emoji: '🍽️',  popular: false, alcohol: false },
  { id: 105, name: 'Copos Descartáveis',  category: 'gelo', subcategory: 'Churrasco',        volume: 'Pacote 50 unid', price: 6.00, emoji: '🥤', popular: false, alcohol: false },
  { id: 106, name: 'Guardanapos',         category: 'gelo', subcategory: 'Churrasco',        volume: 'Pacote 100 unid', price: 4.00, emoji: '🧻', popular: false, alcohol: false },
  { id: 107, name: 'Facas Descartáveis',  category: 'gelo', subcategory: 'Churrasco',        volume: 'Pacote 20 unid', price: 5.00, emoji: '🔪', popular: false, alcohol: false },
  { id: 108, name: 'Grelha Simples',      category: 'gelo', subcategory: 'Churrasco',        volume: 'Unidade',      price: 25.00, emoji: '🍳', popular: false, alcohol: false },

  // ═══════════════════════════════════════════
  // CONVENIÊNCIA E MERCEARIA
  // ═══════════════════════════════════════════
  { id: 109, name: 'Pringles Original',   category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pote 154g',  price: 14.00, emoji: '🥔', popular: true,  alcohol: false },
  { id: 110, name: 'Pringles Cebola & Sour Cream', category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pote 154g', price: 14.00, emoji: '🥔', popular: false, alcohol: false },
  { id: 111, name: 'Doritos Nacho',       category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 140g', price: 8.00,  emoji: '🟠', popular: true,  alcohol: false },
  { id: 112, name: 'Cheetos Requeijão',   category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 140g', price: 7.50,  emoji: '🟡', popular: false, alcohol: false },
  { id: 113, name: 'Ruffles Original',    category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 140g', price: 7.50,  emoji: '🥔', popular: false, alcohol: false },
  { id: 114, name: 'Torcida Cebola & Salsa', category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 100g', price: 5.00, emoji: '🌮', popular: false, alcohol: false },
  { id: 115, name: 'Amendoim Japonês',    category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 200g', price: 6.00,  emoji: '🥜', popular: false, alcohol: false },
  { id: 116, name: 'Amendoim Salgado',    category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 200g', price: 5.00,  emoji: '🥜', popular: false, alcohol: false },
  { id: 117, name: 'Ovinhos de Amendoim', category: 'conveniencia', subcategory: 'Salgadinhos', volume: 'Pacote 150g', price: 6.00,  emoji: '🥜', popular: false, alcohol: false },

  { id: 118, name: 'Azeitonas Verdes',    category: 'conveniencia', subcategory: 'Petiscos',     volume: 'Pote 300g',   price: 12.00, emoji: '🫒', popular: false, alcohol: false },
  { id: 119, name: 'Palmito em Conserva', category: 'conveniencia', subcategory: 'Petiscos',     volume: 'Pote 300g',   price: 14.00, emoji: '🌴', popular: false, alcohol: false },
  { id: 120, name: 'Salame Fatiado',      category: 'conveniencia', subcategory: 'Petiscos',     volume: 'Pacote 150g', price: 11.00, emoji: '🥓', popular: false, alcohol: false },
  { id: 121, name: 'Queijo Provolone Desidratado', category: 'conveniencia', subcategory: 'Petiscos', volume: 'Pacote 100g', price: 15.00, emoji: '🧀', popular: false, alcohol: false },

  { id: 122, name: 'Chiclete Trident',    category: 'conveniencia', subcategory: 'Guloseimas',   volume: 'Caixa 18 unid', price: 4.00, emoji: '🍬', popular: false, alcohol: false },
  { id: 123, name: 'Chocolate Kit Kat',   category: 'conveniencia', subcategory: 'Guloseimas',   volume: 'Barra 41g',    price: 5.00, emoji: '🍫', popular: true,  alcohol: false },
  { id: 124, name: 'Chocolate Snickers',  category: 'conveniencia', subcategory: 'Guloseimas',   volume: 'Barra 60g',    price: 6.00, emoji: '🍫', popular: false, alcohol: false },
  { id: 125, name: 'Chocolate Lacta',     category: 'conveniencia', subcategory: 'Guloseimas',   volume: 'Barra 90g',    price: 7.50, emoji: '🍫', popular: false, alcohol: false },
  { id: 126, name: 'Bala Halls',          category: 'conveniencia', subcategory: 'Guloseimas',   volume: 'Caixa 20 unid', price: 3.00, emoji: '🍬', popular: false, alcohol: false },
  { id: 127, name: 'Mentos',              category: 'conveniencia', subcategory: 'Guloseimas',   volume: 'Tubo 14 unid', price: 5.00, emoji: '🍬', popular: false, alcohol: false },

  // ═══════════════════════════════════════════
  // MAIS ÁGUAS MINERAIS
  // ═══════════════════════════════════════════
  { id: 128, name: 'Crystal s/ Gás',      category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 2.50, emoji: '💧', popular: true,  alcohol: false },
  { id: 129, name: 'Crystal c/ Gás',      category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 3.00, emoji: '💧', popular: false, alcohol: false },
  { id: 130, name: 'Crystal s/ Gás',      category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 1,5L',  price: 4.00, emoji: '💧', popular: false, alcohol: false },
  { id: 131, name: 'Bonafont s/ Gás',     category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 3.00, emoji: '💧', popular: false, alcohol: false },
  { id: 132, name: 'Bonafont s/ Gás',     category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 1,5L',  price: 5.00, emoji: '💧', popular: false, alcohol: false },
  { id: 133, name: 'Minalba s/ Gás',      category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 2.50, emoji: '💧', popular: false, alcohol: false },
  { id: 134, name: 'Minalba c/ Gás',      category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 3.00, emoji: '💧', popular: false, alcohol: false },
  { id: 135, name: 'Ouro Fino s/ Gás',    category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 3.50, emoji: '💧', popular: false, alcohol: false },
  { id: 136, name: 'Ouro Fino c/ Gás',    category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 4.00, emoji: '💧', popular: false, alcohol: false },
  { id: 137, name: 'Água Mineral Pedras',  category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 5.00, emoji: '💧', popular: false, alcohol: false },
  { id: 138, name: 'Água com Gás Garrafa', category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 1L',    price: 5.50, emoji: '💧', popular: false, alcohol: false },
  { id: 139, name: 'Água Mineral 300ml',  category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 300ml', price: 2.00, emoji: '💧', popular: false, alcohol: false },
  { id: 140, name: 'Água de Coco Verde',  category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 1L',    price: 8.00, emoji: '🥥', popular: true,  alcohol: false },
  { id: 141, name: 'Água de Coco Sococo', category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 1L',    price: 7.00, emoji: '🥥', popular: false, alcohol: false },
  { id: 142, name: 'H2OH! Limão',         category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 5.00, emoji: '🍋', popular: false, alcohol: false },
  { id: 143, name: 'H2OH! Laranja',       category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 5.00, emoji: '🍊', popular: false, alcohol: false },
  { id: 144, name: 'Aquarius Fresh Limão', category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 6.00, emoji: '🍋', popular: false, alcohol: false },
  { id: 145, name: 'Aquarius Fresh Laranja', category: 'refrigerantes', subcategory: 'Hidratação', volume: 'Garrafa 500ml', price: 6.00, emoji: '🍊', popular: false, alcohol: false },
  { id: 146, name: 'Gatorade Morango',    category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 8.00, emoji: '⚡', popular: false, alcohol: false },
  { id: 147, name: 'Gatorade Maracujá',   category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 8.00, emoji: '⚡', popular: false, alcohol: false },
  { id: 148, name: 'Gatorade Tangerina',  category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 8.00, emoji: '⚡', popular: false, alcohol: false },
  { id: 149, name: 'Powerade Morango',    category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 7.00, emoji: '⚡', popular: false, alcohol: false },
  { id: 150, name: 'Powerade Maracujá',   category: 'refrigerantes', subcategory: 'Hidratação',  volume: 'Garrafa 500ml', price: 7.00, emoji: '⚡', popular: false, alcohol: false },
]

export const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]))

export function getProductsByCategory(categoryId) {
  if (!categoryId) return products
  return products.filter(p => p.category === categoryId)
}

export function searchProducts(query) {
  if (!query || !query.trim()) return products
  const q = query.toLowerCase().trim()
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.subcategory.toLowerCase().includes(q) ||
    p.volume.toLowerCase().includes(q)
  )
}
