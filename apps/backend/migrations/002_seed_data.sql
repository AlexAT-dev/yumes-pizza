-- Seed data for PostgreSQL (News, Categories, Products)

INSERT INTO News (id, image, title) VALUES
('1', 'news/1.jpg', 'Title 1'),
('2', 'news/2.jpg', 'Title 2'),
('3', 'news/3.jpg', 'Title 3'),
('4', 'news/4.jpg', 'Title 4'),
('5', 'news/5.jpg', 'Title 5'),
('6', 'news/6.jpg', 'Title 6'),
('7', 'news/7.jpg', 'Title 7'),
('8', 'news/8.jpg', 'Title 8');

INSERT INTO Categories (id, name) VALUES
('pizza', 'Pizza'),
('burger', 'Burger'),
('drinks', 'Drinks'),
('fries', 'Fries'),
('sandwiches', 'Sandwiches'),
('chicken-wings', 'Chicken Wings'),
('salads', 'Salads'),
('chili-dogs', 'Chili Dogs'),
('hot-dogs', 'Hot Dogs'),
('tacos', 'Tacos'),
('sushi', 'Sushi'),
('wraps', 'Wraps'),
('nachos', 'Nachos'),
('desserts', 'Desserts'),
('pasta', 'Pasta'),
('rice-bowls', 'Rice Bowls'),
('smoothies', 'Smoothies'),
('burritos', 'Burritos'),
('donuts', 'Donuts'),
('bagels', 'Bagels');

