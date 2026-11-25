// DABAY SPORTS SHOP - one self-contained file: product catalog first, then the site logic.
(function () {
// ==========================================
//  DABAY SPORTS SHOP - PRODUCT CATALOG
//  Edit products here (SPORTS and RAW below).
// ==========================================

// ---- SPORTS: [id, name, home-page tile text, page subtitle] ----
const SPORTS = [
    ["football", "Football", "Boots, balls, jerseys and accessories.", "Find equipment and accessories for football players and fans."],
    ["basketball", "Basketball", "Shoes, balls, jerseys and equipment.", "Explore our basketball equipment and accessories."],
    ["swimming", "Swimming", "Goggles, costumes, caps and training gear.", "Find swimming equipment for beginners and experienced swimmers."],
    ["volleyball", "Volleyball", "Volleyballs, shoes, knee pads and nets.", "Explore our volleyball products and playing accessories."],
    ["gym", "Gym", "Dumbbells, weights and fitness equipment.", "Find equipment for home workouts and professional gyms."],
    ["rugby", "Rugby", "Boots, balls, jerseys and protection.", "Gear up for the scrum, the sevens and everything between."],
    ["tennis", "Tennis", "Rackets, balls, shoes and accessories.", "Rackets, balls and court gear for every level."],
    ["athletics", "Athletics", "Running shoes, spikes and running wear.", "Everything for road, track and cross-country runners."]
];

// ---- CATALOG ----
// Each product type (tab): [type name, product noun, description, "Button/Product name:price|Button/Product name:price|..."]
// Product name = "<name> <noun>" (leave noun empty to use the name as the full name).
// Without a "/", the product gets its own button.
// Photos: images/<product-name>.jpg, then images/<type-name>.jpg, then a placeholder.
const RAW = {
    football: [
        ["Nike Football Boots", "", "Nike boots for speed, control and firm-ground matches.", "Mercurial/Nike Mercurial Vapor 17:9500|Mercurial/Nike Mercurial Superfly 11:10500|Mercurial/Nike Mercurial Vapor 16:8500|Mercurial/Nike Mercurial Superfly 10:9500|Mercurial/Nike Mercurial Vapor 15:7500|Mercurial/Nike Mercurial Superfly 9:8500|Phantom/Nike Phantom 6 Low:9500|Phantom/Nike Phantom 6 High:10000|Phantom/Nike Phantom GX 2:9000|Phantom/Nike Phantom GX:8000|Phantom/Nike Phantom Luna 2:8500|Phantom/Nike Phantom Luna:7500|Phantom/Nike Phantom GT 2:7500|Phantom/Nike Phantom GT:6500|Tiempo/Nike Tiempo Maestro:8500|Tiempo/Nike Tiempo Ligera:8000|Tiempo/Nike Tiempo Legend 10:8500|Tiempo/Nike Tiempo Legend 9:7500|Tiempo/Nike Tiempo Legend 8:6500|Tiempo/Nike Tiempo Legend 7:5500|Tiempo/Nike Tiempo Legend 6:5000|Other Nike/Nike Hypervenom Phantom 3:5500|Other Nike/Nike Hypervenom Phantom 2:5000|Other Nike/Nike Magista Obra 2:5500|Other Nike/Nike Premier 3:5000|Mercurial/Nike Mercurial Vapor 14:6500|Mercurial/Nike Mercurial Superfly 8:7500|Mercurial/Nike Mercurial Vapor 13:5500|Mercurial/Nike Mercurial Superfly 7:6500|Mercurial/Nike Mercurial Vapor 12:5000|Mercurial/Nike Mercurial Superfly 6:5500|Phantom/Nike Phantom Vision 2:7000|Phantom/Nike Phantom Vision:6000|Phantom/Nike Phantom Venom:5500|Phantom/Nike Phantom Vision Pro:7500|Tiempo/Nike Tiempo Legend 11:9000|Tiempo/Nike Tiempo Legend 5:4500|Tiempo/Nike Tiempo Legend 4:4000|Tiempo/Nike Tiempo Natural:4500|Tiempo/Nike Tiempo Rio:4000|Tiempo/Nike Tiempo Genio:4500|Tiempo/Nike Tiempo Elite:8500|Other Nike/Nike Hypervenom Phantom 1:4500|Other Nike/Nike Hypervenom Phelon:4000|Other Nike/Nike Hypervenom Finale:4500|Other Nike/Nike Magista Obra:5000|Other Nike/Nike Magista Orden:4500|Other Nike/Nike Premier 2:4500|Other Nike/Nike CTR360 Maestri:4000|Other Nike/Nike Total90 Laser:4500"],
        ["Adidas Football Boots", "", "Adidas boots for strikers, playmakers and defenders.", "Predator/Adidas Predator Accelerator:5500|Predator/Adidas Predator Precision:5000|Predator/Adidas Predator Mania:5500|Predator/Adidas Predator Pulse:5000|Predator/Adidas Predator Absolute:5000|Predator/Adidas Predator PowerSwerve:5000|Predator/Adidas Predator X:5500|Predator/Adidas adiPower Predator:5500|Predator/Adidas Predator Lethal Zones:5000|Predator/Adidas Predator Instinct:5500|Predator/Adidas Predator 18:6500|Predator/Adidas Predator 19:7000|Predator/Adidas Predator Mutator 20:7500|Predator/Adidas Predator Freak:8000|Predator/Adidas Predator Edge:8500|Predator/Adidas Predator Accuracy:8500|Predator/Adidas Predator 24:9000|Predator/Adidas Predator 25:9500|Predator/Adidas Predator 26:10000|F50, Copa and More/Adidas F50 adiZero:6500|F50, Copa and More/Adidas F50 X:6500|F50, Copa and More/Adidas F50 Crazyfast:9000|F50, Copa and More/Adidas F50 (2024):9000|F50, Copa and More/Adidas Copa Mundial:7500|F50, Copa and More/Adidas Copa Pure 2:8000|F50, Copa and More/Adidas Deportivo:5000|F50, Copa and More/Adidas Goletto:4500|F50, Copa and More/Adidas X Speedflow:7500|F50, Copa and More/Adidas X Ghosted:7000|F50, Copa and More/Adidas Nemeziz:7500|F50, Copa and More/Adidas Ace 16:5500"],
        ["Puma Football Boots", "", "Puma boots built for comfort, touch and pace.", "Future/Puma Future 1.1:6000|Future/Puma Future 1.2:5500|Future/Puma Future 1.3:5000|Future/Puma Future 1.4:4500|Future/Puma Future 7 Ultimate:7000|Future/Puma Future 8 Ultimate:7500|Future/Puma Future 9 Ultimate:8000|Future/Puma Future 10:8500|Ultra/Puma Ultra 1.1:6000|Ultra/Puma Ultra 1.2:5500|Ultra/Puma Ultra 1.3:5000|Ultra/Puma Ultra 1.4:4500|Ultra/Puma Ultra 2.4:5000|Ultra/Puma Ultra 5 Ultimate:7000|Ultra/Puma Ultra 6 Ultimate:7500|Ultra/Puma Ultra Nitro 7:8000|King, evo and More/Puma King Platinum:5500|King, evo and More/Puma King Ultimate:7500|King, evo and More/Puma King Top:6000|King, evo and More/Puma evoPOWER 1:5000|King, evo and More/Puma evoPOWER Vigor:4500|King, evo and More/Puma evoSPEED 1:5500|King, evo and More/Puma evoSPEED SL:5000|King, evo and More/Puma ONE 1:5000|King, evo and More/Puma evoTOUCH Pro:4500|Future/Puma Future Z:7500|Future/Puma Future Play:4000|Future/Puma Future Match:4500|Future/Puma Future Pro:5500|Ultra/Puma Ultra Ultimate:8500|Ultra/Puma Ultra Play:4000|Ultra/Puma Ultra Match:4500|Ultra/Puma Ultra Pro:5500|King, evo and More/Puma King Pro:5000|King, evo and More/Puma King Match:4500|King, evo and More/Puma Esito Finale:4500"],
        ["Footballs", "Football", "Footballs for matches, training and the street.", "Adidas/Adidas UCL Pro Match:9500|Adidas/Adidas Tango Pro:8500|Adidas/Adidas Al Rihla Match:8000|Adidas/Adidas Conext 21 Training:3500|Adidas/Adidas Starlancer Club:3000|Adidas/Adidas Tiro League:3800|Nike/Nike Flight Match:9500|Nike/Nike Premier League Pitch:4800|Nike/Nike Strike:3200|Nike/Nike Pitch Training:3500|Nike/Nike Academy:3000|Puma and Others/Puma Orbita Match:4500|Puma and Others/Puma Orbita LaLiga:4200|Puma and Others/Puma Orbita Training:3200|Puma and Others/Puma Attacanto:2800|Puma and Others/Mikasa FT5 Training:2800|Puma and Others/Molten Vantaggio:3200|Puma and Others/Umbro Neo Swerve:3000|Puma and Others/Select Brillant Super:4800|Adidas/Adidas Fussballliebe Pro:9000|Adidas/Adidas Fussballliebe League:3800|Adidas/Adidas Telstar 18 Replica:3500|Adidas/Adidas Brazuca Replica:3500|Adidas/Adidas Jabulani Replica:3500|Adidas/Adidas Tango Glider:2800|Nike/Nike Flight Premier League:9500|Nike/Nike Ordem Replica:3800|Nike/Nike Merlin Replica:3800|Nike/Nike Mercurial Fade Training:3000|Nike/Nike Skills Mini:1200|Nike/Nike Pitch Premier League:4000|Nike/Nike Club Elite:3500|Puma and Others/Puma Orbita Ligue 1:4000|Puma and Others/Puma Big Cat Mini:1200|Puma and Others/Mitre Ultimax Pro:4500|Puma and Others/Mitre Impel Training:2500"],
        ["Football Club Jerseys", "", "Home and away club jerseys from 1998 to 2026.", "Premier League/Manchester United 1998-99 Home Jersey:2500|Premier League/Manchester United 2002-03 Home Jersey:2500|Premier League/Manchester United 2007-08 Home Jersey:2500|La Liga/Real Madrid 1998-99 Home Jersey:2500|La Liga/Real Madrid 2001-02 Home Jersey:2500|La Liga/Real Madrid 2010-11 Home Jersey:2500|La Liga/Real Madrid 2025-26 Home Jersey:2500|La Liga/Barcelona 2008-09 Home Jersey:2500|La Liga/Barcelona 2013-14 Home Jersey:2500|La Liga/Barcelona 2026-27 Home Jersey:2500|Premier League/Arsenal 1999-2000 Home Jersey:2500|Premier League/Arsenal 2003-04 Home Jersey:2500|Premier League/Arsenal 2005-06 Home Jersey:2500|Premier League/Arsenal 2023-24 Away Jersey:2500|Premier League/Chelsea 1998-99 Home Jersey:2500|Premier League/Chelsea 2004-05 Home Jersey:2500|Premier League/Liverpool 2005-06 Home Jersey:2500|Premier League/Liverpool 2020-21 Away Jersey:2500|Premier League/Manchester City 2015-16 Away Jersey:2500|Serie A and Bundesliga/Bayern Munich 2012-13 Home Jersey:2500|Serie A and Bundesliga/Juventus 2019-20 Home Jersey:2500|Serie A and Bundesliga/AC Milan 2000-02 Home Jersey:2500|Serie A and Bundesliga/AC Milan 2006-07 Home Jersey:2500|Serie A and Bundesliga/Inter Milan 2009-10 Home Jersey:2500|Serie A and Bundesliga/Borussia Dortmund 2014-15 Home Jersey:2500|La Liga/Atletico Madrid 2013-14 Home Jersey:2500|La Liga/Atletico Madrid 2020-21 Home Jersey:2500|La Liga/Sevilla 2015-16 Home Jersey:2500|La Liga/Valencia 2003-04 Home Jersey:2500|La Liga/Real Madrid 2016-17 Home Jersey:2500|Serie A and Bundesliga/Juventus 1997-98 Home Jersey:2500|Serie A and Bundesliga/AC Milan 2003-04 Home Jersey:2500|Serie A and Bundesliga/Inter Milan 2002-03 Home Jersey:2500|Serie A and Bundesliga/AS Roma 2000-01 Home Jersey:2500|Serie A and Bundesliga/Napoli 2022-23 Home Jersey:2500|Serie A and Bundesliga/Bayern Munich 2019-20 Home Jersey:2500"],
        ["Goalkeeper Gloves", "Goalkeeper Gloves", "Gloves designed for grip and hand protection.", "Adidas/Adidas Predator Pro:6500|Adidas/Adidas Predator Match:4500|Adidas/Adidas Predator Training:3500|Adidas/Adidas Copa Pro:6000|Adidas/Adidas Copa League:3800|Nike/Nike Vapor Grip3 Pro:6000|Nike/Nike Vapor Grip3 Match:4500|Nike/Nike Match:3800|Nike/Nike Grip3 Training:3000|Nike/Nike Spyne Pro:5500|Puma, Uhlsport and Reusch/Puma Future Grip:3000|Puma, Uhlsport and Reusch/Puma Ultra Grip:3500|Puma, Uhlsport and Reusch/Uhlsport Soft Resist:4500|Puma, Uhlsport and Reusch/Uhlsport Speed Contact:5500|Puma, Uhlsport and Reusch/Reusch Attrakt Grip:4800|Puma, Uhlsport and Reusch/Reusch Pure Contact:6500|Junior/Junior Training:1500|Junior/Junior Match:2200|Junior/Junior Finger Protect:2800"],
        ["Football Accessories", "", "Essential kit for training and match day.", "Protection/Shin Guards:800|Protection/Shin Guard Sleeves:600|Protection/Ankle Support Brace:900|Protection/Compression Knee Sleeve:1100|Protection/Football Mouthguard:700|Clothing/Football Socks:500|Clothing/Football Shorts:1000|Clothing/Goalkeeper Jersey:2200|Clothing/Training Bib:400|Clothing/Football Headband:300|Clothing/Thermal Base Layer:1800|Training/Training Cones:700|Training/Football Agility Ladder:1500|Training/Football Pump:600|Training/Ball Net Bag:900|Training/Rebounder Net:6500|Training/Training Hurdles Set:2500|Match Day/Captain Armband:300|Match Day/Football Bag:1800|Match Day/Boot Bag:900|Match Day/Football Referee Whistle:400|Match Day/Corner Flags Set:2500|Match Day/Football Goal Net:4500"]
    ],
    basketball: [
        ["Basketball Shoes", "Basketball Shoes", "Court shoes for grip, comfort and movement.", "Nike/Nike LeBron 21:13500|Nike/Nike LeBron Witness 8:8500|Nike/Nike KD 17:10500|Nike/Nike KD Trey 5:9000|Nike/Nike Giannis Immortality 4:8000|Nike/Nike Kyrie Infinity:9500|Nike/Nike Ja 1:9500|Jordan/Air Jordan 1 Mid:12500|Jordan/Air Jordan 4:13500|Jordan/Air Jordan 11:15500|Jordan/Air Jordan 36:14000|Jordan/Jordan Luka 2:11500|Adidas, UA and Everyday/Adidas Harden Vol 8:10000|Adidas, UA and Everyday/Adidas Dame 9:9500|Adidas, UA and Everyday/Adidas Trae Young 3:9000|Adidas, UA and Everyday/Adidas Ownthegame:6500|Adidas, UA and Everyday/Under Armour Curry 11:11500|Adidas, UA and Everyday/Under Armour Curry Flow 10:12500|Adidas, UA and Everyday/Everyday Court:5500|Adidas, UA and Everyday/Everyday Kids Court:3500|Nike/Nike LeBron 20:11500|Nike/Nike KD 16:9500|Nike/Nike Zoom Freak 4:8500|Nike/Nike Air Zoom GT Cut:10000|Nike/Nike Precision 6:6500|Jordan/Air Jordan 3:13000|Jordan/Air Jordan 5:13500|Jordan/Air Jordan 6:14000|Jordan/Air Jordan 12:14500|Jordan/Air Jordan 37:14000|Jordan/Jordan Tatum 1:10500|Jordan/Jordan Why Not Zer0.5:10000|Adidas, UA and Everyday/Adidas Harden Vol 7:9000|Adidas, UA and Everyday/Adidas Dame Certified:7500|Adidas, UA and Everyday/Under Armour Curry 12:12500|Adidas, UA and Everyday/Under Armour Jet:8000"],
        ["Basketballs", "Basketball", "Quality basketballs for training and matches.", "Spalding/Spalding TF-1000 Legacy:5200|Spalding/Spalding TF-250:3800|Spalding/Spalding Street Phantom:3200|Spalding/Spalding NBA Replica:3000|Spalding/Spalding Rookie Gear Youth:2500|Wilson/Wilson Evolution:4800|Wilson/Wilson NCAA Replica:3500|Wilson/Wilson Jet Pro:3200|Wilson/Wilson Killer Crossover:3000|Wilson/Wilson Mini:1500|Molten, Nike and Others/Molten BG4500:5500|Molten, Nike and Others/Molten GG7X:4200|Molten, Nike and Others/Molten Outdoor GR7:3000|Molten, Nike and Others/Nike Elite Championship:4500|Molten, Nike and Others/Nike Everyday Playground:3200|Molten, Nike and Others/Everyday Training:2500|Spalding/Spalding TF-1000 Classic:5000|Spalding/Spalding TF-500:3500|Spalding/Spalding Excel:3000|Spalding/Spalding Varsity:2800|Spalding/Spalding Street Master:2500|Spalding/Spalding Platinum Outdoor:3200|Spalding/Spalding ZiO Composite:4500|Wilson/Wilson Evolution Indoor:5000|Wilson/Wilson Reaction Pro:4200|Wilson/Wilson NBA DRV Pro:3500|Wilson/Wilson NBA Authentic Outdoor:3800|Wilson/Wilson Youth Size 5:2200|Wilson/Wilson Jet Heritage:3000|Wilson/Wilson Solution Indoor Outdoor:3500|Molten, Nike and Others/Molten BG5000:7000|Molten, Nike and Others/Molten GM7X:4000|Molten, Nike and Others/Nike Versa Tack:3800|Molten, Nike and Others/Nike Dominate:3500|Molten, Nike and Others/Under Armour 495 Outdoor:3500|Molten, Nike and Others/Mikasa BQ1000:4500"],
        ["Basketball Jerseys", "Jersey", "Lightweight jerseys for players and fans.", "Western Teams/Los Angeles Lakers:2500|Western Teams/Golden State Warriors:2500|Western Teams/Dallas Mavericks:2500|Western Teams/Phoenix Suns:2500|Western Teams/Denver Nuggets:2500|Western Teams/San Antonio Spurs:2500|Eastern Teams/Chicago Bulls:2500|Eastern Teams/Boston Celtics:2500|Eastern Teams/Miami Heat:2500|Eastern Teams/Brooklyn Nets:2500|Eastern Teams/Milwaukee Bucks:2500|Eastern Teams/Toronto Raptors:2500|Practice/Reversible Practice:1800|Practice/Youth Basketball:1500|Practice/Everyday Basketball Training:1800|Practice/Sleeveless Shooting:1400|Practice/Warm-Up:2000|Western Teams/Los Angeles Clippers:2500|Western Teams/Houston Rockets:2500|Western Teams/Sacramento Kings:2500|Western Teams/Memphis Grizzlies:2500|Western Teams/New Orleans Pelicans:2500|Western Teams/Minnesota Timberwolves:2500|Eastern Teams/New York Knicks:2500|Eastern Teams/Philadelphia 76ers:2500|Eastern Teams/Atlanta Hawks:2500|Eastern Teams/Charlotte Hornets:2500|Eastern Teams/Indiana Pacers:2500|Eastern Teams/Cleveland Cavaliers:2500|Practice/Mesh Practice:1700|Practice/Kids Training:1400|Practice/Women's Training:1800|Practice/Sublimated Team:2500|Practice/Two-Tone Shooting:1800|Practice/Basketball Custom Name and Number:3000|Practice/Coaches Warm-Up:2200"],
        ["Basketball Equipment", "", "Hoops and accessories for practice and games.", "Hoops and Nets/Portable Basketball Hoop:8000|Hoops and Nets/Wall-Mounted Backboard:9500|Hoops and Nets/Mini Door Hoop:1800|Hoops and Nets/Junior Adjustable Hoop:7000|Hoops and Nets/Replacement Hoop Net:500|Clothing/Basketball Shorts:1200|Clothing/Basketball Socks:600|Clothing/Compression Sleeve:800|Clothing/Basketball Wristbands:400|Clothing/Basketball Headband:300|Clothing/Padded Compression Shorts:1500|Accessories/Basketball Pump:600|Accessories/Basketball Mouthguard:700|Accessories/Basketball Carry Bag:1500|Accessories/Basketball Ankle Brace:900|Accessories/Flip Scoreboard:3500|Accessories/Ball Rack:3500"]
    ],
    swimming: [
        ["Swimming Goggles", "Goggles", "Goggles designed to protect the eyes while swimming.", "Speedo/Speedo Vengeance:1800|Speedo/Speedo Biofuse:2200|Speedo/Speedo Futura Plus:1500|Speedo/Speedo Hydropure:2000|Speedo/Speedo Junior Skoogle:1200|Arena/Arena Cobra Ultra:3500|Arena/Arena Air-Speed:3000|Arena/Arena The One:2200|Arena/Arena Tracks:1700|Arena/Arena Cobra Swipe:3800|TYR and Others/TYR Socket Rockets:2000|TYR and Others/TYR Special Ops:2800|TYR and Others/Aqua Sphere Kayenne:1900|TYR and Others/Aqua Sphere Vista:2600|TYR and Others/Zoggs Predator Flex:2200|TYR and Others/Everyday Anti-Fog:1000"],
        ["Swimming Costumes", "Swimming Costume", "Comfortable swimwear for swimming and training.", "Speedo/Speedo Endurance+:3500|Speedo/Speedo Racerback:3000|Speedo/Speedo Eco Solid:3200|Speedo/Speedo Hyper Boom:3800|Arena/Arena Solid Pro:3000|Arena/Arena Team Fit Racerback:2800|Arena/Arena Challenge Back:3300|Arena/Arena Powerskin Training:4000|Others/TYR Durafast Elite:3000|Others/TYR Cutoutfit:2800|Others/Zoggs Cottesloe:2600|Others/Everyday:2000|Others/Everyday Kids:1500|Others/Everyday Two-Piece:2500|Others/Everyday Modest:3000|Others/Everyday Training One-Piece:2200"],
        ["Swim Trunks", "Swim Trunks", "Quick-drying trunks for pool and training sessions.", "Speedo/Speedo Endurance+:3000|Speedo/Speedo Eco Boom:3200|Speedo/Speedo Essential:1800|Speedo/Speedo Leisure:2500|Speedo/Speedo Aquashort:2800|Arena/Arena Solid:2500|Arena/Arena Team:1700|Arena/Arena Bywayx:3200|Arena/Arena Icons:2800|Arena/Arena Boxer:2200|TYR and Everyday/TYR Durafast:2800|TYR and Everyday/TYR Square Leg:1800|TYR and Everyday/Everyday:1500|TYR and Everyday/Everyday Kids:1200|TYR and Everyday/Everyday Board:2000|TYR and Everyday/Everyday Brief:1000"],
        ["Swimming Caps", "Swimming Cap", "A cap that keeps hair contained while swimming.", "Silicone/Speedo Plain Silicone:900|Silicone/Arena Classic Silicone:800|Silicone/TYR Solid Silicone:900|Silicone/Everyday Silicone:600|Silicone/Speedo Junior Silicone:700|Silicone/Arena Moulded Silicone:1100|Latex and Fabric/Speedo Latex:500|Latex and Fabric/Arena Latex:450|Latex and Fabric/Everyday Latex:350|Latex and Fabric/Speedo Polyester:700|Latex and Fabric/Arena Polyester:650|Latex and Fabric/Everyday Lycra:500|Specialty/Long Hair:1100|Specialty/Ear Protection:1200|Specialty/Speedo Bubble:1000|Specialty/Arena Racing:1500"],
        ["Training Gear", "", "Training aids and accessories for the pool.", "Pool Training/Swimming Fins:2500|Pool Training/Short Blade Fins:2800|Pool Training/Kickboard:1200|Pool Training/Pull Buoy:1300|Pool Training/Hand Paddles:1500|Pool Training/Finger Paddles:1400|Pool Bag Essentials/Quick-Dry Towel:1200|Pool Bag Essentials/Ear Plugs and Nose Clip:400|Pool Bag Essentials/Waterproof Bag:1000|Pool Bag Essentials/Swimming Bag:2500|Pool Bag Essentials/Pool Thermometer:800|Pool Bag Essentials/Wet Bag:700|Performance/Training Snorkel:2800|Performance/Lap Counter Ring:1800|Performance/Waterproof Swim Watch:6500|Performance/Swim Belt:2200|Performance/Swim Parachute:3500"]
    ],
    volleyball: [
        ["Volleyballs", "Volleyball", "Volleyballs for training and competitive games.", "Mikasa/Mikasa V200W:6500|Mikasa/Mikasa V300W:5500|Mikasa/Mikasa MVA200:4500|Mikasa/Mikasa VQ2000 Beach:4800|Mikasa/Mikasa Training:2800|Molten/Molten V5M5000:6500|Molten/Molten V5M4000:4800|Molten/Molten V5M2000:3200|Molten/Molten Beach:4200|Molten/Molten Soft Touch:3500|Wilson and Others/Wilson AVP Beach:3800|Wilson and Others/Wilson Soft Play:2500|Wilson and Others/Wilson Official Match:5200|Wilson and Others/Tachikara SV5W:4500|Wilson and Others/Everyday Training:2000|Wilson and Others/Everyday Beach:2200"],
        ["Volleyball Shoes", "Volleyball Shoes", "Shoes for movement and court performance.", "Mizuno/Mizuno Wave Lightning Z7:9000|Mizuno/Mizuno Wave Momentum 3:8500|Mizuno/Mizuno Wave Luminous:8000|Mizuno/Mizuno Wave Voltage:7500|Mizuno/Mizuno Thunder Blade:8200|Asics/Asics Gel-Tactic:7500|Asics/Asics Upcourt 5:5500|Asics/Asics Netburner Ballistic:10500|Asics/Asics Gel-Beyond:7000|Asics/Asics Sky Elite FF 2:11500|Nike, Adidas and Others/Nike Hyperspike:7500|Nike, Adidas and Others/Nike Zoom Hyperset:8500|Nike, Adidas and Others/Nike Court Lite:5000|Nike, Adidas and Others/Adidas Crazyflight:8500|Nike, Adidas and Others/Adidas Court Team:6000|Nike, Adidas and Others/Everyday Court:4500|Nike, Adidas and Others/Everyday Kids Court:3500"],
        ["Knee Pads", "Knee Pads", "Protective knee pads for players during matches.", "Mizuno/Mizuno VS1:1800|Mizuno/Mizuno Team:1500|Mizuno/Mizuno LR6:1700|Mizuno/Mizuno Junior:1200|Mizuno/Mizuno Long:2000|Asics/Asics Gel:1700|Asics/Asics Basic:1300|Asics/Asics Lightweight:1500|Asics/Asics Gel Guard:1800|Asics/Asics Long:2000|Others/Nike Streak:1800|Others/Adidas Guard:1600|Others/McDavid:2500|Others/Shock Doctor Sleeve:2800|Others/Everyday:1000|Others/Everyday Youth:800|Others/Everyday Compression Sleeve:1100"],
        ["Volleyball Jerseys", "Jersey", "Sports jerseys designed for volleyball players.", "Mizuno/Mizuno Team:2500|Mizuno/Mizuno Premium:3000|Mizuno/Mizuno Sleeveless:2200|Mizuno/Mizuno Women's:2500|Mizuno/Mizuno Libero:2800|Asics/Asics Team:2500|Asics/Asics Sleeveless:2200|Asics/Asics Libero:2700|Asics/Asics Women's:2500|Asics/Asics Training Tee:1800|Everyday/Everyday Volleyball Team:1500|Everyday/Everyday Junior:1200|Everyday/Everyday Libero:1800|Everyday/Everyday Training Singlet:1300|Everyday/Everyday Custom Name and Number:3000|Everyday/Beach Volleyball:1500"],
        ["Volleyball Equipment", "", "Nets and accessories for training and matches.", "Nets and Posts/Volleyball Net:3500|Nets and Posts/Competition Net:6500|Nets and Posts/Net Posts Set:9500|Nets and Posts/Beach Volleyball Net:4500|Nets and Posts/Net Antenna Pair:1500|Clothing and Support/Volleyball Shorts:1200|Clothing and Support/Volleyball Socks:500|Clothing and Support/Spandex Shorts:1300|Clothing and Support/Volleyball Ankle Brace:900|Clothing and Support/Elbow Pad:1000|Clothing and Support/Volleyball Arm Sleeves:900|Clothing and Support/Volleyball Headband:300|Training/Volleyball Pump:600|Training/Ball Cart:8500|Training/Volleyball Ball Bag:1500|Training/Training Rebound Net:5500|Training/Spike Training Aid:4500|Training/Volleyball Referee Whistle:400"]
    ],
    gym: [
        ["Dumbbells", "Dumbbells", "Weights for strength training and muscle exercises.", "Rubber Hex/Rubber Hex 2kg:1000|Rubber Hex/Rubber Hex 5kg:2000|Rubber Hex/Rubber Hex 10kg:3500|Rubber Hex/Rubber Hex 15kg:4800|Rubber Hex/Rubber Hex 20kg:6000|Rubber Hex/Rubber Hex 25kg:7500|Adjustable/Adjustable 10kg:4500|Adjustable/Adjustable 20kg:8000|Adjustable/Adjustable 24kg:9500|Adjustable/Adjustable 32kg:13000|Adjustable/Adjustable Set 40kg:16000|Vinyl and Cast Iron/Vinyl 2kg:800|Vinyl and Cast Iron/Vinyl 4kg:1500|Vinyl and Cast Iron/Vinyl 6kg:2200|Vinyl and Cast Iron/Cast Iron 10kg:3000|Vinyl and Cast Iron/Cast Iron 20kg:5500|Vinyl and Cast Iron/Chrome Set 20kg:6500"],
        ["Barbells and Plates", "", "Equipment for weightlifting and strength training.", "Barbells/Olympic Barbell:8000|Barbells/Standard Barbell:6000|Barbells/EZ Curl Bar:3500|Barbells/Trap Hex Bar:12000|Barbells/Women's Olympic Bar:7500|Barbells/Straight Curl Bar:3000|Weight Plates/Olympic Plate 2.5kg:1500|Weight Plates/Olympic Plate 5kg:2500|Weight Plates/Olympic Plate 10kg:4500|Weight Plates/Olympic Plate 15kg:6500|Weight Plates/Olympic Plate 20kg:8500|Weight Plates/Standard Plate 5kg:2000|Weight Plates/Standard Plate 10kg:3800|Racks and Add-Ons/Barbell Collars:800|Racks and Add-Ons/Squat Rack:25000|Racks and Add-Ons/Barbell Pad:1200|Racks and Add-Ons/Bar Storage Rack:6500|Racks and Add-Ons/Lifting Chalk:600|Racks and Add-Ons/Weight Tree:5500"],
        ["Cardio Machines", "", "Machines and tools for cardio workouts.", "Machines/Treadmill:65000|Machines/Folding Treadmill:48000|Machines/Exercise Bike:28000|Machines/Spin Bike:35000|Machines/Rowing Machine:42000|Machines/Elliptical Trainer:55000|Machines/Stair Stepper:18000|Machines/Mini Pedal Exerciser:6500|Home Cardio Gear/Skipping Rope:500|Home Cardio Gear/Speed Rope:900|Home Cardio Gear/Weighted Jump Rope:1500|Home Cardio Gear/Step Platform:3500|Home Cardio Gear/Ab Roller:1200|Home Cardio Gear/Battle Rope:6500|Home Cardio Gear/Gym Agility Ladder:1500|Home Cardio Gear/Plyo Jump Box:7500"],
        ["Gym Accessories", "", "Everyday gear for home workouts and gyms.", "Mats and Recovery/Exercise Mat:1500|Mats and Recovery/Yoga Mat:1800|Mats and Recovery/Foam Roller:1800|Mats and Recovery/Massage Ball:600|Mats and Recovery/Massage Gun:7500|Mats and Recovery/Stretch Strap:700|Strength Tools/Resistance Bands:800|Strength Tools/Resistance Tube Set:1800|Strength Tools/Kettlebell:3000|Strength Tools/Weight Bench:12000|Strength Tools/Pull-Up Bar:3500|Strength Tools/Push-Up Bars:1200|Wear and Carry/Gym Gloves:900|Wear and Carry/Lifting Straps:800|Wear and Carry/Weight Belt:2500|Wear and Carry/Gym Bag:2500|Wear and Carry/Shaker Bottle:700|Wear and Carry/Wrist Wraps:900|Wear and Carry/Gym Towel:600"]
    ],
    rugby: [
        ["Rugby Boots", "Rugby Boots", "Boots with grip for the scrum, tackles and sprints.", "Adidas/Adidas Malice:8500|Adidas/Adidas Kakari:7500|Adidas/Adidas Adizero RS15:9500|Adidas/Adidas Regulate Kakari:6500|Canterbury/Canterbury Stampede Pro:8000|Canterbury/Canterbury Speed Infinite Elite:9500|Canterbury/Canterbury Phoenix Raze:7500|Canterbury/Canterbury Control:6500|Canterbury/Canterbury Stampede Club:6000|Gilbert and Others/Gilbert Barbarian:7500|Gilbert and Others/Gilbert Falcon:6500|Gilbert and Others/Gilbert Sidestep:7000|Gilbert and Others/Optimum Raptor:5500|Gilbert and Others/Optimum Hurricane:5000|Gilbert and Others/Everyday Training:4000|Gilbert and Others/Everyday Junior:3000|Adidas/Adidas Adizero RS7:8000|Adidas/Adidas Predator Rugby:7500|Adidas/Adidas Malice Elite:9000|Adidas/Adidas Kakari SG:7500|Adidas/Adidas Regulate Malice:6000|Adidas/Adidas Junior Kakari:4500|Adidas/Adidas Adizero RS15 Pro:10000|Adidas/Adidas Malice SG:8000|Canterbury/Canterbury Stampede Elite:9000|Canterbury/Canterbury Speed Infinite Pro:9000|Canterbury/Canterbury Phoenix Genesis:8500|Canterbury/Canterbury Control Plus:7000|Canterbury/Canterbury Stampede Junior:4500|Canterbury/Canterbury Phoenix Pro:8000|Canterbury/Canterbury Raze:7500|Gilbert and Others/Gilbert Kharma:6500|Gilbert and Others/Gilbert Sidestep Pro:7500|Gilbert and Others/Gilbert Falcon Pro:7000|Gilbert and Others/Optimum Velocity:5000|Gilbert and Others/Optimum Junior:3500"],
        ["Rugby Balls", "Rugby Ball", "Balls for matches, sevens and training.", "Gilbert/Gilbert Match:4500|Gilbert/Gilbert Barbarian Replica:3500|Gilbert/Gilbert Omega Match:5500|Gilbert/Gilbert Photon Training:3200|Gilbert/Gilbert G-TR4000 Training:3000|Canterbury/Canterbury Match:3800|Canterbury/Canterbury Phoenix Elite:5000|Canterbury/Canterbury Thrillseeker Training:2800|Canterbury/Canterbury Sevens Match:4200|Canterbury/Canterbury Spirit Training:2500|Others/Optimum Tribal:2500|Others/Optimum Mini:1200|Others/Mitre Delta Match:4000|Others/Everyday Training:2200|Others/Everyday Junior Size 4:2000|Others/Everyday Beach:1800|Gilbert/Gilbert Match Replica:3800|Gilbert/Gilbert Barbarian Match:5000|Gilbert/Gilbert Torpedo Training:3000|Gilbert/Gilbert Pro Training:3200|Gilbert/Gilbert Sevens Match:4800|Gilbert/Gilbert Midi:1800|Gilbert/Gilbert Junior Size 4:2500|Canterbury/Canterbury Mini:1500|Canterbury/Canterbury Club Training:2600|Canterbury/Canterbury Junior Size 4:2500|Canterbury/Canterbury Pro Training:3000|Canterbury/Canterbury Replica:3000|Canterbury/Canterbury Phoenix Match:4500|Canterbury/Canterbury Training Size 5:2500|Others/Optimum Match:3500|Others/Optimum Training:2500|Others/Mitre Impel Training:2800|Others/Mitre Delta Replica:3500|Others/Everyday Size 3:1500|Others/Everyday Mini:1000"],
        ["Rugby Jerseys", "Jersey", "Durable jerseys for players and supporters.", "Kenya/Kenya Shujaa Home:2500|Kenya/Kenya Shujaa Away:2500|Kenya/Kenya Simbas Home:2500|Kenya/Kenya Simbas Away:2500|Kenya/Kenya Lionesses Home:2500|Kenya/Kenya Sevens Training:2000|International/South Africa Springboks Home:2500|International/New Zealand All Blacks Home:2500|International/Ireland Home:2500|International/Wales Home:2500|International/Fiji Home:2500|International/Australia Wallabies Home:2500|Team and Training/Everyday Rugby Team:1800|Team and Training/Everyday Rugby Training:1500|Team and Training/Everyday Kids:1200|Team and Training/Long Sleeve Training:2000|Team and Training/Polo:1800|Kenya/Kenya Shujaa Third:2500|Kenya/Kenya Simbas Third:2500|Kenya/Kenya Lionesses Away:2500|Kenya/Kenya Sevens Away:2500|Kenya/Kenya Kids Home:1800|Kenya/Kenya Supporters Long Sleeve:2800|International/England Home:2500|International/Scotland Home:2500|International/France Home:2500|International/Italy Home:2500|International/Argentina Pumas Home:2500|International/Japan Home:2500|Team and Training/Everyday Club:1800|Team and Training/Everyday School:1500|Team and Training/Everyday Youth Training:1300|Team and Training/Everyday Women's:1800|Team and Training/Rugby Custom Name and Number:3000|Team and Training/Sleeveless Training:1300|Team and Training/Match Day:2200"],
        ["Rugby Protection and Kit", "", "Protection and training kit for the pitch.", "Protection/Scrum Cap:2500|Protection/Rugby Mouthguard:700|Protection/Shoulder Pads:3500|Protection/Rugby Headgear Pro:3500|Protection/Padded Vest:4500|Protection/Elbow Support:1200|Protection/Ankle Strapping Tape:600|Kit/Rugby Shorts:1200|Kit/Rugby Socks:600|Kit/Rugby Gloves:1500|Kit/Compression Top:2200|Kit/Rugby Base Layer:2000|Training/Tackle Bag:6500|Training/Tackle Shield:9500|Training/Kicking Tee:500|Training/Rugby Ball Pump:600|Training/Rugby Cones:700|Training/Training Bibs Set:2500"]
    ],
    tennis: [
        ["Tennis Rackets", "Racket", "Rackets for control, power and spin.", "Wilson/Wilson Pro Staff 97:14000|Wilson/Wilson Blade 98:15000|Wilson/Wilson Clash 100:14500|Wilson/Wilson Ultra 100:13500|Wilson/Wilson Burn 100:12500|Babolat/Babolat Pure Drive:15500|Babolat/Babolat Pure Aero:16500|Babolat/Babolat Pure Strike:15000|Babolat/Babolat Boost Drive:8000|Babolat/Babolat Evo Aero:9000|Head, Yonex and Others/Head Speed MP:13500|Head, Yonex and Others/Head Radical:13000|Head, Yonex and Others/Head Boom:14000|Head, Yonex and Others/Head Gravity:14000|Head, Yonex and Others/Yonex Ezone 100:15000|Head, Yonex and Others/Yonex Vcore:14500|Head, Yonex and Others/Yonex Percept:13500|Head, Yonex and Others/Everyday Beginner:4500|Head, Yonex and Others/Everyday Junior:3500"],
        ["Tennis Balls", "Tennis Balls", "Tube of 3 balls for matches and practice.", "Wilson/Wilson US Open:900|Wilson/Wilson Championship:800|Wilson/Wilson Roland Garros:950|Wilson/Wilson Triniti:1100|Wilson/Wilson Starter Orange:700|Penn and Dunlop/Penn Championship:700|Penn and Dunlop/Penn Tour:750|Penn and Dunlop/Penn Pro Marathon:850|Penn and Dunlop/Dunlop ATP:800|Penn and Dunlop/Dunlop Fort:850|Penn and Dunlop/Dunlop Stage 1 Green:700|Slazenger and Others/Slazenger Wimbledon:1000|Slazenger and Others/Slazenger Ultra Vis:850|Slazenger and Others/Head Tour:850|Slazenger and Others/Head ATP:900|Slazenger and Others/Babolat Gold:950|Slazenger and Others/Everyday Practice:500|Slazenger and Others/Everyday Bucket of 24:3500"],
        ["Tennis Shoes", "Tennis Shoes", "Court shoes built for quick side-to-side movement.", "Nike/Nike Court Vapor:9000|Nike/Nike Zoom Vapor 11:11000|Nike/Nike Court Lite:7500|Nike/Nike Air Zoom Pro:10500|Nike/Nike Court Zoom NXT:9500|Adidas/Adidas Barricade:9500|Adidas/Adidas Adizero Ubersonic:10500|Adidas/Adidas CourtJam Control:8500|Adidas/Adidas Gamecourt:6500|Adidas/Adidas Defiant Speed:9000|Asics and Others/Asics Gel-Resolution:10500|Asics and Others/Asics Court FF:11500|Asics and Others/Asics Gel-Dedicate:7500|Asics and Others/Asics Solution Speed FF:11000|Asics and Others/Babolat Jet Mach 3:10500|Asics and Others/Head Sprint Pro:9500|Asics and Others/Everyday Court:4500|Asics and Others/Everyday Kids Court:3500"],
        ["Tennis Accessories", "", "Bags, grips and wear for the court.", "Bags and Grips/Racket Bag:3500|Bags and Grips/Racket Backpack:4500|Bags and Grips/6-Racket Tour Bag:7500|Bags and Grips/Overgrips (3 Pack):600|Bags and Grips/Replacement Grip:500|Bags and Grips/Racket Head Tape:400|Strings and Tools/Tennis String Set:1500|Strings and Tools/Premium Tennis Strings:2500|Strings and Tools/Vibration Dampener:300|Strings and Tools/Stringing Service:1500|Strings and Tools/Ball Retriever Tube:2500|Strings and Tools/Tennis Ball Hopper:6500|Court Wear/Tennis Wristbands:400|Court Wear/Tennis Headband:300|Court Wear/Tennis Cap:900|Court Wear/Tennis Visor:800|Court Wear/Tennis Skirt:2500|Court Wear/Tennis Shorts:1800|Court Wear/Tennis Polo:2200|Court Wear/Tennis Socks:600"]
    ],
    athletics: [
        ["Running Shoes", "Running Shoes", "Cushioned shoes for road running and training.", "Nike/Nike Pegasus 41:11000|Nike/Nike Invincible 3:16500|Nike/Nike Vomero 17:14000|Nike/Nike Structure 25:12000|Nike/Nike Journey Run:8000|Adidas and Asics/Adidas Adizero:10500|Adidas and Asics/Adidas Ultraboost:13500|Adidas and Asics/Adidas Supernova Rise:11000|Adidas and Asics/Asics Gel-Nimbus:12500|Adidas and Asics/Asics Gel-Kayano:13500|Adidas and Asics/Asics Novablast:12000|Adidas and Asics/Asics Gel-Contend:6500|Brooks and Others/Brooks Ghost:12000|Brooks and Others/Brooks Glycerin:14500|Brooks and Others/Brooks Adrenaline GTS:13000|Brooks and Others/Puma Deviate:9500|Brooks and Others/Puma Velocity Nitro:9000|Brooks and Others/Saucony Ride:13500|Brooks and Others/Hoka Clifton:14500|Brooks and Others/Everyday Trainers:4000|Brooks and Others/Everyday Kids:3000"],
        ["Track Spikes", "Spikes", "Lightweight spikes for sprints, distance, jumps and throws.", "Sprint/Nike Zoom Superfly Elite:12000|Sprint/Nike Zoom Ja Fly:10000|Sprint/Adidas Adizero Prime SP:10500|Sprint/Puma evoSPEED Sprint:8000|Sprint/Asics Hyper Sprint:7500|Sprint/Everyday Sprint:4500|Middle Distance/Nike Zoom Victory:12500|Middle Distance/Adidas Adizero Avanti:9500|Middle Distance/Puma evoSPEED Distance:8500|Middle Distance/Asics Hyper MD:8000|Middle Distance/Nike Zoom Rival:8000|Middle Distance/Everyday Distance:4500|Field Events/Nike Zoom Rotational Throw:8000|Field Events/Nike Zoom Javelin Elite:10000|Field Events/Adidas Jumpstar:9500|Field Events/Puma evoSPEED Long Jump:9000|Field Events/Everyday Field:4500"],
        ["Running Wear", "", "Light, breathable clothing for runners.", "Tops and Bottoms/Running Shorts:1200|Tops and Bottoms/Running Vest:1000|Tops and Bottoms/Compression Tights:2200|Tops and Bottoms/Running T-Shirt:1300|Tops and Bottoms/Long Sleeve Running Top:1800|Tops and Bottoms/Running Jacket:3500|Tops and Bottoms/Running Joggers:2500|Tops and Bottoms/Running Singlet:900|Layers/Running Windbreaker:3800|Layers/Thermal Running Top:2800|Layers/Rain Jacket:4500|Layers/Reflective Vest:1000|Layers/Running Skort:1800|Small Items/Running Cap:700|Small Items/Running Socks:600|Small Items/Compression Socks:1200|Small Items/Sweatband:300|Small Items/Running Gloves:1000|Small Items/Neck Buff:700|Small Items/Sun Visor:800|Small Items/Running Arm Sleeves:900"],
        ["Running Accessories", "", "Tools to carry, time and fuel your runs.", "Hydration and Fuel/Water Bottle:700|Hydration and Fuel/Hydration Belt:1800|Hydration and Fuel/Hydration Vest:4500|Hydration and Fuel/Collapsible Flask:900|Hydration and Fuel/Energy Gels (Box of 12):2800|Hydration and Fuel/Electrolyte Tablets:1200|Gear and Tracking/Running Armband:900|Gear and Tracking/Stopwatch:1200|Gear and Tracking/Sports Watch:6500|Gear and Tracking/Heart Rate Monitor:4500|Gear and Tracking/Running Belt:1500|Gear and Tracking/Headlamp:2000|Gear and Tracking/Race Number Belt:800|Recovery/Running Foam Roller:1800|Recovery/Massage Stick:1200|Recovery/Ice Pack Wrap:1500|Recovery/Blister Plasters:600|Recovery/Running Insoles:1800|Recovery/Compression Calf Sleeves:1500"]
    ]
};

// ==========================================
//  DABAY SPORTS SHOP - SITE LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    // ---- SHOP SETTINGS ----
    // Your WhatsApp number in international format, no + or spaces (Kenya example: 2547XXXXXXXX)
    const WHATSAPP_NUMBER = "2547XXXXXXXX";

    // Set to true to add an "All" button that shows every product in a category at once
    const SHOW_ALL_BUTTON = false;

    // ---- PRODUCT PHOTOS ----
    // Photos go in this folder, next to index.html. Each product looks for:
    //   <IMAGE_FOLDER><product name in lowercase, spaces and symbols turned into dashes><IMAGE_EXT>
    // Example: "Nike Mercurial Vapor 17"  ->  images/nike-mercurial-vapor-17.jpg
    const IMAGE_FOLDER = "downloads/";
    const IMAGE_EXT = ".jpg";

    // true = one folder per sport, e.g. images/football/nike-mercurial-vapor-17.jpg
    const FOLDER_PER_SPORT = false;

    // Different file name (or a web link) for one product? Add it here, one per line:
    //   "Nike Mercurial Vapor 17": "images/my-own-photo.png",
    const IMAGE_OVERRIDES = {
    };

    // Photo helper: open the site as  index.html?photos  to see the exact file name
    // under every product and which photos are still missing.
    const PHOTO_HELPER = new URLSearchParams(location.search).has("photos");   // or set to true while testing

    // Turn the compact text above into product objects, grouped under buttons
    const CATALOG = {};
    const ALL = [];
    SPORTS.forEach(([id, label]) => {
        CATALOG[id] = RAW[id].map(([type, noun, desc, text]) => {
            const groups = [];
            text.split("|").forEach(entry => {
                const [name, price] = entry.split(":");
                const [group, line] = name.includes("/") ? name.split("/") : [name, name];
                const p = { sport: id, sportLabel: label, type, group, line, desc,
                            name: noun ? `${line} ${noun}` : line, price: Number(price) };
                let g = groups.find(x => x.name === group);
                if (!g) { g = { name: group, items: [] }; groups.push(g); }
                g.items.push(p);
                ALL.push(p);
            });
            return { type, groups };
        });
    });

    // ---- BUILD THE PAGE ----
    const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    // Where each photo is expected
    const folderFor = p => IMAGE_FOLDER + (FOLDER_PER_SPORT ? p.sport + "/" : "");
    const photoFile = p => IMAGE_OVERRIDES[p.name] || `${folderFor(p)}${slug(p.name)}${IMAGE_EXT}`;
    const typePhotoFile = p => IMAGE_OVERRIDES[p.type] || `${folderFor(p)}${slug(p.type)}${IMAGE_EXT}`;

    function card(p) {
        const file = photoFile(p);
        return `
            <div class="product">
                <img src="${file}" data-fb="${typePhotoFile(p)}" alt="${p.name}" loading="lazy">
                ${PHOTO_HELPER ? `<code class="photo-path">${file}</code>` : ""}
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <p class="price">KSh ${p.price.toLocaleString()}</p>
                <button class="add-cart" data-name="${p.name}" data-price="${p.price}">Add to Cart</button>
            </div>`;
    }

    document.getElementById("nav-links").insertAdjacentHTML("beforeend",
        SPORTS.map(([id, label]) => `<a href="#${id}" data-section="${id}">${label}</a>`).join(""));

    document.querySelector(".categories").innerHTML = SPORTS.map(([id, label, tile]) => `
        <div class="category">
            <h3>${label}</h3>
            <p>${tile}</p>
            <button class="view-button" data-section="${id}">View Products</button>
        </div>`).join("");

    const sectionsHost = document.getElementById("sport-sections");
    sectionsHost.innerHTML = SPORTS.map(([id, label, , subtitle]) => `
        <section id="${id}" class="sport-section" hidden>
            <button class="back-button" data-home>&larr; Back to Home</button>
            <h2>${label} Products</h2>
            <p class="section-subtitle">${subtitle}</p>
            <div class="type-tabs"></div>
            <div class="line-chips"></div>
            <div class="products"></div>
        </section>`).join("");

    // Which product type (tab) and button (chip) is selected in each sport.
    // Nothing is selected at first, so no products show until the visitor clicks.
    const view = {};
    SPORTS.forEach(([id]) => view[id] = { t: -1, g: null });

    function renderSport(id) {
        const sec = document.getElementById(id);
        const v = view[id];
        const types = CATALOG[id];
        const current = types[v.t];
        const chipsEl = sec.querySelector(".line-chips");
        const productsEl = sec.querySelector(".products");

        sec.querySelector(".type-tabs").innerHTML = types.map((t, i) =>
            `<button class="type-tab${i === v.t ? " active" : ""}" data-t="${i}">${t.type}</button>`).join("");

        if (!current) {
            chipsEl.innerHTML = "";
            productsEl.innerHTML = `<p class="pick-hint">Choose a category above to see products.</p>`;
            return;
        }

        const groups = current.groups;
        const chips = groups.map((g, i) => ({ key: String(i), label: `${g.name} (${g.items.length})` }));
        if (SHOW_ALL_BUTTON && groups.length > 1) chips.unshift({ key: "all", label: "All" });

        chipsEl.innerHTML = groups.length > 1
            ? chips.map(c => `<button class="chip${c.key === v.g ? " active" : ""}" data-g="${c.key}">${c.label}</button>`).join("")
            : "";

        let items = null;
        if (v.g === "all") items = groups.flatMap(g => g.items);
        else if (v.g !== null) items = groups[Number(v.g)].items;

        productsEl.innerHTML = items
            ? items.map(card).join("")
            : `<p class="pick-hint">Pick a button above to see ${current.type}.</p>`;
    }

    SPORTS.forEach(([id]) => renderSport(id));

    sectionsHost.addEventListener("click", (e) => {
        const btn = e.target.closest(".type-tab, .chip");
        if (!btn) return;
        const id = btn.closest(".sport-section").id;
        if (btn.classList.contains("type-tab")) {
            const t = Number(btn.dataset.t);
            // A category with only one button shows its products straight away
            view[id] = { t, g: CATALOG[id][t].groups.length === 1 ? "0" : null };
        } else {
            view[id].g = btn.dataset.g;
        }
        renderSport(id);
    });

    // If a photo is missing: try the product-type photo, then show a neat placeholder
    document.addEventListener("error", (e) => {
        const img = e.target;
        if (img.tagName !== "IMG" || img.dataset.done) return;
        if (img.dataset.fb && !img.dataset.triedFb) {
            img.dataset.triedFb = "1";
            img.closest(".product")?.classList.add("photo-missing");
            img.src = img.dataset.fb;
            return;
        }
        img.closest(".product")?.classList.add("photo-missing");
        img.dataset.done = "1";
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="240" height="180" fill="#f1e9d8"/><text x="120" y="95" font-family="Arial" font-size="15" font-weight="bold" fill="#111111" text-anchor="middle">${img.alt}</text></svg>`;
        img.src = "data:image/svg+xml," + encodeURIComponent(svg);
    }, true);

    // ---- ELEMENTS ----
    const homeSection = document.getElementById("home");
    const sportSections = document.querySelectorAll(".sport-section");
    const cartSection = document.getElementById("cart-section");
    const navLinks = document.querySelectorAll("nav a");
    const navLinksContainer = document.getElementById("nav-links");
    const menuToggle = document.getElementById("menu-toggle");

    const cartButton = document.getElementById("cart-button");
    const cartCountEl = document.getElementById("cart-count");
    const cartItemsEl = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    const emptyCartMsg = document.getElementById("empty-cart-msg");
    const clearCartBtn = document.getElementById("clear-cart");
    const checkoutBtn = document.getElementById("checkout-btn");

    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results-container");
    const searchResultsGrid = document.getElementById("search-results");

    // ---- CART STATE (saved in the browser so it survives a refresh) ----
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("dabay-cart")) || []; } catch (err) { cart = []; }

    function saveCart() {
        try { localStorage.setItem("dabay-cart", JSON.stringify(cart)); } catch (err) { /* storage unavailable */ }
    }

    // ---- NAVIGATION ----
    menuToggle.addEventListener("click", () => navLinksContainer.classList.toggle("active"));

    function hideAllSections() {
        homeSection.hidden = true;
        cartSection.hidden = true;
        sportSections.forEach(sec => sec.hidden = true);
        navLinksContainer.classList.remove("active");
    }

    function setActiveNav(target) {
        navLinks.forEach(link => link.classList.remove("active"));
        if (target) target.classList.add("active");
    }

    function showHome() {
        hideAllSections();
        homeSection.hidden = false;
        setActiveNav(document.querySelector("nav a[data-home]"));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;
        hideAllSections();
        targetSection.hidden = false;
        setActiveNav(document.querySelector(`nav a[data-section="${sectionId}"]`));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.querySelectorAll("[data-home]").forEach(btn => {
        btn.addEventListener("click", (e) => { e.preventDefault(); showHome(); });
    });

    document.querySelectorAll("[data-section]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(btn.getAttribute("data-section"));
        });
    });

    cartButton.addEventListener("click", () => {
        hideAllSections();
        cartSection.hidden = false;
        setActiveNav(null);
        renderCart();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ---- CART ----
    function updateCartCount() {
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }

    function addToCart(name, price, buttonEl) {
        const existing = cart.find(item => item.name === name);
        if (existing) existing.qty += 1;
        else cart.push({ name, price: Number(price), qty: 1 });
        saveCart();
        updateCartCount();

        const originalText = buttonEl.textContent;
        buttonEl.textContent = "Added!";
        buttonEl.style.backgroundColor = "#e8dcc0";
        buttonEl.style.color = "#111111";
        setTimeout(() => {
            buttonEl.textContent = originalText;
            buttonEl.style.backgroundColor = "";
            buttonEl.style.color = "";
        }, 800);
    }

    function renderCart() {
        cartItemsEl.innerHTML = "";
        let total = 0;
        const empty = cart.length === 0;
        emptyCartMsg.hidden = !empty;
        clearCartBtn.hidden = empty;
        checkoutBtn.hidden = empty;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="cart-line"><strong>${item.name}</strong><small>KSh ${itemTotal.toLocaleString()}</small></span>
                <span class="qty-controls">
                    <button class="qty-btn" data-index="${index}" data-delta="-1" aria-label="Remove one ${item.name}">&minus;</button>
                    <span class="qty">${item.qty}</span>
                    <button class="qty-btn" data-index="${index}" data-delta="1" aria-label="Add one ${item.name}">+</button>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </span>`;
            cartItemsEl.appendChild(li);
        });

        cartTotalEl.textContent = total.toLocaleString();
    }

    cartItemsEl.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        const idx = Number(btn.dataset.index);
        if (btn.classList.contains("remove-item")) {
            cart.splice(idx, 1);
        } else if (btn.classList.contains("qty-btn")) {
            cart[idx].qty += Number(btn.dataset.delta);
            if (cart[idx].qty <= 0) cart.splice(idx, 1);
        } else return;
        saveCart();
        updateCartCount();
        renderCart();
    });

    clearCartBtn.addEventListener("click", () => {
        cart = [];
        saveCart();
        updateCartCount();
        renderCart();
    });

    checkoutBtn.addEventListener("click", () => {
        const lines = cart.map(i => `- ${i.name} x ${i.qty}: KSh ${(i.price * i.qty).toLocaleString()}`);
        const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
        const text = `Hello Dabay Sports Shop, I would like to order:\n${lines.join("\n")}\nTotal: KSh ${total.toLocaleString()}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    });

    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-cart")) {
            addToCart(e.target.dataset.name, e.target.dataset.price, e.target);
        }
    });

    // ---- LIVE SEARCH (matches sport, brand, product type, name and description) ----
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResultsGrid.innerHTML = "";

        if (!query) {
            searchResultsContainer.hidden = true;
            return;
        }

        const matches = ALL.filter(p =>
            `${p.name} ${p.group} ${p.type} ${p.sportLabel} ${p.desc}`.toLowerCase().includes(query));

        searchResultsContainer.hidden = false;

        if (matches.length === 0) {
            const msg = document.createElement("p");
            msg.textContent = `No products found matching "${searchInput.value.trim()}".`;
            searchResultsGrid.appendChild(msg);
        } else {
            searchResultsGrid.innerHTML = matches.map(card).join("");
        }
    });

    // ---- NAV TURNS SOLID WHEN SCROLLING ----
    const mainNav = document.querySelector("header nav");
    const onScroll = () => mainNav.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ---- PHOTO HELPER ----
    // In the browser console, type dabayPhotoList() to print every photo file name
    window.dabayPhotoList = () => { const list = ALL.map(photoFile); console.log(list.join("\n")); return list; };

    if (PHOTO_HELPER) {
        document.body.classList.add("photo-helper");
        document.body.insertAdjacentHTML("beforeend",
            `<div class="photo-banner">Photo helper is ON: each card shows the file name to save in your photos folder. Black labels = photo still missing.</div>`);
    }

    updateCartCount();
    renderCart();
});
})();