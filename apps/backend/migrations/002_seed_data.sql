-- Seed data for PostgreSQL (News, Categories, Products)

INSERT INTO News (id, image, title) VALUES
('1', 'news_1.webp', 'Заголовок 1'),
('2', 'news_2.webp', 'Заголовок 2'),
('3', 'news_3.webp', 'Заголовок 3'),
('4', 'news_4.webp', 'Заголовок 4'),
('5', 'news_5.webp', 'Заголовок 5'),
('6', 'news_6.webp', 'Заголовок 6'),
('7', 'news_7.webp', 'Заголовок 7'),
('8', 'news_8.webp', 'Заголовок 8');

INSERT INTO Categories (id, name) VALUES
('pizza', 'Піца'),
('burger', 'Бургер'),
('drinks', 'Напої'),
('fries', 'Картопля фрі'),
('sandwiches', 'Сендвічі'),
('chicken-wings', 'Курячі крильця'),
('salads', 'Салати'),
('chili-dogs', 'Чилі-доги'),
('hot-dogs', 'Хот-доги'),
('sushi', 'Суши'),
('wraps', 'Врапси'),
('nachos', 'Начос'),
('desserts', 'Десерти'),
('pasta', 'Паста'),
('rice-bowls', 'Рисові боули'),
('smoothies', 'Смузі'),
('burritos', 'Буріто'),
('donuts', 'Пончики'),
('bagels', 'Бейгли');