-- Products data
INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('PIZ001', 'Margherita Pizza', 'margherita_pizza.jpg', 20, 'Classic tomato sauce and mozzarella cheese', 249.99, NULL, 'pizza'),
    ('PIZ002', 'Pepperoni Pizza', 'pepperoni_pizza.jpg', 15, 'Tomato sauce, mozzarella cheese, and pepperoni slices', 299.99, NULL, 'pizza'),
    ('PIZ003', 'Vegetarian Pizza', 'vegetarian_pizza.jpg', 18, 'Assorted vegetables with tomato sauce and mozzarella cheese', 269.99, NULL, 'pizza'),
    ('PIZ004', 'Hawaiian Pizza', 'hawaiian_pizza.jpg', 12, 'Ham, pineapple, tomato sauce, and mozzarella cheese', 319.99, NULL, 'pizza'),
    ('PIZ005', 'BBQ Chicken Pizza', 'bbq_chicken_pizza.jpg', 17, 'Grilled chicken, BBQ sauce, red onions, and mozzarella cheese', 339.99, 5, 'pizza'),
    ('PIZ006', 'Supreme Pizza', 'supreme_pizza.jpg', 14, 'Pepperoni, sausage, bell peppers, onions, olives, tomato sauce, and mozzarella cheese', 359.99, NULL, 'pizza'),
    ('PIZ007', 'Mushroom Pizza', 'mushroom_pizza.jpg', 16, 'Sautéed mushrooms with tomato sauce and mozzarella cheese', 269.99, NULL, 'pizza'),
    ('PIZ008', 'Four Cheese Pizza', 'four_cheese_pizza.jpg', 13, 'Mozzarella, cheddar, provolone, and parmesan cheeses with tomato sauce', 319.99, NULL, 'pizza'),
    ('PIZ009', 'Buffalo Chicken Pizza', 'buffalo_chicken_pizza.jpg', 15, 'Buffalo chicken, ranch dressing, red onions, and mozzarella cheese', 339.99, NULL, 'pizza'),
    ('PIZ010', 'Spinach and Feta Pizza', 'spinach_feta_pizza.jpg', 16, 'Fresh spinach, feta cheese, tomato sauce, and mozzarella cheese', 299.99, 5, 'pizza'),
    ('PIZ011', 'Meat Lovers Pizza', 'meat_lovers_pizza.jpg', 14, 'Pepperoni, sausage, ham, bacon, tomato sauce, and mozzarella cheese', 359.99, NULL, 'pizza'),
    ('PIZ012', 'Barbecue Bacon Chicken Pizza', 'bbq_bacon_chicken_pizza.jpg', 15, 'Grilled chicken, bacon, BBQ sauce, red onions, and mozzarella cheese', 339.99, NULL, 'pizza'),
    ('PIZ013', 'Buffalo Ranch Chicken Pizza', 'buffalo_ranch_chicken_pizza.jpg', 17, 'Buffalo chicken, ranch dressing, red onions, and mozzarella cheese', 339.99, 10, 'pizza'),
    ('PIZ014', 'Veggie Lovers Pizza', 'veggie_lovers_pizza.jpg', 18, 'Assorted vegetables with tomato sauce and mozzarella cheese', 269.99, NULL, 'pizza'),
    ('PIZ015', 'Chicken Alfredo Pizza', 'chicken_alfredo_pizza.jpg', 14, 'Grilled chicken, Alfredo sauce, red onions, and mozzarella cheese', 339.99, NULL, 'pizza');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('BUR001', 'Classic Beef Burger', 'classic_beef_burger.jpg', 25, 'Juicy beef patty with lettuce, tomato, onion, and pickles', 159.99, NULL, 'burger'),
    ('BUR002', 'Cheeseburger', 'cheeseburger.jpg', 20, 'Beef patty topped with melted cheese, lettuce, tomato, onion, and pickles', 179.99, NULL, 'burger'),
    ('BUR003', 'Bacon Burger', 'bacon_burger.jpg', 18, 'Beef patty with crispy bacon, lettuce, tomato, onion, and pickles', 189.99, NULL, 'burger'),
    ('BUR004', 'Mushroom Swiss Burger', 'mushroom_swiss_burger.jpg', 15, 'Beef patty with sautéed mushrooms, Swiss cheese, lettuce, tomato, onion, and pickles', 199.99, NULL, 'burger'),
    ('BUR005', 'BBQ Burger', 'bbq_burger.jpg', 20, 'Beef patty with BBQ sauce, cheddar cheese, lettuce, tomato, onion, and pickles', 199.99, 10, 'burger'),
    ('BUR006', 'Avocado Burger', 'avocado_burger.jpg', 17, 'Beef patty with fresh avocado slices, lettuce, tomato, onion, and pickles', 209.99, NULL, 'burger'),
    ('BUR007', 'Spicy Jalapeno Burger', 'spicy_jalapeno_burger.jpg', 16, 'Beef patty with spicy jalapenos, pepper jack cheese, lettuce, tomato, onion, and pickles', 219.99, 15, 'burger'),
    ('BUR008', 'Turkey Burger', 'turkey_burger.jpg', 20, 'Juicy turkey patty with lettuce, tomato, onion, and pickles', 169.99, NULL, 'burger'),
    ('BUR009', 'Double Cheeseburger', 'double_cheeseburger.jpg', 15, 'Two beef patties with melted cheese, lettuce, tomato, onion, and pickles', 229.99, 20, 'burger');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('DRK001', 'Cola', 'cola.jpg', 30, 'Refreshing cola drink', 29.99, NULL, 'drinks'),
    ('DRK002', 'Lemonade', 'lemonade.jpg', 25, 'Homemade lemonade with fresh lemon juice', 34.99, NULL, 'drinks'),
    ('DRK003', 'Iced Tea', 'iced_tea.jpg', 20, 'Chilled black tea with ice cubes', 32.99, NULL, 'drinks'),
    ('DRK004', 'Orange Juice', 'orange_juice.jpg', 20, 'Freshly squeezed orange juice', 39.99, 20, 'drinks'),
    ('DRK005', 'Mojito', 'mojito.jpg', 15, 'Classic Cuban cocktail with rum, mint, lime, sugar, and soda water', 49.99, 15, 'drinks');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('FRI001', 'Classic French Fries', 'classic_french_fries.jpg', 40, 'Crispy golden French fries', 19.99, NULL, 'fries'),
    ('FRI002', 'Curly Fries', 'curly_fries.jpg', 35, 'Twisted and seasoned curly fries', 24.99, NULL, 'fries'),
    ('FRI003', 'Sweet Potato Fries', 'sweet_potato_fries.jpg', 30, 'Sweet and crispy sweet potato fries', 29.99, 5, 'fries');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SAN001', 'BLT Sandwich', 'blt_sandwich.jpg', 25, 'Classic sandwich with bacon, lettuce, and tomato', 149.99, 5, 'sandwiches'),
    ('SAN002', 'Club Sandwich', 'club_sandwich.jpg', 20, 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayonnaise', 159.99, NULL, 'sandwiches'),
    ('SAN003', 'Grilled Cheese Sandwich', 'grilled_cheese_sandwich.jpg', 30, 'Toasted bread with melted cheese', 139.99, 15, 'sandwiches'),
    ('SAN004', 'Chicken Caesar Sandwich', 'chicken_caesar_sandwich.jpg', 25, 'Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla', 154.99, NULL, 'sandwiches'),
    ('SAN005', 'Vegetarian Panini', 'vegetarian_panini.jpg', 20, 'Grilled sandwich with assorted vegetables and cheese', 144.99, NULL, 'sandwiches'),
    ('SAN006', 'BBQ Pulled Pork Sandwich', 'bbq_pulled_pork_sandwich.jpg', 25, 'Slow-cooked pulled pork with BBQ sauce on a bun', 164.99, 20, 'sandwiches');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('CHW001', 'Classic Buffalo Wings', 'classic_buffalo_wings.jpg', 30, 'Spicy buffalo chicken wings served with blue cheese dressing', 69.99, NULL, 'chicken-wings'),
    ('CHW002', 'Honey BBQ Wings', 'honey_bbq_wings.jpg', 25, 'Sweet and tangy BBQ chicken wings glazed with honey', 74.99, 5, 'chicken-wings'),
    ('CHW003', 'Garlic Parmesan Wings', 'garlic_parmesan_wings.jpg', 20, 'Savory garlic and Parmesan chicken wings', 79.99, NULL, 'chicken-wings');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SAL001', 'Caesar Salad', 'caesar_salad.jpg', 35, 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing', 149.99, NULL, 'salads'),
    ('SAL002', 'Greek Salad', 'greek_salad.jpg', 30, 'Lettuce, tomatoes, cucumbers, olives, onions, and feta cheese with Greek dressing', 154.99, 5, 'salads'),
    ('SAL003', 'Caprese Salad', 'caprese_salad.jpg', 25, 'Tomatoes, fresh mozzarella cheese, basil, olive oil, and balsamic glaze', 159.99, NULL, 'salads'),
    ('SAL004', 'Cobb Salad', 'cobb_salad.jpg', 20, 'Lettuce, grilled chicken, bacon, avocado, hard-boiled eggs, tomatoes, and blue cheese dressing', 164.99, NULL, 'salads'),
    ('SAL005', 'Spinach Salad', 'spinach_salad.jpg', 25, 'Fresh spinach, strawberries, almonds, feta cheese, and balsamic vinaigrette', 159.99, NULL, 'salads');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('CHD001', 'Classic Chili Dog', 'classic_chili_dog.jpg', 20, 'Grilled hot dog topped with chili sauce and diced onions', 79.99, NULL, 'chili-dogs'),
    ('CHD002', 'Cheese Chili Dog', 'cheese_chili_dog.jpg', 15, 'Grilled hot dog topped with chili sauce and melted cheese', 89.99, NULL, 'chili-dogs'),
    ('CHD003', 'Chicago Style Chili Dog', 'chicago_style_chili_dog.jpg', 15, 'Grilled hot dog topped with mustard, onions, relish, tomatoes, pickles, and celery salt', 99.99, NULL, 'chili-dogs');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('HOD001', 'Classic Hot Dog', 'classic_hot_dog.jpg', 30, 'Grilled hot dog in a bun', 49.99, NULL, 'hot-dogs'),
    ('HOD002', 'Chili Cheese Dog', 'chili_cheese_dog.jpg', 25, 'Grilled hot dog topped with chili sauce and melted cheese', 59.99, NULL, 'hot-dogs'),
    ('HOD003', 'New York Style Hot Dog', 'new_york_style_hot_dog.jpg', 20, 'Grilled hot dog topped with mustard, ketchup, onions, and relish', 54.99, NULL, 'hot-dogs'),
    ('HOD004', 'Bacon-Wrapped Hot Dog', 'bacon_wrapped_hot_dog.jpg', 20, 'Grilled hot dog wrapped in crispy bacon', 69.99, NULL, 'hot-dogs'),
    ('HOD005', 'Jalapeno Cheddar Dog', 'jalapeno_cheddar_dog.jpg', 15, 'Grilled hot dog topped with sliced jalapenos and melted cheddar cheese', 64.99, NULL, 'hot-dogs'),
    ('HOD006', 'BBQ Ranch Dog', 'bbq_ranch_dog.jpg', 20, 'Grilled hot dog topped with BBQ sauce and ranch dressing', 59.99, NULL, 'hot-dogs');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SUS001', 'California Roll', 'california_roll.jpg', 30, 'Roll with crab, avocado, and cucumber', 179.99, NULL, 'sushi'),
    ('SUS002', 'Spicy Tuna Roll', 'spicy_tuna_roll.jpg', 25, 'Roll with spicy tuna, cucumber, and avocado', 184.99, NULL, 'sushi'),
    ('SUS003', 'Salmon Nigiri', 'salmon_nigiri.jpg', 20, 'Nigiri sushi with fresh salmon', 189.99, NULL, 'sushi'),
    ('SUS004', 'Dragon Roll', 'dragon_roll.jpg', 30, 'Roll with eel, avocado, and cucumber', 199.99, NULL, 'sushi'),
    ('SUS005', 'Rainbow Roll', 'rainbow_roll.jpg', 25, 'Roll with assorted fish and avocado', 204.99, NULL, 'sushi'),
    ('SUS006', 'Philadelphia Roll', 'philadelphia_roll.jpg', 20, 'Roll with salmon, cream cheese, and cucumber', 194.99, 5, 'sushi'),
    ('SUS007', 'Spider Roll', 'spider_roll.jpg', 20, 'Roll with soft shell crab, avocado, and cucumber', 209.99, NULL, 'sushi'),
    ('SUS008', 'Tempura Roll', 'tempura_roll.jpg', 25, 'Roll with tempura shrimp, avocado, and cucumber', 199.99, 5, 'sushi'),
    ('SUS009', 'Caterpillar Roll', 'caterpillar_roll.jpg', 20, 'Roll with eel, avocado, and cucumber', 114.99, 10, 'sushi'),
    ('SUS010', 'Volcano Roll', 'volcano_roll.jpg', 20, 'Roll with spicy tuna and avocado, topped with spicy mayo and eel sauce', 209.99, NULL, 'sushi'),
    ('SUS011', 'California Crunch Roll', 'california_crunch_roll.jpg', 25, 'Roll with crab, avocado, and crunchy tempura flakes', 204.99, NULL, 'sushi'),
    ('SUS012', 'Alaska Roll', 'alaska_roll.jpg', 25, 'Roll with salmon, avocado, and cucumber, topped with salmon roe', 214.99, NULL, 'sushi');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('WRP001', 'Chicken Caesar Wrap', 'chicken_caesar_wrap.jpg', 30, 'Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla', 69.99, NULL, 'wraps'),
    ('WRP002', 'Vegetarian Wrap', 'vegetarian_wrap.jpg', 25, 'Assorted vegetables and hummus wrapped in a tortilla', 64.99, NULL, 'wraps'),
    ('WRP003', 'Buffalo Chicken Wrap', 'buffalo_chicken_wrap.jpg', 20, 'Grilled chicken with buffalo sauce, lettuce, tomato, and ranch dressing wrapped in a tortilla', 74.99, 5, 'wraps'),
    ('WRP004', 'Turkey Club Wrap', 'turkey_club_wrap.jpg', 30, 'Turkey, bacon, lettuce, tomato, and mayonnaise wrapped in a tortilla', 79.99, NULL, 'wraps'),
    ('WRP005', 'BBQ Beef Wrap', 'bbq_beef_wrap.jpg', 25, 'Slow-cooked beef with BBQ sauce, lettuce, and crispy onions wrapped in a tortilla', 84.99, NULL, 'wraps'),
    ('WRP006', 'Caesar Chicken Wrap', 'caesar_chicken_wrap.jpg', 20, 'Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla', 74.99, NULL, 'wraps'),
    ('WRP007', 'Mediterranean Wrap', 'mediterranean_wrap.jpg', 20, 'Grilled chicken, lettuce, tomato, olives, feta cheese, and tzatziki sauce wrapped in a tortilla', 89.99, 5, 'wraps'),
    ('WRP008', 'California Wrap', 'california_wrap.jpg', 25, 'Grilled chicken, avocado, lettuce, tomato, bacon, and ranch dressing wrapped in a tortilla', 94.99, NULL, 'wraps'),
    ('WRP009', 'Buffalo Chicken Wrap', 'buffalo_chicken_wrap.jpg', 20, 'Grilled chicken with buffalo sauce, lettuce, tomato, and ranch dressing wrapped in a tortilla', 79.99, 2, 'wraps'),
    ('WRP010', 'Vegetable Hummus Wrap', 'vegetable_hummus_wrap.jpg', 25, 'Assorted vegetables and hummus wrapped in a tortilla', 69.99, NULL, 'wraps');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('NAC001', 'Classic Nachos', 'classic_nachos.jpg', 25, 'Tortilla chips topped with melted cheese, salsa, guacamole, and sour cream', 89.99, NULL, 'nachos'),
    ('NAC002', 'Loaded Nachos', 'loaded_nachos.jpg', 20, 'Tortilla chips topped with melted cheese, ground beef, jalapenos, tomatoes, onions, and sour cream', 99.99, NULL, 'nachos'),
    ('NAC003', 'Vegetarian Nachos', 'vegetarian_nachos.jpg', 20, 'Tortilla chips topped with melted cheese, black beans, corn, tomatoes, onions, and guacamole', 94.99, NULL, 'nachos'),
    ('NAC004', 'BBQ Chicken Nachos', 'bbq_chicken_nachos.jpg', 20, 'Tortilla chips topped with melted cheese, BBQ chicken, red onions, cilantro, and BBQ sauce', 104.99, NULL, 'nachos'),
    ('NAC005', 'Buffalo Chicken Nachos', 'buffalo_chicken_nachos.jpg', 15, 'Tortilla chips topped with melted cheese, buffalo chicken, jalapenos, ranch dressing, and buffalo sauce', 109.99, NULL, 'nachos');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('DES001', 'Chocolate Brownie', 'chocolate_brownie.jpg', 30, 'Warm chocolate brownie topped with vanilla ice cream and chocolate sauce', 39.99, 5, 'desserts'),
    ('DES002', 'New York Cheesecake', 'new_york_cheesecake.jpg', 25, 'Classic New York-style cheesecake with graham cracker crust', 49.99, NULL, 'desserts'),
    ('DES003', 'Tiramisu', 'tiramisu.jpg', 20, 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese', 54.99, NULL, 'desserts'),
    ('DES004', 'Apple Pie', 'apple_pie.jpg', 20, 'Homemade apple pie with flaky pastry crust', 44.99, NULL, 'desserts'),
    ('DES005', 'Chocolate Lava Cake', 'chocolate_lava_cake.jpg', 25, 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream', 59.99, NULL, 'desserts'),
    ('DES006', 'Key Lime Pie', 'key_lime_pie.jpg', 20, 'Tangy key lime pie with graham cracker crust', 54.99, NULL, 'desserts'),
    ('DES007', 'Banoffee Pie', 'banoffee_pie.jpg', 15, 'Toffee-filled pie with bananas and whipped cream', 64.99, NULL, 'desserts'),
    ('DES008', 'Red Velvet Cake', 'red_velvet_cake.jpg', 20, 'Moist and velvety red velvet cake with cream cheese frosting', 49.99, NULL, 'desserts'),
    ('DES009', 'Panna Cotta', 'panna_cotta.jpg', 20, 'Italian dessert of sweetened cream thickened with gelatin and flavored with vanilla', 54.99, NULL, 'desserts');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('PAS001', 'Spaghetti Bolognese', 'spaghetti_bolognese.jpg', 35, 'Spaghetti pasta with traditional meat sauce', 79.99, NULL, 'pasta'),
    ('PAS002', 'Fettuccine Alfredo', 'fettuccine_alfredo.jpg', 30, 'Fettuccine pasta in a creamy Alfredo sauce', 84.99, NULL, 'pasta'),
    ('PAS003', 'Penne Arrabiata', 'penne_arrabiata.jpg', 25, 'Penne pasta with spicy tomato sauce', 74.99, NULL, 'pasta'),
    ('PAS004', 'Lasagna', 'lasagna.jpg', 20, 'Layered pasta dish with meat sauce, ricotta cheese, and mozzarella', 89.99, NULL, 'pasta'),
    ('PAS005', 'Carbonara', 'carbonara.jpg', 25, 'Spaghetti pasta with creamy egg and cheese sauce, pancetta, and black pepper', 84.99, NULL, 'pasta'),
    ('PAS006', 'Pesto Linguine', 'pesto_linguine.jpg', 20, 'Linguine pasta with basil pesto sauce and pine nuts', 79.99, NULL, 'pasta');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('RIB001', 'Teriyaki Chicken Rice Bowl', 'teriyaki_chicken_rice_bowl.jpg', 25, 'Grilled teriyaki chicken served over steamed rice with vegetables', 89.99, 2, 'rice-bowls'),
    ('RIB002', 'Beef Bulgogi Rice Bowl', 'beef_bulgogi_rice_bowl.jpg', 20, 'Korean-style marinated beef served over steamed rice with vegetables', 94.99, NULL, 'rice-bowls'),
    ('RIB003', 'Vegetable Stir Fry Rice Bowl', 'vegetable_stir_fry_rice_bowl.jpg', 20, 'Assorted vegetables stir-fried and served over steamed rice', 84.99, NULL, 'rice-bowls');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('SMO001', 'Strawberry Banana Smoothie', 'strawberry_banana_smoothie.jpg', 30, 'Blend of strawberries, bananas, and yogurt', 39.99, NULL, 'smoothies'),
    ('SMO002', 'Mango Pineapple Smoothie', 'mango_pineapple_smoothie.jpg', 25, 'Blend of mangoes, pineapples, and coconut milk', 44.99, NULL, 'smoothies'),
    ('SMO003', 'Tropical Green Smoothie', 'tropical_green_smoothie.jpg', 20, 'Blend of spinach, pineapple, mango, banana, and coconut water', 49.99, NULL, 'smoothies'),
    ('SMO004', 'Berry Blast Smoothie', 'berry_blast_smoothie.jpg', 20, 'Blend of mixed berries, banana, and orange juice', 44.99, NULL, 'smoothies'),
    ('SMO005', 'Peachy Mango Smoothie', 'peachy_mango_smoothie.jpg', 25, 'Blend of peaches, mangoes, yogurt, and orange juice', 49.99, NULL, 'smoothies'),
    ('SMO006', 'Chocolate Peanut Butter Smoothie', 'chocolate_peanut_butter_smoothie.jpg', 20, 'Blend of chocolate, peanut butter, banana, and milk', 54.99, NULL, 'smoothies');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('BRT001', 'Chicken Burrito', 'chicken_burrito.jpg', 30, 'Grilled chicken, rice, beans, cheese, and salsa wrapped in a flour tortilla', 79.99, NULL, 'burritos'),
    ('BRT002', 'Beef Burrito', 'beef_burrito.jpg', 25, 'Seasoned ground beef, rice, beans, cheese, and salsa wrapped in a flour tortilla', 84.99, NULL, 'burritos'),
    ('BRT003', 'Vegetarian Burrito', 'vegetarian_burrito.jpg', 20, 'Assorted vegetables, rice, beans, cheese, and salsa wrapped in a flour tortilla', 74.99, 5, 'burritos'),
    ('BRT004', 'Shrimp Burrito', 'shrimp_burrito.jpg', 20, 'Grilled shrimp, rice, beans, cheese, and salsa wrapped in a flour tortilla', 89.99, NULL, 'burritos');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('DON001', 'Glazed Donut', 'glazed_donut.jpg', 30, 'Classic donut with a sweet glaze', 19.99, NULL, 'donuts'),
    ('DON002', 'Chocolate Donut', 'chocolate_donut.jpg', 25, 'Donut covered in rich chocolate icing', 24.99, NULL, 'donuts'),
    ('DON003', 'Sprinkle Donut', 'sprinkle_donut.jpg', 20, 'Donut topped with colorful sprinkles', 22.99, NULL, 'donuts'),
    ('DON004', 'Maple Bacon Donut', 'maple_bacon_donut.jpg', 20, 'Donut drizzled with maple syrup and topped with crispy bacon bits', 29.99, NULL, 'donuts');

INSERT INTO Products (id, name, image, stock, description, price, discount, id_category)
VALUES 
    ('BAG001', 'Plain Bagel', 'plain_bagel.jpg', 30, 'Classic plain bagel', 14.99, NULL, 'bagels'),
    ('BAG002', 'Everything Bagel', 'everything_bagel.jpg', 25, 'Bagel topped with sesame seeds, poppy seeds, onion, garlic, and salt', 17.99, NULL, 'bagels');

