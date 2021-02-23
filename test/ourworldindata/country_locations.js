let countryLocations = [
  {
    "Country": "Kosovo",
    "ISO-ALPHA-2": "XK",
    "ISO-ALPHA-3": "",
    "IOC": "KOS",
    "FIFA": "KVX",
    "latitude": 42.602636,
    "longitude": 20.902977
  },
  {
    "Country": "Aruba",
    "ISO-ALPHA-2": "AW",
    "ISO-ALPHA-3": "ABW",
    "IOC": "ARU",
    "FIFA": "ARU",
    "latitude": 12.52111,
    "longitude": -69.968338
  },
  {
    "Country": "Afghanistan",
    "ISO-ALPHA-2": "AF",
    "ISO-ALPHA-3": "AFG",
    "IOC": "AFG",
    "FIFA": "AFG",
    "latitude": 33.93911,
    "longitude": 67.709953
  },
  {
    "Country": "Angola",
    "ISO-ALPHA-2": "AO",
    "ISO-ALPHA-3": "AGO",
    "IOC": "ANG",
    "FIFA": "ANG",
    "latitude": -11.202692,
    "longitude": 17.873887
  },
  {
    "Country": "Anguilla",
    "ISO-ALPHA-2": "AI",
    "ISO-ALPHA-3": "AIA",
    "IOC": "",
    "FIFA": "AIA",
    "latitude": 18.220554,
    "longitude": -63.068615
  },
  {
    "Country": "Åland Islands",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "ALA",
    "IOC": "",
    "FIFA": "",
    "latitude": 60.250716,
    "longitude": 20.374146
  },
  {
    "Country": "Albania",
    "ISO-ALPHA-2": "AL",
    "ISO-ALPHA-3": "ALB",
    "IOC": "ALB",
    "FIFA": "ALB",
    "latitude": 41.153332,
    "longitude": 20.168331
  },
  {
    "Country": "Andorra",
    "ISO-ALPHA-2": "AD",
    "ISO-ALPHA-3": "AND",
    "IOC": "AND",
    "FIFA": "AND",
    "latitude": 42.546245,
    "longitude": 1.601554
  },
  {
    "Country": "Netherlands Antilles",
    "ISO-ALPHA-2": "AN",
    "ISO-ALPHA-3": "ANT",
    "IOC": "AHO",
    "FIFA": "ANT",
    "latitude": 12.226079,
    "longitude": -69.060087
  },
  {
    "Country": "United Arab Emirates",
    "ISO-ALPHA-2": "AE",
    "ISO-ALPHA-3": "ARE",
    "IOC": "UAE",
    "FIFA": "UAE",
    "latitude": 23.424076,
    "longitude": 53.847818
  },
  {
    "Country": "Argentina",
    "ISO-ALPHA-2": "AR",
    "ISO-ALPHA-3": "ARG",
    "IOC": "ARG",
    "FIFA": "ARG",
    "latitude": -38.416097,
    "longitude": -63.616672
  },
  {
    "Country": "Armenia",
    "ISO-ALPHA-2": "AM",
    "ISO-ALPHA-3": "ARM",
    "IOC": "ARM",
    "FIFA": "ARM",
    "latitude": 40.069099,
    "longitude": 45.038189
  },
  {
    "Country": "American Samoa",
    "ISO-ALPHA-2": "AS",
    "ISO-ALPHA-3": "ASM",
    "IOC": "ASA",
    "FIFA": "ASA",
    "latitude": -14.270972,
    "longitude": -170.132217
  },
  {
    "Country": "Antarctica",
    "ISO-ALPHA-2": "AQ",
    "ISO-ALPHA-3": "ATA",
    "IOC": "",
    "FIFA": "",
    "latitude": -75.250973,
    "longitude": -0.071389
  },
  {
    "Country": "French Southern and Antarctic Lands",
    "ISO-ALPHA-2": "TF",
    "ISO-ALPHA-3": "ATF",
    "IOC": "",
    "FIFA": "",
    "latitude": -49.280366,
    "longitude": 69.348557
  },
  {
    "Country": "French Southern Territories",
    "ISO-ALPHA-2": "TF",
    "ISO-ALPHA-3": "ATF",
    "IOC": "",
    "FIFA": "",
    "latitude": -49.280366,
    "longitude": 69.348557
  },
  {
    "Country": "Antigua and Barbuda",
    "ISO-ALPHA-2": "AG",
    "ISO-ALPHA-3": "ATG",
    "IOC": "ANT",
    "FIFA": "ATG",
    "latitude": 17.060816,
    "longitude": -61.796428
  },
  {
    "Country": "Australia",
    "ISO-ALPHA-2": "AU",
    "ISO-ALPHA-3": "AUS",
    "IOC": "AUS",
    "FIFA": "AUS",
    "latitude": -25.274398,
    "longitude": 133.775136
  },
  {
    "Country": "Austria",
    "ISO-ALPHA-2": "AT",
    "ISO-ALPHA-3": "AUT",
    "IOC": "AUT",
    "FIFA": "AUT",
    "latitude": 47.516231,
    "longitude": 14.550072
  },
  {
    "Country": "Azerbaijan",
    "ISO-ALPHA-2": "AZ",
    "ISO-ALPHA-3": "AZE",
    "IOC": "AZE",
    "FIFA": "AZE",
    "latitude": 40.143105,
    "longitude": 47.576927
  },
  {
    "Country": "Burundi",
    "ISO-ALPHA-2": "BI",
    "ISO-ALPHA-3": "BDI",
    "IOC": "BDI",
    "FIFA": "BDI",
    "latitude": -3.373056,
    "longitude": 29.918886
  },
  {
    "Country": "Belgium",
    "ISO-ALPHA-2": "BE",
    "ISO-ALPHA-3": "BEL",
    "IOC": "BEL",
    "FIFA": "BEL",
    "latitude": 50.503887,
    "longitude": 4.469936
  },
  {
    "Country": "Benin",
    "ISO-ALPHA-2": "BJ",
    "ISO-ALPHA-3": "BEN",
    "IOC": "BEN",
    "FIFA": "BEN",
    "latitude": 9.30769,
    "longitude": 2.315834
  },
  {
    "Country": "Bonaire, Sint Eustatius and Saba",
    "ISO-ALPHA-2": "BQ",
    "ISO-ALPHA-3": "BES",
    "IOC": "",
    "FIFA": "",
    "latitude": 12.183333,
    "longitude": -68.233333
  },
  {
    "Country": "Caribbean Netherlands: Bonaire, Sint Eustatius and Saba",
    "ISO-ALPHA-2": "BQ",
    "ISO-ALPHA-3": "BES",
    "IOC": "",
    "FIFA": "",
    "latitude": 12.183333,
    "longitude": -68.233333
  },
  {
    "Country": "Burkina Faso",
    "ISO-ALPHA-2": "BF",
    "ISO-ALPHA-3": "BFA",
    "IOC": "BUR",
    "FIFA": "BFA",
    "latitude": 12.238333,
    "longitude": -1.561593
  },
  {
    "Country": "Bangladesh",
    "ISO-ALPHA-2": "BD",
    "ISO-ALPHA-3": "BGD",
    "IOC": "BAN",
    "FIFA": "BAN",
    "latitude": 23.684994,
    "longitude": 90.356331
  },
  {
    "Country": "Bulgaria",
    "ISO-ALPHA-2": "BG",
    "ISO-ALPHA-3": "BGR",
    "IOC": "BUL",
    "FIFA": "BUL",
    "latitude": 42.733883,
    "longitude": 25.48583
  },
  {
    "Country": "Bahrain",
    "ISO-ALPHA-2": "BH",
    "ISO-ALPHA-3": "BHR",
    "IOC": "BRN",
    "FIFA": "BHR",
    "latitude": 25.930414,
    "longitude": 50.637772
  },
  {
    "Country": "Bahamas",
    "ISO-ALPHA-2": "BS",
    "ISO-ALPHA-3": "BHS",
    "IOC": "BAH",
    "FIFA": "BAH",
    "latitude": 25.03428,
    "longitude": -77.39628
  },
  {
    "Country": "The Bahamas",
    "ISO-ALPHA-2": "BS",
    "ISO-ALPHA-3": "BHS",
    "IOC": "BAH",
    "FIFA": "BAH",
    "latitude": 25.03428,
    "longitude": -77.39628
  },
  {
    "Country": "Bosnia and Herzegovina",
    "ISO-ALPHA-2": "BA",
    "ISO-ALPHA-3": "BIH",
    "IOC": "BIH",
    "FIFA": "BIH",
    "latitude": 43.915886,
    "longitude": 17.679076
  },
  {
    "Country": "Saint Barthélemy",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "BLM",
    "IOC": "",
    "FIFA": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Belarus",
    "ISO-ALPHA-2": "BY",
    "ISO-ALPHA-3": "BLR",
    "IOC": "BLR",
    "FIFA": "BLR",
    "latitude": 53.709807,
    "longitude": 27.953389
  },
  {
    "Country": "Belize",
    "ISO-ALPHA-2": "BZ",
    "ISO-ALPHA-3": "BLZ",
    "IOC": "BIZ",
    "FIFA": "BLZ",
    "latitude": 17.189877,
    "longitude": -88.49765
  },
  {
    "Country": "Bermuda",
    "ISO-ALPHA-2": "BM",
    "ISO-ALPHA-3": "BMU",
    "IOC": "BER",
    "FIFA": "BER",
    "latitude": 32.321384,
    "longitude": -64.75737
  },
  {
    "Country": "Bolivia",
    "ISO-ALPHA-2": "BO",
    "ISO-ALPHA-3": "BOL",
    "IOC": "BOL",
    "FIFA": "BOL",
    "latitude": -16.290154,
    "longitude": -63.588653
  },
  {
    "Country": "Brazil",
    "ISO-ALPHA-2": "BR",
    "ISO-ALPHA-3": "BRA",
    "IOC": "BRA",
    "FIFA": "BRA",
    "latitude": -14.235004,
    "longitude": -51.92528
  },
  {
    "Country": "Barbados",
    "ISO-ALPHA-2": "BB",
    "ISO-ALPHA-3": "BRB",
    "IOC": "BAR",
    "FIFA": "BRB",
    "latitude": 13.193887,
    "longitude": -59.543198
  },
  {
    "Country": "Brunei",
    "ISO-ALPHA-2": "BN",
    "ISO-ALPHA-3": "BRN",
    "IOC": "BRU",
    "FIFA": "BRU",
    "latitude": 4.535277,
    "longitude": 114.727669
  },
  {
    "Country": "Bhutan",
    "ISO-ALPHA-2": "BT",
    "ISO-ALPHA-3": "BTN",
    "IOC": "BHU",
    "FIFA": "BHU",
    "latitude": 27.514162,
    "longitude": 90.433601
  },
  {
    "Country": "Burma",
    "ISO-ALPHA-2": "MM",
    "ISO-ALPHA-3": "BUR",
    "IOC": "BIR",
    "FIFA": "BUR",
    "latitude": 21.913965,
    "longitude": 95.956223
  },
  {
    "Country": "Myanmar",
    "ISO-ALPHA-2": "MM",
    "ISO-ALPHA-3": "BUR",
    "IOC": "BIR",
    "FIFA": "BUR",
    "latitude": 21.913965,
    "longitude": 95.956223
  },
  {
    "Country": "Bouvet Island",
    "ISO-ALPHA-2": "BV",
    "ISO-ALPHA-3": "BVT",
    "IOC": "",
    "FIFA": "",
    "latitude": -54.423199,
    "longitude": 3.413194
  },
  {
    "Country": "Botswana",
    "ISO-ALPHA-2": "BW",
    "ISO-ALPHA-3": "BWA",
    "IOC": "BOT",
    "FIFA": "BOT",
    "latitude": -22.328474,
    "longitude": 24.684866
  },
  {
    "Country": "Central African Republic",
    "ISO-ALPHA-2": "CF",
    "ISO-ALPHA-3": "CAF",
    "IOC": "CAF",
    "FIFA": "CTA",
    "latitude": 6.611111,
    "longitude": 20.939444
  },
  {
    "Country": "Canada",
    "ISO-ALPHA-2": "CA",
    "ISO-ALPHA-3": "CAN",
    "IOC": "CAN",
    "FIFA": "CAN",
    "latitude": 56.130366,
    "longitude": -106.346771
  },
  {
    "Country": "Cocos (Keeling) Islands",
    "ISO-ALPHA-2": "CC",
    "ISO-ALPHA-3": "CCK",
    "IOC": "",
    "FIFA": "",
    "latitude": -12.164165,
    "longitude": 96.870956
  },
  {
    "Country": "Cocos [Keeling] Islands",
    "ISO-ALPHA-2": "CC",
    "ISO-ALPHA-3": "CCK",
    "IOC": "",
    "FIFA": "",
    "latitude": -12.164165,
    "longitude": 96.870956
  },
  {
    "Country": "Switzerland",
    "ISO-ALPHA-2": "CH",
    "ISO-ALPHA-3": "CHE",
    "IOC": "SUI",
    "FIFA": "SUI",
    "latitude": 46.818188,
    "longitude": 8.227512
  },
  {
    "Country": "Chile",
    "ISO-ALPHA-2": "CL",
    "ISO-ALPHA-3": "CHL",
    "IOC": "CHI",
    "FIFA": "CHI",
    "latitude": -35.675147,
    "longitude": -71.542969
  },
  {
    "Country": "China",
    "ISO-ALPHA-2": "CN",
    "ISO-ALPHA-3": "CHN",
    "IOC": "CHN",
    "FIFA": "CHN",
    "latitude": 35.86166,
    "longitude": 104.195397
  },
  {
    "Country": "China, People's Republic of",
    "ISO-ALPHA-2": "CN",
    "ISO-ALPHA-3": "CHN",
    "IOC": "CHN",
    "FIFA": "CHN",
    "latitude": 35.86166,
    "longitude": 104.195397
  },
  {
    "Country": "Côte d'Ivoire",
    "ISO-ALPHA-2": "CI",
    "ISO-ALPHA-3": "CIV",
    "IOC": "CIV",
    "FIFA": "CIV",
    "latitude": 7.539989,
    "longitude": -5.54708
  },
  {
    "Country": "Cameroon",
    "ISO-ALPHA-2": "CM",
    "ISO-ALPHA-3": "CMR",
    "IOC": "CMR",
    "FIFA": "CMR",
    "latitude": 7.369722,
    "longitude": 12.354722
  },
  {
    "Country": "Congo, Democratic Republic of the",
    "ISO-ALPHA-2": "CD",
    "ISO-ALPHA-3": "COD",
    "IOC": "COD",
    "FIFA": "COD",
    "latitude": -4.038333,
    "longitude": 21.758664
  },
  {
    "Country": "Congo [DRC]",
    "ISO-ALPHA-2": "CD",
    "ISO-ALPHA-3": "COD",
    "IOC": "COD",
    "FIFA": "COD",
    "latitude": -4.038333,
    "longitude": 21.758664
  },
  {
    "Country": "Congo, Republic of the",
    "ISO-ALPHA-2": "CG",
    "ISO-ALPHA-3": "COG",
    "IOC": "CGO",
    "FIFA": "CGO",
    "latitude": -0.228021,
    "longitude": 15.827659
  },
  {
    "Country": "Congo [Republic]",
    "ISO-ALPHA-2": "CG",
    "ISO-ALPHA-3": "COG",
    "IOC": "CGO",
    "FIFA": "CGO",
    "latitude": -0.228021,
    "longitude": 15.827659
  },
  {
    "Country": "Cook Islands",
    "ISO-ALPHA-2": "CK",
    "ISO-ALPHA-3": "COK",
    "IOC": "COK",
    "FIFA": "COK",
    "latitude": -21.236736,
    "longitude": -159.777671
  },
  {
    "Country": "Colombia",
    "ISO-ALPHA-2": "CO",
    "ISO-ALPHA-3": "COL",
    "IOC": "COL",
    "FIFA": "COL",
    "latitude": 4.570868,
    "longitude": -74.297333
  },
  {
    "Country": "Comoros",
    "ISO-ALPHA-2": "KM",
    "ISO-ALPHA-3": "COM",
    "IOC": "COM",
    "FIFA": "COM",
    "latitude": -11.875001,
    "longitude": 43.872219
  },
  {
    "Country": "Cape Verde",
    "ISO-ALPHA-2": "CV",
    "ISO-ALPHA-3": "CPV",
    "IOC": "CPV",
    "FIFA": "CPV",
    "latitude": 16.002082,
    "longitude": -24.013197
  },
  {
    "Country": "Costa Rica",
    "ISO-ALPHA-2": "CR",
    "ISO-ALPHA-3": "CRI",
    "IOC": "CRC",
    "FIFA": "CRC",
    "latitude": 9.748917,
    "longitude": -83.753428
  },
  {
    "Country": "Czechoslovakia",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "CSK",
    "IOC": "TCH",
    "FIFA": "TCH",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Cuba",
    "ISO-ALPHA-2": "CU",
    "ISO-ALPHA-3": "CUB",
    "IOC": "CUB",
    "FIFA": "CUB",
    "latitude": 21.521757,
    "longitude": -77.781167
  },
  {
    "Country": "Curaçao",
    "ISO-ALPHA-2": "CW",
    "ISO-ALPHA-3": "CUW",
    "IOC": "",
    "FIFA": "CUW",
    "latitude": 12.186111,
    "longitude": -68.989444
  },
  {
    "Country": "Christmas Island",
    "ISO-ALPHA-2": "CX",
    "ISO-ALPHA-3": "CXR",
    "IOC": "",
    "FIFA": "",
    "latitude": -10.447525,
    "longitude": 105.690449
  },
  {
    "Country": "Cayman Islands",
    "ISO-ALPHA-2": "KY",
    "ISO-ALPHA-3": "CYM",
    "IOC": "CAY",
    "FIFA": "CAY",
    "latitude": 19.513469,
    "longitude": -80.566956
  },
  {
    "Country": "Cyprus",
    "ISO-ALPHA-2": "CY",
    "ISO-ALPHA-3": "CYP",
    "IOC": "CYP",
    "FIFA": "CYP",
    "latitude": 35.126413,
    "longitude": 33.429859
  },
  {
    "Country": "Czech Republic",
    "ISO-ALPHA-2": "CZ",
    "ISO-ALPHA-3": "CZE",
    "IOC": "CZE",
    "FIFA": "CZE",
    "latitude": 49.817492,
    "longitude": 15.472962
  },
  {
    "Country": "East Germany",
    "ISO-ALPHA-2": "DE",
    "ISO-ALPHA-3": "DDR",
    "IOC": "GDR",
    "FIFA": "DDR",
    "latitude": 51.165691,
    "longitude": 10.451526
  },
  {
    "Country": "Germany",
    "ISO-ALPHA-2": "DE",
    "ISO-ALPHA-3": "DEU",
    "IOC": "GER",
    "FIFA": "GER",
    "latitude": 51.165691,
    "longitude": 10.451526
  },
  {
    "Country": "West Germany",
    "ISO-ALPHA-2": "DE",
    "ISO-ALPHA-3": "DEU",
    "IOC": "FRG",
    "FIFA": "FRG",
    "latitude": 51.165691,
    "longitude": 10.451526
  },
  {
    "Country": "Dahomey",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "DHY",
    "IOC": "DAH",
    "FIFA": "DAH",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Djibouti",
    "ISO-ALPHA-2": "DJ",
    "ISO-ALPHA-3": "DJI",
    "IOC": "DJI",
    "FIFA": "DJI",
    "latitude": 11.825138,
    "longitude": 42.590275
  },
  {
    "Country": "Dominica",
    "ISO-ALPHA-2": "DM",
    "ISO-ALPHA-3": "DMA",
    "IOC": "DMA",
    "FIFA": "DMA",
    "latitude": 15.414999,
    "longitude": -61.370976
  },
  {
    "Country": "Denmark",
    "ISO-ALPHA-2": "DK",
    "ISO-ALPHA-3": "DNK",
    "IOC": "DEN",
    "FIFA": "DEN",
    "latitude": 56.26392,
    "longitude": 9.501785
  },
  {
    "Country": "Dominican Republic",
    "ISO-ALPHA-2": "DO",
    "ISO-ALPHA-3": "DOM",
    "IOC": "DOM",
    "FIFA": "DOM",
    "latitude": 18.735693,
    "longitude": -70.162651
  },
  {
    "Country": "Algeria",
    "ISO-ALPHA-2": "DZ",
    "ISO-ALPHA-3": "DZA",
    "IOC": "ALG",
    "FIFA": "ALG",
    "latitude": 28.033886,
    "longitude": 1.659626
  },
  {
    "Country": "Ecuador",
    "ISO-ALPHA-2": "EC",
    "ISO-ALPHA-3": "ECU",
    "IOC": "ECU",
    "FIFA": "ECU",
    "latitude": -1.831239,
    "longitude": -78.183406
  },
  {
    "Country": "Egypt",
    "ISO-ALPHA-2": "EG",
    "ISO-ALPHA-3": "EGY",
    "IOC": "EGY",
    "FIFA": "EGY",
    "latitude": 26.820553,
    "longitude": 30.802498
  },
  {
    "Country": "Eritrea",
    "ISO-ALPHA-2": "ER",
    "ISO-ALPHA-3": "ERI",
    "IOC": "ERI",
    "FIFA": "ERI",
    "latitude": 15.179384,
    "longitude": 39.782334
  },
  {
    "Country": "Western Sahara",
    "ISO-ALPHA-2": "EH",
    "ISO-ALPHA-3": "ESH",
    "IOC": "",
    "FIFA": "",
    "latitude": 24.215527,
    "longitude": -12.885834
  },
  {
    "Country": "Spain",
    "ISO-ALPHA-2": "ES",
    "ISO-ALPHA-3": "ESP",
    "IOC": "ESP",
    "FIFA": "ESP",
    "latitude": 40.463667,
    "longitude": -3.74922
  },
  {
    "Country": "Estonia",
    "ISO-ALPHA-2": "EE",
    "ISO-ALPHA-3": "EST",
    "IOC": "EST",
    "FIFA": "EST",
    "latitude": 58.595272,
    "longitude": 25.013607
  },
  {
    "Country": "Ethiopia",
    "ISO-ALPHA-2": "ET",
    "ISO-ALPHA-3": "ETH",
    "IOC": "ETH",
    "FIFA": "ETH",
    "latitude": 9.145,
    "longitude": 40.489673
  },
  {
    "Country": "Finland",
    "ISO-ALPHA-2": "FI",
    "ISO-ALPHA-3": "FIN",
    "IOC": "FIN",
    "FIFA": "FIN",
    "latitude": 61.92411,
    "longitude": 25.748151
  },
  {
    "Country": "Fiji",
    "ISO-ALPHA-2": "FJ",
    "ISO-ALPHA-3": "FJI",
    "IOC": "FIJ",
    "FIFA": "FIJ",
    "latitude": -16.578193,
    "longitude": 179.414413
  },
  {
    "Country": "Falkland Islands",
    "ISO-ALPHA-2": "FK",
    "ISO-ALPHA-3": "FLK",
    "IOC": "",
    "FIFA": "",
    "latitude": -51.796253,
    "longitude": -59.523613
  },
  {
    "Country": "Falkland Islands [Islas Malvinas]",
    "ISO-ALPHA-2": "FK",
    "ISO-ALPHA-3": "FLK",
    "IOC": "",
    "FIFA": "",
    "latitude": -51.796253,
    "longitude": -59.523613
  },
  {
    "Country": "France",
    "ISO-ALPHA-2": "FR",
    "ISO-ALPHA-3": "FRA",
    "IOC": "FRA",
    "FIFA": "FRA",
    "latitude": 46.227638,
    "longitude": 2.213749
  },
  {
    "Country": "Faroe Islands",
    "ISO-ALPHA-2": "FO",
    "ISO-ALPHA-3": "FRO",
    "IOC": "",
    "FIFA": "FRO",
    "latitude": 61.892635,
    "longitude": -6.911806
  },
  {
    "Country": "Micronesia, Federated States of",
    "ISO-ALPHA-2": "FM",
    "ISO-ALPHA-3": "FSM",
    "IOC": "FSM",
    "FIFA": "",
    "latitude": 7.425554,
    "longitude": 150.550812
  },
  {
    "Country": "Micronesia",
    "ISO-ALPHA-2": "FM",
    "ISO-ALPHA-3": "FSM",
    "IOC": "FSM",
    "FIFA": "",
    "latitude": 7.425554,
    "longitude": 150.550812
  },
  {
    "Country": "Gabon",
    "ISO-ALPHA-2": "GA",
    "ISO-ALPHA-3": "GAB",
    "IOC": "GAB",
    "FIFA": "GAB",
    "latitude": -0.803689,
    "longitude": 11.609444
  },
  {
    "Country": "United Kingdom",
    "ISO-ALPHA-2": "GB",
    "ISO-ALPHA-3": "GBR",
    "IOC": "GBR",
    "FIFA": "",
    "latitude": 55.378051,
    "longitude": -3.435973
  },
  {
    "Country": "Georgia",
    "ISO-ALPHA-2": "GE",
    "ISO-ALPHA-3": "GEO",
    "IOC": "GEO",
    "FIFA": "GEO",
    "latitude": 42.315407,
    "longitude": 43.356892
  },
  {
    "Country": "Guernsey",
    "ISO-ALPHA-2": "GG",
    "ISO-ALPHA-3": "GGY",
    "IOC": "",
    "FIFA": "",
    "latitude": 49.465691,
    "longitude": -2.585278
  },
  {
    "Country": "Ghana",
    "ISO-ALPHA-2": "GH",
    "ISO-ALPHA-3": "GHA",
    "IOC": "GHA",
    "FIFA": "GHA",
    "latitude": 7.946527,
    "longitude": -1.023194
  },
  {
    "Country": "Gibraltar",
    "ISO-ALPHA-2": "GI",
    "ISO-ALPHA-3": "GIB",
    "IOC": "",
    "FIFA": "GIB",
    "latitude": 36.137741,
    "longitude": -5.345374
  },
  {
    "Country": "Guinea",
    "ISO-ALPHA-2": "GN",
    "ISO-ALPHA-3": "GIN",
    "IOC": "GUI",
    "FIFA": "GUI",
    "latitude": 9.945587,
    "longitude": -9.696645
  },
  {
    "Country": "Guadeloupe",
    "ISO-ALPHA-2": "GP",
    "ISO-ALPHA-3": "GLP",
    "IOC": "",
    "FIFA": "",
    "latitude": 16.995971,
    "longitude": -62.067641
  },
  {
    "Country": "Gambia",
    "ISO-ALPHA-2": "GM",
    "ISO-ALPHA-3": "GMB",
    "IOC": "GAM",
    "FIFA": "GAM",
    "latitude": 13.443182,
    "longitude": -15.310139
  },
  {
    "Country": "The Gambia",
    "ISO-ALPHA-2": "GM",
    "ISO-ALPHA-3": "GMB",
    "IOC": "GAM",
    "FIFA": "GAM",
    "latitude": 13.443182,
    "longitude": -15.310139
  },
  {
    "Country": "Guinea-Bissau",
    "ISO-ALPHA-2": "GW",
    "ISO-ALPHA-3": "GNB",
    "IOC": "GBS",
    "FIFA": "GNB",
    "latitude": 11.803749,
    "longitude": -15.180413
  },
  {
    "Country": "Equatorial Guinea",
    "ISO-ALPHA-2": "GQ",
    "ISO-ALPHA-3": "GNQ",
    "IOC": "GEQ",
    "FIFA": "EQG",
    "latitude": 1.650801,
    "longitude": 10.267895
  },
  {
    "Country": "Greece",
    "ISO-ALPHA-2": "GR",
    "ISO-ALPHA-3": "GRC",
    "IOC": "GRE",
    "FIFA": "GRE",
    "latitude": 39.074208,
    "longitude": 21.824312
  },
  {
    "Country": "Grenada",
    "ISO-ALPHA-2": "GD",
    "ISO-ALPHA-3": "GRD",
    "IOC": "GRN",
    "FIFA": "GRN",
    "latitude": 12.262776,
    "longitude": -61.604171
  },
  {
    "Country": "Greenland",
    "ISO-ALPHA-2": "GL",
    "ISO-ALPHA-3": "GRL",
    "IOC": "",
    "FIFA": "",
    "latitude": 71.706936,
    "longitude": -42.604303
  },
  {
    "Country": "Guatemala",
    "ISO-ALPHA-2": "GT",
    "ISO-ALPHA-3": "GTM",
    "IOC": "GUA",
    "FIFA": "GUA",
    "latitude": 15.783471,
    "longitude": -90.230759
  },
  {
    "Country": "French Guiana",
    "ISO-ALPHA-2": "GF",
    "ISO-ALPHA-3": "GUF",
    "IOC": "",
    "FIFA": "",
    "latitude": 3.933889,
    "longitude": -53.125782
  },
  {
    "Country": "Guam",
    "ISO-ALPHA-2": "GU",
    "ISO-ALPHA-3": "GUM",
    "IOC": "GUM",
    "FIFA": "GUM",
    "latitude": 13.444304,
    "longitude": 144.793731
  },
  {
    "Country": "Guyana",
    "ISO-ALPHA-2": "GY",
    "ISO-ALPHA-3": "GUY",
    "IOC": "GUY",
    "FIFA": "GUY",
    "latitude": 4.860416,
    "longitude": -58.93018
  },
  {
    "Country": "Hong Kong",
    "ISO-ALPHA-2": "HK",
    "ISO-ALPHA-3": "HKG",
    "IOC": "HKG",
    "FIFA": "HKG",
    "latitude": 22.396428,
    "longitude": 114.109497
  },
  {
    "Country": "Heard Island and McDonald Islands",
    "ISO-ALPHA-2": "HM",
    "ISO-ALPHA-3": "HMD",
    "IOC": "",
    "FIFA": "",
    "latitude": -53.08181,
    "longitude": 73.504158
  },
  {
    "Country": "Honduras",
    "ISO-ALPHA-2": "HN",
    "ISO-ALPHA-3": "HND",
    "IOC": "HON",
    "FIFA": "HON",
    "latitude": 15.199999,
    "longitude": -86.241905
  },
  {
    "Country": "Croatia",
    "ISO-ALPHA-2": "HR",
    "ISO-ALPHA-3": "HRV",
    "IOC": "CRO",
    "FIFA": "CRO",
    "latitude": 45.1,
    "longitude": 15.2
  },
  {
    "Country": "Haiti",
    "ISO-ALPHA-2": "HT",
    "ISO-ALPHA-3": "HTI",
    "IOC": "HAI",
    "FIFA": "HAI",
    "latitude": 18.971187,
    "longitude": -72.285215
  },
  {
    "Country": "Hungary",
    "ISO-ALPHA-2": "HU",
    "ISO-ALPHA-3": "HUN",
    "IOC": "HUN",
    "FIFA": "HUN",
    "latitude": 47.162494,
    "longitude": 19.503304
  },
  {
    "Country": "Upper Volta",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "HVO",
    "IOC": "VOL",
    "FIFA": "UPV",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Indonesia",
    "ISO-ALPHA-2": "ID",
    "ISO-ALPHA-3": "IDN",
    "IOC": "INA",
    "FIFA": "IDN",
    "latitude": -0.789275,
    "longitude": 113.921327
  },
  {
    "Country": "Isle of Man",
    "ISO-ALPHA-2": "IM",
    "ISO-ALPHA-3": "IMN",
    "IOC": "",
    "FIFA": "",
    "latitude": 54.236107,
    "longitude": -4.548056
  },
  {
    "Country": "India",
    "ISO-ALPHA-2": "IN",
    "ISO-ALPHA-3": "IND",
    "IOC": "IND",
    "FIFA": "IND",
    "latitude": 20.593684,
    "longitude": 78.96288
  },
  {
    "Country": "British Indian Ocean Territory",
    "ISO-ALPHA-2": "IO",
    "ISO-ALPHA-3": "IOT",
    "IOC": "",
    "FIFA": "",
    "latitude": -6.343194,
    "longitude": 71.876519
  },
  {
    "Country": "Ireland",
    "ISO-ALPHA-2": "IE",
    "ISO-ALPHA-3": "IRL",
    "IOC": "IRL",
    "FIFA": "IRL",
    "latitude": 53.41291,
    "longitude": -8.24389
  },
  {
    "Country": "Iran",
    "ISO-ALPHA-2": "IR",
    "ISO-ALPHA-3": "IRN",
    "IOC": "IRI",
    "FIFA": "IRN",
    "latitude": 32.427908,
    "longitude": 53.688046
  },
  {
    "Country": "Iraq",
    "ISO-ALPHA-2": "IQ",
    "ISO-ALPHA-3": "IRQ",
    "IOC": "IRQ",
    "FIFA": "IRQ",
    "latitude": 33.223191,
    "longitude": 43.679291
  },
  {
    "Country": "Iceland",
    "ISO-ALPHA-2": "IS",
    "ISO-ALPHA-3": "ISL",
    "IOC": "ISL",
    "FIFA": "ISL",
    "latitude": 64.963051,
    "longitude": -19.020835
  },
  {
    "Country": "Israel",
    "ISO-ALPHA-2": "IL",
    "ISO-ALPHA-3": "ISR",
    "IOC": "ISR",
    "FIFA": "ISR",
    "latitude": 31.046051,
    "longitude": 34.851612
  },
  {
    "Country": "Italy",
    "ISO-ALPHA-2": "IT",
    "ISO-ALPHA-3": "ITA",
    "IOC": "ITA",
    "FIFA": "ITA",
    "latitude": 41.87194,
    "longitude": 12.56738
  },
  {
    "Country": "Jamaica",
    "ISO-ALPHA-2": "JM",
    "ISO-ALPHA-3": "JAM",
    "IOC": "JAM",
    "FIFA": "JAM",
    "latitude": 18.109581,
    "longitude": -77.297508
  },
  {
    "Country": "Jersey",
    "ISO-ALPHA-2": "JE",
    "ISO-ALPHA-3": "JEY",
    "IOC": "",
    "FIFA": "",
    "latitude": 49.214439,
    "longitude": -2.13125
  },
  {
    "Country": "Jordan",
    "ISO-ALPHA-2": "JO",
    "ISO-ALPHA-3": "JOR",
    "IOC": "JOR",
    "FIFA": "JOR",
    "latitude": 30.585164,
    "longitude": 36.238414
  },
  {
    "Country": "Japan",
    "ISO-ALPHA-2": "JP",
    "ISO-ALPHA-3": "JPN",
    "IOC": "JPN",
    "FIFA": "JPN",
    "latitude": 36.204824,
    "longitude": 138.252924
  },
  {
    "Country": "Kazakhstan",
    "ISO-ALPHA-2": "KZ",
    "ISO-ALPHA-3": "KAZ",
    "IOC": "KAZ",
    "FIFA": "KAZ",
    "latitude": 48.019573,
    "longitude": 66.923684
  },
  {
    "Country": "Kenya",
    "ISO-ALPHA-2": "KE",
    "ISO-ALPHA-3": "KEN",
    "IOC": "KEN",
    "FIFA": "KEN",
    "latitude": -0.023559,
    "longitude": 37.906193
  },
  {
    "Country": "Kyrgyzstan",
    "ISO-ALPHA-2": "KG",
    "ISO-ALPHA-3": "KGZ",
    "IOC": "KGZ",
    "FIFA": "KGZ",
    "latitude": 41.20438,
    "longitude": 74.766098
  },
  {
    "Country": "Cambodia",
    "ISO-ALPHA-2": "KH",
    "ISO-ALPHA-3": "KHM",
    "IOC": "CAM",
    "FIFA": "CAM",
    "latitude": 12.565679,
    "longitude": 104.990963
  },
  {
    "Country": "Kiribati",
    "ISO-ALPHA-2": "KI",
    "ISO-ALPHA-3": "KIR",
    "IOC": "KIR",
    "FIFA": "",
    "latitude": -3.370417,
    "longitude": -168.734039
  },
  {
    "Country": "Saint Kitts and Nevis",
    "ISO-ALPHA-2": "KN",
    "ISO-ALPHA-3": "KNA",
    "IOC": "SKN",
    "FIFA": "SKN",
    "latitude": 17.357822,
    "longitude": -62.782998
  },
  {
    "Country": "Korea, Republic of (South)",
    "ISO-ALPHA-2": "KR",
    "ISO-ALPHA-3": "KOR",
    "IOC": "KOR",
    "FIFA": "KOR",
    "latitude": 35.907757,
    "longitude": 127.766922
  },
  {
    "Country": "South Korea",
    "ISO-ALPHA-2": "KR",
    "ISO-ALPHA-3": "KOR",
    "IOC": "KOR",
    "FIFA": "KOR",
    "latitude": 35.907757,
    "longitude": 127.766922
  },
  {
    "Country": "Kuwait",
    "ISO-ALPHA-2": "KW",
    "ISO-ALPHA-3": "KWT",
    "IOC": "KUW",
    "FIFA": "KUW",
    "latitude": 29.31166,
    "longitude": 47.481766
  },
  {
    "Country": "Laos",
    "ISO-ALPHA-2": "LA",
    "ISO-ALPHA-3": "LAO",
    "IOC": "LAO",
    "FIFA": "LAO",
    "latitude": 19.85627,
    "longitude": 102.495496
  },
  {
    "Country": "Lebanon",
    "ISO-ALPHA-2": "LB",
    "ISO-ALPHA-3": "LBN",
    "IOC": "LBN",
    "FIFA": "LIB",
    "latitude": 33.854721,
    "longitude": 35.862285
  },
  {
    "Country": "Liberia",
    "ISO-ALPHA-2": "LR",
    "ISO-ALPHA-3": "LBR",
    "IOC": "LBR",
    "FIFA": "LBR",
    "latitude": 6.428055,
    "longitude": -9.429499
  },
  {
    "Country": "Libya",
    "ISO-ALPHA-2": "LY",
    "ISO-ALPHA-3": "LBY",
    "IOC": "LBA",
    "FIFA": "LBY",
    "latitude": 26.3351,
    "longitude": 17.228331
  },
  {
    "Country": "Saint Lucia",
    "ISO-ALPHA-2": "LC",
    "ISO-ALPHA-3": "LCA",
    "IOC": "LCA",
    "FIFA": "LCA",
    "latitude": 13.909444,
    "longitude": -60.978893
  },
  {
    "Country": "Liechtenstein",
    "ISO-ALPHA-2": "LI",
    "ISO-ALPHA-3": "LIE",
    "IOC": "LIE",
    "FIFA": "LIE",
    "latitude": 47.166,
    "longitude": 9.555373
  },
  {
    "Country": "Sri Lanka",
    "ISO-ALPHA-2": "LK",
    "ISO-ALPHA-3": "LKA",
    "IOC": "SRI",
    "FIFA": "SRI",
    "latitude": 7.873054,
    "longitude": 80.771797
  },
  {
    "Country": "Lesotho",
    "ISO-ALPHA-2": "LS",
    "ISO-ALPHA-3": "LSO",
    "IOC": "LES",
    "FIFA": "LES",
    "latitude": -29.609988,
    "longitude": 28.233608
  },
  {
    "Country": "Lithuania",
    "ISO-ALPHA-2": "LT",
    "ISO-ALPHA-3": "LTU",
    "IOC": "LTU",
    "FIFA": "LTU",
    "latitude": 55.169438,
    "longitude": 23.881275
  },
  {
    "Country": "Luxembourg",
    "ISO-ALPHA-2": "LU",
    "ISO-ALPHA-3": "LUX",
    "IOC": "LUX",
    "FIFA": "LUX",
    "latitude": 49.815273,
    "longitude": 6.129583
  },
  {
    "Country": "Latvia",
    "ISO-ALPHA-2": "LV",
    "ISO-ALPHA-3": "LVA",
    "IOC": "LAT",
    "FIFA": "LVA",
    "latitude": 56.879635,
    "longitude": 24.603189
  },
  {
    "Country": "Macau",
    "ISO-ALPHA-2": "MO",
    "ISO-ALPHA-3": "MAC",
    "IOC": "",
    "FIFA": "MAC",
    "latitude": 22.198745,
    "longitude": 113.543873
  },
  {
    "Country": "Saint Martin (French part)",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "MAF",
    "IOC": "",
    "FIFA": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Morocco",
    "ISO-ALPHA-2": "MA",
    "ISO-ALPHA-3": "MAR",
    "IOC": "MAR",
    "FIFA": "MAR",
    "latitude": 31.791702,
    "longitude": -7.09262
  },
  {
    "Country": "Monaco",
    "ISO-ALPHA-2": "MC",
    "ISO-ALPHA-3": "MCO",
    "IOC": "MON",
    "FIFA": "",
    "latitude": 43.750298,
    "longitude": 7.412841
  },
  {
    "Country": "Moldova",
    "ISO-ALPHA-2": "MD",
    "ISO-ALPHA-3": "MDA",
    "IOC": "MDA",
    "FIFA": "MDA",
    "latitude": 47.411631,
    "longitude": 28.369885
  },
  {
    "Country": "Madagascar",
    "ISO-ALPHA-2": "MG",
    "ISO-ALPHA-3": "MDG",
    "IOC": "MAD",
    "FIFA": "MAD",
    "latitude": -18.766947,
    "longitude": 46.869107
  },
  {
    "Country": "Maldives",
    "ISO-ALPHA-2": "MV",
    "ISO-ALPHA-3": "MDV",
    "IOC": "MDV",
    "FIFA": "MDV",
    "latitude": 3.202778,
    "longitude": 73.22068
  },
  {
    "Country": "Mexico",
    "ISO-ALPHA-2": "MX",
    "ISO-ALPHA-3": "MEX",
    "IOC": "MEX",
    "FIFA": "MEX",
    "latitude": 23.634501,
    "longitude": -102.552784
  },
  {
    "Country": "Marshall Islands",
    "ISO-ALPHA-2": "MH",
    "ISO-ALPHA-3": "MHL",
    "IOC": "MHL",
    "FIFA": "",
    "latitude": 7.131474,
    "longitude": 171.184478
  },
  {
    "Country": "North Macedonia",
    "ISO-ALPHA-2": "MK",
    "ISO-ALPHA-3": "MKD",
    "IOC": "MKD",
    "FIFA": "MKD",
    "latitude": 41.608635,
    "longitude": 21.745275
  },
  {
    "Country": "Macedonia [FYROM]",
    "ISO-ALPHA-2": "MK",
    "ISO-ALPHA-3": "MKD",
    "IOC": "MKD",
    "FIFA": "MKD",
    "latitude": 41.608635,
    "longitude": 21.745275
  },
  {
    "Country": "Mali",
    "ISO-ALPHA-2": "ML",
    "ISO-ALPHA-3": "MLI",
    "IOC": "MLI",
    "FIFA": "MLI",
    "latitude": 17.570692,
    "longitude": -3.996166
  },
  {
    "Country": "Malta",
    "ISO-ALPHA-2": "MT",
    "ISO-ALPHA-3": "MLT",
    "IOC": "MLT",
    "FIFA": "MLT",
    "latitude": 35.937496,
    "longitude": 14.375416
  },
  {
    "Country": "Myanmar",
    "ISO-ALPHA-2": "MM",
    "ISO-ALPHA-3": "MMR",
    "IOC": "MYA",
    "FIFA": "MYA",
    "latitude": 21.913965,
    "longitude": 95.956223
  },
  {
    "Country": "Burma",
    "ISO-ALPHA-2": "MM",
    "ISO-ALPHA-3": "MMR",
    "IOC": "MYA",
    "FIFA": "MYA",
    "latitude": 21.913965,
    "longitude": 95.956223
  },
  {
    "Country": "Montenegro",
    "ISO-ALPHA-2": "ME",
    "ISO-ALPHA-3": "MNE",
    "IOC": "MNE",
    "FIFA": "MNE",
    "latitude": 42.708678,
    "longitude": 19.37439
  },
  {
    "Country": "Mongolia",
    "ISO-ALPHA-2": "MN",
    "ISO-ALPHA-3": "MNG",
    "IOC": "MGL",
    "FIFA": "MNG",
    "latitude": 46.862496,
    "longitude": 103.846656
  },
  {
    "Country": "Northern Mariana Islands",
    "ISO-ALPHA-2": "MP",
    "ISO-ALPHA-3": "MNP",
    "IOC": "",
    "FIFA": "",
    "latitude": 17.33083,
    "longitude": 145.38469
  },
  {
    "Country": "Mozambique",
    "ISO-ALPHA-2": "MZ",
    "ISO-ALPHA-3": "MOZ",
    "IOC": "MOZ",
    "FIFA": "MOZ",
    "latitude": -18.665695,
    "longitude": 35.529562
  },
  {
    "Country": "Mauritania",
    "ISO-ALPHA-2": "MR",
    "ISO-ALPHA-3": "MRT",
    "IOC": "MTN",
    "FIFA": "MTN",
    "latitude": 21.00789,
    "longitude": -10.940835
  },
  {
    "Country": "Montserrat",
    "ISO-ALPHA-2": "MS",
    "ISO-ALPHA-3": "MSR",
    "IOC": "",
    "FIFA": "MSR",
    "latitude": 16.742498,
    "longitude": -62.187366
  },
  {
    "Country": "Martinique",
    "ISO-ALPHA-2": "MQ",
    "ISO-ALPHA-3": "MTQ",
    "IOC": "",
    "FIFA": "",
    "latitude": 14.641528,
    "longitude": -61.024174
  },
  {
    "Country": "Mauritius",
    "ISO-ALPHA-2": "MU",
    "ISO-ALPHA-3": "MUS",
    "IOC": "MRI",
    "FIFA": "MRI",
    "latitude": -20.348404,
    "longitude": 57.552152
  },
  {
    "Country": "Malawi",
    "ISO-ALPHA-2": "MW",
    "ISO-ALPHA-3": "MWI",
    "IOC": "MAW",
    "FIFA": "MWI",
    "latitude": -13.254308,
    "longitude": 34.301525
  },
  {
    "Country": "Malaysia",
    "ISO-ALPHA-2": "MY",
    "ISO-ALPHA-3": "MYS",
    "IOC": "MAS",
    "FIFA": "MAS",
    "latitude": 4.210484,
    "longitude": 101.975766
  },
  {
    "Country": "Mayotte",
    "ISO-ALPHA-2": "YT",
    "ISO-ALPHA-3": "MYT",
    "IOC": "",
    "FIFA": "",
    "latitude": -12.8275,
    "longitude": 45.166244
  },
  {
    "Country": "Namibia",
    "ISO-ALPHA-2": "NA",
    "ISO-ALPHA-3": "NAM",
    "IOC": "NAM",
    "FIFA": "NAM",
    "latitude": -22.95764,
    "longitude": 18.49041
  },
  {
    "Country": "New Caledonia",
    "ISO-ALPHA-2": "NC",
    "ISO-ALPHA-3": "NCL",
    "IOC": "",
    "FIFA": "NCL",
    "latitude": -20.904305,
    "longitude": 165.618042
  },
  {
    "Country": "Niger",
    "ISO-ALPHA-2": "NE",
    "ISO-ALPHA-3": "NER",
    "IOC": "NIG",
    "FIFA": "NIG",
    "latitude": 17.607789,
    "longitude": 8.081666
  },
  {
    "Country": "Norfolk Island",
    "ISO-ALPHA-2": "NF",
    "ISO-ALPHA-3": "NFK",
    "IOC": "",
    "FIFA": "",
    "latitude": -29.040835,
    "longitude": 167.954712
  },
  {
    "Country": "Nigeria",
    "ISO-ALPHA-2": "NG",
    "ISO-ALPHA-3": "NGA",
    "IOC": "NGR",
    "FIFA": "NGA",
    "latitude": 9.081999,
    "longitude": 8.675277
  },
  {
    "Country": "Nicaragua",
    "ISO-ALPHA-2": "NI",
    "ISO-ALPHA-3": "NIC",
    "IOC": "NCA",
    "FIFA": "NCA",
    "latitude": 12.865416,
    "longitude": -85.207229
  },
  {
    "Country": "Niue",
    "ISO-ALPHA-2": "NU",
    "ISO-ALPHA-3": "NIU",
    "IOC": "",
    "FIFA": "",
    "latitude": -19.054445,
    "longitude": -169.867233
  },
  {
    "Country": "Netherlands",
    "ISO-ALPHA-2": "NL",
    "ISO-ALPHA-3": "NLD",
    "IOC": "NED",
    "FIFA": "NED",
    "latitude": 52.132633,
    "longitude": 5.291266
  },
  {
    "Country": "Norway",
    "ISO-ALPHA-2": "NO",
    "ISO-ALPHA-3": "NOR",
    "IOC": "NOR",
    "FIFA": "NOR",
    "latitude": 60.472024,
    "longitude": 8.468946
  },
  {
    "Country": "Nepal",
    "ISO-ALPHA-2": "NP",
    "ISO-ALPHA-3": "NPL",
    "IOC": "NEP",
    "FIFA": "NEP",
    "latitude": 28.394857,
    "longitude": 84.124008
  },
  {
    "Country": "Nauru",
    "ISO-ALPHA-2": "NR",
    "ISO-ALPHA-3": "NRU",
    "IOC": "NRU",
    "FIFA": "",
    "latitude": -0.522778,
    "longitude": 166.931503
  },
  {
    "Country": "New Zealand",
    "ISO-ALPHA-2": "NZ",
    "ISO-ALPHA-3": "NZL",
    "IOC": "NZL",
    "FIFA": "NZL",
    "latitude": -40.900557,
    "longitude": 174.885971
  },
  {
    "Country": "Oman",
    "ISO-ALPHA-2": "OM",
    "ISO-ALPHA-3": "OMN",
    "IOC": "OMA",
    "FIFA": "OMA",
    "latitude": 21.512583,
    "longitude": 55.923255
  },
  {
    "Country": "Pakistan",
    "ISO-ALPHA-2": "PK",
    "ISO-ALPHA-3": "PAK",
    "IOC": "PAK",
    "FIFA": "PAK",
    "latitude": 30.375321,
    "longitude": 69.345116
  },
  {
    "Country": "Panama",
    "ISO-ALPHA-2": "PA",
    "ISO-ALPHA-3": "PAN",
    "IOC": "PAN",
    "FIFA": "PAN",
    "latitude": 8.537981,
    "longitude": -80.782127
  },
  {
    "Country": "Pitcairn Islands",
    "ISO-ALPHA-2": "PN",
    "ISO-ALPHA-3": "PCN",
    "IOC": "",
    "FIFA": "",
    "latitude": -24.703615,
    "longitude": -127.439308
  },
  {
    "Country": "Peru",
    "ISO-ALPHA-2": "PE",
    "ISO-ALPHA-3": "PER",
    "IOC": "PER",
    "FIFA": "PER",
    "latitude": -9.189967,
    "longitude": -75.015152
  },
  {
    "Country": "Philippines",
    "ISO-ALPHA-2": "PH",
    "ISO-ALPHA-3": "PHL",
    "IOC": "PHI",
    "FIFA": "PHI",
    "latitude": 12.879721,
    "longitude": 121.774017
  },
  {
    "Country": "Palau",
    "ISO-ALPHA-2": "PW",
    "ISO-ALPHA-3": "PLW",
    "IOC": "PLW",
    "FIFA": "",
    "latitude": 7.51498,
    "longitude": 134.58252
  },
  {
    "Country": "Papua New Guinea",
    "ISO-ALPHA-2": "PG",
    "ISO-ALPHA-3": "PNG",
    "IOC": "PNG",
    "FIFA": "PNG",
    "latitude": -6.314993,
    "longitude": 143.95555
  },
  {
    "Country": "Poland",
    "ISO-ALPHA-2": "PL",
    "ISO-ALPHA-3": "POL",
    "IOC": "POL",
    "FIFA": "POL",
    "latitude": 51.919438,
    "longitude": 19.145136
  },
  {
    "Country": "Puerto Rico",
    "ISO-ALPHA-2": "PR",
    "ISO-ALPHA-3": "PRI",
    "IOC": "PUR",
    "FIFA": "PUR",
    "latitude": 18.220833,
    "longitude": -66.590149
  },
  {
    "Country": "Korea, Democratic People's Rep. (North)",
    "ISO-ALPHA-2": "KP",
    "ISO-ALPHA-3": "PRK",
    "IOC": "PRK",
    "FIFA": "PRK",
    "latitude": 40.339852,
    "longitude": 127.510093
  },
  {
    "Country": "North Korea",
    "ISO-ALPHA-2": "KP",
    "ISO-ALPHA-3": "PRK",
    "IOC": "PRK",
    "FIFA": "PRK",
    "latitude": 40.339852,
    "longitude": 127.510093
  },
  {
    "Country": "Portugal",
    "ISO-ALPHA-2": "PT",
    "ISO-ALPHA-3": "PRT",
    "IOC": "POR",
    "FIFA": "POR",
    "latitude": 39.399872,
    "longitude": -8.224454
  },
  {
    "Country": "Paraguay",
    "ISO-ALPHA-2": "PY",
    "ISO-ALPHA-3": "PRY",
    "IOC": "PAR",
    "FIFA": "PAR",
    "latitude": -23.442503,
    "longitude": -58.443832
  },
  {
    "Country": "Palestine, State of",
    "ISO-ALPHA-2": "PS",
    "ISO-ALPHA-3": "PSE",
    "IOC": "",
    "FIFA": "",
    "latitude": 31.952162,
    "longitude": 35.233154
  },
  {
    "Country": "Palestinian Territories",
    "ISO-ALPHA-2": "PS",
    "ISO-ALPHA-3": "PSE",
    "IOC": "",
    "FIFA": "",
    "latitude": 31.952162,
    "longitude": 35.233154
  },
  {
    "Country": "State of Palestine",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "PSE",
    "IOC": "PLE",
    "FIFA": "PLE",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "French Polynesia",
    "ISO-ALPHA-2": "PF",
    "ISO-ALPHA-3": "PYF",
    "IOC": "",
    "FIFA": "TAH",
    "latitude": -17.679742,
    "longitude": -149.406843
  },
  {
    "Country": "Qatar",
    "ISO-ALPHA-2": "QA",
    "ISO-ALPHA-3": "QAT",
    "IOC": "QAT",
    "FIFA": "QAT",
    "latitude": 25.354826,
    "longitude": 51.183884
  },
  {
    "Country": "Réunion",
    "ISO-ALPHA-2": "RE",
    "ISO-ALPHA-3": "REU",
    "IOC": "",
    "FIFA": "",
    "latitude": -21.115141,
    "longitude": 55.536384
  },
  {
    "Country": "Rhodesia",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "RHO",
    "IOC": "RHO",
    "FIFA": "RHO",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Romania",
    "ISO-ALPHA-2": "RO",
    "ISO-ALPHA-3": "ROU",
    "IOC": "ROU",
    "FIFA": "ROU",
    "latitude": 45.943161,
    "longitude": 24.96676
  },
  {
    "Country": "Russian Federation",
    "ISO-ALPHA-2": "RU",
    "ISO-ALPHA-3": "RUS",
    "IOC": "RUS",
    "FIFA": "RUS",
    "latitude": 61.52401,
    "longitude": 105.318756
  },
  {
    "Country": "Russia",
    "ISO-ALPHA-2": "RU",
    "ISO-ALPHA-3": "RUS",
    "IOC": "RUS",
    "FIFA": "RUS",
    "latitude": 61.52401,
    "longitude": 105.318756
  },
  {
    "Country": "Rwanda",
    "ISO-ALPHA-2": "RW",
    "ISO-ALPHA-3": "RWA",
    "IOC": "RWA",
    "FIFA": "RWA",
    "latitude": -1.940278,
    "longitude": 29.873888
  },
  {
    "Country": "Saudi Arabia",
    "ISO-ALPHA-2": "SA",
    "ISO-ALPHA-3": "SAU",
    "IOC": "KSA",
    "FIFA": "KSA",
    "latitude": 23.885942,
    "longitude": 45.079162
  },
  {
    "Country": "Serbia and Montenegro",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "SCG",
    "IOC": "SCG",
    "FIFA": "SCG",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Sudan",
    "ISO-ALPHA-2": "SD",
    "ISO-ALPHA-3": "SDN",
    "IOC": "SUD",
    "FIFA": "SDN",
    "latitude": 12.862807,
    "longitude": 30.217636
  },
  {
    "Country": "Senegal",
    "ISO-ALPHA-2": "SN",
    "ISO-ALPHA-3": "SEN",
    "IOC": "SEN",
    "FIFA": "SEN",
    "latitude": 14.497401,
    "longitude": -14.452362
  },
  {
    "Country": "Singapore",
    "ISO-ALPHA-2": "SG",
    "ISO-ALPHA-3": "SGP",
    "IOC": "SGP",
    "FIFA": "SIN",
    "latitude": 1.352083,
    "longitude": 103.819836
  },
  {
    "Country": "South Georgia and the South Sandwich Islands",
    "ISO-ALPHA-2": "GS",
    "ISO-ALPHA-3": "SGS",
    "IOC": "",
    "FIFA": "",
    "latitude": -54.429579,
    "longitude": -36.587909
  },
  {
    "Country": "Saint Helena, Ascension and Tristan da Cunha",
    "ISO-ALPHA-2": "SH",
    "ISO-ALPHA-3": "SHN",
    "IOC": "",
    "FIFA": "",
    "latitude": -24.143474,
    "longitude": -10.030696
  },
  {
    "Country": "Saint Helena",
    "ISO-ALPHA-2": "SH",
    "ISO-ALPHA-3": "SHN",
    "IOC": "",
    "FIFA": "",
    "latitude": -24.143474,
    "longitude": -10.030696
  },
  {
    "Country": "Svalbard and Jan Mayen",
    "ISO-ALPHA-2": "SJ",
    "ISO-ALPHA-3": "SJM",
    "IOC": "",
    "FIFA": "",
    "latitude": 77.553604,
    "longitude": 23.670272
  },
  {
    "Country": "Solomon Islands",
    "ISO-ALPHA-2": "SB",
    "ISO-ALPHA-3": "SLB",
    "IOC": "SOL",
    "FIFA": "SOL",
    "latitude": -9.64571,
    "longitude": 160.156194
  },
  {
    "Country": "Sierra Leone",
    "ISO-ALPHA-2": "SL",
    "ISO-ALPHA-3": "SLE",
    "IOC": "SLE",
    "FIFA": "SLE",
    "latitude": 8.460555,
    "longitude": -11.779889
  },
  {
    "Country": "El Salvador",
    "ISO-ALPHA-2": "SV",
    "ISO-ALPHA-3": "SLV",
    "IOC": "ESA",
    "FIFA": "SLV",
    "latitude": 13.794185,
    "longitude": -88.89653
  },
  {
    "Country": "San Marino",
    "ISO-ALPHA-2": "SM",
    "ISO-ALPHA-3": "SMR",
    "IOC": "SMR",
    "FIFA": "SMR",
    "latitude": 43.94236,
    "longitude": 12.457777
  },
  {
    "Country": "Somalia",
    "ISO-ALPHA-2": "SO",
    "ISO-ALPHA-3": "SOM",
    "IOC": "SOM",
    "FIFA": "SOM",
    "latitude": 5.152149,
    "longitude": 46.199616
  },
  {
    "Country": "Saint Pierre and Miquelon",
    "ISO-ALPHA-2": "PM",
    "ISO-ALPHA-3": "SPM",
    "IOC": "",
    "FIFA": "",
    "latitude": 46.941936,
    "longitude": -56.27111
  },
  {
    "Country": "Serbia",
    "ISO-ALPHA-2": "RS",
    "ISO-ALPHA-3": "SRB",
    "IOC": "SRB",
    "FIFA": "SRB",
    "latitude": 44.016521,
    "longitude": 21.005859
  },
  {
    "Country": "South Sudan",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "SSD",
    "IOC": "SSD",
    "FIFA": "SSD",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "São Tomé and Príncipe",
    "ISO-ALPHA-2": "ST",
    "ISO-ALPHA-3": "STP",
    "IOC": "STP",
    "FIFA": "STP",
    "latitude": 0.18636,
    "longitude": 6.613081
  },
  {
    "Country": "Soviet Union",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "SUN",
    "IOC": "URS",
    "FIFA": "URS",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Suriname",
    "ISO-ALPHA-2": "SR",
    "ISO-ALPHA-3": "SUR",
    "IOC": "SUR",
    "FIFA": "SUR",
    "latitude": 3.919305,
    "longitude": -56.027783
  },
  {
    "Country": "Slovakia",
    "ISO-ALPHA-2": "SK",
    "ISO-ALPHA-3": "SVK",
    "IOC": "SVK",
    "FIFA": "SVK",
    "latitude": 48.669026,
    "longitude": 19.699024
  },
  {
    "Country": "Slovenia",
    "ISO-ALPHA-2": "SI",
    "ISO-ALPHA-3": "SVN",
    "IOC": "SLO",
    "FIFA": "SVN",
    "latitude": 46.151241,
    "longitude": 14.995463
  },
  {
    "Country": "Sweden",
    "ISO-ALPHA-2": "SE",
    "ISO-ALPHA-3": "SWE",
    "IOC": "SWE",
    "FIFA": "SWE",
    "latitude": 60.128161,
    "longitude": 18.643501
  },
  {
    "Country": "Eswatini",
    "ISO-ALPHA-2": "SZ",
    "ISO-ALPHA-3": "SWZ",
    "IOC": "SWZ",
    "FIFA": "SWZ",
    "latitude": -26.522503,
    "longitude": 31.465866
  },
  {
    "Country": "Swaziland",
    "ISO-ALPHA-2": "SZ",
    "ISO-ALPHA-3": "SWZ",
    "IOC": "SWZ",
    "FIFA": "SWZ",
    "latitude": -26.522503,
    "longitude": 31.465866
  },
  {
    "Country": "Sint Maarten (Dutch part)",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "SXM",
    "IOC": "",
    "FIFA": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Seychelles",
    "ISO-ALPHA-2": "SC",
    "ISO-ALPHA-3": "SYC",
    "IOC": "SEY",
    "FIFA": "SEY",
    "latitude": -4.679574,
    "longitude": 55.491977
  },
  {
    "Country": "Syria",
    "ISO-ALPHA-2": "SY",
    "ISO-ALPHA-3": "SYR",
    "IOC": "SYR",
    "FIFA": "SYR",
    "latitude": 34.802075,
    "longitude": 38.996815
  },
  {
    "Country": "Turks and Caicos Islands",
    "ISO-ALPHA-2": "TC",
    "ISO-ALPHA-3": "TCA",
    "IOC": "",
    "FIFA": "TCA",
    "latitude": 21.694025,
    "longitude": -71.797928
  },
  {
    "Country": "Chad",
    "ISO-ALPHA-2": "TD",
    "ISO-ALPHA-3": "TCD",
    "IOC": "CHA",
    "FIFA": "CHA",
    "latitude": 15.454166,
    "longitude": 18.732207
  },
  {
    "Country": "Togo",
    "ISO-ALPHA-2": "TG",
    "ISO-ALPHA-3": "TGO",
    "IOC": "TOG",
    "FIFA": "TOG",
    "latitude": 8.619543,
    "longitude": 0.824782
  },
  {
    "Country": "Thailand",
    "ISO-ALPHA-2": "TH",
    "ISO-ALPHA-3": "THA",
    "IOC": "THA",
    "FIFA": "THA",
    "latitude": 15.870032,
    "longitude": 100.992541
  },
  {
    "Country": "Tajikistan",
    "ISO-ALPHA-2": "TJ",
    "ISO-ALPHA-3": "TJK",
    "IOC": "TJK",
    "FIFA": "TJK",
    "latitude": 38.861034,
    "longitude": 71.276093
  },
  {
    "Country": "Tokelau",
    "ISO-ALPHA-2": "TK",
    "ISO-ALPHA-3": "TKL",
    "IOC": "",
    "FIFA": "",
    "latitude": -8.967363,
    "longitude": -171.855881
  },
  {
    "Country": "Turkmenistan",
    "ISO-ALPHA-2": "TM",
    "ISO-ALPHA-3": "TKM",
    "IOC": "TKM",
    "FIFA": "TKM",
    "latitude": 38.969719,
    "longitude": 59.556278
  },
  {
    "Country": "Timor-Leste",
    "ISO-ALPHA-2": "TL",
    "ISO-ALPHA-3": "TLS",
    "IOC": "TLS",
    "FIFA": "TLS",
    "latitude": -8.874217,
    "longitude": 125.727539
  },
  {
    "Country": "Tonga",
    "ISO-ALPHA-2": "TO",
    "ISO-ALPHA-3": "TON",
    "IOC": "TGA",
    "FIFA": "TGA",
    "latitude": -21.178986,
    "longitude": -175.198242
  },
  {
    "Country": "Trinidad and Tobago",
    "ISO-ALPHA-2": "TT",
    "ISO-ALPHA-3": "TTO",
    "IOC": "TTO",
    "FIFA": "TRI",
    "latitude": 10.691803,
    "longitude": -61.222503
  },
  {
    "Country": "Tunisia",
    "ISO-ALPHA-2": "TN",
    "ISO-ALPHA-3": "TUN",
    "IOC": "TUN",
    "FIFA": "TUN",
    "latitude": 33.886917,
    "longitude": 9.537499
  },
  {
    "Country": "Turkey",
    "ISO-ALPHA-2": "TR",
    "ISO-ALPHA-3": "TUR",
    "IOC": "TUR",
    "FIFA": "TUR",
    "latitude": 38.963745,
    "longitude": 35.243322
  },
  {
    "Country": "Tuvalu",
    "ISO-ALPHA-2": "TV",
    "ISO-ALPHA-3": "TUV",
    "IOC": "TUV",
    "FIFA": "",
    "latitude": -7.109535,
    "longitude": 177.64933
  },
  {
    "Country": "Taiwan",
    "ISO-ALPHA-2": "TW",
    "ISO-ALPHA-3": "TWN",
    "IOC": "TPE",
    "FIFA": "TPE",
    "latitude": 23.69781,
    "longitude": 120.960515
  },
  {
    "Country": "Taiwan (Province of China)",
    "ISO-ALPHA-2": "TW",
    "ISO-ALPHA-3": "TWN",
    "IOC": "TPE",
    "FIFA": "TPE",
    "latitude": 23.69781,
    "longitude": 120.960515
  },
  {
    "Country": "Tanzania",
    "ISO-ALPHA-2": "TZ",
    "ISO-ALPHA-3": "TZA",
    "IOC": "TAN",
    "FIFA": "TAN",
    "latitude": -6.369028,
    "longitude": 34.888822
  },
  {
    "Country": "Uganda",
    "ISO-ALPHA-2": "UG",
    "ISO-ALPHA-3": "UGA",
    "IOC": "UGA",
    "FIFA": "UGA",
    "latitude": 1.373333,
    "longitude": 32.290275
  },
  {
    "Country": "Ukraine",
    "ISO-ALPHA-2": "UA",
    "ISO-ALPHA-3": "UKR",
    "IOC": "UKR",
    "FIFA": "UKR",
    "latitude": 48.379433,
    "longitude": 31.16558
  },
  {
    "Country": "United States Minor Outlying Islands",
    "ISO-ALPHA-2": "UM",
    "ISO-ALPHA-3": "UMI",
    "IOC": "",
    "FIFA": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Uruguay",
    "ISO-ALPHA-2": "UY",
    "ISO-ALPHA-3": "URY",
    "IOC": "URU",
    "FIFA": "URU",
    "latitude": -32.522779,
    "longitude": -55.765835
  },
  {
    "Country": "United States",
    "ISO-ALPHA-2": "US",
    "ISO-ALPHA-3": "USA",
    "IOC": "USA",
    "FIFA": "USA",
    "latitude": 37.09024,
    "longitude": -95.712891
  },
  {
    "Country": "Uzbekistan",
    "ISO-ALPHA-2": "UZ",
    "ISO-ALPHA-3": "UZB",
    "IOC": "UZB",
    "FIFA": "UZB",
    "latitude": 41.377491,
    "longitude": 64.585262
  },
  {
    "Country": "Vatican City State",
    "ISO-ALPHA-2": "VA",
    "ISO-ALPHA-3": "VAT",
    "IOC": "",
    "FIFA": "",
    "latitude": 41.902916,
    "longitude": 12.453389
  },
  {
    "Country": "Vatican City",
    "ISO-ALPHA-2": "VA",
    "ISO-ALPHA-3": "VAT",
    "IOC": "",
    "FIFA": "",
    "latitude": 41.902916,
    "longitude": 12.453389
  },
  {
    "Country": "Saint Vincent and the Grenadines",
    "ISO-ALPHA-2": "VC",
    "ISO-ALPHA-3": "VCT",
    "IOC": "VIN",
    "FIFA": "VIN",
    "latitude": 12.984305,
    "longitude": -61.287228
  },
  {
    "Country": "Viet-Nam, Democratic Republic of",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "VDR",
    "IOC": "",
    "FIFA": "VNO",
    "latitude": 14.058324,
    "longitude": 108.277199
  },
  {
    "Country": "Venezuela",
    "ISO-ALPHA-2": "VE",
    "ISO-ALPHA-3": "VEN",
    "IOC": "VEN",
    "FIFA": "VEN",
    "latitude": 6.42375,
    "longitude": -66.58973
  },
  {
    "Country": "British Virgin Islands",
    "ISO-ALPHA-2": "VG",
    "ISO-ALPHA-3": "VGB",
    "IOC": "IVB",
    "FIFA": "VGB",
    "latitude": 18.420695,
    "longitude": -64.639968
  },
  {
    "Country": "United States Virgin Islands",
    "ISO-ALPHA-2": "VI",
    "ISO-ALPHA-3": "VIR",
    "IOC": "ISV",
    "FIFA": "VIR",
    "latitude": 18.335765,
    "longitude": -64.896335
  },
  {
    "Country": "U.S. Virgin Islands",
    "ISO-ALPHA-2": "VI",
    "ISO-ALPHA-3": "VIR",
    "IOC": "ISV",
    "FIFA": "VIR",
    "latitude": 18.335765,
    "longitude": -64.896335
  },
  {
    "Country": "Viet Nam",
    "ISO-ALPHA-2": "VN",
    "ISO-ALPHA-3": "VNM",
    "IOC": "VNM",
    "FIFA": "VSO",
    "latitude": 14.058324,
    "longitude": 108.277199
  },
  {
    "Country": "Vietnam",
    "ISO-ALPHA-2": "VN",
    "ISO-ALPHA-3": "VNM",
    "IOC": "VNM",
    "FIFA": "VSO",
    "latitude": 14.058324,
    "longitude": 108.277199
  },
  {
    "Country": "Vietnam",
    "ISO-ALPHA-2": "VN",
    "ISO-ALPHA-3": "VNM",
    "IOC": "VIE",
    "FIFA": "VIE",
    "latitude": 14.058324,
    "longitude": 108.277199
  },
  {
    "Country": "Viet Nam",
    "ISO-ALPHA-2": "VN",
    "ISO-ALPHA-3": "VNM",
    "IOC": "VIE",
    "FIFA": "VIE",
    "latitude": 14.058324,
    "longitude": 108.277199
  },
  {
    "Country": "Vanuatu",
    "ISO-ALPHA-2": "VU",
    "ISO-ALPHA-3": "VUT",
    "IOC": "VAN",
    "FIFA": "VAN",
    "latitude": -15.376706,
    "longitude": 166.959158
  },
  {
    "Country": "Wallis and Futuna",
    "ISO-ALPHA-2": "WF",
    "ISO-ALPHA-3": "WLF",
    "IOC": "",
    "FIFA": "",
    "latitude": -13.768752,
    "longitude": -177.156097
  },
  {
    "Country": "Samoa",
    "ISO-ALPHA-2": "WS",
    "ISO-ALPHA-3": "WSM",
    "IOC": "SAM",
    "FIFA": "SAM",
    "latitude": -13.759029,
    "longitude": -172.104629
  },
  {
    "Country": "North Yemen",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "YEM",
    "IOC": "YAR",
    "FIFA": "NYE",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Yemen",
    "ISO-ALPHA-2": "YE",
    "ISO-ALPHA-3": "YEM",
    "IOC": "YEM",
    "FIFA": "YEM",
    "latitude": 15.552727,
    "longitude": 48.516388
  },
  {
    "Country": "South Yemen",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "YMD",
    "IOC": "YMD",
    "FIFA": "SYE",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Yugoslavia",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "YUG",
    "IOC": "YUG",
    "FIFA": "YUG",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Yugoslavia, Federal Republic of",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "YUG",
    "IOC": "YUG",
    "FIFA": "YUG",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "South Africa",
    "ISO-ALPHA-2": "ZA",
    "ISO-ALPHA-3": "ZAF",
    "IOC": "RSA",
    "FIFA": "RSA",
    "latitude": -30.559482,
    "longitude": 22.937506
  },
  {
    "Country": "Zaire",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "ZAR",
    "IOC": "ZAI",
    "FIFA": "ZAI",
    "latitude": -4.038333,
    "longitude": 21.758664
  },
  {
    "Country": "Zambia",
    "ISO-ALPHA-2": "ZM",
    "ISO-ALPHA-3": "ZMB",
    "IOC": "ZAM",
    "FIFA": "ZAM",
    "latitude": -13.133897,
    "longitude": 27.849332
  },
  {
    "Country": "Zimbabwe",
    "ISO-ALPHA-2": "ZW",
    "ISO-ALPHA-3": "ZWE",
    "IOC": "ZIM",
    "FIFA": "ZIM",
    "latitude": -19.015438,
    "longitude": 29.154857
  },
  {
    "Country": "Ceylon",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "CEY",
    "FIFA": "CEY",
    "latitude": 7.873054,
    "longitude": 80.771797
  },
  {
    "Country": "Sri Lanka",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "CEY",
    "FIFA": "CEY",
    "latitude": 7.873054,
    "longitude": 80.771797
  },
  {
    "Country": "British Honduras",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "HBR",
    "FIFA": "BHO",
    "latitude": 17.189877,
    "longitude": -88.49765
  },
  {
    "Country": "Belize",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "HBR",
    "FIFA": "BHO",
    "latitude": 17.189877,
    "longitude": -88.49765
  },
  {
    "Country": "England",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "",
    "FIFA": "ENG",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Khmer Republic",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "KHM",
    "FIFA": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Malaya",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "MAL",
    "FIFA": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "North Borneo",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "NBO",
    "FIFA": "NBO",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Northern Ireland",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "",
    "FIFA": "NIR",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Northern Rhodesia",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "NRH",
    "FIFA": "NRH",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Scotland",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "",
    "FIFA": "SCO",
    "latitude": "",
    "longitude": ""
  },
  {
    "Country": "Wales",
    "ISO-ALPHA-2": "",
    "ISO-ALPHA-3": "",
    "IOC": "",
    "FIFA": "WAL",
    "latitude": "",
    "longitude": ""
  }
]