-- Products data
INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('margherita-pizza', 'Маргарита Піца', 'margherita_pizza.webp', 20, 'Класичний томатний соус та моцарела', 249.99, NULL, 'pizza'),
    ('pepperoni-pizza', 'Пепероні Піца', 'pepperoni_pizza.webp', 15, 'Томатний соус, моцарела та скибочки пепероні', 299.99, NULL, 'pizza'),
    ('vegetarian-pizza', 'Вегетаріанська Піца', 'vegetarian_pizza.webp', 18, 'Різноманітні овочі з томатним соусом та моцарелою', 269.99, NULL, 'pizza'),
    ('hawaiian-pizza', 'Гавайська Піца', 'hawaiian_pizza.webp', 12, 'Шинка, ананас, томатний соус та моцарела', 319.99, NULL, 'pizza'),
    ('bbq-chicken-pizza', 'BBQ Куряча Піца', 'bbq_chicken_pizza.webp', 17, 'Грильована курка, BBQ соус, червона цибуля та моцарела', 339.99, 5, 'pizza'),
    ('supreme-pizza', 'Супрім Піца', 'supreme_pizza.webp', 14, 'Пепероні, ковбаса, болгарський перець, цибуля, оливки, томатний соус та моцарела', 359.99, NULL, 'pizza'),
    ('mushroom-pizza', 'Грибна Піца', 'mushroom_pizza.webp', 16, 'Смажені гриби з томатним соусом та моцарелою', 269.99, NULL, 'pizza'),
    ('four-cheese-pizza', 'Чотири Сири Піца', 'four_cheese_pizza.webp', 13, 'Моцарела, чеддер, проволоне та пармезан з томатним соусом', 319.99, NULL, 'pizza'),
    ('buffalo-chicken-pizza', 'Баффало Куряча Піца', 'buffalo_chicken_pizza.webp', 15, 'Баффало курка, ранчова заправка, червона цибуля та моцарела', 339.99, NULL, 'pizza'),
    ('spinach-feta-pizza', 'Шпинат та Фета Піца', 'spinach_feta_pizza.webp', 16, 'Свіжий шпинат, сир фета, томатний соус та моцарела', 299.99, 5, 'pizza'),
    ('meat-lovers-pizza', 'М''ясна Піца', 'meat_lovers_pizza.webp', 14, 'Пепероні, ковбаса, шинка, бекон, томатний соус та моцарела', 359.99, NULL, 'pizza'),
    ('bbq-bacon-chicken-pizza', 'BBQ Бекон Куряча Піца', 'bbq_bacon_chicken_pizza.webp', 15, 'Грильована курка, бекон, BBQ соус, червона цибуля та моцарела', 339.99, NULL, 'pizza'),
    ('buffalo-ranch-chicken-pizza', 'Баффало Ранч Куряча Піца', 'buffalo_ranch_chicken_pizza.webp', 17, 'Баффало курка, ранчова заправка, червона цибуля та моцарела', 339.99, 10, 'pizza');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('classic-beef-burger', 'Класичний Яловичий Бургер', 'classic_beef_burger.webp', 25, 'Соковитий яловичий котлет з салатом, томатом, цибулею та огірками', 159.99, NULL, 'burger'),
    ('cheeseburger', 'Чізбургер', 'cheeseburger.webp', 20, 'Яловичий котлет з розплавленим сиром, салатом, томатом, цибулею та огірками', 179.99, NULL, 'burger'),
    ('bacon-burger', 'Бекон Бургер', 'bacon_burger.webp', 18, 'Яловичий котлет з хрустким беконом, салатом, томатом, цибулею та огірками', 189.99, NULL, 'burger'),
    ('mushroom-swiss-burger', 'Грибний Швейцарський Бургер', 'mushroom_swiss_burger.webp', 15, 'Яловичий котлет з смаженими грибами, швейцарським сиром, салатом, томатом, цибулею та огірками', 199.99, NULL, 'burger'),
    ('bbq-burger', 'BBQ Бургер', 'bbq_burger.webp', 20, 'Яловичий котлет з BBQ соусом, чеддером, салатом, томатом, цибулею та огірками', 199.99, 10, 'burger'),
    ('avocado-burger', 'Авокадо Бургер', 'avocado_burger.webp', 17, 'Яловичий котлет зі свіжим авокадо, салатом, томатом, цибулею та огірками', 209.99, NULL, 'burger'),
    ('spicy-jalapeno-burger', 'Гострий Халапеньйо Бургер', 'spicy_jalapeno_burger.webp', 16, 'Яловичий котлет з гострими халапеньйо, перцем джек, салатом, томатом, цибулею та огірками', 219.99, 15, 'burger'),
    ('turkey-burger', 'Індичка Бургер', 'turkey_burger.webp', 20, 'Соковитий котлет з індички з салатом, томатом, цибулею та огірками', 169.99, NULL, 'burger'),
    ('double-cheeseburger', 'Подвійний Чізбургер', 'double_cheeseburger.webp', 15, 'Два яловичі котлети з розплавленим сиром, салатом, томатом, цибулею та огірками', 229.99, 20, 'burger');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('cola', 'Кола', 'cola.webp', 30, 'Освіжаючий напій кола', 29.99, NULL, 'drinks'),
    ('lemonade', 'Лимонад', 'lemonade.webp', 25, 'Домашній лимонад зі свіжого лимонного соку', 34.99, NULL, 'drinks'),
    ('iced-tea', 'Чай з льодом', 'iced_tea.webp', 20, 'Охолоджений чорний чай з кубиками льоду', 32.99, NULL, 'drinks'),
    ('orange-juice', 'Апельсиновий сік', 'orange_juice.webp', 20, 'Свіжовичавлений апельсиновий сік', 39.99, 20, 'drinks'),
    ('mojito', 'Мохіто', 'mojito.webp', 15, 'Класичний кубинський коктейль з рому, м''яти, лайму, цукру та газованої води', 49.99, 15, 'drinks');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('classic-french-fries', 'Класична Картопля Фрі', 'classic_french_fries.webp', 40, 'Хрустка золота картопля фрі', 19.99, NULL, 'fries'),
    ('curly-fries', 'Курчава Картопля Фрі', 'curly_fries.webp', 35, 'Закручені та приправлені курчаві фрі', 24.99, NULL, 'fries'),
    ('sweet-potato-fries', 'Солодка Картопля Фрі', 'sweet_potato_fries.webp', 30, 'Солодка та хрустка солодка картопля фрі', 29.99, 5, 'fries');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('blt-sandwich', 'BLT Сендвіч', 'blt_sandwich.webp', 25, 'Класичний сендвіч з беконом, салатом та томатом', 149.99, 5, 'sandwiches'),
    ('club-sandwich', 'Клубний Сендвіч', 'club_sandwich.webp', 20, 'Тришаровий сендвіч з індичкою, беконом, салатом, томатом та майонезом', 159.99, NULL, 'sandwiches'),
    ('grilled-cheese-sandwich', 'Грильований Сир Сендвіч', 'grilled_cheese_sandwich.webp', 30, 'Тостований хліб з розплавленим сиром', 139.99, 15, 'sandwiches'),
    ('chicken-caesar-sandwich', 'Курячий Цезар Сендвіч', 'chicken_caesar_sandwich.webp', 25, 'Грильована курка, ромейн салат, пармезан, та цезарова заправка загорнуті в тортилью', 154.99, NULL, 'sandwiches'),
    ('vegetarian-panini', 'Вегетаріанський Паніні', 'vegetarian_panini.webp', 20, 'Грильований сендвіч з різноманітними овочами та сиром', 144.99, NULL, 'sandwiches'),
    ('bbq-pulled-pork-sandwich', 'BBQ Розтягнута Свинина Сендвіч', 'bbq_pulled_pork_sandwich.webp', 25, 'Повільно приготована розтягнута свинина з BBQ соусом на булочці', 164.99, 20, 'sandwiches');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('classic-buffalo-wings', 'Класичні Баффало Крильця', 'classic_buffalo_wings.webp', 30, 'Гострі баффало курячі крильця подані з сирим соусом', 69.99, NULL, 'chicken-wings'),
    ('honey-bbq-wings', 'Медові BBQ Крильця', 'honey_bbq_wings.webp', 25, 'Солодкі та кисло-солодкі BBQ курячі крильця з медом', 74.99, 5, 'chicken-wings'),
    ('garlic-parmesan-wings', 'Часникові Пармезанові Крильця', 'garlic_parmesan_wings.webp', 20, 'Смачні часникові та пармезанові курячі крильця', 79.99, NULL, 'chicken-wings');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('caesar-salad', 'Цезар Салат', 'caesar_salad.webp', 35, 'Ромейн салат, крутони, пармезан та цезарова заправка', 149.99, NULL, 'salads'),
    ('greek-salad', 'Грецький Салат', 'greek_salad.webp', 30, 'Салат, томати, огірки, оливки, цибуля та фета з грецькою заправкою', 154.99, 5, 'salads'),
    ('caprese-salad', 'Капрезе Салат', 'caprese_salad.webp', 25, 'Томати, свіжа моцарела, базилік, оливкова олія та бальзамічний глез', 159.99, NULL, 'salads'),
    ('cobb-salad', 'Кобб Салат', 'cobb_salad.webp', 20, 'Салат, грильована курка, бекон, авокадо, варені яйця, томати та сирий соус', 164.99, NULL, 'salads'),
    ('spinach-salad', 'Шпинатний Салат', 'spinach_salad.webp', 25, 'Свіжий шпинат, полуниця, мигдаль, фета та бальзамічна вінегрет', 159.99, NULL, 'salads');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('classic-chili-dog', 'Класичний Чилі-Дог', 'classic_chili_dog.webp', 20, 'Грильований хот-дог з чилі соусом та нарізаною цибулею', 79.99, NULL, 'chili-dogs'),
    ('cheese-chili-dog', 'Сирний Чилі-Дог', 'cheese_chili_dog.webp', 15, 'Грильований хот-дог з чилі соусом та розплавленим сиром', 89.99, NULL, 'chili-dogs'),
    ('chicago-style-chili-dog', 'Чикагський Стиль Чилі-Дог', 'chicago_style_chili_dog.webp', 15, 'Грильований хот-дог з гірчицею, цибулею, релішем, томатами, огірками та кропом', 99.99, NULL, 'chili-dogs');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('classic-hot-dog', 'Класичний Хот-Дог', 'classic_hot_dog.webp', 30, 'Грильований хот-дог у булочці', 49.99, NULL, 'hot-dogs'),
    ('chili-cheese-dog', 'Чилі Сирний Дог', 'chili_cheese_dog.webp', 25, 'Грильований хот-дог з чилі соусом та розплавленим сиром', 59.99, NULL, 'hot-dogs'),
    ('new-york-style-hot-dog', 'Нью-Йоркський Стиль Хот-Дог', 'new_york_style_hot_dog.webp', 20, 'Грильований хот-дог з гірчицею, кетчупом, цибулею та релішем', 54.99, NULL, 'hot-dogs'),
    ('bacon-wrapped-hot-dog', 'Бекон-Загорнутий Хот-Дог', 'bacon_wrapped_hot_dog.webp', 20, 'Грильований хот-дог загорнутий у хрусткий бекон', 69.99, NULL, 'hot-dogs'),
    ('jalapeno-cheddar-dog', 'Халапеньйо Чеддер Дог', 'jalapeno_cheddar_dog.webp', 15, 'Грильований хот-дог з нарізаними халапеньйо та розплавленим чеддером', 64.99, NULL, 'hot-dogs'),
    ('bbq-ranch-dog', 'BBQ Ранч Дог', 'bbq_ranch_dog.webp', 20, 'Грильований хот-дог з BBQ соусом та ранчовою заправкою', 59.99, NULL, 'hot-dogs');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('california-roll', 'Каліфорнійський Рол', 'california_roll.webp', 30, 'Рол з крабом, авокадо та огірком', 179.99, NULL, 'sushi'),
    ('spicy-tuna-roll', 'Гострий Тунець Рол', 'spicy_tuna_roll.webp', 25, 'Рол з гострим тунцем, огірком та авокадо', 184.99, NULL, 'sushi'),
    ('salmon-nigiri', 'Лосось Нігірі', 'salmon_nigiri.webp', 20, 'Нігірі суши зі свіжим лососем', 189.99, NULL, 'sushi'),
    ('dragon-roll', 'Дракон Рол', 'dragon_roll.webp', 30, 'Рол з вуграм, авокадо та огірком', 199.99, NULL, 'sushi'),
    ('rainbow-roll', 'Райдужний Рол', 'rainbow_roll.webp', 25, 'Рол з різноманітною рибою та авокадо', 204.99, NULL, 'sushi'),
    ('philadelphia-roll', 'Філадельфія Рол', 'philadelphia_roll.webp', 20, 'Рол з лососем, крем-чизом та огірком', 194.99, 5, 'sushi'),
    ('spider-roll', 'Павук Рол', 'spider_roll.webp', 20, 'Рол з м''яким крабом, авокадо та огірком', 209.99, NULL, 'sushi'),
    ('tempura-roll', 'Темпура Рол', 'tempura_roll.webp', 25, 'Рол з темпура креветкою, авокадо та огірком', 199.99, 5, 'sushi'),
    ('caterpillar-roll', 'Гусінь Рол', 'caterpillar_roll.webp', 20, 'Рол з вуграм, авокадо та огірком', 114.99, 10, 'sushi'),
    ('volcano-roll', 'Вулкан Рол', 'volcano_roll.webp', 20, 'Рол з гострим тунцем та авокадо, прикрашений гострим майонезом та вугра соусом', 209.99, NULL, 'sushi'),
    ('california-crunch-roll', 'Каліфорнійський Хрусткий Рол', 'california_crunch_roll.webp', 25, 'Рол з крабом, авокадо та хрусткими темпура пластівцями', 204.99, NULL, 'sushi'),
    ('alaska-roll', 'Аляска Рол', 'alaska_roll.webp', 25, 'Рол з лососем, авокадо та огірком, прикрашений ікрою лосося', 214.99, NULL, 'sushi');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('chicken-caesar-wrap', 'Курячий Цезар Врап', 'chicken_caesar_wrap.webp', 30, 'Грильована курка, ромейн салат, пармезан та цезарова заправка загорнуті в тортилью', 69.99, NULL, 'wraps'),
    ('vegetarian-wrap', 'Вегетаріанський Врап', 'vegetarian_wrap.webp', 25, 'Різноманітні овочі та хумус загорнуті в тортилью', 64.99, NULL, 'wraps'),
    ('buffalo-chicken-wrap', 'Баффало Курячий Врап', 'buffalo_chicken_wrap.webp', 20, 'Грильована курка з баффало соусом, салат, томат та ранчова заправка загорнуті в тортилью', 74.99, 5, 'wraps'),
    ('turkey-club-wrap', 'Індичка Клуб Врап', 'turkey_club_wrap.webp', 30, 'Індичка, бекон, салат, томат та майонез загорнуті в тортилью', 79.99, NULL, 'wraps'),
    ('bbq-beef-wrap', 'BBQ Яловичина Врап', 'bbq_beef_wrap.webp', 25, 'Повільно приготована яловичина з BBQ соусом, салат та хрусткі цибулі загорнуті в тортилью', 84.99, NULL, 'wraps'),
    ('caesar-chicken-wrap', 'Цезар Курячий Врап', 'caesar_chicken_wrap.webp', 20, 'Грильована курка, ромейн салат, пармезан та цезарова заправка загорнуті в тортилью', 74.99, NULL, 'wraps'),
    ('mediterranean-wrap', 'Середземноморський Врап', 'mediterranean_wrap.webp', 20, 'Грильована курка, салат, томат, оливки, фета та цацикі соус загорнуті в тортилью', 89.99, 5, 'wraps'),
    ('california-wrap', 'Каліфорнійський Врап', 'california_wrap.webp', 25, 'Грильована курка, авокадо, салат, томат, бекон та ранчова заправка загорнуті в тортилью', 94.99, NULL, 'wraps'),
    ('buffalo-chicken-wrap-2', 'Баффало Курячий Врап', 'buffalo_chicken_wrap.webp', 20, 'Грильована курка з баффало соусом, салат, томат та ранчова заправка загорнуті в тортилью', 79.99, 2, 'wraps'),
    ('vegetable-hummus-wrap', 'Овочевий Хумус Врап', 'vegetable_hummus_wrap.webp', 25, 'Різноманітні овочі та хумус загорнуті в тортилью', 69.99, NULL, 'wraps');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('classic-nachos', 'Класичні Начос', 'classic_nachos.webp', 25, 'Тортильйо чипси з розплавленим сиром, сальсою, гуакамоле та сметаною', 89.99, NULL, 'nachos'),
    ('loaded-nachos', 'Завантажені Начос', 'loaded_nachos.webp', 20, 'Тортильйо чипси з розплавленим сиром, фаршем, халапеньйо, томатами, цибулею та сметаною', 99.99, NULL, 'nachos'),
    ('vegetarian-nachos', 'Вегетаріанські Начос', 'vegetarian_nachos.webp', 20, 'Тортильйо чипси з розплавленим сиром, чорною квасолею, кукурудзою, томатами, цибулею та гуакамоле', 94.99, NULL, 'nachos'),
    ('bbq-chicken-nachos', 'BBQ Курячі Начос', 'bbq_chicken_nachos.webp', 20, 'Тортильйо чипси з розплавленим сиром, BBQ куркою, червоною цибулею, кінзою та BBQ соусом', 104.99, NULL, 'nachos'),
    ('buffalo-chicken-nachos', 'Баффало Курячі Начос', 'buffalo_chicken_nachos.webp', 15, 'Тортильйо чипси з розплавленим сиром, баффало куркою, халапеньйо, ранчовою заправкою та баффало соусом', 109.99, NULL, 'nachos');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('chocolate-brownie', 'Шоколадний Брауні', 'chocolate_brownie.webp', 30, 'Теплий шоколадний брауні з ванільним морозивом та шоколадним соусом', 39.99, 5, 'desserts'),
    ('new-york-cheesecake', 'Нью-Йоркський Чізкейк', 'new_york_cheesecake.webp', 25, 'Класичний Нью-Йоркський чізкейк з грахам-крекер коржем', 49.99, NULL, 'desserts'),
    ('tiramisu', 'Тірамісу', 'tiramisu.webp', 20, 'Традиційний італійський десерт з шарами кавових бісквітів та маскарпоне', 54.99, NULL, 'desserts'),
    ('apple-pie', 'Яблучний Пиріг', 'apple_pie.webp', 20, 'Домашній яблучний пиріг з хрустким коржем', 44.99, NULL, 'desserts'),
    ('chocolate-lava-cake', 'Шоколадний Лавовий Торт', 'chocolate_lava_cake.webp', 25, 'Теплий шоколадний торт з розплавленим шоколадним центром, поданий з ванільним морозивом', 59.99, NULL, 'desserts'),
    ('key-lime-pie', 'Ключовий Лаймовий Пиріг', 'key_lime_pie.webp', 20, 'Кисло-солодкий ключовий лаймовий пиріг з грахам-крекер коржем', 54.99, NULL, 'desserts'),
    ('banoffee-pie', 'Баноффі Пиріг', 'banoffee_pie.webp', 15, 'Тоффі-наповнений пиріг з бананами та збитими вершками', 64.99, NULL, 'desserts'),
    ('red-velvet-cake', 'Червоний Оксамитовий Торт', 'red_velvet_cake.webp', 20, 'Вологий та оксамитовий червоний оксамитовий торт з крем-чизом', 49.99, NULL, 'desserts'),
    ('panna-cotta', 'Панна Котта', 'panna_cotta.webp', 20, 'Італійський десерт з підсолодженої вершків, загуслої желатином та ароматизованої ванілью', 54.99, NULL, 'desserts');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('spaghetti-bolognese', 'Спагеті Болоньєзе', 'spaghetti_bolognese.webp', 35, 'Спагеті паста з традиційним м''ясним соусом', 79.99, NULL, 'pasta'),
    ('fettuccine-alfredo', 'Феттуччіні Альфредо', 'fettuccine_alfredo.webp', 30, 'Феттуччіні паста в кремовому соусі Альфредо', 84.99, NULL, 'pasta'),
    ('penne-arrabiata', 'Пенне Аррабіата', 'penne_arrabiata.webp', 25, 'Пенне паста з гострим томатним соусом', 74.99, NULL, 'pasta'),
    ('lasagna', 'Лазанья', 'lasagna.webp', 20, 'Шарова паста з м''ясним соусом, рикоттою, моцарелою', 89.99, NULL, 'pasta'),
    ('carbonara', 'Карбонара', 'carbonara.webp', 25, 'Спагеті паста з кремовим яйцем та сировим соусом, панчеттою та чорним перцем', 84.99, NULL, 'pasta'),
    ('pesto-linguine', 'Песто Лінгвіне', 'pesto_linguine.webp', 20, 'Лінгвіне паста з базиліковим песто соусом та кедровими горішками', 79.99, NULL, 'pasta');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('teriyaki-chicken-rice-bowl', 'Теріякі Курячий Рисовий Боул', 'teriyaki_chicken_rice_bowl.webp', 25, 'Грильована теріякі курка подана над паровим рисом з овочами', 89.99, 2, 'rice-bowls'),
    ('beef-bulgogi-rice-bowl', 'Яловичина Бульгогі Рисовий Боул', 'beef_bulgogi_rice_bowl.webp', 20, 'Корейська маринована яловичина подана над паровим рисом з овочами', 94.99, NULL, 'rice-bowls'),
    ('vegetable-stir-fry-rice-bowl', 'Овочевий Стр-Фрай Рисовий Боул', 'vegetable_stir_fry_rice_bowl.webp', 20, 'Різноманітні овочі, обсмажені та подані над паровим рисом', 84.99, NULL, 'rice-bowls');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('strawberry-banana-smoothie', 'Полунично-Банановий Смузі', 'strawberry_banana_smoothie.webp', 30, 'Мікс полуниці, бананів та йогурту', 39.99, NULL, 'smoothies'),
    ('mango-pineapple-smoothie', 'Манго-Апельсиновий Смузі', 'mango_pineapple_smoothie.webp', 25, 'Мікс манго, ананасів та кокосового молока', 44.99, NULL, 'smoothies'),
    ('tropical-green-smoothie', 'Тропічний Зелений Смузі', 'tropical_green_smoothie.webp', 20, 'Мікс шпинату, ананаса, манго, банана та кокосової води', 49.99, NULL, 'smoothies'),
    ('berry-blast-smoothie', 'Ягідний Бласт Смузі', 'berry_blast_smoothie.webp', 20, 'Мікс різноманітних ягід, банана та апельсинового соку', 44.99, NULL, 'smoothies'),
    ('peachy-mango-smoothie', 'Персиково-Манговий Смузі', 'peachy_mango_smoothie.webp', 25, 'Мікс персиків, манго, йогурту та апельсинового соку', 49.99, NULL, 'smoothies'),
    ('chocolate-peanut-butter-smoothie', 'Шоколадно-Арахісовий Смузі', 'chocolate_peanut_butter_smoothie.webp', 20, 'Мікс шоколаду, арахісового масла, банана та молока', 54.99, NULL, 'smoothies');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('chicken-burrito', 'Куряче Буріто', 'chicken_burrito.webp', 30, 'Грильована курка, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 79.99, NULL, 'burritos'),
    ('beef-burrito', 'Яловичине Буріто', 'beef_burrito.webp', 25, 'Приправлений фарш, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 84.99, NULL, 'burritos'),
    ('vegetarian-burrito', 'Вегетаріанське Буріто', 'vegetarian_burrito.webp', 20, 'Різноманітні овочі, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 74.99, 5, 'burritos'),
    ('shrimp-burrito', 'Креветкове Буріто', 'shrimp_burrito.webp', 20, 'Грильовані креветки, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 89.99, NULL, 'burritos');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('glazed-donut', 'Глазурований Пончик', 'glazed_donut.webp', 30, 'Класичний пончик з солодкою глазур''ю', 19.99, NULL, 'donuts'),
    ('chocolate-donut', 'Шоколадний Пончик', 'chocolate_donut.webp', 25, 'Пончик покритий багатим шоколадним глазуром', 24.99, NULL, 'donuts'),
    ('sprinkle-donut', 'Посипаний Пончик', 'sprinkle_donut.webp', 20, 'Пончик посипаний кольоровими посипками', 22.99, NULL, 'donuts'),
    ('maple-bacon-donut', 'Кленовий Бекон Пончик', 'maple_bacon_donut.webp', 20, 'Пончик політий кленовим сиропом та посипаний хрусткими шматочками бекону', 29.99, NULL, 'donuts');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('plain-bagel', 'Простий Бейгл', 'plain_bagel.webp', 30, 'Класичний простий бейгл', 14.99, NULL, 'bagels'),
    ('everything-bagel', 'Все Бейгл', 'everything_bagel.webp', 25, 'Бейгл посипаний кунжутом, маком, цибулею, часником та сіллю', 17.99, NULL, 'bagels');

