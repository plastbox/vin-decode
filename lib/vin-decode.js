(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['vin-decode'] = global['vin-decode'] || {})));
}(this, (function (exports) { 'use strict';

var manufacturers = [{
	"code": "55",
	"name": "Mercedes-Benz"
}, {
	"code": "829",
	"name": "Quantum"
}, {
	"code": "935",
	"name": "Citroën"
}, {
	"code": "936",
	"name": "Peugeot"
}, {
	"code": "953",
	"name": "VW Trucks / MAN"
}, {
	"code": "988",
	"name": "Jeep"
}, {
	"code": "AAV",
	"name": "Volkswagen"
}, {
	"code": "AHT",
	"name": "Toyota"
}, {
	"code": "AFA",
	"name": "Ford"
}, {
	"code": "CL9",
	"name": "Wallyscar"
}, {
	"code": "JA",
	"name": "Mitsubishi"
}, {
	"code": "JAL",
	"name": "Isuzu"
}, {
	"code": "JC1",
	"name": "Fiat Automobiles"
}, {
	"code": "JD",
	"name": "Daihatsu Motor Co. Ltd."
}, {
	"code": "JF1",
	"name": "Subaru"
}, {
	"code": "JF2",
	"name": "Subaru"
}, {
	"code": "JF3",
	"name": "Subaru"
}, {
	"code": "JF4",
	"name": "SAAB"
}, {
	"code": "JF5",
	"name": "Pontiac"
}, {
	"code": "JHL",
	"name": "Honda"
}, {
	"code": "JHM",
	"name": "Honda"
}, {
	"code": "JM0",
	"name": "Mazda"
}, {
	"code": "JM1",
	"name": "Mazda"
}, {
	"code": "JMB",
	"name": "Mitsubishi"
}, {
	"code": "JM6",
	"name": "Mazda"
}, {
	"code": "JN",
	"name": "Nissan"
}, {
	"code": "JS",
	"name": "Suzuki"
}, {
	"code": "JT",
	"name": "Toyota"
}, {
	"code": "JY",
	"name": "Yamaha"
}, {
	"code": "KL",
	"name": "Daewoo"
}, {
	"code": "KMH",
	"name": "Hyundai"
}, {
	"code": "KN",
	"name": "Kia"
}, {
	"code": "KPT",
	"name": "SsangYong"
}, {
	"code": "L2C",
	"name": "Chery Jaguar Land Rover"
}, {
	"code": "L6T",
	"name": "Geely"
}, {
	"code": "LA6",
	"name": "King Long"
}, {
	"code": "LB3",
	"name": "Geely"
}, {
	"code": "LBE",
	"name": "Beijing Hyundai"
}, {
	"code": "LBV",
	"name": "BMW Brilliance"
}, {
	"code": "LC0",
	"name": "BYD Industry"
}, {
	"code": "LDC",
	"name": "Dongfeng Peugeot-Citroën"
}, {
	"code": "LE4",
	"name": "Beijing Benz"
}, {
	"code": "LFM",
	"name": "FAW Toyota"
}, {
	"code": "LFP",
	"name": "FAW Car"
}, {
	"code": "LFV",
	"name": "FAW-Volkswagen"
}, {
	"code": "LGB",
	"name": "Dongfeng Nissan"
}, {
	"code": "LGJ",
	"name": "Dongfeng Fengshen"
}, {
	"code": "LGW",
	"name": "Great Wall"
}, {
	"code": "LGX",
	"name": "BYD Auto"
}, {
	"code": "LH1",
	"name": "FAW Haima"
}, {
	"code": "LHG",
	"name": "Guangzhou Honda"
}, {
	"code": "LJ1",
	"name": "JAC"
}, {
	"code": "LJD",
	"name": "Dongfeng Yueda Kia"
}, {
	"code": "LLV",
	"name": "Lifan"
}, {
	"code": "LMG",
	"name": "GAC Trumpchi"
}, {
	"code": "LPA",
	"name": "Changan PSA (DS Automobiles)"
}, {
	"code": "LS5",
	"name": "Changan Suzuki"
}, {
	"code": "LSFA",
	"name": "SAIC Maxus"
}, {
	"code": "LSG",
	"name": "SAIC General Motors"
}, {
	"code": "LSJ",
	"name": "SAIC MG"
}, {
	"code": "LSV",
	"name": "SAIC Volkswagen"
}, {
	"code": "LTV",
	"name": "FAW Toyota (Tianjin)"
}, {
	"code": "LVG",
	"name": "GAC Toyota"
}, {
	"code": "LVH",
	"name": "Dongfeng Honda"
}, {
	"code": "LVR",
	"name": "Changan Mazda"
}, {
	"code": "LVS",
	"name": "Changan Ford"
}, {
	"code": "LVV",
	"name": "Chery"
}, {
	"code": "LWV",
	"name": "GAC Fiat"
}, {
	"code": "LZW",
	"name": "SAIC GM Wuling"
}, {
	"code": "LZY",
	"name": "Yutong"
}, {
	"code": "MNT",
	"name": "Nissan"
}, {
	"code": "MM0",
	"name": "Mazda"
}, {
	"code": "MMB",
	"name": "Mitsubishi"
}, {
	"code": "MRH",
	"name": "Honda"
}, {
	"code": "MS0",
	"name": "Kia"
}, {
	"code": "NMT",
	"name": "Toyota"
}, {
	"code": "NM0",
	"name": "Ford Otosan"
}, {
	"code": "PL1",
	"name": "Proton"
}, {
	"code": "PL8",
	"name": "Hyundai Inokom"
}, {
	"code": "PLP",
	"name": "Subaru"
}, {
	"code": "PMH",
	"name": "Honda"
}, {
	"code": "PML",
	"name": "Hicom"
}, {
	"code": "PM1",
	"name": "BMW"
}, {
	"code": "PM2",
	"name": "Perodua"
}, {
	"code": "PM9",
	"name": "Bufori"
}, {
	"code": "PMK",
	"name": "Honda Boon Siew "
}, {
	"code": "PMN",
	"name": "Modenas"
}, {
	"code": "PMV",
	"name": "Yamaha Hong Leong "
}, {
	"code": "PNA",
	"name": "Peugeot"
}, {
	"code": "PNV",
	"name": "Volvo Cars"
}, {
	"code": "PN1",
	"name": "Toyota"
}, {
	"code": "PN8",
	"name": "Nissan"
}, {
	"code": "PP1",
	"name": "Mazda"
}, {
	"code": "PP3",
	"name": "Hyundai"
}, {
	"code": "PPP",
	"name": "Suzuki"
}, {
	"code": "PR8",
	"name": "Ford"
}, {
	"code": "SAB",
	"name": "Optare"
}, {
	"code": "SAJ",
	"name": "Jaguar"
}, {
	"code": "SAL",
	"name": "Land Rover"
}, {
	"code": "SAR",
	"name": "Rover"
}, {
	"code": "SAT",
	"name": "Triumph"
}, {
	"code": "SB1",
	"name": "Toyota"
}, {
	"code": "SBM",
	"name": "McLaren Automotive"
}, {
	"code": "SCC",
	"name": "Lotus Cars"
}, {
	"code": "SCF",
	"name": "Aston Martin Lagonda Limited"
}, {
	"code": "SCE",
	"name": "DeLorean"
}, {
	"code": "SFD",
	"name": "Alexander Dennis"
}, {
	"code": "SFE",
	"name": "Alexander Dennis (North America)"
}, {
	"code": "SHH",
	"name": "Honda"
}, {
	"code": "SHS",
	"name": "Honda"
}, {
	"code": "SJN",
	"name": "Nissan"
}, {
	"code": "TCC",
	"name": "Micro Compact Car"
}, {
	"code": "TMA",
	"name": "Hyundai"
}, {
	"code": "TMB",
	"name": "Škoda"
}, {
	"code": "TRU",
	"name": "Audi"
}, {
	"code": "TSM",
	"name": "Suzuki"
}, {
	"code": "U5Y",
	"name": "Kia"
}, {
	"code": "UU",
	"name": "Dacia"
}, {
	"code": "VA0",
	"name": "ÖAF"
}, {
	"code": "VF1",
	"name": "Renault"
}, {
	"code": "VF2",
	"name": "Renault"
}, {
	"code": "VF3",
	"name": "Peugeot"
}, {
	"code": "VF4",
	"name": "Talbot"
}, {
	"code": "VF5",
	"name": "Iveco Unic SA"
}, {
	"code": "VF6",
	"name": "Renault Trucks"
}, {
	"code": "VF7",
	"name": "Citroën"
}, {
	"code": "VF8",
	"name": "Matra/Talbot/Simca"
}, {
	"code": "VF9",
	"name": "Bugatti"
}, {
	"code": "VFE",
	"name": "IvecoBus"
}, {
	"code": "VNK",
	"name": "Toyota"
}, {
	"code": "VR1",
	"name": "DS Automobiles"
}, {
	"code": "VSS",
	"name": "SEAT"
}, {
	"code": "VS7",
	"name": "Citroën"
}, {
	"code": "VV9",
	"name": "Tauro Sport Auto"
}, {
	"code": "WAG",
	"name": "Neoplan"
}, {
	"code": "WAU",
	"name": "Audi"
}, {
	"code": "WAP",
	"name": "Alpina"
}, {
	"code": "WBA",
	"name": "BMW"
}, {
	"code": "WBS",
	"name": "BMW M"
}, {
	"code": "WBX",
	"name": "BMW"
}, {
	"code": "WDB",
	"name": "Mercedes-Benz"
}, {
	"code": "WDC",
	"name": "DaimlerChrysler AG/Daimler AG"
}, {
	"code": "WDD",
	"name": "DaimlerChrysler AG/Daimler AG"
}, {
	"code": "WMX",
	"name": "DaimlerChrysler AG/Daimler AG"
}, {
	"code": "WEB",
	"name": "EvoBus"
}, {
	"code": "WF0",
	"name": "Ford of Europe"
}, {
	"code": "WJM",
	"name": "Iveco"
}, {
	"code": "WJR",
	"name": "Irmscher"
}, {
	"code": "WKK",
	"name": "Karl Kässbohrer Fahrzeugwerke"
}, {
	"code": "WMA",
	"name": "MAN"
}, {
	"code": "WME",
	"name": "Smart"
}, {
	"code": "WMW",
	"name": "Mini"
}, {
	"code": "WP0",
	"name": "Porsche"
}, {
	"code": "WP1",
	"name": "Porsche"
}, {
	"code": "WUA",
	"name": "Quattro"
}, {
	"code": "WVG",
	"name": "Volkswagen"
}, {
	"code": "WVW",
	"name": "Volkswagen"
}, {
	"code": "WV1",
	"name": "Volkswagen Commercial Vehicles"
}, {
	"code": "WV2",
	"name": "Volkswagen Commercial Vehicles"
}, {
	"code": "W09",
	"name": "Ruf Automobile"
}, {
	"code": "W0L",
	"name": "Opel"
}, {
	"code": "W0SV",
	"name": "Opel Special Vehicles"
}, {
	"code": "XLR",
	"name": "DAF Trucks"
}, {
	"code": "XTA",
	"name": "AvtoVAZ"
}, {
	"code": "XTB",
	"name": "AZLK"
}, {
	"code": "YK1",
	"name": "Saab"
}, {
	"code": "YS2",
	"name": "Scania"
}, {
	"code": "YS3",
	"name": "Saab"
}, {
	"code": "YS4",
	"name": "Katrineholm"
}, {
	"code": "YTN",
	"name": "Saab NEVS"
}, {
	"code": "YV1",
	"name": "Volvo Cars"
}, {
	"code": "YV2",
	"name": "Volvo Trucks"
}, {
	"code": "YV3",
	"name": "Volvo Buses"
}, {
	"code": "YT9",
	"name": "Koenigsegg Automotive AB"
}, {
	"code": "ZA9",
	"name": "Bugatti"
}, {
	"code": "ZAM",
	"name": "Maserati"
}, {
	"code": "ZAP",
	"name": "Piaggio"
}, {
	"code": "ZAR",
	"name": "Alfa Romeo"
}, {
	"code": "ZCF",
	"name": "Iveco"
}, {
	"code": "ZFA",
	"name": "Fiat"
}, {
	"code": "ZFF",
	"name": "Ferrari"
}, {
	"code": "ZGA",
	"name": "IvecoBus"
}, {
	"code": "ZHW",
	"name": "Lamborghini"
}, {
	"code": "ZLA",
	"name": "Lancia"
}, {
	"code": "1B",
	"name": "Dodge"
}, {
	"code": "1C",
	"name": "Chrysler"
}, {
	"code": "1F",
	"name": "Ford"
}, {
	"code": "1G",
	"name": "General Motors"
}, {
	"code": "1G1",
	"name": "Chevrolet"
}, {
	"code": "1G3",
	"name": "Oldsmobile"
}, {
	"code": "1G4",
	"name": "Buick"
}, {
	"code": "1G9",
	"name": "Google"
}, {
	"code": "1GB",
	"name": ""
}, {
	"code": "1GC",
	"name": "Chevrolet"
}, {
	"code": "1GD",
	"name": ""
}, {
	"code": "1GM",
	"name": "Pontiac"
}, {
	"code": "1HG",
	"name": "Honda"
}, {
	"code": "1J",
	"name": "Jeep"
}, {
	"code": "1L",
	"name": "Lincoln"
}, {
	"code": "1M",
	"name": "Mercury"
}, {
	"code": "1MR",
	"name": "Continental"
}, {
	"code": "1N",
	"name": "Nissan"
}, {
	"code": "1VW",
	"name": "Volkswagen"
}, {
	"code": "1YV",
	"name": "Mazda"
}, {
	"code": "1ZV",
	"name": "Ford"
}, {
	"code": "2DG",
	"name": "Ontario Drive &amp; Gear"
}, {
	"code": "2F",
	"name": "Ford"
}, {
	"code": "2Gx",
	"name": "General Motors"
}, {
	"code": "2G1",
	"name": "Chevrolet"
}, {
	"code": "2G2",
	"name": "Pontiac"
}, {
	"code": "2G9",
	"name": "Gnome Homes"
}, {
	"code": "2HG",
	"name": "Honda"
}, {
	"code": "2HH",
	"name": "Acura"
}, {
	"code": "2HJ",
	"name": "Honda"
}, {
	"code": "2HK",
	"name": "Honda"
}, {
	"code": "2HM",
	"name": "Hyundai"
}, {
	"code": "2L9",
	"name": "Les Contenants Durabac"
}, {
	"code": "2LN",
	"name": "Lincoln"
}, {
	"code": "2M",
	"name": "Mercury"
}, {
	"code": "2T",
	"name": "Toyota"
}, {
	"code": "3F",
	"name": "Ford"
}, {
	"code": "3G",
	"name": "General Motors"
}, {
	"code": "3HG",
	"name": "Honda"
}, {
	"code": "3HM",
	"name": "Honda"
}, {
	"code": "3KP",
	"name": "Kia"
}, {
	"code": "3N",
	"name": "Nissan"
}, {
	"code": "3VW",
	"name": "Volkswagen"
}, {
	"code": "4F",
	"name": "Mazda"
}, {
	"code": "4J",
	"name": "Mercedes-Benz"
}, {
	"code": "4M",
	"name": "Mercury"
}, {
	"code": "4S3",
	"name": "Subaru"
}, {
	"code": "4S4",
	"name": "Subaru"
}, {
	"code": "4S6",
	"name": "Honda"
}, {
	"code": "4T",
	"name": "Toyota"
}, {
	"code": "4US",
	"name": "BMW"
}, {
	"code": "5FN",
	"name": "Honda"
}, {
	"code": "5J6",
	"name": "Honda"
}, {
	"code": "5L",
	"name": "Lincoln"
}, {
	"code": "5N1",
	"name": "Nissan"
}, {
	"code": "5NM",
	"name": "Hyundai"
}, {
	"code": "5NP",
	"name": "Hyundai"
}, {
	"code": "5T",
	"name": "Toyota"
}, {
	"code": "5U",
	"name": "BMW"
}, {
	"code": "5X",
	"name": "Hyundai"
}, {
	"code": "5YJ",
	"name": "Tesla"
}, {
	"code": "6F",
	"name": "Ford"
}, {
	"code": "6G",
	"name": "General Motors"
}, {
	"code": "6G1",
	"name": "Chevrolet"
}, {
	"code": "6G2",
	"name": "Pontiac"
}, {
	"code": "6H",
	"name": "Holden"
}, {
	"code": "6MM",
	"name": "Mitsubishi"
}, {
	"code": "6T1",
	"name": "Toyota"
}, {
	"code": "6U9",
	"name": ""
}, {
	"code": "7A1",
	"name": "Mitsubishi"
}, {
	"code": "7A3",
	"name": "Honda"
}, {
	"code": "7A4",
	"name": "Toyota"
}, {
	"code": "7A5",
	"name": "Ford"
}, {
	"code": "7A8",
	"name": "NZ Transport Agency"
}, {
	"code": "7AT",
	"name": "NZ Transport Agency"
}, {
	"code": "8AP",
	"name": "Fiat"
}, {
	"code": "8AF",
	"name": "Ford"
}, {
	"code": "8AG",
	"name": "General Motors"
}, {
	"code": "8AW",
	"name": "Volkswagen"
}, {
	"code": "8AJ",
	"name": "Toyota"
}, {
	"code": "8A1",
	"name": "Renault"
}, {
	"code": "8AC",
	"name": "Mercedes Benz"
}, {
	"code": "8BC",
	"name": "Citroën"
}, {
	"code": "8AD",
	"name": "Peugeot"
}, {
	"code": "8C3",
	"name": "Honda"
}, {
	"code": "8AT",
	"name": "Iveco"
}, {
	"code": "9BD",
	"name": "Fiat Automóveis"
}, {
	"code": "9BG",
	"name": "General Motors"
}, {
	"code": "9BW",
	"name": "Volkswagen"
}, {
	"code": "9BF",
	"name": "Ford"
}, {
	"code": "93H",
	"name": "Honda"
}, {
	"code": "9BR",
	"name": "Toyota"
}, {
	"code": "93Y",
	"name": "Renault"
}, {
	"code": "9BH",
	"name": "Hyundai"
}, {
	"code": "95P",
	"name": "CAOA / Hyundai"
}, {
	"code": "94D",
	"name": "Nissan"
}, {
	"code": "98R",
	"name": "Chery"
}, {
	"code": "98M",
	"name": "BMW"
}, {
	"code": "9BM",
	"name": "Mercedes-Benz"
}, {
	"code": "99A",
	"name": "Audi"
}, {
	"code": "99J",
	"name": "Jaguar Land Rover"
}, {
	"code": "9C2",
	"name": "Honda Motorcycles"
}, {
	"code": "9C6",
	"name": "Yamaha"
}, {
	"code": "9CD",
	"name": "Suzuki (motorcycles)"
}, {
	"code": "93W",
	"name": "Fiat Professional"
}, {
	"code": "93Z",
	"name": "Iveco"
}, {
	"code": "9BS",
	"name": "Scania"
}, {
	"code": "9BV",
	"name": "Volvo Trucks"
}, {
	"code": "9FB",
	"name": "Renault"
}, {
	"code": "9UJ",
	"name": "Chery"
}, {
	"code": "9UK",
	"name": "Lifan"
}, {
	"code": "9UW",
	"name": "Kia"
}];

var countries = [{
	"code": "55",
	"name": "United States"
}, {
	"code": "82",
	"name": "Bolivia"
}, {
	"code": "93",
	"name": "Brazil"
}, {
	"code": "95",
	"name": "Brazil"
}, {
	"code": "98",
	"name": "Brazil"
}, {
	"code": "AA",
	"name": "South Africa"
}, {
	"code": "AH",
	"name": "South Africa"
}, {
	"code": "AF",
	"name": "South Africa"
}, {
	"code": "CL",
	"name": "Tunisia"
}, {
	"code": "JA",
	"name": "Japan"
}, {
	"code": "JC",
	"name": "Japan"
}, {
	"code": "JD",
	"name": "Japan"
}, {
	"code": "JF",
	"name": "Japan"
}, {
	"code": "JH",
	"name": "Japan"
}, {
	"code": "JM",
	"name": "Japan"
}, {
	"code": "JN",
	"name": "Japan"
}, {
	"code": "JS",
	"name": "Japan"
}, {
	"code": "JT",
	"name": "Japan"
}, {
	"code": "JY",
	"name": "Japan"
}, {
	"code": "KL",
	"name": "South Korea"
}, {
	"code": "KM",
	"name": "South Korea"
}, {
	"code": "KN",
	"name": "South Korea"
}, {
	"code": "KP",
	"name": "South Korea"
}, {
	"code": "L2",
	"name": "China"
}, {
	"code": "L6",
	"name": "China"
}, {
	"code": "LA",
	"name": "China"
}, {
	"code": "LB",
	"name": "China"
}, {
	"code": "LC",
	"name": "China"
}, {
	"code": "LD",
	"name": "China"
}, {
	"code": "LE",
	"name": "China"
}, {
	"code": "LF",
	"name": "China"
}, {
	"code": "LG",
	"name": "China"
}, {
	"code": "LH",
	"name": "China"
}, {
	"code": "LJ",
	"name": "China"
}, {
	"code": "LL",
	"name": "China"
}, {
	"code": "LM",
	"name": "China"
}, {
	"code": "LP",
	"name": "China"
}, {
	"code": "LS",
	"name": "China"
}, {
	"code": "LT",
	"name": "China"
}, {
	"code": "LV",
	"name": "China"
}, {
	"code": "LW",
	"name": "China"
}, {
	"code": "LZ",
	"name": "China"
}, {
	"code": "MN",
	"name": "Thailand"
}, {
	"code": "MM",
	"name": "Thailand"
}, {
	"code": "MR",
	"name": "Thailand"
}, {
	"code": "MS",
	"name": "Myanmar"
}, {
	"code": "NM",
	"name": "Turkey"
}, {
	"code": "PL",
	"name": "Malaysia"
}, {
	"code": "PM",
	"name": "Malaysia"
}, {
	"code": "PN",
	"name": "Malaysia"
}, {
	"code": "PP",
	"name": "Malaysia"
}, {
	"code": "PR",
	"name": "Malaysia"
}, {
	"code": "SA",
	"name": "United Kingdom"
}, {
	"code": "SB",
	"name": "United Kingdom"
}, {
	"code": "SC",
	"name": "United Kingdom"
}, {
	"code": "SF",
	"name": "United Kingdom"
}, {
	"code": "SH",
	"name": "United Kingdom"
}, {
	"code": "SJ",
	"name": "United Kingdom"
}, {
	"code": "TC",
	"name": "Switzerland"
}, {
	"code": "TM",
	"name": "Czech Republic"
}, {
	"code": "TR",
	"name": "Hungary"
}, {
	"code": "TS",
	"name": "Hungary"
}, {
	"code": "U5",
	"name": "Slovakia"
}, {
	"code": "UU",
	"name": "Romania"
}, {
	"code": "VA",
	"name": "Austria"
}, {
	"code": "VF",
	"name": "France"
}, {
	"code": "VN",
	"name": "France"
}, {
	"code": "VR",
	"name": "France"
}, {
	"code": "VS",
	"name": "Spain"
}, {
	"code": "VV",
	"name": "Spain"
}, {
	"code": "WA",
	"name": "Germany"
}, {
	"code": "WB",
	"name": "Germany"
}, {
	"code": "WD",
	"name": "Germany"
}, {
	"code": "WM",
	"name": "Germany"
}, {
	"code": "WE",
	"name": "Germany"
}, {
	"code": "WF",
	"name": "Germany"
}, {
	"code": "WJ",
	"name": "Germany"
}, {
	"code": "WK",
	"name": "Germany"
}, {
	"code": "WP",
	"name": "Germany"
}, {
	"code": "WU",
	"name": "Germany"
}, {
	"code": "WV",
	"name": "Germany"
}, {
	"code": "W0",
	"name": "Germany"
}, {
	"code": "XL",
	"name": "Netherlands"
}, {
	"code": "XT",
	"name": "Russia"
}, {
	"code": "YK",
	"name": "Finland"
}, {
	"code": "YS",
	"name": "Sweden"
}, {
	"code": "YT",
	"name": "Sweden"
}, {
	"code": "YV",
	"name": "Sweden"
}, {
	"code": "ZA",
	"name": "Italy"
}, {
	"code": "ZC",
	"name": "Italy"
}, {
	"code": "ZF",
	"name": "Italy"
}, {
	"code": "ZG",
	"name": "Italy"
}, {
	"code": "ZH",
	"name": "Italy"
}, {
	"code": "ZL",
	"name": "Italy"
}, {
	"code": "1B",
	"name": "United States"
}, {
	"code": "1C",
	"name": "United States"
}, {
	"code": "1F",
	"name": "United States"
}, {
	"code": "1G",
	"name": "United States"
}, {
	"code": "1H",
	"name": "United States"
}, {
	"code": "1J",
	"name": "United States"
}, {
	"code": "1L",
	"name": "United States"
}, {
	"code": "1M",
	"name": "United States"
}, {
	"code": "1N",
	"name": "United States"
}, {
	"code": "1V",
	"name": "United States"
}, {
	"code": "1Y",
	"name": "United States"
}, {
	"code": "1Z",
	"name": "United States"
}, {
	"code": "2D",
	"name": "Canada"
}, {
	"code": "2F",
	"name": "Canada"
}, {
	"code": "2G",
	"name": "Canada"
}, {
	"code": "2H",
	"name": "Canada"
}, {
	"code": "2L",
	"name": "Canada"
}, {
	"code": "2M",
	"name": "Canada"
}, {
	"code": "2T",
	"name": "Canada"
}, {
	"code": "3F",
	"name": "Mexico"
}, {
	"code": "3G",
	"name": "Mexico"
}, {
	"code": "3H",
	"name": "Mexico"
}, {
	"code": "3K",
	"name": "Mexico"
}, {
	"code": "3N",
	"name": "Mexico"
}, {
	"code": "3V",
	"name": "Mexico"
}, {
	"code": "4F",
	"name": "United States"
}, {
	"code": "4J",
	"name": "United States"
}, {
	"code": "4M",
	"name": "United States"
}, {
	"code": "4S",
	"name": "United States"
}, {
	"code": "4T",
	"name": "United States"
}, {
	"code": "4U",
	"name": "United States"
}, {
	"code": "5F",
	"name": "United States"
}, {
	"code": "5J",
	"name": "United States"
}, {
	"code": "5L",
	"name": "United States"
}, {
	"code": "5N",
	"name": "United States"
}, {
	"code": "5T",
	"name": "United States"
}, {
	"code": "5U",
	"name": "United States"
}, {
	"code": "5X",
	"name": "United States"
}, {
	"code": "5Y",
	"name": "United States"
}, {
	"code": "6F",
	"name": "Australia"
}, {
	"code": "6G",
	"name": "Australia"
}, {
	"code": "6H",
	"name": "Australia"
}, {
	"code": "6M",
	"name": "Australia"
}, {
	"code": "6T",
	"name": "Australia"
}, {
	"code": "6U",
	"name": "Australia"
}, {
	"code": "7A",
	"name": "New Zealand"
}, {
	"code": "8A",
	"name": "Argentina"
}, {
	"code": "8B",
	"name": "Argentina"
}, {
	"code": "8C",
	"name": "Argentina"
}, {
	"code": "9B",
	"name": "Brazil"
}, {
	"code": "94",
	"name": "Brazil"
}, {
	"code": "99",
	"name": "Brazil"
}, {
	"code": "9C",
	"name": "Brazil"
}, {
	"code": "9F",
	"name": "Colombia"
}, {
	"code": "9U",
	"name": "Uruguay"
}];

var validVin = function validVin(vin) {
  return vin && vin.length === 17;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var indexes = {
  MADE_IN_START: 0,
  MADE_IN_END: 2,
  MANUFACTURER_START: 0,
  MANUFACTURER_END: 3,
  DETAILS_START: 3,
  DETAILS_END: 8,
  SECURITY_CODE: 8,
  YEAR: 9,
  ASSEMBLY_PLANT: 10,
  SERIAL_NUMBER_START: 11
};

var yearCodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var find = function find(collection, code) {
  var result = null;
  collection.forEach(function (el) {
    if (result) {
      return;
    }
    if (el.code === code) {
      result = el;
    }
  });
  return result;
};

var decodeManufacturer = function decodeManufacturer(code) {
  console.log('decodeManufacturer', code, manufacturers);
  var result = find(manufacturers, code);
  return result ? result.name : result;
};
var decodeCountry = function decodeCountry(code) {
  var result = find(countries, code);
  return result ? result.name : result;
};
var decodeYear = function decodeYear(code) {
  var now = new Date();
  var currentYear = now.getFullYear();

  var yearOffset = yearCodes.indexOf(code);

  if (yearOffset === -1) {
    return [];
  }

  var possibleYears = [2010 + yearOffset, 1980 + yearOffset];

  if (possibleYears[1] > currentYear) {
    return [possibleYears[1]];
  }
  if (possibleYears[0] > currentYear) {
    return [possibleYears[1]];
  }
  return possibleYears;
};

var vinDecoder = function vinDecoder(vin) {
  var valid = validVin(vin);
  if (!valid) {
    return false;
  }
  var vinDecoderInstance = {
    validate: function validate() {
      return valid;
    },
    decode: function decode() {
      var values = vinDecoderInstance.split();
      return _extends({}, values, {
        manufacturer: decodeManufacturer(values.manufacturer),
        country: decodeCountry(values.country),
        possibleYears: decodeYear(values.year),
        year: decodeYear(values.year)[0] || null
      });
    },
    split: function split() {
      return {
        country: vin.substring(indexes.MADE_IN_START, indexes.MADE_IN_END),
        manufacturer: vin.substring(indexes.MANUFACTURER_START, indexes.MANUFACTURER_END),
        details: vin.substring(indexes.DETAILS_START, indexes.DETAILS_END),
        securityCode: vin.charAt(indexes.SECURITY_CODE),
        year: vin.charAt(indexes.YEAR),
        assemblyPlant: vin.charAt(indexes.ASSEMBLY_PLANT),
        serialNumber: vin.substring(indexes.SERIAL_NUMBER_START)
      };
    }
  };
  return vinDecoderInstance;
};

exports['default'] = vinDecoder;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vin-decode.js.map
