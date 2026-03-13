-- Seed data for PostgreSQL (News, Categories, Products)

INSERT INTO News (id, image, title) VALUES
('1', 'news/1.jpg', 'Заголовок 1'),
('2', 'news/2.jpg', 'Заголовок 2'),
('3', 'news/3.jpg', 'Заголовок 3'),
('4', 'news/4.jpg', 'Заголовок 4'),
('5', 'news/5.jpg', 'Заголовок 5'),
('6', 'news/6.jpg', 'Заголовок 6'),
('7', 'news/7.jpg', 'Заголовок 7'),
('8', 'news/8.jpg', 'Заголовок 8');

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
('tacos', 'Тако'),
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
    ('PIZ001', 'Маргарита Піца', 'margherita_pizza.jpg', 20, 'Класичний томатний соус та моцарела', 249.99, NULL, 'pizza'),
    ('PIZ002', 'Пепероні Піца', 'pepperoni_pizza.jpg', 15, 'Томатний соус, моцарела та скибочки пепероні', 299.99, NULL, 'pizza'),
    ('PIZ003', 'Вегетаріанська Піца', 'vegetarian_pizza.jpg', 18, 'Різноманітні овочі з томатним соусом та моцарелою', 269.99, NULL, 'pizza'),
    ('PIZ004', 'Гавайська Піца', 'hawaiian_pizza.jpg', 12, 'Шинка, ананас, томатний соус та моцарела', 319.99, NULL, 'pizza'),
    ('PIZ005', 'BBQ Куряча Піца', 'bbq_chicken_pizza.jpg', 17, 'Грильована курка, BBQ соус, червона цибуля та моцарела', 339.99, 5, 'pizza'),
    ('PIZ006', 'Супрім Піца', 'supreme_pizza.jpg', 14, 'Пепероні, ковбаса, болгарський перець, цибуля, оливки, томатний соус та моцарела', 359.99, NULL, 'pizza'),
    ('PIZ007', 'Грибна Піца', 'mushroom_pizza.jpg', 16, 'Смажені гриби з томатним соусом та моцарелою', 269.99, NULL, 'pizza'),
    ('PIZ008', 'Чотири Сири Піца', 'four_cheese_pizza.jpg', 13, 'Моцарела, чеддер, проволоне та пармезан з томатним соусом', 319.99, NULL, 'pizza'),
    ('PIZ009', 'Баффало Куряча Піца', 'buffalo_chicken_pizza.jpg', 15, 'Баффало курка, ранчова заправка, червона цибуля та моцарела', 339.99, NULL, 'pizza'),
    ('PIZ010', 'Шпинат та Фета Піца', 'spinach_feta_pizza.jpg', 16, 'Свіжий шпинат, сир фета, томатний соус та моцарела', 299.99, 5, 'pizza'),
    ('PIZ011', 'М''ясна Піца', 'meat_lovers_pizza.jpg', 14, 'Пепероні, ковбаса, шинка, бекон, томатний соус та моцарела', 359.99, NULL, 'pizza'),
    ('PIZ012', 'BBQ Бекон Куряча Піца', 'bbq_bacon_chicken_pizza.jpg', 15, 'Грильована курка, бекон, BBQ соус, червона цибуля та моцарела', 339.99, NULL, 'pizza'),
    ('PIZ013', 'Баффало Ранч Куряча Піца', 'buffalo_ranch_chicken_pizza.jpg', 17, 'Баффало курка, ранчова заправка, червона цибуля та моцарела', 339.99, 10, 'pizza'),
    ('PIZ014', 'Вегетаріанська Любительська Піца', 'veggie_lovers_pizza.jpg', 18, 'Різноманітні овочі з томатним соусом та моцарелою', 269.99, NULL, 'pizza'),
    ('PIZ015', 'Куряча Альфредо Піца', 'chicken_alfredo_pizza.jpg', 14, 'Грильована курка, соус Альфредо, червона цибуля та моцарела', 339.99, NULL, 'pizza');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('BUR001', 'Класичний Яловичий Бургер', 'classic_beef_burger.jpg', 25, 'Соковитий яловичий котлет з салатом, томатом, цибулею та огірками', 159.99, NULL, 'burger'),
    ('BUR002', 'Чізбургер', 'cheeseburger.jpg', 20, 'Яловичий котлет з розплавленим сиром, салатом, томатом, цибулею та огірками', 179.99, NULL, 'burger'),
    ('BUR003', 'Бекон Бургер', 'bacon_burger.jpg', 18, 'Яловичий котлет з хрустким беконом, салатом, томатом, цибулею та огірками', 189.99, NULL, 'burger'),
    ('BUR004', 'Грибний Швейцарський Бургер', 'mushroom_swiss_burger.jpg', 15, 'Яловичий котлет з смаженими грибами, швейцарським сиром, салатом, томатом, цибулею та огірками', 199.99, NULL, 'burger'),
    ('BUR005', 'BBQ Бургер', 'bbq_burger.jpg', 20, 'Яловичий котлет з BBQ соусом, чеддером, салатом, томатом, цибулею та огірками', 199.99, 10, 'burger'),
    ('BUR006', 'Авокадо Бургер', 'avocado_burger.jpg', 17, 'Яловичий котлет зі свіжим авокадо, салатом, томатом, цибулею та огірками', 209.99, NULL, 'burger'),
    ('BUR007', 'Гострий Халапеньйо Бургер', 'spicy_jalapeno_burger.jpg', 16, 'Яловичий котлет з гострими халапеньйо, перцем джек, салатом, томатом, цибулею та огірками', 219.99, 15, 'burger'),
    ('BUR008', 'Індичка Бургер', 'turkey_burger.jpg', 20, 'Соковитий котлет з індички з салатом, томатом, цибулею та огірками', 169.99, NULL, 'burger'),
    ('BUR009', 'Подвійний Чізбургер', 'double_cheeseburger.jpg', 15, 'Два яловичі котлети з розплавленим сиром, салатом, томатом, цибулею та огірками', 229.99, 20, 'burger');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('DRK001', 'Кола', 'cola.jpg', 30, 'Освіжаючий напій кола', 29.99, NULL, 'drinks'),
    ('DRK002', 'Лимонад', 'lemonade.jpg', 25, 'Домашній лимонад зі свіжого лимонного соку', 34.99, NULL, 'drinks'),
    ('DRK003', 'Чай з льодом', 'iced_tea.jpg', 20, 'Охолоджений чорний чай з кубиками льоду', 32.99, NULL, 'drinks'),
    ('DRK004', 'Апельсиновий сік', 'orange_juice.jpg', 20, 'Свіжовичавлений апельсиновий сік', 39.99, 20, 'drinks'),
    ('DRK005', 'Мохіто', 'mojito.jpg', 15, 'Класичний кубинський коктейль з рому, м''яти, лайму, цукру та газованої води', 49.99, 15, 'drinks');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('FRI001', 'Класична Картопля Фрі', 'classic_french_fries.jpg', 40, 'Хрустка золота картопля фрі', 19.99, NULL, 'fries'),
    ('FRI002', 'Курчава Картопля Фрі', 'curly_fries.jpg', 35, 'Закручені та приправлені курчаві фрі', 24.99, NULL, 'fries'),
    ('FRI003', 'Солодка Картопля Фрі', 'sweet_potato_fries.jpg', 30, 'Солодка та хрустка солодка картопля фрі', 29.99, 5, 'fries');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SAN001', 'BLT Сендвіч', 'blt_sandwich.jpg', 25, 'Класичний сендвіч з беконом, салатом та томатом', 149.99, 5, 'sandwiches'),
    ('SAN002', 'Клубний Сендвіч', 'club_sandwich.jpg', 20, 'Тришаровий сендвіч з індичкою, беконом, салатом, томатом та майонезом', 159.99, NULL, 'sandwiches'),
    ('SAN003', 'Грильований Сир Сендвіч', 'grilled_cheese_sandwich.jpg', 30, 'Тостований хліб з розплавленим сиром', 139.99, 15, 'sandwiches'),
    ('SAN004', 'Курячий Цезар Сендвіч', 'chicken_caesar_sandwich.jpg', 25, 'Грильована курка, ромейн салат, пармезан, та цезарова заправка загорнуті в тортилью', 154.99, NULL, 'sandwiches'),
    ('SAN005', 'Вегетаріанський Паніні', 'vegetarian_panini.jpg', 20, 'Грильований сендвіч з різноманітними овочами та сиром', 144.99, NULL, 'sandwiches'),
    ('SAN006', 'BBQ Розтягнута Свинина Сендвіч', 'bbq_pulled_pork_sandwich.jpg', 25, 'Повільно приготована розтягнута свинина з BBQ соусом на булочці', 164.99, 20, 'sandwiches');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('CHW001', 'Класичні Баффало Крильця', 'classic_buffalo_wings.jpg', 30, 'Гострі баффало курячі крильця подані з сирим соусом', 69.99, NULL, 'chicken-wings'),
    ('CHW002', 'Медові BBQ Крильця', 'honey_bbq_wings.jpg', 25, 'Солодкі та кисло-солодкі BBQ курячі крильця з медом', 74.99, 5, 'chicken-wings'),
    ('CHW003', 'Часникові Пармезанові Крильця', 'garlic_parmesan_wings.jpg', 20, 'Смачні часникові та пармезанові курячі крильця', 79.99, NULL, 'chicken-wings');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SAL001', 'Цезар Салат', 'caesar_salad.jpg', 35, 'Ромейн салат, крутони, пармезан та цезарова заправка', 149.99, NULL, 'salads'),
    ('SAL002', 'Грецький Салат', 'greek_salad.jpg', 30, 'Салат, томати, огірки, оливки, цибуля та фета з грецькою заправкою', 154.99, 5, 'salads'),
    ('SAL003', 'Капрезе Салат', 'caprese_salad.jpg', 25, 'Томати, свіжа моцарела, базилік, оливкова олія та бальзамічний глез', 159.99, NULL, 'salads'),
    ('SAL004', 'Кобб Салат', 'cobb_salad.jpg', 20, 'Салат, грильована курка, бекон, авокадо, варені яйця, томати та сирий соус', 164.99, NULL, 'salads'),
    ('SAL005', 'Шпинатний Салат', 'spinach_salad.jpg', 25, 'Свіжий шпинат, полуниця, мигдаль, фета та бальзамічна вінегрет', 159.99, NULL, 'salads');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('CHD001', 'Класичний Чилі-Дог', 'classic_chili_dog.jpg', 20, 'Грильований хот-дог з чилі соусом та нарізаною цибулею', 79.99, NULL, 'chili-dogs'),
    ('CHD002', 'Сирний Чилі-Дог', 'cheese_chili_dog.jpg', 15, 'Грильований хот-дог з чилі соусом та розплавленим сиром', 89.99, NULL, 'chili-dogs'),
    ('CHD003', 'Чикагський Стиль Чилі-Дог', 'chicago_style_chili_dog.jpg', 15, 'Грильований хот-дог з гірчицею, цибулею, релішем, томатами, огірками та кропом', 99.99, NULL, 'chili-dogs');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('HOD001', 'Класичний Хот-Дог', 'classic_hot_dog.jpg', 30, 'Грильований хот-дог у булочці', 49.99, NULL, 'hot-dogs'),
    ('HOD002', 'Чилі Сирний Дог', 'chili_cheese_dog.jpg', 25, 'Грильований хот-дог з чилі соусом та розплавленим сиром', 59.99, NULL, 'hot-dogs'),
    ('HOD003', 'Нью-Йоркський Стиль Хот-Дог', 'new_york_style_hot_dog.jpg', 20, 'Грильований хот-дог з гірчицею, кетчупом, цибулею та релішем', 54.99, NULL, 'hot-dogs'),
    ('HOD004', 'Бекон-Загорнутий Хот-Дог', 'bacon_wrapped_hot_dog.jpg', 20, 'Грильований хот-дог загорнутий у хрусткий бекон', 69.99, NULL, 'hot-dogs'),
    ('HOD005', 'Халапеньйо Чеддер Дог', 'jalapeno_cheddar_dog.jpg', 15, 'Грильований хот-дог з нарізаними халапеньйо та розплавленим чеддером', 64.99, NULL, 'hot-dogs'),
    ('HOD006', 'BBQ Ранч Дог', 'bbq_ranch_dog.jpg', 20, 'Грильований хот-дог з BBQ соусом та ранчовою заправкою', 59.99, NULL, 'hot-dogs');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SUS001', 'Каліфорнійський Рол', 'california_roll.jpg', 30, 'Рол з крабом, авокадо та огірком', 179.99, NULL, 'sushi'),
    ('SUS002', 'Гострий Тунець Рол', 'spicy_tuna_roll.jpg', 25, 'Рол з гострим тунцем, огірком та авокадо', 184.99, NULL, 'sushi'),
    ('SUS003', 'Лосось Нігірі', 'salmon_nigiri.jpg', 20, 'Нігірі суши зі свіжим лососем', 189.99, NULL, 'sushi'),
    ('SUS004', 'Дракон Рол', 'dragon_roll.jpg', 30, 'Рол з вуграм, авокадо та огірком', 199.99, NULL, 'sushi'),
    ('SUS005', 'Райдужний Рол', 'rainbow_roll.jpg', 25, 'Рол з різноманітною рибою та авокадо', 204.99, NULL, 'sushi'),
    ('SUS006', 'Філадельфія Рол', 'philadelphia_roll.jpg', 20, 'Рол з лососем, крем-чизом та огірком', 194.99, 5, 'sushi'),
    ('SUS007', 'Павук Рол', 'spider_roll.jpg', 20, 'Рол з м''яким крабом, авокадо та огірком', 209.99, NULL, 'sushi'),
    ('SUS008', 'Темпура Рол', 'tempura_roll.jpg', 25, 'Рол з темпура креветкою, авокадо та огірком', 199.99, 5, 'sushi'),
    ('SUS009', 'Гусінь Рол', 'caterpillar_roll.jpg', 20, 'Рол з вуграм, авокадо та огірком', 114.99, 10, 'sushi'),
    ('SUS010', 'Вулкан Рол', 'volcano_roll.jpg', 20, 'Рол з гострим тунцем та авокадо, прикрашений гострим майонезом та вугра соусом', 209.99, NULL, 'sushi'),
    ('SUS011', 'Каліфорнійський Хрусткий Рол', 'california_crunch_roll.jpg', 25, 'Рол з крабом, авокадо та хрусткими темпура пластівцями', 204.99, NULL, 'sushi'),
    ('SUS012', 'Аляска Рол', 'alaska_roll.jpg', 25, 'Рол з лососем, авокадо та огірком, прикрашений ікрою лосося', 214.99, NULL, 'sushi');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('WRP001', 'Курячий Цезар Врап', 'chicken_caesar_wrap.jpg', 30, 'Грильована курка, ромейн салат, пармезан та цезарова заправка загорнуті в тортилью', 69.99, NULL, 'wraps'),
    ('WRP002', 'Вегетаріанський Врап', 'vegetarian_wrap.jpg', 25, 'Різноманітні овочі та хумус загорнуті в тортилью', 64.99, NULL, 'wraps'),
    ('WRP003', 'Баффало Курячий Врап', 'buffalo_chicken_wrap.jpg', 20, 'Грильована курка з баффало соусом, салат, томат та ранчова заправка загорнуті в тортилью', 74.99, 5, 'wraps'),
    ('WRP004', 'Індичка Клуб Врап', 'turkey_club_wrap.jpg', 30, 'Індичка, бекон, салат, томат та майонез загорнуті в тортилью', 79.99, NULL, 'wraps'),
    ('WRP005', 'BBQ Яловичина Врап', 'bbq_beef_wrap.jpg', 25, 'Повільно приготована яловичина з BBQ соусом, салат та хрусткі цибулі загорнуті в тортилью', 84.99, NULL, 'wraps'),
    ('WRP006', 'Цезар Курячий Врап', 'caesar_chicken_wrap.jpg', 20, 'Грильована курка, ромейн салат, пармезан та цезарова заправка загорнуті в тортилью', 74.99, NULL, 'wraps'),
    ('WRP007', 'Середземноморський Врап', 'mediterranean_wrap.jpg', 20, 'Грильована курка, салат, томат, оливки, фета та цацикі соус загорнуті в тортилью', 89.99, 5, 'wraps'),
    ('WRP008', 'Каліфорнійський Врап', 'california_wrap.jpg', 25, 'Грильована курка, авокадо, салат, томат, бекон та ранчова заправка загорнуті в тортилью', 94.99, NULL, 'wraps'),
    ('WRP009', 'Баффало Курячий Врап', 'buffalo_chicken_wrap.jpg', 20, 'Грильована курка з баффало соусом, салат, томат та ранчова заправка загорнуті в тортилью', 79.99, 2, 'wraps'),
    ('WRP010', 'Овочевий Хумус Врап', 'vegetable_hummus_wrap.jpg', 25, 'Різноманітні овочі та хумус загорнуті в тортилью', 69.99, NULL, 'wraps');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('NAC001', 'Класичні Начос', 'classic_nachos.jpg', 25, 'Тортильйо чипси з розплавленим сиром, сальсою, гуакамоле та сметаною', 89.99, NULL, 'nachos'),
    ('NAC002', 'Завантажені Начос', 'loaded_nachos.jpg', 20, 'Тортильйо чипси з розплавленим сиром, фаршем, халапеньйо, томатами, цибулею та сметаною', 99.99, NULL, 'nachos'),
    ('NAC003', 'Вегетаріанські Начос', 'vegetarian_nachos.jpg', 20, 'Тортильйо чипси з розплавленим сиром, чорною квасолею, кукурудзою, томатами, цибулею та гуакамоле', 94.99, NULL, 'nachos'),
    ('NAC004', 'BBQ Курячі Начос', 'bbq_chicken_nachos.jpg', 20, 'Тортильйо чипси з розплавленим сиром, BBQ куркою, червоною цибулею, кінзою та BBQ соусом', 104.99, NULL, 'nachos'),
    ('NAC005', 'Баффало Курячі Начос', 'buffalo_chicken_nachos.jpg', 15, 'Тортильйо чипси з розплавленим сиром, баффало куркою, халапеньйо, ранчовою заправкою та баффало соусом', 109.99, NULL, 'nachos');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('DES001', 'Шоколадний Брауні', 'chocolate_brownie.jpg', 30, 'Теплий шоколадний брауні з ванільним морозивом та шоколадним соусом', 39.99, 5, 'desserts'),
    ('DES002', 'Нью-Йоркський Чізкейк', 'new_york_cheesecake.jpg', 25, 'Класичний Нью-Йоркський чізкейк з грахам-крекер коржем', 49.99, NULL, 'desserts'),
    ('DES003', 'Тірамісу', 'tiramisu.jpg', 20, 'Традиційний італійський десерт з шарами кавових бісквітів та маскарпоне', 54.99, NULL, 'desserts'),
    ('DES004', 'Яблучний Пиріг', 'apple_pie.jpg', 20, 'Домашній яблучний пиріг з хрустким коржем', 44.99, NULL, 'desserts'),
    ('DES005', 'Шоколадний Лавовий Торт', 'chocolate_lava_cake.jpg', 25, 'Теплий шоколадний торт з розплавленим шоколадним центром, поданий з ванільним морозивом', 59.99, NULL, 'desserts'),
    ('DES006', 'Ключовий Лаймовий Пиріг', 'key_lime_pie.jpg', 20, 'Кисло-солодкий ключовий лаймовий пиріг з грахам-крекер коржем', 54.99, NULL, 'desserts'),
    ('DES007', 'Баноффі Пиріг', 'banoffee_pie.jpg', 15, 'Тоффі-наповнений пиріг з бананами та збитими вершками', 64.99, NULL, 'desserts'),
    ('DES008', 'Червоний Оксамитовий Торт', 'red_velvet_cake.jpg', 20, 'Вологий та оксамитовий червоний оксамитовий торт з крем-чизом', 49.99, NULL, 'desserts'),
    ('DES009', 'Панна Котта', 'panna_cotta.jpg', 20, 'Італійський десерт з підсолодженої вершків, загуслої желатином та ароматизованої ванілью', 54.99, NULL, 'desserts');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('PAS001', 'Спагеті Болоньєзе', 'spaghetti_bolognese.jpg', 35, 'Спагеті паста з традиційним м''ясним соусом', 79.99, NULL, 'pasta'),
    ('PAS002', 'Феттуччіні Альфредо', 'fettuccine_alfredo.jpg', 30, 'Феттуччіні паста в кремовому соусі Альфредо', 84.99, NULL, 'pasta'),
    ('PAS003', 'Пенне Аррабіата', 'penne_arrabiata.jpg', 25, 'Пенне паста з гострим томатним соусом', 74.99, NULL, 'pasta'),
    ('PAS004', 'Лазанья', 'lasagna.jpg', 20, 'Шарова паста з м''ясним соусом, рикоттою, моцарелою', 89.99, NULL, 'pasta'),
    ('PAS005', 'Карбонара', 'carbonara.jpg', 25, 'Спагеті паста з кремовим яйцем та сировим соусом, панчеттою та чорним перцем', 84.99, NULL, 'pasta'),
    ('PAS006', 'Песто Лінгвіне', 'pesto_linguine.jpg', 20, 'Лінгвіне паста з базиліковим песто соусом та кедровими горішками', 79.99, NULL, 'pasta');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('RIB001', 'Теріякі Курячий Рисовий Боул', 'teriyaki_chicken_rice_bowl.jpg', 25, 'Грильована теріякі курка подана над паровим рисом з овочами', 89.99, 2, 'rice-bowls'),
    ('RIB002', 'Яловичина Бульгогі Рисовий Боул', 'beef_bulgogi_rice_bowl.jpg', 20, 'Корейська маринована яловичина подана над паровим рисом з овочами', 94.99, NULL, 'rice-bowls'),
    ('RIB003', 'Овочевий Стр-Фрай Рисовий Боул', 'vegetable_stir_fry_rice_bowl.jpg', 20, 'Різноманітні овочі, обсмажені та подані над паровим рисом', 84.99, NULL, 'rice-bowls');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SMO001', 'Полунично-Банановий Смузі', 'strawberry_banana_smoothie.jpg', 30, 'Мікс полуниці, бананів та йогурту', 39.99, NULL, 'smoothies'),
    ('SMO002', 'Манго-Апельсиновий Смузі', 'mango_pineapple_smoothie.jpg', 25, 'Мікс манго, ананасів та кокосового молока', 44.99, NULL, 'smoothies'),
    ('SMO003', 'Тропічний Зелений Смузі', 'tropical_green_smoothie.jpg', 20, 'Мікс шпинату, ананаса, манго, банана та кокосової води', 49.99, NULL, 'smoothies'),
    ('SMO004', 'Ягідний Бласт Смузі', 'berry_blast_smoothie.jpg', 20, 'Мікс різноманітних ягід, банана та апельсинового соку', 44.99, NULL, 'smoothies'),
    ('SMO005', 'Персиково-Манговий Смузі', 'peachy_mango_smoothie.jpg', 25, 'Мікс персиків, манго, йогурту та апельсинового соку', 49.99, NULL, 'smoothies'),
    ('SMO006', 'Шоколадно-Арахісовий Смузі', 'chocolate_peanut_butter_smoothie.jpg', 20, 'Мікс шоколаду, арахісового масла, банана та молока', 54.99, NULL, 'smoothies');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('BRT001', 'Куряче Буріто', 'chicken_burrito.jpg', 30, 'Грильована курка, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 79.99, NULL, 'burritos'),
    ('BRT002', 'Яловичине Буріто', 'beef_burrito.jpg', 25, 'Приправлений фарш, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 84.99, NULL, 'burritos'),
    ('BRT003', 'Вегетаріанське Буріто', 'vegetarian_burrito.jpg', 20, 'Різноманітні овочі, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 74.99, 5, 'burritos'),
    ('BRT004', 'Креветкове Буріто', 'shrimp_burrito.jpg', 20, 'Грильовані креветки, рис, квасоля, сир, сальса загорнуті в пшеничну тортилью', 89.99, NULL, 'burritos');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('DON001', 'Глазурований Пончик', 'glazed_donut.jpg', 30, 'Класичний пончик з солодкою глазур''ю', 19.99, NULL, 'donuts'),
    ('DON002', 'Шоколадний Пончик', 'chocolate_donut.jpg', 25, 'Пончик покритий багатим шоколадним глазуром', 24.99, NULL, 'donuts'),
    ('DON003', 'Посипаний Пончик', 'sprinkle_donut.jpg', 20, 'Пончик посипаний кольоровими посипками', 22.99, NULL, 'donuts'),
    ('DON004', 'Кленовий Бекон Пончик', 'maple_bacon_donut.jpg', 20, 'Пончик политий кленовим сиропом та посипаний хрусткими шматочками бекону', 29.99, NULL, 'donuts');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('BAG001', 'Простий Бейгл', 'plain_bagel.jpg', 30, 'Класичний простий бейгл', 14.99, NULL, 'bagels'),
    ('BAG002', 'Все Бейгл', 'everything_bagel.jpg', 25, 'Бейгл посипаний кунжутом, маком, цибулею, часником та сіллю', 17.99, NULL, 'bagels');

