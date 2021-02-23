// Shortened version from https://ourworldindata.org/age-structure
// Age numbers in thousand people

let worldAges = [
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1950,
    "Age0-4": 6.749,
    "Age5-14": 9.622,
    "Age15-24": 6.954,
    "Age25-64": 14.044,
    "AgeOver65": 0.683
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1960,
    "Age0-4": 8.76,
    "Age5-14": 15.01,
    "Age15-24": 9.631,
    "Age25-64": 19.464,
    "AgeOver65": 1.343
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1970,
    "Age0-4": 7.012,
    "Age5-14": 15.028,
    "Age15-24": 12.011,
    "Age25-64": 22.652,
    "AgeOver65": 2.367
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1980,
    "Age0-4": 5.262,
    "Age5-14": 10.671,
    "Age15-24": 13.043,
    "Age25-64": 27.004,
    "AgeOver65": 4.117
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1990,
    "Age0-4": 5.398,
    "Age5-14": 9.862,
    "Age15-24": 8.827,
    "Age25-64": 33.307,
    "AgeOver65": 4.758
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 2000,
    "Age0-4": 6.978,
    "Age5-14": 14.085,
    "Age15-24": 11.189,
    "Age25-64": 51.731,
    "AgeOver65": 6.883
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 2010,
    "Age0-4": 6.659,
    "Age5-14": 14.562,
    "Age15-24": 12.468,
    "Age25-64": 57.517,
    "AgeOver65": 10.459
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 2020,
    "Age0-4": 6.08,
    "Age5-14": 12.477,
    "Age15-24": 14.775,
    "Age25-64": 57.841,
    "AgeOver65": 15.593
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1950,
    "Age0-4": 1291.622,
    "Age5-14": 1888.245,
    "Age15-24": 1476.233,
    "Age25-64": 2873.062,
    "AgeOver65": 222.955
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1960,
    "Age0-4": 1541.407,
    "Age5-14": 2249.99,
    "Age15-24": 1724.459,
    "Age25-64": 3229.348,
    "AgeOver65": 251.763
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1970,
    "Age0-4": 2041.599,
    "Age5-14": 2911.147,
    "Age15-24": 2087.215,
    "Age25-64": 3839.644,
    "AgeOver65": 294.049
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1980,
    "Age0-4": 2520.386,
    "Age5-14": 3647.615,
    "Age15-24": 2517.465,
    "Age25-64": 4345.841,
    "AgeOver65": 325.193
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1990,
    "Age0-4": 2412.476,
    "Age5-14": 3583.691,
    "Age15-24": 2362.847,
    "Age25-64": 3776.186,
    "AgeOver65": 277.111
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 2000,
    "Age0-4": 4166.247,
    "Age5-14": 5993.773,
    "Age15-24": 3946.244,
    "Age25-64": 6197.428,
    "AgeOver65": 476.265
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 2010,
    "Age0-4": 5315.605,
    "Age5-14": 8745.435,
    "Age15-24": 5570.09,
    "Age25-64": 8874.904,
    "AgeOver65": 679.477
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 2020,
    "Age0-4": 5672.509,
    "Age5-14": 10608.337,
    "Age15-24": 8555.93,
    "Age25-64": 13060.327,
    "AgeOver65": 1031.238
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1950,
    "Age0-4": 739.236,
    "Age5-14": 1085.648,
    "Age15-24": 884.289,
    "Age25-64": 1705.016,
    "AgeOver65": 133.832
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1960,
    "Age0-4": 994.671,
    "Age5-14": 1303.603,
    "Age15-24": 851.128,
    "Age25-64": 2141.5,
    "AgeOver65": 164.036
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1970,
    "Age0-4": 1034.002,
    "Age5-14": 1635.035,
    "Age15-24": 1031.192,
    "Age25-64": 2036.541,
    "AgeOver65": 153.59
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1980,
    "Age0-4": 1596.903,
    "Age5-14": 2249.196,
    "Age15-24": 1625.339,
    "Age25-64": 2656.044,
    "AgeOver65": 213.808
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1990,
    "Age0-4": 2314.341,
    "Age5-14": 3321.055,
    "Age15-24": 2222.772,
    "Age25-64": 3697.924,
    "AgeOver65": 292.293
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 2000,
    "Age0-4": 3082.554,
    "Age5-14": 4656.081,
    "Age15-24": 3226.761,
    "Age25-64": 5009.225,
    "AgeOver65": 420.856
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 2010,
    "Age0-4": 4472.076,
    "Age5-14": 6515.081,
    "Age15-24": 4600.369,
    "Age25-64": 7217.336,
    "AgeOver65": 551.385
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 2020,
    "Age0-4": 5795.004,
    "Age5-14": 9453.425,
    "Age15-24": 6415.084,
    "Age25-64": 10482.505,
    "AgeOver65": 720.25
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1950,
    "Age0-4": 180.78,
    "Age5-14": 304.53,
    "Age15-24": 228.767,
    "Age25-64": 462.448,
    "AgeOver65": 86.639
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1960,
    "Age0-4": 272.916,
    "Age5-14": 384.065,
    "Age15-24": 299.301,
    "Age25-64": 591.282,
    "AgeOver65": 88.527
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1970,
    "Age0-4": 312.372,
    "Age5-14": 567.531,
    "Age15-24": 380.589,
    "Age25-64": 778.526,
    "AgeOver65": 111.686
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1980,
    "Age0-4": 336.115,
    "Age5-14": 629.16,
    "Age15-24": 562.883,
    "Age25-64": 1012.395,
    "AgeOver65": 142.144
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1990,
    "Age0-4": 390.242,
    "Age5-14": 686.755,
    "Age15-24": 625.136,
    "Age25-64": 1403.37,
    "AgeOver65": 180.567
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 2000,
    "Age0-4": 279.835,
    "Age5-14": 669.384,
    "Age15-24": 529.127,
    "Age25-64": 1430.035,
    "AgeOver65": 220.865
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 2010,
    "Age0-4": 173.861,
    "Age5-14": 488.122,
    "Age15-24": 538.304,
    "Age25-64": 1433.91,
    "AgeOver65": 313.832
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 2020,
    "Age0-4": 166.278,
    "Age5-14": 329.735,
    "Age15-24": 427.953,
    "Age25-64": 1530.665,
    "AgeOver65": 423.169
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1950,
    "Age0-4": 12.031,
    "Age5-14": 17.378,
    "Age15-24": 12.907,
    "Age25-64": 24.896,
    "AgeOver65": 2.382
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1960,
    "Age0-4": 17.063,
    "Age5-14": 24.12,
    "Age15-24": 16.549,
    "Age25-64": 31.509,
    "AgeOver65": 3.176
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1970,
    "Age0-4": 36.485,
    "Age5-14": 45.123,
    "Age15-24": 47.489,
    "Age25-64": 102.049,
    "AgeOver65": 3.366
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1980,
    "Age0-4": 131.831,
    "Age5-14": 154.779,
    "Age15-24": 180.835,
    "Age25-64": 537.296,
    "AgeOver65": 14.766
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1990,
    "Age0-4": 229.716,
    "Age5-14": 338.282,
    "Age15-24": 287.636,
    "Age25-64": 950.858,
    "AgeOver65": 21.945
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 2000,
    "Age0-4": 266.426,
    "Age5-14": 549.786,
    "Age15-24": 500.008,
    "Age25-64": 1783.605,
    "AgeOver65": 34.242
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 2010,
    "Age0-4": 441.727,
    "Age5-14": 683.135,
    "Age15-24": 1157.789,
    "Age25-64": 6208.726,
    "AgeOver65": 58.621
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 2020,
    "Age0-4": 499.138,
    "Age5-14": 966.034,
    "Age15-24": 1105.285,
    "Age25-64": 7194.892,
    "AgeOver65": 125.051
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1950,
    "Age0-4": 1994.556,
    "Age5-14": 3316.912,
    "Age15-24": 3105.309,
    "Age25-64": 7910.35,
    "AgeOver65": 710.783
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1960,
    "Age0-4": 2244.855,
    "Age5-14": 4114.762,
    "Age15-24": 3387.664,
    "Age25-64": 9601.473,
    "AgeOver65": 1133.027
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1970,
    "Age0-4": 2473.308,
    "Age5-14": 4556.852,
    "Age15-24": 4149.562,
    "Age25-64": 11042.221,
    "AgeOver65": 1658.621
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1980,
    "Age0-4": 3278.151,
    "Age5-14": 5206.927,
    "Age15-24": 4544.705,
    "Age25-64": 12602.246,
    "AgeOver65": 2264.503
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1990,
    "Age0-4": 3458.7,
    "Age5-14": 6583.283,
    "Age15-24": 5301.786,
    "Age25-64": 14364.518,
    "AgeOver65": 2910.361
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 2000,
    "Age0-4": 3507.341,
    "Age5-14": 6986.896,
    "Age15-24": 6487.116,
    "Age25-64": 16302.422,
    "AgeOver65": 3587.021
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 2010,
    "Age0-4": 3606.003,
    "Age5-14": 7041.597,
    "Age15-24": 6890.475,
    "Age25-64": 19188.345,
    "AgeOver65": 4169.331
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 2020,
    "Age0-4": 3736.651,
    "Age5-14": 7307.079,
    "Age15-24": 7016.784,
    "Age25-64": 21998.078,
    "AgeOver65": 5137.185
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1950,
    "Age0-4": 150.356,
    "Age5-14": 299.815,
    "Age15-24": 308.263,
    "Age25-64": 482.172,
    "AgeOver65": 112.896
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1960,
    "Age0-4": 323.412,
    "Age5-14": 401.024,
    "Age15-24": 317.883,
    "Age25-64": 712.83,
    "AgeOver65": 118.97
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1970,
    "Age0-4": 291.511,
    "Age5-14": 701.791,
    "Age15-24": 429.701,
    "Age25-64": 961.739,
    "AgeOver65": 140.325
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1980,
    "Age0-4": 327.083,
    "Age5-14": 611.218,
    "Age15-24": 722.529,
    "Age25-64": 1254.193,
    "AgeOver65": 184.736
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1990,
    "Age0-4": 385.616,
    "Age5-14": 677.384,
    "Age15-24": 561.651,
    "Age25-64": 1714.244,
    "AgeOver65": 199.269
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 2000,
    "Age0-4": 196.554,
    "Age5-14": 595.745,
    "Age15-24": 527.213,
    "Age25-64": 1442.641,
    "AgeOver65": 307.444
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 2010,
    "Age0-4": 201.083,
    "Age5-14": 358.864,
    "Age15-24": 522.879,
    "Age25-64": 1478.163,
    "AgeOver65": 316.325
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 2020,
    "Age0-4": 204.987,
    "Age5-14": 412.325,
    "Age15-24": 346.974,
    "Age25-64": 1649.202,
    "AgeOver65": 349.746
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1950,
    "Age0-4": 7.092,
    "Age5-14": 12.051,
    "Age15-24": 7.564,
    "Age25-64": 16.891,
    "AgeOver65": 1.917
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1960,
    "Age0-4": 8.354,
    "Age5-14": 14.911,
    "Age15-24": 9.45,
    "Age25-64": 19.124,
    "AgeOver65": 2.293
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1970,
    "Age0-4": 9.573,
    "Age5-14": 19.089,
    "Age15-24": 12.414,
    "Age25-64": 20.578,
    "AgeOver65": 2.53
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1980,
    "Age0-4": 7.933,
    "Age5-14": 15.556,
    "Age15-24": 12.012,
    "Age25-64": 22.976,
    "AgeOver65": 3.384
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1990,
    "Age0-4": 6.556,
    "Age5-14": 12.694,
    "Age15-24": 11.746,
    "Age25-64": 26.554,
    "AgeOver65": 4.983
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 2000,
    "Age0-4": 7.288,
    "Age5-14": 14.519,
    "Age15-24": 12.271,
    "Age25-64": 36.932,
    "AgeOver65": 4.997
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 2010,
    "Age0-4": 6.979,
    "Age5-14": 14.448,
    "Age15-24": 14.165,
    "Age25-64": 45.961,
    "AgeOver65": 6.477
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 2020,
    "Age0-4": 7.355,
    "Age5-14": 14.042,
    "Age15-24": 14.632,
    "Age25-64": 52.759,
    "AgeOver65": 9.14
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1950,
    "Age0-4": 888.742,
    "Age5-14": 1286.474,
    "Age15-24": 1190.707,
    "Age25-64": 4143.507,
    "AgeOver65": 667.918
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1960,
    "Age0-4": 1088.625,
    "Age5-14": 2002.566,
    "Age15-24": 1432.82,
    "Age25-64": 4836.156,
    "AgeOver65": 881.903
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1970,
    "Age0-4": 1238.526,
    "Age5-14": 2491.381,
    "Age15-24": 2241.171,
    "Age25-64": 5767.314,
    "AgeOver65": 1054.638
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1980,
    "Age0-4": 1129.308,
    "Age5-14": 2561.653,
    "Age15-24": 2567.486,
    "Age25-64": 6925.996,
    "AgeOver65": 1403.957
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1990,
    "Age0-4": 1255.771,
    "Age5-14": 2490.726,
    "Age15-24": 2743.687,
    "Age25-64": 8594.784,
    "AgeOver65": 1875.632
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 2000,
    "Age0-4": 1278.736,
    "Age5-14": 2687.135,
    "Age15-24": 2561.828,
    "Age25-64": 10123.294,
    "AgeOver65": 2340.441
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 2010,
    "Age0-4": 1461.885,
    "Age5-14": 2754.669,
    "Age15-24": 3132.803,
    "Age25-64": 11841.793,
    "AgeOver65": 2963.537
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 2020,
    "Age0-4": 1669.707,
    "Age5-14": 3249.841,
    "Age15-24": 3114.474,
    "Age25-64": 13331.551,
    "AgeOver65": 4134.308
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1950,
    "Age0-4": 516.129,
    "Age5-14": 1062.94,
    "Age15-24": 949.941,
    "Age25-64": 3684.948,
    "AgeOver65": 722.484
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1960,
    "Age0-4": 580.913,
    "Age5-14": 991.117,
    "Age15-24": 1035.454,
    "Age25-64": 3604.066,
    "AgeOver65": 859.223
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1970,
    "Age0-4": 622.908,
    "Age5-14": 1224.945,
    "Age15-24": 996.581,
    "Age25-64": 3621.729,
    "AgeOver65": 1050.075
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1980,
    "Age0-4": 430.482,
    "Age5-14": 1131.13,
    "Age15-24": 1224.673,
    "Age25-64": 3667.133,
    "AgeOver65": 1156.332
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1990,
    "Age0-4": 428.844,
    "Age5-14": 878.844,
    "Age15-24": 1150.89,
    "Age25-64": 4112.843,
    "AgeOver65": 1152.533
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 2000,
    "Age0-4": 416.398,
    "Age5-14": 941.432,
    "Age15-24": 949.589,
    "Age25-64": 4520.006,
    "AgeOver65": 1241.851
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 2010,
    "Age0-4": 390.934,
    "Age5-14": 846.728,
    "Age15-24": 1023.42,
    "Age25-64": 4652.024,
    "AgeOver65": 1496.839
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 2020,
    "Age0-4": 448.166,
    "Age5-14": 849.854,
    "Age15-24": 961.131,
    "Age25-64": 5017.66,
    "AgeOver65": 1729.589
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1950,
    "Age0-4": 341.856,
    "Age5-14": 652.889,
    "Age15-24": 685.49,
    "Age25-64": 1041.233,
    "AgeOver65": 206.458
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1960,
    "Age0-4": 699.845,
    "Age5-14": 840.07,
    "Age15-24": 644.621,
    "Age25-64": 1501.132,
    "AgeOver65": 209.73
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1970,
    "Age0-4": 778.567,
    "Age5-14": 1491.108,
    "Age15-24": 811.628,
    "Age25-64": 1829.828,
    "AgeOver65": 268.901
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1980,
    "Age0-4": 697.245,
    "Age5-14": 1448.971,
    "Age15-24": 1479.114,
    "Age25-64": 2213.117,
    "AgeOver65": 312.288
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1990,
    "Age0-4": 938.591,
    "Age5-14": 1466.191,
    "Age15-24": 1329.423,
    "Age25-64": 3172.398,
    "AgeOver65": 336.155
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 2000,
    "Age0-4": 712.542,
    "Age5-14": 1817.507,
    "Age15-24": 1450.313,
    "Age25-64": 3667.209,
    "AgeOver65": 475.172
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 2010,
    "Age0-4": 702.249,
    "Age5-14": 1360.344,
    "Age15-24": 1839.909,
    "Age25-64": 4597.198,
    "AgeOver65": 532.765
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 2020,
    "Age0-4": 825.398,
    "Age5-14": 1558.861,
    "Age15-24": 1356.364,
    "Age25-64": 5715.015,
    "AgeOver65": 683.537
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1950,
    "Age0-4": 377.41,
    "Age5-14": 566.536,
    "Age15-24": 439.168,
    "Age25-64": 850.986,
    "AgeOver65": 74.827
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1960,
    "Age0-4": 511.173,
    "Age5-14": 714.909,
    "Age15-24": 498.009,
    "Age25-64": 991.708,
    "AgeOver65": 82.126
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1970,
    "Age0-4": 637.109,
    "Age5-14": 946.31,
    "Age15-24": 645.496,
    "Age25-64": 1146.419,
    "AgeOver65": 103.736
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1980,
    "Age0-4": 782.875,
    "Age5-14": 1074.801,
    "Age15-24": 859.6,
    "Age25-64": 1309.591,
    "AgeOver65": 130.429
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1990,
    "Age0-4": 1096.536,
    "Age5-14": 1509.421,
    "Age15-24": 968.073,
    "Age25-64": 1715.05,
    "AgeOver65": 149.879
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 2000,
    "Age0-4": 1155.817,
    "Age5-14": 2038.21,
    "Age15-24": 1281.038,
    "Age25-64": 1744.444,
    "AgeOver65": 159.362
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 2010,
    "Age0-4": 1578.653,
    "Age5-14": 2337.543,
    "Age15-24": 1968.168,
    "Age25-64": 2603.772,
    "AgeOver65": 187.47
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 2020,
    "Age0-4": 2053.84,
    "Age5-14": 3326.967,
    "Age15-24": 2259.702,
    "Age25-64": 3967.255,
    "AgeOver65": 283.017
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1950,
    "Age0-4": 696.82,
    "Age5-14": 1117.632,
    "Age15-24": 1277.295,
    "Age25-64": 4595.581,
    "AgeOver65": 950.193
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1960,
    "Age0-4": 749.685,
    "Age5-14": 1405.6,
    "Age15-24": 1131.261,
    "Age25-64": 4792.289,
    "AgeOver65": 1088.526
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1970,
    "Age0-4": 718.858,
    "Age5-14": 1550.026,
    "Age15-24": 1433.091,
    "Age25-64": 4635.671,
    "AgeOver65": 1294.533
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1980,
    "Age0-4": 600.255,
    "Age5-14": 1387.534,
    "Age15-24": 1589.528,
    "Age25-64": 4866.1,
    "AgeOver65": 1425.582
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1990,
    "Age0-4": 589.974,
    "Age5-14": 1203.807,
    "Age15-24": 1401.249,
    "Age25-64": 5311.38,
    "AgeOver65": 1500.135
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 2000,
    "Age0-4": 576.032,
    "Age5-14": 1230.091,
    "Age15-24": 1229.518,
    "Age25-64": 5512.181,
    "AgeOver65": 1734.224
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 2010,
    "Age0-4": 632.774,
    "Age5-14": 1213.985,
    "Age15-24": 1322.518,
    "Age25-64": 5873.33,
    "AgeOver65": 1896.128
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 2020,
    "Age0-4": 633.653,
    "Age5-14": 1340.519,
    "Age15-24": 1298.484,
    "Age25-64": 6085.467,
    "AgeOver65": 2231.493
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1950,
    "Age0-4": 308.821,
    "Age5-14": 484.574,
    "Age15-24": 362.233,
    "Age25-64": 922.842,
    "AgeOver65": 176.752
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1960,
    "Age0-4": 383.409,
    "Age5-14": 553.541,
    "Age15-24": 441.201,
    "Age25-64": 931.368,
    "AgeOver65": 122.098
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1970,
    "Age0-4": 508.36,
    "Age5-14": 722.363,
    "Age15-24": 512.375,
    "Age25-64": 1033.739,
    "AgeOver65": 135.501
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1980,
    "Age0-4": 680.505,
    "Age5-14": 980.17,
    "Age15-24": 677.736,
    "Age25-64": 1216.653,
    "AgeOver65": 162.097
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1990,
    "Age0-4": 920.427,
    "Age5-14": 1359.269,
    "Age15-24": 937.057,
    "Age25-64": 1575.035,
    "AgeOver65": 186.701
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 2000,
    "Age0-4": 1220.561,
    "Age5-14": 1878.643,
    "Age15-24": 1323.216,
    "Age25-64": 2219.882,
    "AgeOver65": 223.644
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 2010,
    "Age0-4": 1558.812,
    "Age5-14": 2474.695,
    "Age15-24": 1813.255,
    "Age25-64": 3055.372,
    "AgeOver65": 297.12
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 2020,
    "Age0-4": 1908.329,
    "Age5-14": 3176.692,
    "Age15-24": 2407.251,
    "Age25-64": 4233.474,
    "AgeOver65": 397.452
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1950,
    "Age0-4": 691.602,
    "Age5-14": 1053.306,
    "Age15-24": 832.108,
    "Age25-64": 1621.517,
    "AgeOver65": 85.922
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1960,
    "Age0-4": 805.707,
    "Age5-14": 1189.761,
    "Age15-24": 934.156,
    "Age25-64": 1787.058,
    "AgeOver65": 112.607
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1970,
    "Age0-4": 986.983,
    "Age5-14": 1448.342,
    "Age15-24": 1064.13,
    "Age25-64": 1969.442,
    "AgeOver65": 155.695
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1980,
    "Age0-4": 1278.246,
    "Age5-14": 1831.681,
    "Age15-24": 1308.024,
    "Age25-64": 2188.13,
    "AgeOver65": 216.756
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1990,
    "Age0-4": 1662.881,
    "Age5-14": 2500.618,
    "Age15-24": 1710.304,
    "Age25-64": 2647.97,
    "AgeOver65": 289.26
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 2000,
    "Age0-4": 2172.255,
    "Age5-14": 3256.763,
    "Age15-24": 2363.172,
    "Age25-64": 3494.813,
    "AgeOver65": 320.948
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 2010,
    "Age0-4": 2842.946,
    "Age5-14": 4370.312,
    "Age15-24": 3111.583,
    "Age25-64": 4895.249,
    "AgeOver65": 385.121
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 2020,
    "Age0-4": 3472.482,
    "Age5-14": 5802.364,
    "Age15-24": 4226.779,
    "Age25-64": 6897.669,
    "AgeOver65": 503.984
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1950,
    "Age0-4": 6237.852,
    "Age5-14": 9391.696,
    "Age15-24": 7130.367,
    "Age25-64": 13652.326,
    "AgeOver65": 1482.43
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1960,
    "Age0-4": 8444.969,
    "Age5-14": 11746.486,
    "Age15-24": 8992.167,
    "Age25-64": 17536.832,
    "AgeOver65": 1293.051
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1970,
    "Age0-4": 11750.856,
    "Age5-14": 17015.289,
    "Age15-24": 11210.549,
    "Age25-64": 22477.576,
    "AgeOver65": 1778.216
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1980,
    "Age0-4": 13833.406,
    "Age5-14": 21773.12,
    "Age15-24": 15178.84,
    "Age25-64": 26394.319,
    "AgeOver65": 2459.813
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1990,
    "Age0-4": 15889.547,
    "Age5-14": 27539.599,
    "Age15-24": 21303.525,
    "Age25-64": 35196.705,
    "AgeOver65": 3242.581
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 2000,
    "Age0-4": 16282.15,
    "Age5-14": 30896.386,
    "Age15-24": 26640.652,
    "Age25-64": 48918.602,
    "AgeOver65": 4920.072
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 2010,
    "Age0-4": 15287.419,
    "Age5-14": 31917.448,
    "Age15-24": 29513.559,
    "Age25-64": 63814.967,
    "AgeOver65": 7042.04
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 2020,
    "Age0-4": 14328.179,
    "Age5-14": 29733.709,
    "Age15-24": 30824.37,
    "Age25-64": 81194.802,
    "AgeOver65": 8608.323
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1950,
    "Age0-4": 733,
    "Age5-14": 1209.002,
    "Age15-24": 1372.001,
    "Age25-64": 3449,
    "AgeOver65": 487.993
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1960,
    "Age0-4": 663.545,
    "Age5-14": 1394.091,
    "Age15-24": 1170.776,
    "Age25-64": 4059.852,
    "AgeOver65": 597.343
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1970,
    "Age0-4": 647.043,
    "Age5-14": 1297.663,
    "Age15-24": 1371.569,
    "Age25-64": 4372.964,
    "AgeOver65": 818.302
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1980,
    "Age0-4": 679.652,
    "Age5-14": 1286.883,
    "Age15-24": 1258.912,
    "Age25-64": 4601.334,
    "AgeOver65": 1052.006
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1990,
    "Age0-4": 558.322,
    "Age5-14": 1240.679,
    "Age15-24": 1231.169,
    "Age25-64": 4648.994,
    "AgeOver65": 1162.302
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 2000,
    "Age0-4": 321.618,
    "Age5-14": 930.857,
    "Age15-24": 1136.698,
    "Age25-64": 4281.544,
    "AgeOver65": 1327.234
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 2010,
    "Age0-4": 374.746,
    "Age5-14": 627.361,
    "Age15-24": 894.176,
    "Age25-64": 4186.388,
    "AgeOver65": 1342.34
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 2020,
    "Age0-4": 312.73,
    "Age5-14": 707.265,
    "Age15-24": 614.735,
    "Age25-64": 3822.028,
    "AgeOver65": 1491.687
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1950,
    "Age0-4": 20.238,
    "Age5-14": 28.674,
    "Age15-24": 22.136,
    "Age25-64": 41.245,
    "AgeOver65": 3.319
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1960,
    "Age0-4": 27.673,
    "Age5-14": 39.401,
    "Age15-24": 28.648,
    "Age25-64": 61.85,
    "AgeOver65": 4.857
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1970,
    "Age0-4": 35.519,
    "Age5-14": 59.738,
    "Age15-24": 37.968,
    "Age25-64": 74.067,
    "AgeOver65": 5.315
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1980,
    "Age0-4": 49.897,
    "Age5-14": 74.529,
    "Age15-24": 79.617,
    "Age25-64": 148.421,
    "AgeOver65": 7.433
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1990,
    "Age0-4": 65.925,
    "Age5-14": 96.192,
    "Age15-24": 81.481,
    "Age25-64": 241.505,
    "AgeOver65": 10.824
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 2000,
    "Age0-4": 74.016,
    "Age5-14": 126.304,
    "Age15-24": 110.176,
    "Age25-64": 337.808,
    "AgeOver65": 16.306
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 2010,
    "Age0-4": 91.447,
    "Age5-14": 160.592,
    "Age15-24": 186.064,
    "Age25-64": 776.954,
    "AgeOver65": 25.807
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 2020,
    "Age0-4": 108.054,
    "Age5-14": 203.035,
    "Age15-24": 180.585,
    "Age25-64": 1164.791,
    "AgeOver65": 45.118
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1950,
    "Age0-4": 12.06,
    "Age5-14": 18.982,
    "Age15-24": 14.357,
    "Age25-64": 30.173,
    "AgeOver65": 3.518
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1960,
    "Age0-4": 17.483,
    "Age5-14": 28.946,
    "Age15-24": 18.564,
    "Age25-64": 40.388,
    "AgeOver65": 4.151
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1970,
    "Age0-4": 23.269,
    "Age5-14": 48.149,
    "Age15-24": 29.442,
    "Age25-64": 62.79,
    "AgeOver65": 5.726
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1980,
    "Age0-4": 25.225,
    "Age5-14": 52.637,
    "Age15-24": 47.98,
    "Age25-64": 76.082,
    "AgeOver65": 8.665
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1990,
    "Age0-4": 28.43,
    "Age5-14": 54.682,
    "Age15-24": 52.273,
    "Age25-64": 109.903,
    "AgeOver65": 10.939
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 2000,
    "Age0-4": 28.15,
    "Age5-14": 59.198,
    "Age15-24": 51.347,
    "Age25-64": 143.308,
    "AgeOver65": 16.042
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 2010,
    "Age0-4": 31.159,
    "Age5-14": 64.263,
    "Age15-24": 58.465,
    "Age25-64": 179.354,
    "AgeOver65": 21.695
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 2020,
    "Age0-4": 27.064,
    "Age5-14": 57.883,
    "Age15-24": 65.998,
    "Age25-64": 211.831,
    "AgeOver65": 30.472
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1950,
    "Age0-4": 384.499,
    "Age5-14": 621.701,
    "Age15-24": 599.599,
    "Age25-64": 949.001,
    "AgeOver65": 106.496
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1960,
    "Age0-4": 436.991,
    "Age5-14": 788.45,
    "Age15-24": 600.057,
    "Age25-64": 1289.112,
    "AgeOver65": 111.054
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1970,
    "Age0-4": 425.796,
    "Age5-14": 888.52,
    "Age15-24": 759.488,
    "Age25-64": 1517.545,
    "AgeOver65": 169.187
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1980,
    "Age0-4": 380.569,
    "Age5-14": 820.583,
    "Age15-24": 859.452,
    "Age25-64": 1877.085,
    "AgeOver65": 242.161
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1990,
    "Age0-4": 348.918,
    "Age5-14": 729.451,
    "Age15-24": 759.422,
    "Age25-64": 2331.72,
    "AgeOver65": 293.911
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 2000,
    "Age0-4": 234.469,
    "Age5-14": 542.47,
    "Age15-24": 555.839,
    "Age25-64": 2006.69,
    "AgeOver65": 411.708
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 2010,
    "Age0-4": 173.22,
    "Age5-14": 409.912,
    "Age15-24": 529.672,
    "Age25-64": 2075.402,
    "AgeOver65": 517.272
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 2020,
    "Age0-4": 133.254,
    "Age5-14": 343.198,
    "Age15-24": 381.203,
    "Age25-64": 1835.376,
    "AgeOver65": 587.784
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1950,
    "Age0-4": 659.156,
    "Age5-14": 1385.547,
    "Age15-24": 1572.259,
    "Age25-64": 3461.434,
    "AgeOver65": 666.608
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1960,
    "Age0-4": 958.022,
    "Age5-14": 1390.258,
    "Age15-24": 1264.56,
    "Age25-64": 3833.799,
    "AgeOver65": 678.242
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1970,
    "Age0-4": 719.736,
    "Age5-14": 1823.943,
    "Age15-24": 1370.417,
    "Age25-64": 4195.807,
    "AgeOver65": 803.646
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1980,
    "Age0-4": 737.937,
    "Age5-14": 1442.847,
    "Age15-24": 1691.808,
    "Age25-64": 4668.435,
    "AgeOver65": 1028.82
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1990,
    "Age0-4": 786.697,
    "Age5-14": 1540.975,
    "Age15-24": 1398.109,
    "Age25-64": 5342.049,
    "AgeOver65": 1083.305
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 2000,
    "Age0-4": 456.814,
    "Age5-14": 1371.974,
    "Age15-24": 1503.976,
    "Age25-64": 5208.282,
    "AgeOver65": 1330.589
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 2010,
    "Age0-4": 511.21,
    "Age5-14": 892.054,
    "Age15-24": 1370.356,
    "Age25-64": 5331.455,
    "AgeOver65": 1315.501
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 2020,
    "Age0-4": 548.121,
    "Age5-14": 1080.975,
    "Age15-24": 869.099,
    "Age25-64": 5478.904,
    "AgeOver65": 1472.222
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1950,
    "Age0-4": 10.858,
    "Age5-14": 15.725,
    "Age15-24": 13.236,
    "Age25-64": 26.592,
    "AgeOver65": 2.504
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1960,
    "Age0-4": 17.826,
    "Age5-14": 23.858,
    "Age15-24": 14.737,
    "Age25-64": 31.827,
    "AgeOver65": 3.82
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1970,
    "Age0-4": 21.666,
    "Age5-14": 35.902,
    "Age15-24": 22.747,
    "Age25-64": 36.62,
    "AgeOver65": 5.249
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1980,
    "Age0-4": 24.468,
    "Age5-14": 42.639,
    "Age15-24": 30.223,
    "Age25-64": 40.342,
    "AgeOver65": 6.47
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1990,
    "Age0-4": 30.398,
    "Age5-14": 51.11,
    "Age15-24": 39.103,
    "Age25-64": 59.193,
    "AgeOver65": 7.75
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 2000,
    "Age0-4": 37.201,
    "Age5-14": 63.558,
    "Age15-24": 50.365,
    "Age25-64": 86.519,
    "AgeOver65": 9.667
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 2010,
    "Age0-4": 37.828,
    "Age5-14": 77.009,
    "Age15-24": 65.112,
    "Age25-64": 129.364,
    "AgeOver65": 13.152
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 2020,
    "Age0-4": 39.446,
    "Age5-14": 76.657,
    "Age15-24": 79.194,
    "Age25-64": 182.411,
    "AgeOver65": 19.913
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1950,
    "Age0-4": 496.236,
    "Age5-14": 718.896,
    "Age15-24": 560.539,
    "Age25-64": 1117.819,
    "AgeOver65": 188.346
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1960,
    "Age0-4": 592.136,
    "Age5-14": 915.554,
    "Age15-24": 672.286,
    "Age25-64": 1311.214,
    "AgeOver65": 165.771
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1970,
    "Age0-4": 723.99,
    "Age5-14": 1117.77,
    "Age15-24": 862.092,
    "Age25-64": 1603.644,
    "AgeOver65": 176.508
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1980,
    "Age0-4": 883.194,
    "Age5-14": 1395.86,
    "Age15-24": 1057.322,
    "Age25-64": 2014.96,
    "AgeOver65": 228.596
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1990,
    "Age0-4": 1030.271,
    "Age5-14": 1698.378,
    "Age15-24": 1308.251,
    "Age25-64": 2509.07,
    "AgeOver65": 318.869
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 2000,
    "Age0-4": 1153.64,
    "Age5-14": 2023.384,
    "Age15-24": 1624.454,
    "Age25-64": 3175.277,
    "AgeOver65": 441.515
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 2010,
    "Age0-4": 1192.606,
    "Age5-14": 2273.101,
    "Age15-24": 1941.749,
    "Age25-64": 4026.445,
    "AgeOver65": 614.696
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 2020,
    "Age0-4": 1185.499,
    "Age5-14": 2340.1,
    "Age15-24": 2201.873,
    "Age25-64": 5071.57,
    "AgeOver65": 873.987
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1950,
    "Age0-4": 8983.598,
    "Age5-14": 13448.413,
    "Age15-24": 10420.394,
    "Age25-64": 19516.779,
    "AgeOver65": 1605.544
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1960,
    "Age0-4": 12357.416,
    "Age5-14": 18799.714,
    "Age15-24": 13170.687,
    "Age25-64": 25577.395,
    "AgeOver65": 2274.023
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1970,
    "Age0-4": 14726.497,
    "Age5-14": 25422.602,
    "Age15-24": 18473.619,
    "Age25-64": 33223.866,
    "AgeOver65": 3266.681
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1980,
    "Age0-4": 16829.146,
    "Age5-14": 29265.029,
    "Age15-24": 25108.312,
    "Age25-64": 44869.402,
    "AgeOver65": 4622.123
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1990,
    "Age0-4": 17786.87,
    "Age5-14": 34600.675,
    "Age15-24": 28953.614,
    "Age25-64": 61311.909,
    "AgeOver65": 6350.157
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 2000,
    "Age0-4": 17423.695,
    "Age5-14": 34905.325,
    "Age15-24": 34284.693,
    "Age25-64": 79001.538,
    "AgeOver65": 9175.088
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 2010,
    "Age0-4": 14994.049,
    "Age5-14": 33588.652,
    "Age15-24": 34615.487,
    "Age25-64": 99166.193,
    "AgeOver65": 13349.256
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 2020,
    "Age0-4": 14475.093,
    "Age5-14": 29544.259,
    "Age15-24": 33370.053,
    "Age25-64": 114780.723,
    "AgeOver65": 20389.281
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1950,
    "Age0-4": 26,
    "Age5-14": 44.001,
    "Age15-24": 37.001,
    "Age25-64": 91.998,
    "AgeOver65": 11.99
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1960,
    "Age0-4": 32.392,
    "Age5-14": 55.585,
    "Age15-24": 35.832,
    "Age25-64": 91.402,
    "AgeOver65": 15.774
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1970,
    "Age0-4": 26.243,
    "Age5-14": 62.409,
    "Age15-24": 45.87,
    "Age25-64": 84.588,
    "AgeOver65": 19.785
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1980,
    "Age0-4": 21.973,
    "Age5-14": 53.113,
    "Age15-24": 54.512,
    "Age25-64": 96.027,
    "AgeOver65": 26.763
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1990,
    "Age0-4": 20.524,
    "Age5-14": 42.169,
    "Age15-24": 50.2,
    "Age25-64": 121.203,
    "AgeOver65": 26.837
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 2000,
    "Age0-4": 18.703,
    "Age5-14": 40.505,
    "Age15-24": 39.631,
    "Age25-64": 139.883,
    "AgeOver65": 32.789
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 2010,
    "Age0-4": 17.624,
    "Age5-14": 38.078,
    "Age15-24": 37.486,
    "Age25-64": 151.556,
    "AgeOver65": 37.387
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 2020,
    "Age0-4": 15.12,
    "Age5-14": 33.045,
    "Age15-24": 37.734,
    "Age25-64": 153.476,
    "AgeOver65": 47.996
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1950,
    "Age0-4": 6.672,
    "Age5-14": 10.807,
    "Age15-24": 8.677,
    "Age25-64": 19.503,
    "AgeOver65": 2.35
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1960,
    "Age0-4": 16.103,
    "Age5-14": 19.446,
    "Age15-24": 11.987,
    "Age25-64": 31.003,
    "AgeOver65": 3.168
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1970,
    "Age0-4": 20.84,
    "Age5-14": 34.806,
    "Age15-24": 21.831,
    "Age25-64": 47.483,
    "AgeOver65": 4.57
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1980,
    "Age0-4": 28.695,
    "Age5-14": 46.773,
    "Age15-24": 43.012,
    "Age25-64": 69.932,
    "AgeOver65": 5.468
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1990,
    "Age0-4": 34.07,
    "Age5-14": 55.558,
    "Age15-24": 49.272,
    "Age25-64": 113.061,
    "AgeOver65": 6.753
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 2000,
    "Age0-4": 34.874,
    "Age5-14": 67.262,
    "Age15-24": 61.012,
    "Age25-64": 162.126,
    "AgeOver65": 7.892
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 2010,
    "Age0-4": 31.427,
    "Age5-14": 69.46,
    "Age15-24": 73.709,
    "Age25-64": 200.865,
    "AgeOver65": 13.173
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 2020,
    "Age0-4": 31.672,
    "Age5-14": 65.992,
    "Age15-24": 68.975,
    "Age25-64": 246.474,
    "AgeOver65": 24.37
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1950,
    "Age0-4": 31.785,
    "Age5-14": 45.715,
    "Age15-24": 33.82,
    "Age25-64": 60.996,
    "AgeOver65": 4.48
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1960,
    "Age0-4": 38.049,
    "Age5-14": 55.957,
    "Age15-24": 43.974,
    "Age25-64": 80.04,
    "AgeOver65": 5.264
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1970,
    "Age0-4": 53.473,
    "Age5-14": 73.78,
    "Age15-24": 54.888,
    "Age25-64": 108.175,
    "AgeOver65": 6.991
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1980,
    "Age0-4": 71.826,
    "Age5-14": 105.842,
    "Age15-24": 72.642,
    "Age25-64": 146.503,
    "AgeOver65": 10.07
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1990,
    "Age0-4": 88.787,
    "Age5-14": 141.778,
    "Age15-24": 101.82,
    "Age25-64": 183.396,
    "AgeOver65": 15.02
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 2000,
    "Age0-4": 77.637,
    "Age5-14": 157.67,
    "Age15-24": 121.961,
    "Age25-64": 210.608,
    "AgeOver65": 23.138
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 2010,
    "Age0-4": 66.957,
    "Age5-14": 146.732,
    "Age15-24": 154.782,
    "Age25-64": 281.79,
    "AgeOver65": 35.241
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 2020,
    "Age0-4": 63.855,
    "Age5-14": 128.236,
    "Age15-24": 144.038,
    "Age25-64": 387.608,
    "AgeOver65": 47.875
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1950,
    "Age0-4": 62.232,
    "Age5-14": 106.384,
    "Age15-24": 81.353,
    "Age25-64": 144.573,
    "AgeOver65": 17.999
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1960,
    "Age0-4": 95.777,
    "Age5-14": 123.635,
    "Age15-24": 95.196,
    "Age25-64": 166.565,
    "AgeOver65": 21.56
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1970,
    "Age0-4": 119.648,
    "Age5-14": 180.296,
    "Age15-24": 107.17,
    "Age25-64": 196.22,
    "AgeOver65": 24.38
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1980,
    "Age0-4": 172.85,
    "Age5-14": 262.635,
    "Age15-24": 171.123,
    "Age25-64": 260.859,
    "AgeOver65": 30.393
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1990,
    "Age0-4": 209.341,
    "Age5-14": 369.263,
    "Age15-24": 265.114,
    "Age25-64": 400.768,
    "AgeOver65": 42.27
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 2000,
    "Age0-4": 216.961,
    "Age5-14": 418.274,
    "Age15-24": 370.079,
    "Age25-64": 584.541,
    "AgeOver65": 53.478
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 2010,
    "Age0-4": 253.287,
    "Age5-14": 441.572,
    "Age15-24": 409.747,
    "Age25-64": 816.593,
    "AgeOver65": 65.907
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 2020,
    "Age0-4": 271.775,
    "Age5-14": 513.758,
    "Age15-24": 429.245,
    "Age25-64": 1030.741,
    "AgeOver65": 106.106
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1950,
    "Age0-4": 189.627,
    "Age5-14": 290.506,
    "Age15-24": 239.751,
    "Age25-64": 539.105,
    "AgeOver65": 67.671
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1960,
    "Age0-4": 238.389,
    "Age5-14": 332.57,
    "Age15-24": 260.777,
    "Age25-64": 594.879,
    "AgeOver65": 75.053
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1970,
    "Age0-4": 295.144,
    "Age5-14": 437.107,
    "Age15-24": 310.605,
    "Age25-64": 683.286,
    "AgeOver65": 85.015
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1980,
    "Age0-4": 365.033,
    "Age5-14": 563.368,
    "Age15-24": 410.218,
    "Age25-64": 764.063,
    "AgeOver65": 96.677
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1990,
    "Age0-4": 487.553,
    "Age5-14": 741.24,
    "Age15-24": 526.624,
    "Age25-64": 940.344,
    "AgeOver65": 110.979
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 2000,
    "Age0-4": 612.987,
    "Age5-14": 962.424,
    "Age15-24": 721.128,
    "Age25-64": 1215.346,
    "AgeOver65": 128.536
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 2010,
    "Age0-4": 731.905,
    "Age5-14": 1200.733,
    "Age15-24": 888.605,
    "Age25-64": 1432.848,
    "AgeOver65": 132.674
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 2020,
    "Age0-4": 738.242,
    "Age5-14": 1364.721,
    "Age15-24": 1080.025,
    "Age25-64": 1511.633,
    "AgeOver65": 135.143
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1950,
    "Age0-4": 1636,
    "Age5-14": 2441,
    "Age15-24": 2187.999,
    "Age25-64": 6418.002,
    "AgeOver65": 1050.397
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1960,
    "Age0-4": 2216.274,
    "Age5-14": 3803.161,
    "Age15-24": 2550.992,
    "Age25-64": 7902.944,
    "AgeOver65": 1374.033
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1970,
    "Age0-4": 1876.095,
    "Age5-14": 4564.051,
    "Age15-24": 3925.467,
    "Age25-64": 9293.998,
    "AgeOver65": 1714.715
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1980,
    "Age0-4": 1783.891,
    "Age5-14": 3772.326,
    "Age15-24": 4812.769,
    "Age25-64": 11745.902,
    "AgeOver65": 2301.997
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1990,
    "Age0-4": 1919.309,
    "Age5-14": 3779.653,
    "Age15-24": 4042.961,
    "Age25-64": 14700.309,
    "AgeOver65": 3099.091
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 2000,
    "Age0-4": 1786.212,
    "Age5-14": 4075.645,
    "Age15-24": 4151.268,
    "Age25-64": 16731.831,
    "AgeOver65": 3843.423
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 2010,
    "Age0-4": 1886.309,
    "Age5-14": 3744.139,
    "Age15-24": 4606.102,
    "Age25-64": 19077.891,
    "AgeOver65": 4833.125
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 2020,
    "Age0-4": 1993.132,
    "Age5-14": 3960.79,
    "Age15-24": 4351.788,
    "Age25-64": 20603.473,
    "AgeOver65": 6832.974
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1950,
    "Age0-4": 421.699,
    "Age5-14": 676,
    "Age15-24": 682.001,
    "Age25-64": 2447.897,
    "AgeOver65": 440.492
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1960,
    "Age0-4": 438.508,
    "Age5-14": 835.035,
    "Age15-24": 781.11,
    "Age25-64": 2686.865,
    "AgeOver65": 539.165
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1970,
    "Age0-4": 504.541,
    "Age5-14": 952.506,
    "Age15-24": 964.826,
    "Age25-64": 3035.933,
    "AgeOver65": 693.042
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1980,
    "Age0-4": 354.568,
    "Age5-14": 902.887,
    "Age15-24": 954.932,
    "Age25-64": 3200.93,
    "AgeOver65": 870.516
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1990,
    "Age0-4": 383.392,
    "Age5-14": 750.237,
    "Age15-24": 944.527,
    "Age25-64": 3604.257,
    "AgeOver65": 970.46
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 2000,
    "Age0-4": 400.114,
    "Age5-14": 846.013,
    "Age15-24": 824.78,
    "Age25-64": 3982.141,
    "AgeOver65": 1090.716
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 2010,
    "Age0-4": 383.148,
    "Age5-14": 792.707,
    "Age15-24": 929.207,
    "Age25-64": 4384.618,
    "AgeOver65": 1318.994
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 2020,
    "Age0-4": 451.829,
    "Age5-14": 842.785,
    "Age15-24": 909.384,
    "Age25-64": 4797.8,
    "AgeOver65": 1652.82
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1950,
    "Age0-4": 953.898,
    "Age5-14": 1556.625,
    "Age15-24": 1396.797,
    "Age25-64": 2464.597,
    "AgeOver65": 226.601
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1960,
    "Age0-4": 1221.902,
    "Age5-14": 1986.463,
    "Age15-24": 1478.547,
    "Age25-64": 3140.92,
    "AgeOver65": 305.156
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1970,
    "Age0-4": 1301.128,
    "Age5-14": 2439.626,
    "Age15-24": 1901.761,
    "Age25-64": 3729.177,
    "AgeOver65": 411.442
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1980,
    "Age0-4": 1293.273,
    "Age5-14": 2530.697,
    "Age15-24": 2363.886,
    "Age25-64": 4671.258,
    "AgeOver65": 560.236
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1990,
    "Age0-4": 1417.47,
    "Age5-14": 2580.766,
    "Age15-24": 2478.449,
    "Age25-64": 6010.777,
    "AgeOver65": 787.155
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 2000,
    "Age0-4": 1323.269,
    "Age5-14": 2870.032,
    "Age15-24": 2572.491,
    "Age25-64": 7402.742,
    "AgeOver65": 1173.816
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 2010,
    "Age0-4": 1224.229,
    "Age5-14": 2543.481,
    "Age15-24": 2885.16,
    "Age25-64": 8812.263,
    "AgeOver65": 1597.398
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 2020,
    "Age0-4": 1162.223,
    "Age5-14": 2515.493,
    "Age15-24": 2647.151,
    "Age25-64": 10451.007,
    "AgeOver65": 2340.335
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1950,
    "Age0-4": 76507.914,
    "Age5-14": 112222.381,
    "Age15-24": 98504.687,
    "Age25-64": 242626.795,
    "AgeOver65": 24557.492
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1960,
    "Age0-4": 97302.318,
    "Age5-14": 165686.645,
    "Age15-24": 106112.404,
    "Age25-64": 266947.471,
    "AgeOver65": 24359.216
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1970,
    "Age0-4": 135731.609,
    "Age5-14": 198679.12,
    "Age15-24": 159379.871,
    "Age25-64": 302792.064,
    "AgeOver65": 31018.721
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1980,
    "Age0-4": 101594.519,
    "Age5-14": 257792.749,
    "Age15-24": 196227.677,
    "Age25-64": 397726.784,
    "AgeOver65": 46747.499
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1990,
    "Age0-4": 132966.782,
    "Age5-14": 203500.927,
    "Age15-24": 255549.171,
    "Age25-64": 518606.337,
    "AgeOver65": 66260.464
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 2000,
    "Age0-4": 88692.597,
    "Age5-14": 231218.431,
    "Age15-24": 201954.616,
    "Age25-64": 680774.706,
    "AgeOver65": 87910.417
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 2010,
    "Age0-4": 84639.255,
    "Age5-14": 170780.219,
    "Age15-24": 229259.643,
    "Age25-64": 773607.522,
    "AgeOver65": 110523.965
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 2020,
    "Age0-4": 83932.437,
    "Age5-14": 170997.934,
    "Age15-24": 169500.026,
    "Age25-64": 842631.203,
    "AgeOver65": 172262.174
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1950,
    "Age0-4": 453.037,
    "Age5-14": 679.742,
    "Age15-24": 515.148,
    "Age25-64": 921.346,
    "AgeOver65": 60.858
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1951,
    "Age0-4": 469.492,
    "Age5-14": 686.368,
    "Age15-24": 526.669,
    "Age25-64": 944.33,
    "AgeOver65": 63.766
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1952,
    "Age0-4": 496.103,
    "Age5-14": 690.054,
    "Age15-24": 538.601,
    "Age25-64": 969.608,
    "AgeOver65": 66.718
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1953,
    "Age0-4": 522.83,
    "Age5-14": 692.827,
    "Age15-24": 552.219,
    "Age25-64": 1000.357,
    "AgeOver65": 69.956
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1954,
    "Age0-4": 547.439,
    "Age5-14": 695.038,
    "Age15-24": 567.007,
    "Age25-64": 1036.688,
    "AgeOver65": 73.541
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1955,
    "Age0-4": 571.535,
    "Age5-14": 696.693,
    "Age15-24": 581.712,
    "Age25-64": 1077.09,
    "AgeOver65": 77.391
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1956,
    "Age0-4": 607.829,
    "Age5-14": 708.771,
    "Age15-24": 591.641,
    "Age25-64": 1103.498,
    "AgeOver65": 80.461
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1957,
    "Age0-4": 628.573,
    "Age5-14": 728.984,
    "Age15-24": 604.639,
    "Age25-64": 1137.825,
    "AgeOver65": 83.941
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1958,
    "Age0-4": 641.373,
    "Age5-14": 756.148,
    "Age15-24": 618.421,
    "Age25-64": 1177.863,
    "AgeOver65": 87.708
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1959,
    "Age0-4": 654.458,
    "Age5-14": 788.286,
    "Age15-24": 630.798,
    "Age25-64": 1222.084,
    "AgeOver65": 91.664
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1960,
    "Age0-4": 675.103,
    "Age5-14": 821.44,
    "Age15-24": 640.994,
    "Age25-64": 1270.198,
    "AgeOver65": 95.824
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1961,
    "Age0-4": 695.973,
    "Age5-14": 867.78,
    "Age15-24": 653.673,
    "Age25-64": 1314.329,
    "AgeOver65": 99.792
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1962,
    "Age0-4": 720.222,
    "Age5-14": 917.023,
    "Age15-24": 665.491,
    "Age25-64": 1364.105,
    "AgeOver65": 103.915
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1963,
    "Age0-4": 748.335,
    "Age5-14": 966.3,
    "Age15-24": 677.184,
    "Age25-64": 1418.629,
    "AgeOver65": 108.182
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1964,
    "Age0-4": 778.109,
    "Age5-14": 1012.612,
    "Age15-24": 690.712,
    "Age25-64": 1477.383,
    "AgeOver65": 112.595
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1965,
    "Age0-4": 808.592,
    "Age5-14": 1054.252,
    "Age15-24": 707.125,
    "Age25-64": 1539.71,
    "AgeOver65": 117.164
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1966,
    "Age0-4": 843.218,
    "Age5-14": 1105.771,
    "Age15-24": 725.999,
    "Age25-64": 1587.309,
    "AgeOver65": 121.426
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1967,
    "Age0-4": 873.9,
    "Age5-14": 1155.908,
    "Age15-24": 749.359,
    "Age25-64": 1639.278,
    "AgeOver65": 125.723
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1968,
    "Age0-4": 903.776,
    "Age5-14": 1205.719,
    "Age15-24": 777.397,
    "Age25-64": 1696.06,
    "AgeOver65": 130.182
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1969,
    "Age0-4": 937.726,
    "Age5-14": 1256.577,
    "Age15-24": 810.38,
    "Age25-64": 1757.848,
    "AgeOver65": 134.939
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1970,
    "Age0-4": 979.863,
    "Age5-14": 1308.74,
    "Age15-24": 848.326,
    "Age25-64": 1825.029,
    "AgeOver65": 140.112
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1971,
    "Age0-4": 1023.172,
    "Age5-14": 1370.887,
    "Age15-24": 901.066,
    "Age25-64": 1888.049,
    "AgeOver65": 145.561
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1972,
    "Age0-4": 1069.954,
    "Age5-14": 1435.106,
    "Age15-24": 959.884,
    "Age25-64": 1959.636,
    "AgeOver65": 151.446
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1973,
    "Age0-4": 1120.95,
    "Age5-14": 1500.858,
    "Age15-24": 1021.737,
    "Age25-64": 2040.235,
    "AgeOver65": 157.733
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1974,
    "Age0-4": 1176.287,
    "Age5-14": 1567.223,
    "Age15-24": 1082.769,
    "Age25-64": 2130.642,
    "AgeOver65": 164.374
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1975,
    "Age0-4": 1236.418,
    "Age5-14": 1633.448,
    "Age15-24": 1140.105,
    "Age25-64": 2231.103,
    "AgeOver65": 171.335
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1976,
    "Age0-4": 1302.611,
    "Age5-14": 1715.975,
    "Age15-24": 1198.244,
    "Age25-64": 2318.703,
    "AgeOver65": 178.416
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1977,
    "Age0-4": 1368.796,
    "Age5-14": 1800.601,
    "Age15-24": 1255.298,
    "Age25-64": 2416.174,
    "AgeOver65": 185.628
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1978,
    "Age0-4": 1434.97,
    "Age5-14": 1887.777,
    "Age15-24": 1311.256,
    "Age25-64": 2523.171,
    "AgeOver65": 193.095
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1979,
    "Age0-4": 1500.409,
    "Age5-14": 1977.992,
    "Age15-24": 1367.173,
    "Age25-64": 2639.371,
    "AgeOver65": 200.982
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1980,
    "Age0-4": 1565.063,
    "Age5-14": 2071.022,
    "Age15-24": 1423.541,
    "Age25-64": 2764.6,
    "AgeOver65": 209.426
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1981,
    "Age0-4": 1634.525,
    "Age5-14": 2181.577,
    "Age15-24": 1484.74,
    "Age25-64": 2874.587,
    "AgeOver65": 218.26
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1982,
    "Age0-4": 1693.885,
    "Age5-14": 2297.922,
    "Age15-24": 1549.78,
    "Age25-64": 2995.837,
    "AgeOver65": 227.567
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1983,
    "Age0-4": 1746.435,
    "Age5-14": 2417.579,
    "Age15-24": 1617.311,
    "Age25-64": 3126.318,
    "AgeOver65": 237.297
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1984,
    "Age0-4": 1796.832,
    "Age5-14": 2536.478,
    "Age15-24": 1686.055,
    "Age25-64": 3263.37,
    "AgeOver65": 247.368
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1985,
    "Age0-4": 1848.806,
    "Age5-14": 2650.72,
    "Age15-24": 1755.191,
    "Age25-64": 3405.683,
    "AgeOver65": 257.804
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1986,
    "Age0-4": 1901.46,
    "Age5-14": 2781.894,
    "Age15-24": 1826.353,
    "Age25-64": 3528.343,
    "AgeOver65": 269.218
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1987,
    "Age0-4": 1955.937,
    "Age5-14": 2907.104,
    "Age15-24": 1900.539,
    "Age25-64": 3654.021,
    "AgeOver65": 280.587
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1988,
    "Age0-4": 2012.839,
    "Age5-14": 3025.887,
    "Age15-24": 1979.005,
    "Age25-64": 3784.815,
    "AgeOver65": 292.194
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1989,
    "Age0-4": 2071.682,
    "Age5-14": 3138.812,
    "Age15-24": 2064.012,
    "Age25-64": 3923.526,
    "AgeOver65": 304.421
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1990,
    "Age0-4": 2132.365,
    "Age5-14": 3246.862,
    "Age15-24": 2156.411,
    "Age25-64": 4071.729,
    "AgeOver65": 317.506
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1991,
    "Age0-4": 2197.942,
    "Age5-14": 3367.299,
    "Age15-24": 2261.153,
    "Age25-64": 4204.704,
    "AgeOver65": 331.306
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1992,
    "Age0-4": 2262.097,
    "Age5-14": 3482.802,
    "Age15-24": 2374.566,
    "Age25-64": 4347.544,
    "AgeOver65": 345.419
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1993,
    "Age0-4": 2325.513,
    "Age5-14": 3593.205,
    "Age15-24": 2493.157,
    "Age25-64": 4499.852,
    "AgeOver65": 359.911
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1994,
    "Age0-4": 2389.654,
    "Age5-14": 3698.23,
    "Age15-24": 2612.154,
    "Age25-64": 4660.597,
    "AgeOver65": 374.803
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1995,
    "Age0-4": 2455.688,
    "Age5-14": 3797.159,
    "Age15-24": 2727.828,
    "Age25-64": 4828.969,
    "AgeOver65": 390.115
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1996,
    "Age0-4": 2536.229,
    "Age5-14": 3919.323,
    "Age15-24": 2836.327,
    "Age25-64": 4966.977,
    "AgeOver65": 406.269
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1997,
    "Age0-4": 2613.511,
    "Age5-14": 4039.872,
    "Age15-24": 2945.44,
    "Age25-64": 5109.942,
    "AgeOver65": 421.909
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1998,
    "Age0-4": 2686.59,
    "Age5-14": 4156.368,
    "Age15-24": 3052.497,
    "Age25-64": 5256.984,
    "AgeOver65": 436.968
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1999,
    "Age0-4": 2753.59,
    "Age5-14": 4265.764,
    "Age15-24": 3154.574,
    "Age25-64": 5407.264,
    "AgeOver65": 451.381
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2000,
    "Age0-4": 2814.195,
    "Age5-14": 4365.339,
    "Age15-24": 3249.763,
    "Age25-64": 5560.256,
    "AgeOver65": 465.107
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2001,
    "Age0-4": 2896.188,
    "Age5-14": 4488.102,
    "Age15-24": 3314.838,
    "Age25-64": 5673.249,
    "AgeOver65": 480.65
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2002,
    "Age0-4": 2961.55,
    "Age5-14": 4612.795,
    "Age15-24": 3378.178,
    "Age25-64": 5784.54,
    "AgeOver65": 494.476
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2003,
    "Age0-4": 3014.943,
    "Age5-14": 4738.624,
    "Age15-24": 3443.457,
    "Age25-64": 5895.779,
    "AgeOver65": 506.81
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2004,
    "Age0-4": 3062.575,
    "Age5-14": 4864.901,
    "Age15-24": 3515.635,
    "Age25-64": 6009.413,
    "AgeOver65": 517.969
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2005,
    "Age0-4": 3110.463,
    "Age5-14": 4989.268,
    "Age15-24": 3598.606,
    "Age25-64": 6127.937,
    "AgeOver65": 528.239
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2006,
    "Age0-4": 3160.547,
    "Age5-14": 5113.312,
    "Age15-24": 3679.936,
    "Age25-64": 6258.684,
    "AgeOver65": 542.435
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2007,
    "Age0-4": 3201.357,
    "Age5-14": 5242.432,
    "Age15-24": 3771.961,
    "Age25-64": 6399.61,
    "AgeOver65": 555.89
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2008,
    "Age0-4": 3238.942,
    "Age5-14": 5373.113,
    "Age15-24": 3874.505,
    "Age25-64": 6550.816,
    "AgeOver65": 568.192
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2009,
    "Age0-4": 3281.359,
    "Age5-14": 5500.788,
    "Age15-24": 3986.303,
    "Age25-64": 6712.07,
    "AgeOver65": 578.627
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2010,
    "Age0-4": 3335.502,
    "Age5-14": 5621.194,
    "Age15-24": 4106.362,
    "Age25-64": 6882.975,
    "AgeOver65": 586.911
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2011,
    "Age0-4": 3390.28,
    "Age5-14": 5741.155,
    "Age15-24": 4228.901,
    "Age25-64": 7066.883,
    "AgeOver65": 601.433
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2012,
    "Age0-4": 3458.278,
    "Age5-14": 5855.888,
    "Age15-24": 4357.371,
    "Age25-64": 7261.843,
    "AgeOver65": 613.808
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2013,
    "Age0-4": 3537.013,
    "Age5-14": 5965.692,
    "Age15-24": 4491.238,
    "Age25-64": 7468.371,
    "AgeOver65": 625.192
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2014,
    "Age0-4": 3620.841,
    "Age5-14": 6072.656,
    "Age15-24": 4629.645,
    "Age25-64": 7687.43,
    "AgeOver65": 637.1
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2015,
    "Age0-4": 3706.489,
    "Age5-14": 6178.851,
    "Age15-24": 4771.329,
    "Age25-64": 7919.123,
    "AgeOver65": 650.356
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2016,
    "Age0-4": 3806.33,
    "Age5-14": 6290.01,
    "Age15-24": 4904.336,
    "Age25-64": 8150.16,
    "AgeOver65": 671.89
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2017,
    "Age0-4": 3893.863,
    "Age5-14": 6410.62,
    "Age15-24": 5041.45,
    "Age25-64": 8397.379,
    "AgeOver65": 694.163
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2018,
    "Age0-4": 3973.022,
    "Age5-14": 6540.254,
    "Age15-24": 5179.647,
    "Age25-64": 8659.59,
    "AgeOver65": 716.713
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2019,
    "Age0-4": 4050.287,
    "Age5-14": 6677.292,
    "Age15-24": 5314.694,
    "Age25-64": 8935.409,
    "AgeOver65": 738.872
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2020,
    "Age0-4": 4131.2,
    "Age5-14": 6818.019,
    "Age15-24": 5444.406,
    "Age25-64": 9224.275,
    "AgeOver65": 760.375
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1950,
    "Age0-4": 672.127,
    "Age5-14": 1019.979,
    "Age15-24": 808.487,
    "Age25-64": 1656.229,
    "AgeOver65": 150.199
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1960,
    "Age0-4": 829.683,
    "Age5-14": 1237.241,
    "Age15-24": 944.22,
    "Age25-64": 1966.533,
    "AgeOver65": 199.243
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1970,
    "Age0-4": 1127.765,
    "Age5-14": 1616.628,
    "Age15-24": 1166.308,
    "Age25-64": 2357.407,
    "AgeOver65": 251.646
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1980,
    "Age0-4": 1574.603,
    "Age5-14": 2277.613,
    "Age15-24": 1547.919,
    "Age25-64": 2905.332,
    "AgeOver65": 315.942
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1990,
    "Age0-4": 2194.375,
    "Age5-14": 3277.477,
    "Age15-24": 2196.838,
    "Age25-64": 3711.122,
    "AgeOver65": 400.274
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 2000,
    "Age0-4": 2648.084,
    "Age5-14": 4347.12,
    "Age15-24": 3150.715,
    "Age25-64": 4878.363,
    "AgeOver65": 489.662
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 2010,
    "Age0-4": 3462.007,
    "Age5-14": 5425.229,
    "Age15-24": 4194.744,
    "Age25-64": 6680.827,
    "AgeOver65": 578.429
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 2020,
    "Age0-4": 4115.703,
    "Age5-14": 7050.532,
    "Age15-24": 5276.248,
    "Age25-64": 9382.351,
    "AgeOver65": 721.03
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1950,
    "Age0-4": 2170.172,
    "Age5-14": 3152.297,
    "Age15-24": 2291.671,
    "Age25-64": 4108.537,
    "AgeOver65": 460.985
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1960,
    "Age0-4": 2677.841,
    "Age5-14": 3934.443,
    "Age15-24": 2956.045,
    "Age25-64": 5232.459,
    "AgeOver65": 447.468
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1970,
    "Age0-4": 3602.688,
    "Age5-14": 5182.143,
    "Age15-24": 3771.582,
    "Age25-64": 6885.895,
    "AgeOver65": 568.725
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1980,
    "Age0-4": 4780.693,
    "Age5-14": 6974.782,
    "Age15-24": 4926.821,
    "Age25-64": 8912.961,
    "AgeOver65": 763.648
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1990,
    "Age0-4": 6350.66,
    "Age5-14": 9266.531,
    "Age15-24": 6540.766,
    "Age25-64": 11434.127,
    "AgeOver65": 1019.939
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 2000,
    "Age0-4": 8666.362,
    "Age5-14": 12785.775,
    "Age15-24": 8951.739,
    "Age25-64": 15310.685,
    "AgeOver65": 1391.269
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 2010,
    "Age0-4": 12134.254,
    "Age5-14": 17655.897,
    "Age15-24": 12240.542,
    "Age25-64": 20602.018,
    "AgeOver65": 1931.142
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 2020,
    "Age0-4": 15827.439,
    "Age5-14": 25187.377,
    "Age15-24": 17202.223,
    "Age25-64": 28640.8,
    "AgeOver65": 2703.565
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1950,
    "Age0-4": 131.504,
    "Age5-14": 198.725,
    "Age15-24": 154.493,
    "Age25-64": 314.478,
    "AgeOver65": 28.046
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1960,
    "Age0-4": 171.977,
    "Age5-14": 253.41,
    "Age15-24": 185.689,
    "Age25-64": 371.874,
    "AgeOver65": 35.304
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1970,
    "Age0-4": 238.897,
    "Age5-14": 349.581,
    "Age15-24": 241.83,
    "Age25-64": 451.31,
    "AgeOver65": 45.276
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1980,
    "Age0-4": 324.605,
    "Age5-14": 495.13,
    "Age15-24": 335.407,
    "Age25-64": 566.98,
    "AgeOver65": 55.81
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1990,
    "Age0-4": 394.15,
    "Age5-14": 657.656,
    "Age15-24": 480.648,
    "Age25-64": 755.575,
    "AgeOver65": 68.711
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 2000,
    "Age0-4": 510.75,
    "Age5-14": 807.947,
    "Age15-24": 648.102,
    "Age25-64": 1075.759,
    "AgeOver65": 84.862
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 2010,
    "Age0-4": 702.728,
    "Age5-14": 1076.631,
    "Age15-24": 805.009,
    "Age25-64": 1581.549,
    "AgeOver65": 107.821
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 2020,
    "Age0-4": 821.959,
    "Age5-14": 1455.373,
    "Age15-24": 1049.234,
    "Age25-64": 2039.074,
    "AgeOver65": 152.452
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1950,
    "Age0-4": 2113.246,
    "Age5-14": 3103.175,
    "Age15-24": 2343.536,
    "Age25-64": 4035.625,
    "AgeOver65": 385.994
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1960,
    "Age0-4": 3059.522,
    "Age5-14": 4438.453,
    "Age15-24": 2905.799,
    "Age25-64": 5185.149,
    "AgeOver65": 468.791
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1970,
    "Age0-4": 3647.184,
    "Age5-14": 6285.977,
    "Age15-24": 4160.238,
    "Age25-64": 6739.866,
    "AgeOver65": 646.799
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1980,
    "Age0-4": 3854.557,
    "Age5-14": 6912.079,
    "Age15-24": 5967.428,
    "Age25-64": 9214.477,
    "AgeOver65": 951.967
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1990,
    "Age0-4": 4195.404,
    "Age5-14": 7735.794,
    "Age15-24": 6668.686,
    "Age25-64": 13125.526,
    "AgeOver65": 1377.159
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 2000,
    "Age0-4": 4355.54,
    "Age5-14": 8553.451,
    "Age15-24": 7533.124,
    "Age25-64": 17125.754,
    "AgeOver65": 2062.096
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 2010,
    "Age0-4": 3834.004,
    "Age5-14": 8497.558,
    "Age15-24": 8378.816,
    "Age25-64": 21533.769,
    "AgeOver65": 2978.552
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 2020,
    "Age0-4": 3710.699,
    "Age5-14": 7576.941,
    "Age15-24": 8667.857,
    "Age25-64": 26317.111,
    "AgeOver65": 4610.276
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1950,
    "Age0-4": 22.842,
    "Age5-14": 37.442,
    "Age15-24": 30.467,
    "Age25-64": 62.6,
    "AgeOver65": 6.108
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1960,
    "Age0-4": 33.737,
    "Age5-14": 45.218,
    "Age15-24": 34.133,
    "Age25-64": 71.917,
    "AgeOver65": 6.117
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1970,
    "Age0-4": 40.636,
    "Age5-14": 61.978,
    "Age15-24": 40.134,
    "Age25-64": 80.369,
    "AgeOver65": 6.938
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1980,
    "Age0-4": 55.421,
    "Age5-14": 82.458,
    "Age15-24": 60.248,
    "Age25-64": 99.804,
    "AgeOver65": 9.9
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1990,
    "Age0-4": 75.108,
    "Age5-14": 114.004,
    "Age15-24": 77.978,
    "Age25-64": 131.554,
    "AgeOver65": 12.954
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 2000,
    "Age0-4": 88.752,
    "Age5-14": 149.757,
    "Age15-24": 109.424,
    "Age25-64": 177.962,
    "AgeOver65": 16.463
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 2010,
    "Age0-4": 106.769,
    "Age5-14": 176.309,
    "Age15-24": 142.09,
    "Age25-64": 244.179,
    "AgeOver65": 20.349
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 2020,
    "Age0-4": 123.508,
    "Age5-14": 215.806,
    "Age15-24": 169.172,
    "Age25-64": 334.104,
    "AgeOver65": 27.005
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1950,
    "Age0-4": 19.322,
    "Age5-14": 38.769,
    "Age15-24": 37.774,
    "Age25-64": 68.638,
    "AgeOver65": 13.561
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1960,
    "Age0-4": 37.198,
    "Age5-14": 47.808,
    "Age15-24": 30.791,
    "Age25-64": 75.765,
    "AgeOver65": 10.208
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1970,
    "Age0-4": 48.954,
    "Age5-14": 81.425,
    "Age15-24": 44.728,
    "Age25-64": 82.741,
    "AgeOver65": 10.785
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1980,
    "Age0-4": 49.149,
    "Age5-14": 85.138,
    "Age15-24": 63.959,
    "Age25-64": 71.535,
    "AgeOver65": 14.067
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1990,
    "Age0-4": 62.5,
    "Age5-14": 93.287,
    "Age15-24": 67.426,
    "Age25-64": 100.419,
    "AgeOver65": 14.321
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 2000,
    "Age0-4": 58.673,
    "Age5-14": 125.291,
    "Age15-24": 87.308,
    "Age25-64": 135.44,
    "AgeOver65": 21.466
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 2010,
    "Age0-4": 52.056,
    "Age5-14": 107.138,
    "Age15-24": 112.957,
    "Age25-64": 194.264,
    "AgeOver65": 26.229
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 2020,
    "Age0-4": 51.932,
    "Age5-14": 104.197,
    "Age15-24": 94.843,
    "Age25-64": 278.404,
    "AgeOver65": 26.612
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1950,
    "Age0-4": 171.349,
    "Age5-14": 238.468,
    "Age15-24": 178.076,
    "Age25-64": 329.721,
    "AgeOver65": 28.069
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1960,
    "Age0-4": 250.662,
    "Age5-14": 352.462,
    "Age15-24": 238.018,
    "Age25-64": 449.767,
    "AgeOver65": 39.878
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1970,
    "Age0-4": 286.736,
    "Age5-14": 530.472,
    "Age15-24": 352.855,
    "Age25-64": 617.07,
    "AgeOver65": 60.261
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1980,
    "Age0-4": 322.127,
    "Age5-14": 558.292,
    "Age15-24": 534.09,
    "Age25-64": 881.196,
    "AgeOver65": 94.268
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1990,
    "Age0-4": 416.16,
    "Age5-14": 694.904,
    "Age15-24": 564.043,
    "Age25-64": 1301.35,
    "AgeOver65": 142.979
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 2000,
    "Age0-4": 395.601,
    "Age5-14": 839.093,
    "Age15-24": 728.582,
    "Age25-64": 1777.954,
    "AgeOver65": 221.139
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 2010,
    "Age0-4": 354.447,
    "Age5-14": 758.203,
    "Age15-24": 850.674,
    "Age25-64": 2279.83,
    "AgeOver65": 334.217
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 2020,
    "Age0-4": 348.002,
    "Age5-14": 713.002,
    "Age15-24": 763.662,
    "Age25-64": 2747.144,
    "AgeOver65": 522.304
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1950,
    "Age0-4": 775.996,
    "Age5-14": 1376.14,
    "Age15-24": 1076.948,
    "Age25-64": 2430.586,
    "AgeOver65": 260.319
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1960,
    "Age0-4": 890.093,
    "Age5-14": 1613.758,
    "Age15-24": 1334.88,
    "Age25-64": 2970.324,
    "AgeOver65": 332.186
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1970,
    "Age0-4": 1211.181,
    "Age5-14": 2013.394,
    "Age15-24": 1526.254,
    "Age25-64": 3452.062,
    "AgeOver65": 509.644
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1980,
    "Age0-4": 810.308,
    "Age5-14": 2313.785,
    "Age15-24": 1933.246,
    "Age25-64": 4023.697,
    "AgeOver65": 768.421
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1990,
    "Age0-4": 898.651,
    "Age5-14": 1566.109,
    "Age15-24": 2240.253,
    "Age25-64": 4939.43,
    "AgeOver65": 952.543
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 2000,
    "Age0-4": 750.473,
    "Age5-14": 1651.046,
    "Age15-24": 1492.31,
    "Age25-64": 6136.566,
    "AgeOver65": 1096.028
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 2010,
    "Age0-4": 609.309,
    "Age5-14": 1382.273,
    "Age15-24": 1588.733,
    "Age25-64": 6237.736,
    "AgeOver65": 1407.782
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 2020,
    "Age0-4": 571.283,
    "Age5-14": 1231.996,
    "Age15-24": 1344.097,
    "Age25-64": 6379.055,
    "AgeOver65": 1800.185
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1950,
    "Age0-4": 15.009,
    "Age5-14": 21.503,
    "Age15-24": 17.737,
    "Age25-64": 40.063,
    "AgeOver65": 5.869
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1960,
    "Age0-4": 20.273,
    "Age5-14": 32.055,
    "Age15-24": 20.494,
    "Age25-64": 47.938,
    "AgeOver65": 6.181
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1970,
    "Age0-4": 18.611,
    "Age5-14": 38.561,
    "Age15-24": 27.358,
    "Age25-64": 51.751,
    "AgeOver65": 7.358
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1980,
    "Age0-4": 13.971,
    "Age5-14": 31.923,
    "Age15-24": 33.43,
    "Age25-64": 59.725,
    "AgeOver65": 8.948
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1990,
    "Age0-4": 14.127,
    "Age5-14": 25.829,
    "Age15-24": 24.254,
    "Age25-64": 71.444,
    "AgeOver65": 11.025
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 2000,
    "Age0-4": 9.231,
    "Age5-14": 23.707,
    "Age15-24": 16.134,
    "Age25-64": 69.5,
    "AgeOver65": 13.575
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 2010,
    "Age0-4": 9.763,
    "Age5-14": 21.134,
    "Age15-24": 19.435,
    "Age25-64": 79.397,
    "AgeOver65": 19.459
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 2020,
    "Age0-4": 8.996,
    "Age5-14": 20.832,
    "Age15-24": 20.578,
    "Age25-64": 84.701,
    "AgeOver65": 28.993
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1950,
    "Age0-4": 66.66,
    "Age5-14": 103.699,
    "Age15-24": 87.471,
    "Age25-64": 206.486,
    "AgeOver65": 29.702
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1960,
    "Age0-4": 75.332,
    "Age5-14": 134.977,
    "Age15-24": 94.631,
    "Age25-64": 234.17,
    "AgeOver65": 33.823
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1970,
    "Age0-4": 58.962,
    "Age5-14": 131.006,
    "Age15-24": 108.726,
    "Age25-64": 253.093,
    "AgeOver65": 61.831
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1980,
    "Age0-4": 59.856,
    "Age5-14": 111.436,
    "Age15-24": 130.813,
    "Age25-64": 319.219,
    "AgeOver65": 64.084
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1990,
    "Age0-4": 70.178,
    "Age5-14": 125.234,
    "Age15-24": 125.845,
    "Age25-64": 369.414,
    "AgeOver65": 75.945
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 2000,
    "Age0-4": 68.059,
    "Age5-14": 143.237,
    "Age15-24": 159.999,
    "Age25-64": 475.507,
    "AgeOver65": 96.486
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 2010,
    "Age0-4": 64.003,
    "Age5-14": 134.447,
    "Age15-24": 189.489,
    "Age25-64": 597.644,
    "AgeOver65": 127.034
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 2020,
    "Age0-4": 64.817,
    "Age5-14": 135.331,
    "Age15-24": 167.364,
    "Age25-64": 665.884,
    "AgeOver65": 173.965
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1950,
    "Age0-4": 892.185,
    "Age5-14": 1273.444,
    "Age15-24": 1306.025,
    "Age25-64": 4686.417,
    "AgeOver65": 744.549
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1960,
    "Age0-4": 726.946,
    "Age5-14": 1741.201,
    "Age15-24": 1271.55,
    "Age25-64": 4953.254,
    "AgeOver65": 897.227
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1970,
    "Age0-4": 684.47,
    "Age5-14": 1400.505,
    "Age15-24": 1724.729,
    "Age25-64": 4818.928,
    "AgeOver65": 1189.035
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1980,
    "Age0-4": 895.696,
    "Age5-14": 1526.711,
    "Age15-24": 1396.056,
    "Age25-64": 5127.364,
    "AgeOver65": 1403.257
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1990,
    "Age0-4": 647.479,
    "Age5-14": 1581.513,
    "Age15-24": 1521.083,
    "Age25-64": 5279.583,
    "AgeOver65": 1311.219
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 2000,
    "Age0-4": 447.406,
    "Age5-14": 1242.396,
    "Age15-24": 1587.699,
    "Age25-64": 5591.67,
    "AgeOver65": 1420.203
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 2010,
    "Age0-4": 568.887,
    "Age5-14": 931.666,
    "Age15-24": 1298.339,
    "Age25-64": 6110.76,
    "AgeOver65": 1626.862
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 2020,
    "Age0-4": 558.81,
    "Age5-14": 1128.449,
    "Age15-24": 959.115,
    "Age25-64": 5905.498,
    "AgeOver65": 2157.11
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1950,
    "Age0-4": 4598.771,
    "Age5-14": 11517.286,
    "Age15-24": 10196.637,
    "Age25-64": 36889.601,
    "AgeOver65": 6763.957
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1960,
    "Age0-4": 5797.089,
    "Age5-14": 9950.088,
    "Age15-24": 11354.265,
    "Age25-64": 37889.226,
    "AgeOver65": 8423.561
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1970,
    "Age0-4": 6068.981,
    "Age5-14": 12259.139,
    "Age15-24": 10178.293,
    "Age25-64": 39381.503,
    "AgeOver65": 10690.465
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1980,
    "Age0-4": 3958.535,
    "Age5-14": 10579.777,
    "Age15-24": 12641.889,
    "Age25-64": 38850.372,
    "AgeOver65": 12252.528
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1990,
    "Age0-4": 4348.838,
    "Age5-14": 8259.042,
    "Age15-24": 10895.557,
    "Age25-64": 43766.159,
    "AgeOver65": 11784.388
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 2000,
    "Age0-4": 3915.89,
    "Age5-14": 8841.706,
    "Age15-24": 9020.645,
    "Age25-64": 46201.073,
    "AgeOver65": 13421.569
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 2010,
    "Age0-4": 3390.201,
    "Age5-14": 7576.716,
    "Age15-24": 8998.503,
    "Age25-64": 44249.409,
    "AgeOver65": 16612.172
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 2020,
    "Age0-4": 4058.679,
    "Age5-14": 7633.87,
    "Age15-24": 8672.407,
    "Age25-64": 45248.392,
    "AgeOver65": 18170.597
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1950,
    "Age0-4": 12.193,
    "Age5-14": 16.823,
    "Age15-24": 11.948,
    "Age25-64": 19.811,
    "AgeOver65": 1.225
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1960,
    "Age0-4": 14.301,
    "Age5-14": 21.96,
    "Age15-24": 17.005,
    "Age25-64": 28.43,
    "AgeOver65": 1.938
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1970,
    "Age0-4": 30.833,
    "Age5-14": 41.66,
    "Age15-24": 29.987,
    "Age25-64": 53.338,
    "AgeOver65": 3.844
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1980,
    "Age0-4": 67.686,
    "Age5-14": 99.107,
    "Age15-24": 73.211,
    "Age25-64": 110.51,
    "AgeOver65": 8.446
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1990,
    "Age0-4": 107.065,
    "Age5-14": 158.678,
    "Age15-24": 116.014,
    "Age25-64": 193.363,
    "AgeOver65": 15.273
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 2000,
    "Age0-4": 102.509,
    "Age5-14": 191.524,
    "Age15-24": 146.867,
    "Age25-64": 255.096,
    "AgeOver65": 21.581
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 2010,
    "Age0-4": 91.278,
    "Age5-14": 182.323,
    "Age15-24": 174.819,
    "Age25-64": 359.648,
    "AgeOver65": 32.126
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 2020,
    "Age0-4": 99.162,
    "Age5-14": 186.491,
    "Age15-24": 180.985,
    "Age25-64": 474.863,
    "AgeOver65": 46.501
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1950,
    "Age0-4": 422.807,
    "Age5-14": 699.54,
    "Age15-24": 588.399,
    "Age25-64": 2172.208,
    "AgeOver65": 385.327
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1960,
    "Age0-4": 367.22,
    "Age5-14": 787.575,
    "Age15-24": 684.092,
    "Age25-64": 2256.492,
    "AgeOver65": 485.72
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1970,
    "Age0-4": 387.712,
    "Age5-14": 760.823,
    "Age15-24": 788.706,
    "Age25-64": 2387.654,
    "AgeOver65": 606.344
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1980,
    "Age0-4": 313.388,
    "Age5-14": 754.196,
    "Age15-24": 767.553,
    "Age25-64": 2549.664,
    "AgeOver65": 739.144
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1990,
    "Age0-4": 291.389,
    "Age5-14": 584.087,
    "Age15-24": 763.372,
    "Age25-64": 2700.184,
    "AgeOver65": 802.085
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 2000,
    "Age0-4": 338.606,
    "Age5-14": 647.882,
    "Age15-24": 612.163,
    "Age25-64": 2949.173,
    "AgeOver65": 793.368
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 2010,
    "Age0-4": 325.866,
    "Age5-14": 671.218,
    "Age15-24": 684.99,
    "Age25-64": 2946.912,
    "AgeOver65": 925.863
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 2020,
    "Age0-4": 308.596,
    "Age5-14": 634.478,
    "Age15-24": 712.849,
    "Age25-64": 2968.342,
    "AgeOver65": 1167.938
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1950,
    "Age0-4": 439.444,
    "Age5-14": 633.424,
    "Age15-24": 473.725,
    "Age25-64": 753.156,
    "AgeOver65": 64.9
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1960,
    "Age0-4": 673.068,
    "Age5-14": 915.573,
    "Age15-24": 576.259,
    "Age25-64": 1045.488,
    "AgeOver65": 83.834
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1970,
    "Age0-4": 808.333,
    "Age5-14": 1343.558,
    "Age15-24": 835.954,
    "Age25-64": 1395.247,
    "AgeOver65": 116.63
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1980,
    "Age0-4": 885.329,
    "Age5-14": 1596.852,
    "Age15-24": 1240.139,
    "Age25-64": 1909.445,
    "AgeOver65": 172.164
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1990,
    "Age0-4": 969.638,
    "Age5-14": 1774.521,
    "Age15-24": 1479.558,
    "Age25-64": 2643.595,
    "AgeOver65": 266.179
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 2000,
    "Age0-4": 1008.017,
    "Age5-14": 1949.513,
    "Age15-24": 1667.059,
    "Age25-64": 3439.552,
    "AgeOver65": 407.176
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 2010,
    "Age0-4": 989.582,
    "Age5-14": 1978.128,
    "Age15-24": 1883.212,
    "Age25-64": 4276.855,
    "AgeOver65": 567.34
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 2020,
    "Age0-4": 1002.829,
    "Age5-14": 1973.764,
    "Age15-24": 1898.193,
    "Age25-64": 5156.524,
    "AgeOver65": 816.594
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1950,
    "Age0-4": 1403.134,
    "Age5-14": 2199.62,
    "Age15-24": 1724.431,
    "Age25-64": 3230.562,
    "AgeOver65": 314.503
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1960,
    "Age0-4": 2067.712,
    "Age5-14": 2861.965,
    "Age15-24": 1983.514,
    "Age25-64": 3786.322,
    "AgeOver65": 358.351
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1970,
    "Age0-4": 2680.397,
    "Age5-14": 4100.166,
    "Age15-24": 2677.27,
    "Age25-64": 4496.168,
    "AgeOver65": 510.991
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1980,
    "Age0-4": 3509.321,
    "Age5-14": 5394.264,
    "Age15-24": 3888.643,
    "Age25-64": 5766.744,
    "AgeOver65": 662.687
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1990,
    "Age0-4": 3970.828,
    "Age5-14": 7195.377,
    "Age15-24": 5304.647,
    "Age25-64": 8422.721,
    "AgeOver65": 865.299
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 2000,
    "Age0-4": 3084.85,
    "Age5-14": 7582.105,
    "Age15-24": 7051.823,
    "Age25-64": 11986.339,
    "AgeOver65": 1337.121
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 2010,
    "Age0-4": 3852.284,
    "Age5-14": 5963.368,
    "Age15-24": 7468.565,
    "Age25-64": 16730.233,
    "AgeOver65": 1963.001
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 2020,
    "Age0-4": 5041.518,
    "Age5-14": 8457.374,
    "Age15-24": 5910.182,
    "Age25-64": 21485.13,
    "AgeOver65": 2956.839
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1950,
    "Age0-4": 543.001,
    "Age5-14": 836.951,
    "Age15-24": 614.091,
    "Age25-64": 1292.207,
    "AgeOver65": 183.91
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1960,
    "Age0-4": 806.347,
    "Age5-14": 1165.691,
    "Age15-24": 805.677,
    "Age25-64": 1552.44,
    "AgeOver65": 213.503
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1970,
    "Age0-4": 1049.029,
    "Age5-14": 1641.105,
    "Age15-24": 1136.352,
    "Age25-64": 1986.005,
    "AgeOver65": 256.884
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1980,
    "Age0-4": 1228.716,
    "Age5-14": 2127.175,
    "Age15-24": 1611.228,
    "Age25-64": 2693.627,
    "AgeOver65": 328.432
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1990,
    "Age0-4": 1414.785,
    "Age5-14": 2499.949,
    "Age15-24": 2097.119,
    "Age25-64": 3786.459,
    "AgeOver65": 432.619
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 2000,
    "Age0-4": 1562.332,
    "Age5-14": 2871.87,
    "Age15-24": 2465.037,
    "Age25-64": 5161.851,
    "AgeOver65": 620.033
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 2010,
    "Age0-4": 1560.212,
    "Age5-14": 3098.829,
    "Age15-24": 2836.276,
    "Age25-64": 6615.777,
    "AgeOver65": 900.02
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 2020,
    "Age0-4": 1667.087,
    "Age5-14": 3165.688,
    "Age15-24": 3127.474,
    "Age25-64": 8343.506,
    "AgeOver65": 1339.305
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1950,
    "Age0-4": 3634.281,
    "Age5-14": 4307.259,
    "Age15-24": 3951.57,
    "Age25-64": 7953.817,
    "AgeOver65": 605.061
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1960,
    "Age0-4": 4547.49,
    "Age5-14": 6667.704,
    "Age15-24": 4189.401,
    "Age25-64": 10216.846,
    "AgeOver65": 1011.45
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1970,
    "Age0-4": 5588.247,
    "Age5-14": 8840.357,
    "Age15-24": 6488.567,
    "Age25-64": 12156.441,
    "AgeOver65": 1440.239
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1980,
    "Age0-4": 6779.54,
    "Age5-14": 10881.767,
    "Age15-24": 8241.962,
    "Age25-64": 15462.627,
    "AgeOver65": 1943.167
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1990,
    "Age0-4": 8689.371,
    "Age5-14": 14189.591,
    "Age15-24": 10234.77,
    "Age25-64": 20438.038,
    "AgeOver65": 2582.708
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 2000,
    "Age0-4": 8557.27,
    "Age5-14": 16812.353,
    "Age15-24": 13953.984,
    "Age25-64": 26124.258,
    "AgeOver65": 3383.696
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 2010,
    "Age0-4": 9744.422,
    "Age5-14": 17199.468,
    "Age15-24": 16588.841,
    "Age25-64": 35261.797,
    "AgeOver65": 3966.716
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 2020,
    "Age0-4": 12697.212,
    "Age5-14": 22015.667,
    "Age15-24": 17117.687,
    "Age25-64": 45047.693,
    "AgeOver65": 5456.144
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1950,
    "Age0-4": 153.503,
    "Age5-14": 218.378,
    "Age15-24": 157.176,
    "Age25-64": 266.909,
    "AgeOver65": 26.381
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1960,
    "Age0-4": 179.48,
    "Age5-14": 258.238,
    "Age15-24": 202.152,
    "Age25-64": 339.897,
    "AgeOver65": 27.819
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1970,
    "Age0-4": 236.792,
    "Age5-14": 340.335,
    "Age15-24": 244.179,
    "Age25-64": 455.896,
    "AgeOver65": 33.745
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1980,
    "Age0-4": 308.298,
    "Age5-14": 459.185,
    "Age15-24": 324.428,
    "Age25-64": 596.469,
    "AgeOver65": 45.043
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1990,
    "Age0-4": 403.754,
    "Age5-14": 616.299,
    "Age15-24": 422.916,
    "Age25-64": 753.092,
    "AgeOver65": 62.588
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 2000,
    "Age0-4": 323.194,
    "Age5-14": 724.674,
    "Age15-24": 485.694,
    "Age25-64": 671.059,
    "AgeOver65": 87.792
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 2010,
    "Age0-4": 526.331,
    "Age5-14": 725.465,
    "Age15-24": 711.524,
    "Age25-64": 1080.297,
    "AgeOver65": 126.82
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 2020,
    "Age0-4": 495.07,
    "Age5-14": 963.393,
    "Age15-24": 659.179,
    "Age25-64": 1268.966,
    "AgeOver65": 159.819
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 1950,
    "Age0-4": 2.381,
    "Age5-14": 3.475,
    "Age15-24": 2.616,
    "Age25-64": 4.905,
    "AgeOver65": 0.386
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 1960,
    "Age0-4": 5.396,
    "Age5-14": 6.742,
    "Age15-24": 7.51,
    "Age25-64": 12.261,
    "AgeOver65": 0.848
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 1970,
    "Age0-4": 13.181,
    "Age5-14": 17.748,
    "Age15-24": 14.785,
    "Age25-64": 29.311,
    "AgeOver65": 1.855
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 1980,
    "Age0-4": 22.972,
    "Age5-14": 32.554,
    "Age15-24": 32.458,
    "Age25-64": 57.946,
    "AgeOver65": 4.93
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 1990,
    "Age0-4": 31.814,
    "Age5-14": 52.356,
    "Age15-24": 39.93,
    "Age25-64": 87.356,
    "AgeOver65": 5.802
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 2000,
    "Age0-4": 37.982,
    "Age5-14": 72.226,
    "Age15-24": 63.389,
    "Age25-64": 132.639,
    "AgeOver65": 7.88
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 2010,
    "Age0-4": 48.515,
    "Age5-14": 92.449,
    "Age15-24": 94.006,
    "Age25-64": 234.28,
    "AgeOver65": 11.018
  },
  {
    "Entity": "Western Sahara",
    "Code": "ESH",
    "Year": 2020,
    "Age0-4": 56.47,
    "Age5-14": 105.956,
    "Age15-24": 98.702,
    "Age25-64": 315.912,
    "AgeOver65": 20.29
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1950,
    "Age0-4": 2663.503,
    "Age5-14": 4772.605,
    "Age15-24": 5385.639,
    "Age25-64": 13219.811,
    "AgeOver65": 2028.176
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1960,
    "Age0-4": 3008.269,
    "Age5-14": 5311.012,
    "Age15-24": 4757.447,
    "Age25-64": 14828.749,
    "AgeOver65": 2496.936
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1970,
    "Age0-4": 3234.135,
    "Age5-14": 6291.237,
    "Age15-24": 5219.575,
    "Age25-64": 15873.601,
    "AgeOver65": 3265.201
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1980,
    "Age0-4": 3175.107,
    "Age5-14": 6606.531,
    "Age15-24": 6304.418,
    "Age25-64": 17431.572,
    "AgeOver65": 4180.572
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1990,
    "Age0-4": 2101.641,
    "Age5-14": 5736.703,
    "Age15-24": 6604.681,
    "Age25-64": 19510.106,
    "AgeOver65": 5249.393
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 2000,
    "Age0-4": 1883.801,
    "Age5-14": 4132.455,
    "Age15-24": 5937.505,
    "Age25-64": 22066.759,
    "AgeOver65": 6804.225
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 2010,
    "Age0-4": 2502.551,
    "Age5-14": 4440.155,
    "Age15-24": 4912.255,
    "Age25-64": 27072.348,
    "AgeOver65": 8003.702
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 2020,
    "Age0-4": 1990.096,
    "Age5-14": 4742.345,
    "Age15-24": 4494.032,
    "Age25-64": 26187.82,
    "AgeOver65": 9340.49
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1950,
    "Age0-4": 92.293,
    "Age5-14": 189.205,
    "Age15-24": 193.643,
    "Age25-64": 509.145,
    "AgeOver65": 116.711
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1960,
    "Age0-4": 95.245,
    "Age5-14": 185.837,
    "Age15-24": 181.986,
    "Age25-64": 625.42,
    "AgeOver65": 128.332
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1970,
    "Age0-4": 97.316,
    "Age5-14": 202.146,
    "Age15-24": 203.462,
    "Age25-64": 696.968,
    "AgeOver65": 160.314
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1980,
    "Age0-4": 108.563,
    "Age5-14": 210.27,
    "Age15-24": 217.318,
    "Age25-64": 753.781,
    "AgeOver65": 184.506
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1990,
    "Age0-4": 119.342,
    "Age5-14": 227.883,
    "Age15-24": 215.058,
    "Age25-64": 820.429,
    "AgeOver65": 182.534
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 2000,
    "Age0-4": 61.285,
    "Age5-14": 184.718,
    "Age15-24": 200.614,
    "Age25-64": 742.382,
    "AgeOver65": 210.112
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 2010,
    "Age0-4": 77.67,
    "Age5-14": 123.918,
    "Age15-24": 178.423,
    "Age25-64": 718.654,
    "AgeOver65": 233.438
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 2020,
    "Age0-4": 69.176,
    "Age5-14": 149.678,
    "Age15-24": 120.303,
    "Age25-64": 717.123,
    "AgeOver65": 270.259
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1950,
    "Age0-4": 3327.721,
    "Age5-14": 4665.416,
    "Age15-24": 3411.647,
    "Age25-64": 6179.192,
    "AgeOver65": 544.054
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1960,
    "Age0-4": 3875.947,
    "Age5-14": 5750.924,
    "Age15-24": 4288.548,
    "Age25-64": 7651.003,
    "AgeOver65": 584.862
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1970,
    "Age0-4": 5159.479,
    "Age5-14": 7337.896,
    "Age15-24": 5371.773,
    "Age25-64": 9778.107,
    "AgeOver65": 767.825
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1980,
    "Age0-4": 6674.382,
    "Age5-14": 9181.583,
    "Age15-24": 6152.723,
    "Age25-64": 12007.185,
    "AgeOver65": 1125.83
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1990,
    "Age0-4": 9056.988,
    "Age5-14": 13115.382,
    "Age15-24": 8826.829,
    "Age25-64": 15375.757,
    "AgeOver65": 1512.908
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 2000,
    "Age0-4": 12347.59,
    "Age5-14": 18422.29,
    "Age15-24": 12872.455,
    "Age25-64": 20528.46,
    "AgeOver65": 2054.014
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 2010,
    "Age0-4": 14244.957,
    "Age5-14": 25133.269,
    "Age15-24": 17492.224,
    "Age25-64": 27876.103,
    "AgeOver65": 2893.409
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 2020,
    "Age0-4": 16791.484,
    "Age5-14": 29099.263,
    "Age15-24": 24722.651,
    "Age25-64": 40284.05,
    "AgeOver65": 4066.135
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1950,
    "Age0-4": 500.547,
    "Age5-14": 692.338,
    "Age15-24": 641.382,
    "Age25-64": 1908.08,
    "AgeOver65": 265.945
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1960,
    "Age0-4": 413.091,
    "Age5-14": 935.323,
    "Age15-24": 671.691,
    "Age25-64": 2089.514,
    "AgeOver65": 324.974
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1970,
    "Age0-4": 348.094,
    "Age5-14": 787.266,
    "Age15-24": 874.263,
    "Age25-64": 2179.271,
    "AgeOver65": 423.471
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1980,
    "Age0-4": 320.699,
    "Age5-14": 651.147,
    "Age15-24": 766.991,
    "Age25-64": 2473.889,
    "AgeOver65": 575.521
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1990,
    "Age0-4": 311.365,
    "Age5-14": 653.233,
    "Age15-24": 651.55,
    "Age25-64": 2708.806,
    "AgeOver65": 671.266
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 2000,
    "Age0-4": 294.745,
    "Age5-14": 646.139,
    "Age15-24": 660.609,
    "Age25-64": 2808.581,
    "AgeOver65": 777.879
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 2010,
    "Age0-4": 301.713,
    "Age5-14": 584.85,
    "Age15-24": 661.319,
    "Age25-64": 2893.401,
    "AgeOver65": 924.501
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 2020,
    "Age0-4": 264.132,
    "Age5-14": 614.909,
    "Age15-24": 609.551,
    "Age25-64": 2802.443,
    "AgeOver65": 1249.683
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1950,
    "Age0-4": 55,
    "Age5-14": 80,
    "Age15-24": 55.004,
    "Age25-64": 90.996,
    "AgeOver65": 7.994
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1960,
    "Age0-4": 77.377,
    "Age5-14": 112.769,
    "Age15-24": 74.667,
    "Age25-64": 120.156,
    "AgeOver65": 8.511
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1970,
    "Age0-4": 78.754,
    "Age5-14": 149.128,
    "Age15-24": 108.996,
    "Age25-64": 171.951,
    "AgeOver65": 11.732
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1980,
    "Age0-4": 92.387,
    "Age5-14": 157.106,
    "Age15-24": 140.875,
    "Age25-64": 228.659,
    "AgeOver65": 16.285
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1990,
    "Age0-4": 99.939,
    "Age5-14": 180.13,
    "Age15-24": 139.141,
    "Age25-64": 288.016,
    "AgeOver65": 21.349
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 2000,
    "Age0-4": 98.246,
    "Age5-14": 185.867,
    "Age15-24": 166.009,
    "Age25-64": 333.189,
    "AgeOver65": 27.7
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 2010,
    "Age0-4": 89.604,
    "Age5-14": 159.746,
    "Age15-24": 158.166,
    "Age25-64": 410.867,
    "AgeOver65": 41.433
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 2020,
    "Age0-4": 89.39,
    "Age5-14": 170.677,
    "Age15-24": 147.091,
    "Age25-64": 437.136,
    "AgeOver65": 52.15
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1950,
    "Age0-4": 3964.339,
    "Age5-14": 5536.076,
    "Age15-24": 6355.493,
    "Age25-64": 21212.071,
    "AgeOver65": 4765.894
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1960,
    "Age0-4": 3991.273,
    "Age5-14": 8048.754,
    "Age15-24": 5669.106,
    "Age25-64": 22642.603,
    "AgeOver65": 5321.411
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1970,
    "Age0-4": 4194.194,
    "Age5-14": 8402.967,
    "Age15-24": 8368.365,
    "Age25-64": 23272.813,
    "AgeOver65": 6525.582
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1980,
    "Age0-4": 3647.101,
    "Age5-14": 8430.047,
    "Age15-24": 8537.776,
    "Age25-64": 25756.683,
    "AgeOver65": 7496.399
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1990,
    "Age0-4": 3799.539,
    "Age5-14": 7579.844,
    "Age15-24": 8536.968,
    "Age25-64": 28796.734,
    "AgeOver65": 7953.776
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 2000,
    "Age0-4": 3674.207,
    "Age5-14": 7483.787,
    "Age15-24": 7596.757,
    "Age25-64": 30784.07,
    "AgeOver65": 9476.271
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 2010,
    "Age0-4": 3939.715,
    "Age5-14": 7679.066,
    "Age15-24": 7715.472,
    "Age25-64": 32948.804,
    "AgeOver65": 10596.478
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 2020,
    "Age0-4": 3619.987,
    "Age5-14": 7903.175,
    "Age15-24": 7584.808,
    "Age25-64": 32619.032,
    "AgeOver65": 13546.51
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1950,
    "Age0-4": 4.952,
    "Age5-14": 7.969,
    "Age15-24": 6.002,
    "Age25-64": 11.76,
    "AgeOver65": 1.321
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1951,
    "Age0-4": 5.441,
    "Age5-14": 8.254,
    "Age15-24": 6.209,
    "Age25-64": 12.148,
    "AgeOver65": 1.347
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1952,
    "Age0-4": 6.112,
    "Age5-14": 8.404,
    "Age15-24": 6.337,
    "Age25-64": 12.374,
    "AgeOver65": 1.359
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1953,
    "Age0-4": 6.697,
    "Age5-14": 8.545,
    "Age15-24": 6.466,
    "Age25-64": 12.602,
    "AgeOver65": 1.365
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1954,
    "Age0-4": 7.126,
    "Age5-14": 8.73,
    "Age15-24": 6.627,
    "Age25-64": 12.895,
    "AgeOver65": 1.379
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1955,
    "Age0-4": 7.432,
    "Age5-14": 8.992,
    "Age15-24": 6.816,
    "Age25-64": 13.244,
    "AgeOver65": 1.396
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1956,
    "Age0-4": 7.961,
    "Age5-14": 9.288,
    "Age15-24": 6.945,
    "Age25-64": 13.458,
    "AgeOver65": 1.414
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1957,
    "Age0-4": 8.168,
    "Age5-14": 9.778,
    "Age15-24": 7.146,
    "Age25-64": 13.809,
    "AgeOver65": 1.45
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1958,
    "Age0-4": 8.198,
    "Age5-14": 10.428,
    "Age15-24": 7.378,
    "Age25-64": 14.209,
    "AgeOver65": 1.482
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1959,
    "Age0-4": 8.21,
    "Age5-14": 11.172,
    "Age15-24": 7.588,
    "Age25-64": 14.613,
    "AgeOver65": 1.513
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1960,
    "Age0-4": 8.299,
    "Age5-14": 11.923,
    "Age15-24": 7.76,
    "Age25-64": 14.985,
    "AgeOver65": 1.543
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1961,
    "Age0-4": 8.243,
    "Age5-14": 12.741,
    "Age15-24": 7.942,
    "Age25-64": 15.427,
    "AgeOver65": 1.586
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1962,
    "Age0-4": 8.392,
    "Age5-14": 13.479,
    "Age15-24": 8.069,
    "Age25-64": 15.798,
    "AgeOver65": 1.634
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1963,
    "Age0-4": 8.703,
    "Age5-14": 14.127,
    "Age15-24": 8.198,
    "Age25-64": 16.164,
    "AgeOver65": 1.664
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1964,
    "Age0-4": 9.077,
    "Age5-14": 14.693,
    "Age15-24": 8.418,
    "Age25-64": 16.583,
    "AgeOver65": 1.705
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1965,
    "Age0-4": 9.427,
    "Age5-14": 15.214,
    "Age15-24": 8.772,
    "Age25-64": 17.066,
    "AgeOver65": 1.745
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1966,
    "Age0-4": 9.855,
    "Age5-14": 15.734,
    "Age15-24": 9.237,
    "Age25-64": 17.567,
    "AgeOver65": 1.799
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1967,
    "Age0-4": 10.268,
    "Age5-14": 16.218,
    "Age15-24": 9.822,
    "Age25-64": 18.136,
    "AgeOver65": 1.864
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1968,
    "Age0-4": 10.626,
    "Age5-14": 16.65,
    "Age15-24": 10.482,
    "Age25-64": 18.71,
    "AgeOver65": 1.918
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1969,
    "Age0-4": 10.881,
    "Age5-14": 16.999,
    "Age15-24": 11.119,
    "Age25-64": 19.179,
    "AgeOver65": 1.968
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1970,
    "Age0-4": 11.007,
    "Age5-14": 17.241,
    "Age15-24": 11.676,
    "Age25-64": 19.488,
    "AgeOver65": 2.003
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1971,
    "Age0-4": 11.271,
    "Age5-14": 17.447,
    "Age15-24": 11.903,
    "Age25-64": 19.363,
    "AgeOver65": 2.105
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1972,
    "Age0-4": 11.36,
    "Age5-14": 17.612,
    "Age15-24": 12.109,
    "Age25-64": 18.988,
    "AgeOver65": 2.206
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1973,
    "Age0-4": 11.35,
    "Age5-14": 17.788,
    "Age15-24": 12.322,
    "Age25-64": 18.484,
    "AgeOver65": 2.324
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1974,
    "Age0-4": 11.356,
    "Age5-14": 18.062,
    "Age15-24": 12.561,
    "Age25-64": 18.026,
    "AgeOver65": 2.451
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1975,
    "Age0-4": 11.499,
    "Age5-14": 18.479,
    "Age15-24": 12.842,
    "Age25-64": 17.688,
    "AgeOver65": 2.614
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1976,
    "Age0-4": 11.567,
    "Age5-14": 18.907,
    "Age15-24": 13.121,
    "Age25-64": 18.161,
    "AgeOver65": 2.604
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1977,
    "Age0-4": 11.724,
    "Age5-14": 19.514,
    "Age15-24": 13.364,
    "Age25-64": 18.879,
    "AgeOver65": 2.598
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1978,
    "Age0-4": 11.982,
    "Age5-14": 20.247,
    "Age15-24": 13.601,
    "Age25-64": 19.772,
    "AgeOver65": 2.594
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1979,
    "Age0-4": 12.328,
    "Age5-14": 21.022,
    "Age15-24": 13.88,
    "Age25-64": 20.703,
    "AgeOver65": 2.582
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1980,
    "Age0-4": 12.721,
    "Age5-14": 21.803,
    "Age15-24": 14.222,
    "Age25-64": 21.634,
    "AgeOver65": 2.556
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1981,
    "Age0-4": 12.949,
    "Age5-14": 22.5,
    "Age15-24": 14.844,
    "Age25-64": 22.475,
    "AgeOver65": 2.654
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1982,
    "Age0-4": 13.393,
    "Age5-14": 23.064,
    "Age15-24": 15.504,
    "Age25-64": 23.305,
    "AgeOver65": 2.749
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1983,
    "Age0-4": 13.94,
    "Age5-14": 23.518,
    "Age15-24": 16.204,
    "Age25-64": 24.14,
    "AgeOver65": 2.828
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1984,
    "Age0-4": 14.431,
    "Age5-14": 23.906,
    "Age15-24": 16.933,
    "Age25-64": 25.009,
    "AgeOver65": 2.913
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1985,
    "Age0-4": 14.77,
    "Age5-14": 24.283,
    "Age15-24": 17.682,
    "Age25-64": 25.915,
    "AgeOver65": 2.991
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1986,
    "Age0-4": 15.291,
    "Age5-14": 24.635,
    "Age15-24": 18.113,
    "Age25-64": 26.786,
    "AgeOver65": 3.079
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1987,
    "Age0-4": 15.454,
    "Age5-14": 25.118,
    "Age15-24": 18.573,
    "Age25-64": 27.685,
    "AgeOver65": 3.155
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1988,
    "Age0-4": 15.38,
    "Age5-14": 25.727,
    "Age15-24": 19.045,
    "Age25-64": 28.595,
    "AgeOver65": 3.237
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1989,
    "Age0-4": 15.287,
    "Age5-14": 26.436,
    "Age15-24": 19.507,
    "Age25-64": 29.523,
    "AgeOver65": 3.309
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1990,
    "Age0-4": 15.34,
    "Age5-14": 27.171,
    "Age15-24": 19.95,
    "Age25-64": 30.464,
    "AgeOver65": 3.379
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1991,
    "Age0-4": 15.359,
    "Age5-14": 28.158,
    "Age15-24": 19.966,
    "Age25-64": 31.799,
    "AgeOver65": 3.497
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1992,
    "Age0-4": 15.589,
    "Age5-14": 29.099,
    "Age15-24": 20.059,
    "Age25-64": 33.056,
    "AgeOver65": 3.583
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1993,
    "Age0-4": 15.944,
    "Age5-14": 29.856,
    "Age15-24": 20.33,
    "Age25-64": 34.144,
    "AgeOver65": 3.627
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1994,
    "Age0-4": 16.223,
    "Age5-14": 30.357,
    "Age15-24": 20.807,
    "Age25-64": 34.979,
    "AgeOver65": 3.664
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1995,
    "Age0-4": 16.241,
    "Age5-14": 30.61,
    "Age15-24": 21.451,
    "Age25-64": 35.512,
    "AgeOver65": 3.721
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1996,
    "Age0-4": 16.211,
    "Age5-14": 30.424,
    "Age15-24": 21.867,
    "Age25-64": 35.996,
    "AgeOver65": 3.813
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1997,
    "Age0-4": 16.055,
    "Age5-14": 30.042,
    "Age15-24": 22.164,
    "Age25-64": 36.307,
    "AgeOver65": 3.905
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1998,
    "Age0-4": 15.749,
    "Age5-14": 29.514,
    "Age15-24": 22.434,
    "Age25-64": 36.547,
    "AgeOver65": 3.962
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1999,
    "Age0-4": 15.365,
    "Age5-14": 28.927,
    "Age15-24": 22.711,
    "Age25-64": 36.798,
    "AgeOver65": 3.968
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2000,
    "Age0-4": 15.007,
    "Age5-14": 28.332,
    "Age15-24": 23.014,
    "Age25-64": 37.128,
    "AgeOver65": 3.924
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2001,
    "Age0-4": 14.932,
    "Age5-14": 28.096,
    "Age15-24": 23.311,
    "Age25-64": 36.828,
    "AgeOver65": 4.003
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2002,
    "Age0-4": 14.622,
    "Age5-14": 28.053,
    "Age15-24": 23.685,
    "Age25-64": 36.606,
    "AgeOver65": 4.061
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2003,
    "Age0-4": 14.183,
    "Age5-14": 28.094,
    "Age15-24": 24.089,
    "Age25-64": 36.433,
    "AgeOver65": 4.103
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2004,
    "Age0-4": 13.725,
    "Age5-14": 28.082,
    "Age15-24": 24.454,
    "Age25-64": 36.234,
    "AgeOver65": 4.129
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2005,
    "Age0-4": 13.339,
    "Age5-14": 27.9,
    "Age15-24": 24.746,
    "Age25-64": 36.02,
    "AgeOver65": 4.13
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2006,
    "Age0-4": 12.93,
    "Age5-14": 27.195,
    "Age15-24": 23.921,
    "Age25-64": 37.347,
    "AgeOver65": 3.981
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2007,
    "Age0-4": 12.599,
    "Age5-14": 26.482,
    "Age15-24": 22.997,
    "Age25-64": 38.558,
    "AgeOver65": 3.806
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2008,
    "Age0-4": 12.348,
    "Age5-14": 25.779,
    "Age15-24": 22.18,
    "Age25-64": 39.621,
    "AgeOver65": 3.621
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2009,
    "Age0-4": 12.165,
    "Age5-14": 25.152,
    "Age15-24": 21.617,
    "Age25-64": 40.59,
    "AgeOver65": 3.447
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2010,
    "Age0-4": 12.084,
    "Age5-14": 24.644,
    "Age15-24": 21.364,
    "Age25-64": 41.513,
    "AgeOver65": 3.311
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2011,
    "Age0-4": 12.13,
    "Age5-14": 24.189,
    "Age15-24": 21.776,
    "Age25-64": 42.029,
    "AgeOver65": 3.324
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2012,
    "Age0-4": 12.079,
    "Age5-14": 23.935,
    "Age15-24": 22.304,
    "Age25-64": 42.797,
    "AgeOver65": 3.391
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2013,
    "Age0-4": 11.99,
    "Age5-14": 23.832,
    "Age15-24": 22.86,
    "Age25-64": 43.751,
    "AgeOver65": 3.489
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2014,
    "Age0-4": 11.931,
    "Age5-14": 23.802,
    "Age15-24": 23.33,
    "Age25-64": 44.772,
    "AgeOver65": 3.609
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2015,
    "Age0-4": 11.942,
    "Age5-14": 23.774,
    "Age15-24": 23.641,
    "Age25-64": 45.778,
    "AgeOver65": 3.751
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2016,
    "Age0-4": 11.919,
    "Age5-14": 23.714,
    "Age15-24": 23.76,
    "Age25-64": 46.831,
    "AgeOver65": 3.991
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2017,
    "Age0-4": 11.965,
    "Age5-14": 23.678,
    "Age15-24": 23.696,
    "Age25-64": 47.88,
    "AgeOver65": 4.242
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2018,
    "Age0-4": 12.062,
    "Age5-14": 23.653,
    "Age15-24": 23.51,
    "Age25-64": 48.916,
    "AgeOver65": 4.499
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2019,
    "Age0-4": 12.171,
    "Age5-14": 23.628,
    "Age15-24": 23.297,
    "Age25-64": 49.947,
    "AgeOver65": 4.768
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2020,
    "Age0-4": 12.265,
    "Age5-14": 23.612,
    "Age15-24": 23.118,
    "Age25-64": 50.976,
    "AgeOver65": 5.05
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1950,
    "Age0-4": 53.466,
    "Age5-14": 83.961,
    "Age15-24": 77.294,
    "Age25-64": 224.39,
    "AgeOver65": 34.185
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1960,
    "Age0-4": 60.841,
    "Age5-14": 94.422,
    "Age15-24": 78.034,
    "Age25-64": 229.758,
    "AgeOver65": 37.867
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1970,
    "Age0-4": 84.302,
    "Age5-14": 117.511,
    "Age15-24": 89.457,
    "Age25-64": 257.68,
    "AgeOver65": 40.367
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1980,
    "Age0-4": 114.389,
    "Age5-14": 171.318,
    "Age15-24": 114.433,
    "Age25-64": 282.067,
    "AgeOver65": 44.128
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1990,
    "Age0-4": 155.325,
    "Age5-14": 241.091,
    "Age15-24": 168.912,
    "Age25-64": 330.683,
    "AgeOver65": 53.482
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 2000,
    "Age0-4": 184.69,
    "Age5-14": 319.13,
    "Age15-24": 237.355,
    "Age25-64": 423.149,
    "AgeOver65": 64.035
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 2010,
    "Age0-4": 233.725,
    "Age5-14": 374.242,
    "Age15-24": 325.122,
    "Age25-64": 624.599,
    "AgeOver65": 66.458
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 2020,
    "Age0-4": 320.376,
    "Age5-14": 509.02,
    "Age15-24": 372.787,
    "Age25-64": 945.001,
    "AgeOver65": 78.544
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1950,
    "Age0-4": 4370.647,
    "Age5-14": 6994.892,
    "Age15-24": 6636.069,
    "Age25-64": 27131.536,
    "AgeOver65": 5482.875
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1960,
    "Age0-4": 4103.112,
    "Age5-14": 8023.627,
    "Age15-24": 6938.576,
    "Age25-64": 27142.638,
    "AgeOver65": 6162.642
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1970,
    "Age0-4": 4662.355,
    "Age5-14": 8767.741,
    "Age15-24": 8031.653,
    "Age25-64": 26869.416,
    "AgeOver65": 7242.29
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1980,
    "Age0-4": 3381.804,
    "Age5-14": 8434.648,
    "Age15-24": 8837.657,
    "Age25-64": 27153.33,
    "AgeOver65": 8401.725
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1990,
    "Age0-4": 3823.875,
    "Age5-14": 7012.256,
    "Age15-24": 8430.286,
    "Age25-64": 28869.982,
    "AgeOver65": 8997.978
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 2000,
    "Age0-4": 3550.65,
    "Age5-14": 7663.862,
    "Age15-24": 7127.617,
    "Age25-64": 31216.41,
    "AgeOver65": 9364.766
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 2010,
    "Age0-4": 3898.072,
    "Age5-14": 7204.528,
    "Age15-24": 8317.011,
    "Age25-64": 33525.067,
    "AgeOver65": 10515.123
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 2020,
    "Age0-4": 3924.49,
    "Age5-14": 8075.906,
    "Age15-24": 7760.773,
    "Age25-64": 35461.823,
    "AgeOver65": 12663.012
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1950,
    "Age0-4": 286.651,
    "Age5-14": 660.491,
    "Age15-24": 709.624,
    "Age25-64": 1514.005,
    "AgeOver65": 356.237
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1960,
    "Age0-4": 456.309,
    "Age5-14": 690.128,
    "Age15-24": 666.918,
    "Age25-64": 1848.057,
    "AgeOver65": 346.312
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1970,
    "Age0-4": 457.416,
    "Age5-14": 992.4,
    "Age15-24": 731.397,
    "Age25-64": 2167.3,
    "AgeOver65": 364.827
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1980,
    "Age0-4": 425.484,
    "Age5-14": 855.166,
    "Age15-24": 926.087,
    "Age25-64": 2347.13,
    "AgeOver65": 463.96
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1990,
    "Age0-4": 464.792,
    "Age5-14": 880.247,
    "Age15-24": 826.278,
    "Age25-64": 2735.382,
    "AgeOver65": 503.701
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 2000,
    "Age0-4": 257.548,
    "Age5-14": 650.73,
    "Age15-24": 682.429,
    "Age25-64": 2207.319,
    "AgeOver65": 564.158
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 2010,
    "Age0-4": 261.898,
    "Age5-14": 474.094,
    "Age15-24": 620.357,
    "Age25-64": 2159.002,
    "AgeOver65": 583.745
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 2020,
    "Age0-4": 268.345,
    "Age5-14": 538.28,
    "Age15-24": 451.008,
    "Age25-64": 2123.06,
    "AgeOver65": 608.482
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1950,
    "Age0-4": 943.789,
    "Age5-14": 1348.171,
    "Age15-24": 964.985,
    "Age25-64": 1656.48,
    "AgeOver65": 122.726
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1960,
    "Age0-4": 1191.255,
    "Age5-14": 1736.614,
    "Age15-24": 1291.183,
    "Age25-64": 2260.586,
    "AgeOver65": 155.591
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1970,
    "Age0-4": 1647.401,
    "Age5-14": 2414.25,
    "Age15-24": 1611.321,
    "Age25-64": 2847.443,
    "AgeOver65": 215.078
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1980,
    "Age0-4": 1974.568,
    "Age5-14": 3210.132,
    "Age15-24": 2229.838,
    "Age25-64": 3346.159,
    "AgeOver65": 295.415
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1990,
    "Age0-4": 2546.172,
    "Age5-14": 3984.057,
    "Age15-24": 3090.181,
    "Age25-64": 4737.698,
    "AgeOver65": 415.166
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 2000,
    "Age0-4": 3065.073,
    "Age5-14": 5119.26,
    "Age15-24": 3837.763,
    "Age25-64": 6701.903,
    "AgeOver65": 554.851
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 2010,
    "Age0-4": 3587.524,
    "Age5-14": 6147.513,
    "Age15-24": 5009.314,
    "Age25-64": 9332.018,
    "AgeOver65": 703.245
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 2020,
    "Age0-4": 4169.436,
    "Age5-14": 7368.306,
    "Age15-24": 5997.186,
    "Age25-64": 12562.214,
    "AgeOver65": 975.803
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1950,
    "Age0-4": 437.701,
    "Age5-14": 680.308,
    "Age15-24": 553.92,
    "Age25-64": 1181.734,
    "AgeOver65": 159.275
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1960,
    "Age0-4": 580.14,
    "Age5-14": 831.618,
    "Age15-24": 624.756,
    "Age25-64": 1337.329,
    "AgeOver65": 120.321
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1970,
    "Age0-4": 676.966,
    "Age5-14": 1035.573,
    "Age15-24": 770.931,
    "Age25-64": 1543.343,
    "AgeOver65": 127.793
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1980,
    "Age0-4": 861.7,
    "Age5-14": 1246.859,
    "Age15-24": 922.948,
    "Age25-64": 1680.445,
    "AgeOver65": 159.494
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1990,
    "Age0-4": 1170.804,
    "Age5-14": 1685.975,
    "Age15-24": 1183.843,
    "Age25-64": 2088.154,
    "AgeOver65": 223.506
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 2000,
    "Age0-4": 1500.615,
    "Age5-14": 2325.787,
    "Age15-24": 1572.788,
    "Age25-64": 2558.937,
    "AgeOver65": 282.608
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 2010,
    "Age0-4": 1771.639,
    "Age5-14": 2934.594,
    "Age15-24": 2106.818,
    "Age25-64": 3068.979,
    "AgeOver65": 310.138
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 2020,
    "Age0-4": 2100.111,
    "Age5-14": 3553.419,
    "Age15-24": 2816.573,
    "Age25-64": 4274.97,
    "AgeOver65": 387.719
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 1950,
    "Age0-4": 35.983,
    "Age5-14": 46.976,
    "Age15-24": 35.985,
    "Age25-64": 81.964,
    "AgeOver65": 9.091
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 1960,
    "Age0-4": 45.365,
    "Age5-14": 72.841,
    "Age15-24": 42.165,
    "Age25-64": 100.395,
    "AgeOver65": 14.407
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 1970,
    "Age0-4": 46.519,
    "Age5-14": 92.473,
    "Age15-24": 60.48,
    "Age25-64": 107.295,
    "AgeOver65": 15.12
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 1980,
    "Age0-4": 33.424,
    "Age5-14": 82.859,
    "Age15-24": 71.911,
    "Age25-64": 125.143,
    "AgeOver65": 23.346
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 1990,
    "Age0-4": 32.229,
    "Age5-14": 63.924,
    "Age15-24": 77.956,
    "Age25-64": 182.078,
    "AgeOver65": 33.064
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 2000,
    "Age0-4": 31.954,
    "Age5-14": 72.118,
    "Age15-24": 61.426,
    "Age25-64": 213.912,
    "AgeOver65": 42.638
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 2010,
    "Age0-4": 28.003,
    "Age5-14": 63.18,
    "Age15-24": 51.749,
    "Age25-64": 207.088,
    "AgeOver65": 56.053
  },
  {
    "Entity": "Guadeloupe",
    "Code": "GLP",
    "Year": 2020,
    "Age0-4": 22.897,
    "Age5-14": 50.811,
    "Age15-24": 57.959,
    "Age25-64": 191.026,
    "AgeOver65": 77.434
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1950,
    "Age0-4": 56.288,
    "Age5-14": 78.155,
    "Age15-24": 58.613,
    "Age25-64": 104.301,
    "AgeOver65": 7.538
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1960,
    "Age0-4": 63.932,
    "Age5-14": 91.07,
    "Age15-24": 72.336,
    "Age25-64": 129.762,
    "AgeOver65": 7.949
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1970,
    "Age0-4": 82.973,
    "Age5-14": 112.898,
    "Age15-24": 88.339,
    "Age25-64": 170.231,
    "AgeOver65": 9.963
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1980,
    "Age0-4": 117.557,
    "Age5-14": 160.02,
    "Age15-24": 116.001,
    "Age25-64": 229.177,
    "AgeOver65": 14.497
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1990,
    "Age0-4": 178.38,
    "Age5-14": 240.471,
    "Age15-24": 186.28,
    "Age25-64": 327.695,
    "AgeOver65": 22.769
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 2000,
    "Age0-4": 243.236,
    "Age5-14": 377.034,
    "Age15-24": 246.618,
    "Age25-64": 417.015,
    "AgeOver65": 33.805
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 2010,
    "Age0-4": 317.504,
    "Age5-14": 492.039,
    "Age15-24": 373.529,
    "Age25-64": 562.458,
    "AgeOver65": 47.669
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 2020,
    "Age0-4": 409.506,
    "Age5-14": 652.624,
    "Age15-24": 485.22,
    "Age25-64": 808.141,
    "AgeOver65": 61.173
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1950,
    "Age0-4": 81.901,
    "Age5-14": 119.076,
    "Age15-24": 96.917,
    "Age25-64": 218.733,
    "AgeOver65": 18.811
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1960,
    "Age0-4": 99.146,
    "Age5-14": 147.934,
    "Age15-24": 104.681,
    "Age25-64": 242.674,
    "AgeOver65": 21.705
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1970,
    "Age0-4": 112.726,
    "Age5-14": 170.065,
    "Age15-24": 130.865,
    "Age25-64": 265.305,
    "AgeOver65": 25.976
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1980,
    "Age0-4": 144.239,
    "Age5-14": 196.014,
    "Age15-24": 145.708,
    "Age25-64": 265.313,
    "AgeOver65": 30.404
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1990,
    "Age0-4": 181.374,
    "Age5-14": 271.727,
    "Age15-24": 173.752,
    "Age25-64": 315.8,
    "AgeOver65": 32.612
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 2000,
    "Age0-4": 207.783,
    "Age5-14": 337.787,
    "Age15-24": 244.393,
    "Age25-64": 376.234,
    "AgeOver65": 35.108
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 2010,
    "Age0-4": 254.839,
    "Age5-14": 402.098,
    "Age15-24": 317.47,
    "Age25-64": 506.983,
    "AgeOver65": 41.213
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 2020,
    "Age0-4": 305.111,
    "Age5-14": 520.016,
    "Age15-24": 388.242,
    "Age25-64": 697.837,
    "AgeOver65": 56.792
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1950,
    "Age0-4": 30.178,
    "Age5-14": 47.002,
    "Age15-24": 40.007,
    "Age25-64": 95.637,
    "AgeOver65": 12.706
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1960,
    "Age0-4": 39.423,
    "Age5-14": 56.449,
    "Age15-24": 42.45,
    "Age25-64": 102.49,
    "AgeOver65": 14.526
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1970,
    "Age0-4": 47.321,
    "Age5-14": 70.434,
    "Age15-24": 53.727,
    "Age25-64": 117.016,
    "AgeOver65": 15.488
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1980,
    "Age0-4": 39.248,
    "Age5-14": 58.193,
    "Age15-24": 46.51,
    "Age25-64": 93.958,
    "AgeOver65": 12.022
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1990,
    "Age0-4": 72.448,
    "Age5-14": 107.611,
    "Age15-24": 71.987,
    "Age25-64": 149.439,
    "AgeOver65": 17.703
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 2000,
    "Age0-4": 100.185,
    "Age5-14": 146.219,
    "Age15-24": 118.508,
    "Age25-64": 219.241,
    "AgeOver65": 22.027
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 2010,
    "Age0-4": 149.135,
    "Age5-14": 214.188,
    "Age15-24": 173.572,
    "Age25-64": 379.505,
    "AgeOver65": 27.24
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 2020,
    "Age0-4": 199.653,
    "Age5-14": 316.356,
    "Age15-24": 259.143,
    "Age25-64": 594.421,
    "AgeOver65": 33.412
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1950,
    "Age0-4": 786,
    "Age5-14": 1477.998,
    "Age15-24": 1509.997,
    "Age25-64": 3384.005,
    "AgeOver65": 510.792
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1960,
    "Age0-4": 789.836,
    "Age5-14": 1473.127,
    "Age15-24": 1384.024,
    "Age25-64": 4043.608,
    "AgeOver65": 583.033
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1970,
    "Age0-4": 767.671,
    "Age5-14": 1490.971,
    "Age15-24": 1312.04,
    "Age25-64": 4211.046,
    "AgeOver65": 881.84
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1980,
    "Age0-4": 754.784,
    "Age5-14": 1521.662,
    "Age15-24": 1493.243,
    "Age25-64": 4656.979,
    "AgeOver65": 1200.336
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1990,
    "Age0-4": 554.112,
    "Age5-14": 1454.795,
    "Age15-24": 1593.315,
    "Age25-64": 5236.81,
    "AgeOver65": 1386.958
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 2000,
    "Age0-4": 535.03,
    "Age5-14": 1136.222,
    "Age15-24": 1608.053,
    "Age25-64": 5979.74,
    "AgeOver65": 1823.058
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 2010,
    "Age0-4": 550.167,
    "Age5-14": 1088.96,
    "Age15-24": 1215.254,
    "Age25-64": 5948.077,
    "AgeOver65": 2085.182
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 2020,
    "Age0-4": 409.459,
    "Age5-14": 1013.905,
    "Age15-24": 1056.034,
    "Age25-64": 5620.946,
    "AgeOver65": 2322.712
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1950,
    "Age0-4": 15.213,
    "Age5-14": 21.335,
    "Age15-24": 12.15,
    "Age25-64": 23.992,
    "AgeOver65": 3.991
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1960,
    "Age0-4": 18.266,
    "Age5-14": 25.87,
    "Age15-24": 14.027,
    "Age25-64": 27.305,
    "AgeOver65": 4.459
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1970,
    "Age0-4": 12.817,
    "Age5-14": 33.709,
    "Age15-24": 16.403,
    "Age25-64": 26.536,
    "AgeOver65": 5.011
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1980,
    "Age0-4": 11.715,
    "Age5-14": 23.876,
    "Age15-24": 20.041,
    "Age25-64": 27.03,
    "AgeOver65": 6.37
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1990,
    "Age0-4": 14.799,
    "Age5-14": 22.669,
    "Age15-24": 17.542,
    "Age25-64": 33.645,
    "AgeOver65": 7.673
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 2000,
    "Age0-4": 10.109,
    "Age5-14": 24.231,
    "Age15-24": 18.789,
    "Age25-64": 40.928,
    "AgeOver65": 8.78
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 2010,
    "Age0-4": 8.702,
    "Age5-14": 16.757,
    "Age15-24": 19.873,
    "Age25-64": 50.492,
    "AgeOver65": 10.403
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 2020,
    "Age0-4": 9.012,
    "Age5-14": 17.742,
    "Age15-24": 16.213,
    "Age25-64": 58.534,
    "AgeOver65": 11.018
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1950,
    "Age0-4": 544.162,
    "Age5-14": 785.576,
    "Age15-24": 641.01,
    "Age25-64": 1064.776,
    "AgeOver65": 79.432
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1960,
    "Age0-4": 801.587,
    "Age5-14": 1132.473,
    "Age15-24": 744.425,
    "Age25-64": 1421.487,
    "AgeOver65": 110.779
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1970,
    "Age0-4": 1020.396,
    "Age5-14": 1552.25,
    "Age15-24": 1074.685,
    "Age25-64": 1813.738,
    "AgeOver65": 160.725
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1980,
    "Age0-4": 1346.052,
    "Age5-14": 2020.601,
    "Age15-24": 1398.655,
    "Age25-64": 2301.875,
    "AgeOver65": 216.273
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1990,
    "Age0-4": 1579.828,
    "Age5-14": 2667.716,
    "Age15-24": 1820.629,
    "Age25-64": 2884.355,
    "AgeOver65": 311.292
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 2000,
    "Age0-4": 1895.159,
    "Age5-14": 3199.698,
    "Age15-24": 2424.493,
    "Age25-64": 3667.226,
    "AgeOver65": 464.168
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 2010,
    "Age0-4": 1948.269,
    "Age5-14": 3811.145,
    "Age15-24": 3069.7,
    "Age25-64": 5173.593,
    "AgeOver65": 627.713
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 2020,
    "Age0-4": 2065.382,
    "Age5-14": 3908.106,
    "Age15-24": 3748.079,
    "Age25-64": 7290.69,
    "AgeOver65": 903.31
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 1950,
    "Age0-4": 3.602,
    "Age5-14": 4.216,
    "Age15-24": 4.215,
    "Age25-64": 12.045,
    "AgeOver65": 1.406
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 1960,
    "Age0-4": 4.556,
    "Age5-14": 7.492,
    "Age15-24": 4.05,
    "Age25-64": 13.831,
    "AgeOver65": 2.103
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 1970,
    "Age0-4": 6.887,
    "Age5-14": 11.523,
    "Age15-24": 8.2,
    "Age25-64": 18.778,
    "AgeOver65": 2.544
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 1980,
    "Age0-4": 7.585,
    "Age5-14": 15.328,
    "Age15-24": 12.93,
    "Age25-64": 27.864,
    "AgeOver65": 3.266
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 1990,
    "Age0-4": 15.343,
    "Age5-14": 25.058,
    "Age15-24": 19.276,
    "Age25-64": 51.911,
    "AgeOver65": 4.196
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 2000,
    "Age0-4": 21.777,
    "Age5-14": 36.696,
    "Age15-24": 25.854,
    "Age25-64": 72.758,
    "AgeOver65": 6.078
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 2010,
    "Age0-4": 30.462,
    "Age5-14": 50.959,
    "Age15-24": 36.55,
    "Age25-64": 105.116,
    "AgeOver65": 9.909
  },
  {
    "Entity": "French Guiana",
    "Code": "GUF",
    "Year": 2020,
    "Age0-4": 35.621,
    "Age5-14": 59.455,
    "Age15-24": 53.927,
    "Age25-64": 133.053,
    "AgeOver65": 16.626
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1950,
    "Age0-4": 7.601,
    "Age5-14": 8.572,
    "Age15-24": 18.563,
    "Age25-64": 24.112,
    "AgeOver65": 0.805
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1960,
    "Age0-4": 10.592,
    "Age5-14": 16.123,
    "Age15-24": 11.805,
    "Age25-64": 27.128,
    "AgeOver65": 1.085
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1970,
    "Age0-4": 11.194,
    "Age5-14": 21.509,
    "Age15-24": 18.027,
    "Age25-64": 31.661,
    "AgeOver65": 1.484
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1980,
    "Age0-4": 12.653,
    "Age5-14": 23.152,
    "Age15-24": 21.549,
    "Age25-64": 43.778,
    "AgeOver65": 3.002
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1990,
    "Age0-4": 14.916,
    "Age5-14": 24.059,
    "Age15-24": 25.792,
    "Age25-64": 60.534,
    "AgeOver65": 5.179
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 2000,
    "Age0-4": 16.863,
    "Age5-14": 30.49,
    "Age15-24": 24.403,
    "Age25-64": 75.256,
    "AgeOver65": 8.311
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 2010,
    "Age0-4": 14.218,
    "Age5-14": 29.631,
    "Age15-24": 26.695,
    "Age25-64": 77.311,
    "AgeOver65": 11.584
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 2020,
    "Age0-4": 13.545,
    "Age5-14": 26.725,
    "Age15-24": 27.698,
    "Age25-64": 83.03,
    "AgeOver65": 17.785
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1950,
    "Age0-4": 68.54,
    "Age5-14": 93.654,
    "Age15-24": 73.264,
    "Age25-64": 154.585,
    "AgeOver65": 16.516
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1960,
    "Age0-4": 109.321,
    "Age5-14": 156.885,
    "Age15-24": 96.174,
    "Age25-64": 189.961,
    "AgeOver65": 19.472
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1970,
    "Age0-4": 117.708,
    "Age5-14": 214.159,
    "Age15-24": 137.153,
    "Age25-64": 211.199,
    "AgeOver65": 24.711
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1980,
    "Age0-4": 107.308,
    "Age5-14": 223.364,
    "Age15-24": 170.191,
    "Age25-64": 249.984,
    "AgeOver65": 29.306
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1990,
    "Age0-4": 89.88,
    "Age5-14": 178.824,
    "Age15-24": 164.576,
    "Age25-64": 280.774,
    "AgeOver65": 29.252
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 2000,
    "Age0-4": 96.09,
    "Age5-14": 170.155,
    "Age15-24": 139.046,
    "Age25-64": 310.989,
    "AgeOver65": 30.438
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 2010,
    "Age0-4": 72.939,
    "Age5-14": 168.503,
    "Age15-24": 139.019,
    "Age25-64": 334.374,
    "AgeOver65": 34.595
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 2020,
    "Age0-4": 73.864,
    "Age5-14": 144.263,
    "Age15-24": 152.247,
    "Age25-64": 361.127,
    "AgeOver65": 55.058
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1950,
    "Age0-4": 316.2,
    "Age5-14": 283,
    "Age15-24": 448.201,
    "Age25-64": 877.304,
    "AgeOver65": 49.297
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1960,
    "Age0-4": 486.592,
    "Age5-14": 751.122,
    "Age15-24": 354.698,
    "Age25-64": 1370.521,
    "AgeOver65": 83.115
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1970,
    "Age0-4": 391.033,
    "Age5-14": 1017.482,
    "Age15-24": 727.006,
    "Age25-64": 1557.254,
    "AgeOver65": 156.147
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1980,
    "Age0-4": 383.971,
    "Age5-14": 843.996,
    "Age15-24": 1137.923,
    "Age25-64": 2190.37,
    "AgeOver65": 312.484
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1990,
    "Age0-4": 367.906,
    "Age5-14": 819.011,
    "Age15-24": 935.955,
    "Age25-64": 3098.235,
    "AgeOver65": 506.835
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 2000,
    "Age0-4": 288.779,
    "Age5-14": 825.225,
    "Age15-24": 908.387,
    "Age25-64": 3856.353,
    "AgeOver65": 727.584
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 2010,
    "Age0-4": 231.983,
    "Age5-14": 599.011,
    "Age15-24": 875.657,
    "Age25-64": 4357.731,
    "AgeOver65": 901.942
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 2020,
    "Age0-4": 362.563,
    "Age5-14": 587.488,
    "Age15-24": 641.149,
    "Age25-64": 4541.574,
    "AgeOver65": 1364.214
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1950,
    "Age0-4": 274.279,
    "Age5-14": 378.843,
    "Age15-24": 288.506,
    "Age25-64": 543.116,
    "AgeOver65": 61.975
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1960,
    "Age0-4": 395.25,
    "Age5-14": 548.569,
    "Age15-24": 358.929,
    "Age25-64": 669.931,
    "AgeOver65": 65.957
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1970,
    "Age0-4": 524.506,
    "Age5-14": 770.998,
    "Age15-24": 511.555,
    "Age25-64": 822.44,
    "AgeOver65": 87.153
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1980,
    "Age0-4": 691.278,
    "Age5-14": 1053.271,
    "Age15-24": 725.719,
    "Age25-64": 1087.726,
    "AgeOver65": 120.28
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1990,
    "Age0-4": 857.542,
    "Age5-14": 1415.703,
    "Age15-24": 998.911,
    "Age25-64": 1516.201,
    "AgeOver65": 166.945
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 2000,
    "Age0-4": 1053.755,
    "Age5-14": 1761.643,
    "Age15-24": 1361.337,
    "Age25-64": 2155.84,
    "AgeOver65": 241.935
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 2010,
    "Age0-4": 1036.071,
    "Age5-14": 2089.719,
    "Age15-24": 1726.265,
    "Age25-64": 3134.262,
    "AgeOver65": 331.15
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 2020,
    "Age0-4": 1017.017,
    "Age5-14": 2012.623,
    "Age15-24": 2055.721,
    "Age25-64": 4326.673,
    "AgeOver65": 492.574
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1950,
    "Age0-4": 389.098,
    "Age5-14": 641.201,
    "Age15-24": 719.498,
    "Age25-64": 1796.999,
    "AgeOver65": 303.498
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1960,
    "Age0-4": 372.67,
    "Age5-14": 780.724,
    "Age15-24": 636.489,
    "Age25-64": 2112.178,
    "AgeOver65": 290.58
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1970,
    "Age0-4": 313.88,
    "Age5-14": 714.834,
    "Age15-24": 764.713,
    "Age25-64": 2216.601,
    "AgeOver65": 413.041
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1980,
    "Age0-4": 324.122,
    "Age5-14": 644.009,
    "Age15-24": 713.1,
    "Age25-64": 2383.279,
    "AgeOver65": 533.615
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1990,
    "Age0-4": 293.129,
    "Age5-14": 652.074,
    "Age15-24": 656.842,
    "Age25-64": 2621.426,
    "AgeOver65": 552.899
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 2000,
    "Age0-4": 242.499,
    "Age5-14": 524.527,
    "Age15-24": 597.622,
    "Age25-64": 2374.163,
    "AgeOver65": 689.264
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 2010,
    "Age0-4": 218.74,
    "Age5-14": 449.643,
    "Age15-24": 516.953,
    "Age25-64": 2382.789,
    "AgeOver65": 760.038
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 2020,
    "Age0-4": 184.151,
    "Age5-14": 412.819,
    "Age15-24": 433.043,
    "Age25-64": 2202.793,
    "AgeOver65": 872.462
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1950,
    "Age0-4": 477.402,
    "Age5-14": 798.822,
    "Age15-24": 599.183,
    "Age25-64": 1227.186,
    "AgeOver65": 118.677
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1960,
    "Age0-4": 631.22,
    "Age5-14": 925.925,
    "Age15-24": 733.025,
    "Age25-64": 1451.404,
    "AgeOver65": 124.588
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1970,
    "Age0-4": 733.201,
    "Age5-14": 1206.454,
    "Age15-24": 855.254,
    "Age25-64": 1709.027,
    "AgeOver65": 172.301
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1980,
    "Age0-4": 913.019,
    "Age5-14": 1393.383,
    "Age15-24": 1106.612,
    "Age25-64": 1998.405,
    "AgeOver65": 231.756
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1990,
    "Age0-4": 1142.943,
    "Age5-14": 1899.319,
    "Age15-24": 1280.324,
    "Age25-64": 2429.88,
    "AgeOver65": 285.449
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 2000,
    "Age0-4": 1207.519,
    "Age5-14": 2198.878,
    "Age15-24": 1769.966,
    "Age25-64": 2938.892,
    "AgeOver65": 348.547
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 2010,
    "Age0-4": 1263.146,
    "Age5-14": 2345.214,
    "Age15-24": 2066.831,
    "Age25-64": 3828.416,
    "AgeOver65": 445.711
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 2020,
    "Age0-4": 1262.943,
    "Age5-14": 2439.905,
    "Age15-24": 2209.658,
    "Age25-64": 4899.98,
    "AgeOver65": 590.047
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1950,
    "Age0-4": 824.762,
    "Age5-14": 1503.055,
    "Age15-24": 1542.481,
    "Age25-64": 4738.357,
    "AgeOver65": 729.063
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1960,
    "Age0-4": 817.178,
    "Age5-14": 1715.871,
    "Age15-24": 1428.92,
    "Age25-64": 5140.017,
    "AgeOver65": 899.003
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1970,
    "Age0-4": 712.244,
    "Age5-14": 1446.247,
    "Age15-24": 1714.993,
    "Age25-64": 5291.932,
    "AgeOver65": 1200.683
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1980,
    "Age0-4": 876.904,
    "Age5-14": 1490.368,
    "Age15-24": 1438.197,
    "Age25-64": 5486.164,
    "AgeOver65": 1462.653
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1990,
    "Age0-4": 614.478,
    "Age5-14": 1503.925,
    "Age15-24": 1460.096,
    "Age25-64": 5402.165,
    "AgeOver65": 1396.471
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 2000,
    "Age0-4": 494.033,
    "Age5-14": 1225.949,
    "Age15-24": 1519.085,
    "Age25-64": 5438.431,
    "AgeOver65": 1543.011
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 2010,
    "Age0-4": 482.514,
    "Age5-14": 992.686,
    "Age15-24": 1230.164,
    "Age25-64": 5624.458,
    "AgeOver65": 1597.558
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 2020,
    "Age0-4": 461.142,
    "Age5-14": 930.785,
    "Age15-24": 1003.789,
    "Age25-64": 5316.809,
    "AgeOver65": 1947.825
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1950,
    "Age0-4": 9960.842,
    "Age5-14": 17280.039,
    "Age15-24": 13937.697,
    "Age25-64": 25610.743,
    "AgeOver65": 2754
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1960,
    "Age0-4": 14891.381,
    "Age5-14": 20157.706,
    "Age15-24": 16668.841,
    "Age25-64": 32914.121,
    "AgeOver65": 3119.017
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1970,
    "Age0-4": 19229.579,
    "Age5-14": 30404.238,
    "Age15-24": 19613.1,
    "Age25-64": 41756.323,
    "AgeOver65": 3789.939
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1980,
    "Age0-4": 21964.676,
    "Age5-14": 38628.423,
    "Age15-24": 29742.045,
    "Age25-64": 51853.533,
    "AgeOver65": 5259.157
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1990,
    "Age0-4": 22253.198,
    "Age5-14": 43874.094,
    "Age15-24": 37960.629,
    "Age25-64": 70479.003,
    "AgeOver65": 6846.474
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 2000,
    "Age0-4": 21305.368,
    "Age5-14": 43613.345,
    "Age15-24": 43217.343,
    "Age25-64": 93438.49,
    "AgeOver65": 9939.276
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 2010,
    "Age0-4": 23172.918,
    "Age5-14": 46543.299,
    "Age15-24": 41782.251,
    "Age25-64": 118334.699,
    "AgeOver65": 12001.059
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 2020,
    "Age0-4": 23658.296,
    "Age5-14": 47282.809,
    "Age15-24": 45971.616,
    "Age25-64": 139481.448,
    "AgeOver65": 17129.452
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1950,
    "Age0-4": 54170.08,
    "Age5-14": 86916.186,
    "Age15-24": 72869.122,
    "Age25-64": 150557.694,
    "AgeOver65": 11812.118
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1960,
    "Age0-4": 73249.986,
    "Age5-14": 109020.658,
    "Age15-24": 80476.508,
    "Age25-64": 174071.575,
    "AgeOver65": 13728.948
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1970,
    "Age0-4": 86557.862,
    "Age5-14": 140589.808,
    "Age15-24": 103578.992,
    "Age25-64": 206116.689,
    "AgeOver65": 18346.446
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1980,
    "Age0-4": 103883.106,
    "Age5-14": 170442.487,
    "Age15-24": 136923.015,
    "Age25-64": 262476.519,
    "AgeOver65": 25227.71
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1990,
    "Age0-4": 121958.629,
    "Age5-14": 209587.159,
    "Age15-24": 166458.638,
    "Age25-64": 342050.169,
    "AgeOver65": 33223.204
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 2000,
    "Age0-4": 127837.335,
    "Age5-14": 239067.431,
    "Age15-24": 205390.033,
    "Age25-64": 438155.554,
    "AgeOver65": 46125.195
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 2010,
    "Age0-4": 128212.295,
    "Age5-14": 252072.936,
    "Age15-24": 234646.656,
    "Age25-64": 556628.912,
    "AgeOver65": 62720.364
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 2020,
    "Age0-4": 116879.507,
    "Age5-14": 244138.079,
    "Age15-24": 248550.37,
    "Age25-64": 679716.477,
    "AgeOver65": 90719.952
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1950,
    "Age0-4": 309.891,
    "Age5-14": 523.714,
    "Age15-24": 425.218,
    "Age25-64": 1334.587,
    "AgeOver65": 319.272
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1960,
    "Age0-4": 284.262,
    "Age5-14": 579.104,
    "Age15-24": 413.936,
    "Age25-64": 1200.095,
    "AgeOver65": 313.993
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1970,
    "Age0-4": 303.108,
    "Age5-14": 586.152,
    "Age15-24": 516.655,
    "Age25-64": 1177.531,
    "AgeOver65": 324.984
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1980,
    "Age0-4": 357.8,
    "Age5-14": 674.426,
    "Age15-24": 596.109,
    "Age25-64": 1393.798,
    "AgeOver65": 362.627
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1990,
    "Age0-4": 279.629,
    "Age5-14": 689.63,
    "Age15-24": 619.873,
    "Age25-64": 1530.644,
    "AgeOver65": 391.105
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 2000,
    "Age0-4": 261.493,
    "Age5-14": 550.511,
    "Age15-24": 678.969,
    "Age25-64": 1894.011,
    "AgeOver65": 398.111
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 2010,
    "Age0-4": 353,
    "Age5-14": 593.656,
    "Age15-24": 598.756,
    "Age25-64": 2507.488,
    "AgeOver65": 501.43
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 2020,
    "Age0-4": 313.653,
    "Age5-14": 715.001,
    "Age15-24": 601.72,
    "Age25-64": 2587.59,
    "AgeOver65": 719.832
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1950,
    "Age0-4": 2534.4,
    "Age5-14": 3675.6,
    "Age15-24": 3316.95,
    "Age25-64": 6689.321,
    "AgeOver65": 902.991
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1960,
    "Age0-4": 3929.289,
    "Age5-14": 5432.045,
    "Age15-24": 3485.492,
    "Age25-64": 8180.841,
    "AgeOver65": 879.242
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1970,
    "Age0-4": 4831.648,
    "Age5-14": 7745.436,
    "Age15-24": 5232.436,
    "Age25-64": 9761.755,
    "AgeOver65": 942.597
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1980,
    "Age0-4": 6866.621,
    "Age5-14": 9985.161,
    "Age15-24": 7675.097,
    "Age25-64": 12978.707,
    "AgeOver65": 1144.658
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1990,
    "Age0-4": 9317.777,
    "Age5-14": 16358.327,
    "Age15-24": 10521.769,
    "Age25-64": 18313.488,
    "AgeOver65": 1854.851
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 2000,
    "Age0-4": 5845.03,
    "Age5-14": 16442.842,
    "Age15-24": 15979.249,
    "Age25-64": 24481.637,
    "AgeOver65": 2874.639
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 2010,
    "Age0-4": 6252.601,
    "Age5-14": 11483.057,
    "Age15-24": 15856.839,
    "Age25-64": 36372.98,
    "AgeOver65": 3797.042
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 2020,
    "Age0-4": 7637.559,
    "Age5-14": 13146.242,
    "Age15-24": 11086.211,
    "Age25-64": 46609.346,
    "AgeOver65": 5513.595
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1950,
    "Age0-4": 816.85,
    "Age5-14": 1320.786,
    "Age15-24": 994.64,
    "Age25-64": 2424.876,
    "AgeOver65": 162.031
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1960,
    "Age0-4": 1183.418,
    "Age5-14": 1838.405,
    "Age15-24": 1256.783,
    "Age25-64": 2784.233,
    "AgeOver65": 226.914
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1970,
    "Age0-4": 1908.891,
    "Age5-14": 2515.385,
    "Age15-24": 1784.017,
    "Age25-64": 3311.614,
    "AgeOver65": 398.071
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1980,
    "Age0-4": 2435.094,
    "Age5-14": 3959.893,
    "Age15-24": 2454.295,
    "Age25-64": 4245.319,
    "AgeOver65": 558.747
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1990,
    "Age0-4": 2983.992,
    "Age5-14": 4992.427,
    "Age15-24": 3687.512,
    "Age25-64": 5088.341,
    "AgeOver65": 666.841
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 2000,
    "Age0-4": 3830.633,
    "Age5-14": 6257.267,
    "Age15-24": 4916.088,
    "Age25-64": 7676.758,
    "AgeOver65": 816.843
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 2010,
    "Age0-4": 4539.637,
    "Age5-14": 7894.403,
    "Age15-24": 5929.758,
    "Age25-64": 10379.227,
    "AgeOver65": 998.952
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 2020,
    "Age0-4": 5380.423,
    "Age5-14": 9788.988,
    "Age15-24": 7951.447,
    "Age25-64": 15716.89,
    "AgeOver65": 1384.755
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1950,
    "Age0-4": 18.045,
    "Age5-14": 25.639,
    "Age15-24": 24.208,
    "Age25-64": 64.047,
    "AgeOver65": 10.718
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1960,
    "Age0-4": 23.033,
    "Age5-14": 38.234,
    "Age15-24": 25.517,
    "Age25-64": 74.673,
    "AgeOver65": 14.127
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1970,
    "Age0-4": 21.241,
    "Age5-14": 45.483,
    "Age15-24": 37.271,
    "Age25-64": 82.501,
    "AgeOver65": 17.927
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1980,
    "Age0-4": 20.885,
    "Age5-14": 41.908,
    "Age15-24": 44.058,
    "Age25-64": 98.889,
    "AgeOver65": 22.516
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1990,
    "Age0-4": 21.493,
    "Age5-14": 42.126,
    "Age15-24": 42.174,
    "Age25-64": 122.049,
    "AgeOver65": 27.202
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 2000,
    "Age0-4": 21.187,
    "Age5-14": 43.883,
    "Age15-24": 42.879,
    "Age25-64": 139.929,
    "AgeOver65": 32.561
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 2010,
    "Age0-4": 23.542,
    "Age5-14": 43.079,
    "Age15-24": 47.231,
    "Age25-64": 168.026,
    "AgeOver65": 38.464
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 2020,
    "Age0-4": 20.439,
    "Age5-14": 45.844,
    "Age15-24": 43.734,
    "Age25-64": 177.918,
    "AgeOver65": 53.315
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1950,
    "Age0-4": 175.87,
    "Age5-14": 222.338,
    "Age15-24": 219.041,
    "Age25-64": 591.232,
    "AgeOver65": 49.487
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1960,
    "Age0-4": 259.022,
    "Age5-14": 492.606,
    "Age15-24": 305.092,
    "Age25-64": 907.864,
    "AgeOver65": 95.892
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1970,
    "Age0-4": 330.232,
    "Age5-14": 591.871,
    "Age15-24": 561.233,
    "Age25-64": 1148.022,
    "AgeOver65": 182.388
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1980,
    "Age0-4": 453.212,
    "Age5-14": 768.936,
    "Age15-24": 628.056,
    "Age25-64": 1530.111,
    "AgeOver65": 320.601
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1990,
    "Age0-4": 477.24,
    "Age5-14": 913.083,
    "Age15-24": 775.545,
    "Age25-64": 1885.429,
    "AgeOver65": 397.051
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 2000,
    "Age0-4": 607.063,
    "Age5-14": 1062.482,
    "Age15-24": 1030.42,
    "Age25-64": 2649.654,
    "AgeOver65": 596.33
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 2010,
    "Age0-4": 731.624,
    "Age5-14": 1271.273,
    "Age15-24": 1107.49,
    "Age25-64": 3468.45,
    "AgeOver65": 767.609
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 2020,
    "Age0-4": 847.828,
    "Age5-14": 1560.877,
    "Age15-24": 1291.427,
    "Age25-64": 3880.877,
    "AgeOver65": 1074.532
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1950,
    "Age0-4": 4391.298,
    "Age5-14": 8048.747,
    "Age15-24": 8047.224,
    "Age25-64": 22341.001,
    "AgeOver65": 3770.329
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1960,
    "Age0-4": 4121.46,
    "Age5-14": 8340.02,
    "Age15-24": 7649.177,
    "Age25-64": 24857.153,
    "AgeOver65": 4732.137
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1970,
    "Age0-4": 4524.407,
    "Age5-14": 8668.543,
    "Age15-24": 7961.111,
    "Age25-64": 26408.72,
    "AgeOver65": 5956.185
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1980,
    "Age0-4": 3567.821,
    "Age5-14": 8815.007,
    "Age15-24": 8651.451,
    "Age25-64": 27787.778,
    "AgeOver65": 7527.295
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1990,
    "Age0-4": 2818.719,
    "Age5-14": 6579.734,
    "Age15-24": 8917.015,
    "Age25-64": 30249.422,
    "AgeOver65": 8483.347
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 2000,
    "Age0-4": 2620.326,
    "Age5-14": 5500.446,
    "Age15-24": 6604.5,
    "Age25-64": 31600.934,
    "AgeOver65": 10365.972
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 2010,
    "Age0-4": 2838.436,
    "Age5-14": 5513.841,
    "Age15-24": 5914.454,
    "Age25-64": 32940.23,
    "AgeOver65": 12118.271
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 2020,
    "Age0-4": 2324.694,
    "Age5-14": 5527.658,
    "Age15-24": 5818.597,
    "Age25-64": 32702.127,
    "AgeOver65": 14088.752
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1950,
    "Age0-4": 188.7,
    "Age5-14": 316.803,
    "Age15-24": 263.299,
    "Age25-64": 580.003,
    "AgeOver65": 54.098
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1960,
    "Age0-4": 280.008,
    "Age5-14": 395.153,
    "Age15-24": 271.191,
    "Age25-64": 611.578,
    "AgeOver65": 70.594
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1970,
    "Age0-4": 316.23,
    "Age5-14": 549.358,
    "Age15-24": 297.072,
    "Age25-64": 607.361,
    "AgeOver65": 105.616
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1980,
    "Age0-4": 285.494,
    "Age5-14": 573.633,
    "Age15-24": 448.695,
    "Age25-64": 708.983,
    "AgeOver65": 146.034
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1990,
    "Age0-4": 293.181,
    "Age5-14": 549.819,
    "Age15-24": 500.382,
    "Age25-64": 900.567,
    "AgeOver65": 175.952
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 2000,
    "Age0-4": 288.993,
    "Age5-14": 564.473,
    "Age15-24": 477.637,
    "Age25-64": 1116.193,
    "AgeOver65": 207.402
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 2010,
    "Age0-4": 230.553,
    "Age5-14": 528.663,
    "Age15-24": 532.074,
    "Age25-64": 1287.621,
    "AgeOver65": 231.553
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 2020,
    "Age0-4": 230.823,
    "Age5-14": 460.848,
    "Age15-24": 500.888,
    "Age25-64": 1499.797,
    "AgeOver65": 268.805
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1950,
    "Age0-4": 89.596,
    "Age5-14": 130.709,
    "Age15-24": 84.07,
    "Age25-64": 153.844,
    "AgeOver65": 23.1
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1960,
    "Age0-4": 170.677,
    "Age5-14": 235.583,
    "Age15-24": 187.077,
    "Age25-64": 299.98,
    "AgeOver65": 39.785
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1970,
    "Age0-4": 338.665,
    "Age5-14": 453.383,
    "Age15-24": 310.295,
    "Age25-64": 563.043,
    "AgeOver65": 55.929
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1980,
    "Age0-4": 440.144,
    "Age5-14": 724.576,
    "Age15-24": 465.773,
    "Age25-64": 671.793,
    "AgeOver65": 75.711
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1990,
    "Age0-4": 599.474,
    "Age5-14": 1032.627,
    "Age15-24": 771.425,
    "Age25-64": 1048.404,
    "AgeOver65": 113.958
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 2000,
    "Age0-4": 750.522,
    "Age5-14": 1278.691,
    "Age15-24": 1085.932,
    "Age25-64": 1850.776,
    "AgeOver65": 156.574
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 2010,
    "Age0-4": 1003.583,
    "Age5-14": 1717.868,
    "Age15-24": 1409.098,
    "Age25-64": 2867.357,
    "AgeOver65": 263.635
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 2020,
    "Age0-4": 1058.122,
    "Age5-14": 2294,
    "Age15-24": 1980.445,
    "Age25-64": 4467.168,
    "AgeOver65": 403.405
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1950,
    "Age0-4": 11205.457,
    "Age5-14": 18082.649,
    "Age15-24": 16209.545,
    "Age25-64": 33238.01,
    "AgeOver65": 4066.423
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1960,
    "Age0-4": 7983.673,
    "Age5-14": 20365.616,
    "Age15-24": 17843.903,
    "Age25-64": 42215.215,
    "AgeOver65": 5265.205
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1970,
    "Age0-4": 9018.002,
    "Age5-14": 16284.612,
    "Age15-24": 20156.311,
    "Age25-64": 52256.055,
    "AgeOver65": 7214.28
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1980,
    "Age0-4": 8617.276,
    "Age5-14": 19169.161,
    "Age15-24": 16272.68,
    "Age25-64": 63255.338,
    "AgeOver65": 10502.487
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1990,
    "Age0-4": 6780.648,
    "Age5-14": 16221.801,
    "Age15-24": 18910.445,
    "Age25-64": 67815.53,
    "AgeOver65": 14776.819
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 2000,
    "Age0-4": 5955.184,
    "Age5-14": 12897.831,
    "Age15-24": 16061.728,
    "Age25-64": 70950.152,
    "AgeOver65": 21659.273
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 2010,
    "Age0-4": 5554.144,
    "Age5-14": 11612.407,
    "Age15-24": 12871.345,
    "Age25-64": 69584.906,
    "AgeOver65": 28919.547
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 2020,
    "Age0-4": 4778.481,
    "Age5-14": 10966.014,
    "Age15-24": 11699.522,
    "Age25-64": 63116.576,
    "AgeOver65": 35915.865
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1950,
    "Age0-4": 740.844,
    "Age5-14": 1562.348,
    "Age15-24": 1317.187,
    "Age25-64": 2644.984,
    "AgeOver65": 437.637
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1960,
    "Age0-4": 1510.699,
    "Age5-14": 2091.651,
    "Age15-24": 1849.735,
    "Age25-64": 3916.204,
    "AgeOver65": 566.275
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1970,
    "Age0-4": 1549.988,
    "Age5-14": 3346.389,
    "Age15-24": 2231.801,
    "Age25-64": 5205.857,
    "AgeOver65": 702.105
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1980,
    "Age0-4": 1691.688,
    "Age5-14": 3099.557,
    "Age15-24": 3034.708,
    "Age25-64": 6066.076,
    "AgeOver65": 904.146
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1990,
    "Age0-4": 1857.596,
    "Age5-14": 3291.819,
    "Age15-24": 2739.548,
    "Age25-64": 7534.084,
    "AgeOver65": 960.834
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 2000,
    "Age0-4": 1106.403,
    "Age5-14": 3000.959,
    "Age15-24": 2685.044,
    "Age25-64": 7109.613,
    "AgeOver65": 1020.705
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 2010,
    "Age0-4": 1591.999,
    "Age5-14": 2317.48,
    "Age15-24": 3126.825,
    "Age25-64": 8109.044,
    "AgeOver65": 1106.925
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 2020,
    "Age0-4": 1920.184,
    "Age5-14": 3552.133,
    "Age15-24": 2216.662,
    "Age25-64": 9603.841,
    "AgeOver65": 1483.887
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1950,
    "Age0-4": 1056.232,
    "Age5-14": 1360.521,
    "Age15-24": 1149.549,
    "Age25-64": 2271.931,
    "AgeOver65": 238.524
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1960,
    "Age0-4": 1602.398,
    "Age5-14": 2173.515,
    "Age15-24": 1281.763,
    "Age25-64": 2758.595,
    "AgeOver65": 303.811
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1970,
    "Age0-4": 2281.797,
    "Age5-14": 3266.219,
    "Age15-24": 2079.445,
    "Age25-64": 3291.014,
    "AgeOver65": 382.919
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1980,
    "Age0-4": 3374.228,
    "Age5-14": 4848.777,
    "Age15-24": 3169.986,
    "Age25-64": 4553.25,
    "AgeOver65": 470.962
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1990,
    "Age0-4": 4508.257,
    "Age5-14": 7143.087,
    "Age15-24": 4743.612,
    "Age25-64": 6740.905,
    "AgeOver65": 588.713
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 2000,
    "Age0-4": 5538.881,
    "Age5-14": 8924.477,
    "Age15-24": 6963.078,
    "Age25-64": 9811.34,
    "AgeOver65": 726.781
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 2010,
    "Age0-4": 6852.972,
    "Age5-14": 11405.722,
    "Age15-24": 8648.521,
    "Age25-64": 14311.291,
    "AgeOver65": 812.178
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 2020,
    "Age0-4": 7044.364,
    "Age5-14": 13705.769,
    "Age15-24": 11247.249,
    "Age25-64": 20424.69,
    "AgeOver65": 1349.228
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1950,
    "Age0-4": 167.117,
    "Age5-14": 335.726,
    "Age15-24": 359.5,
    "Age25-64": 735.41,
    "AgeOver65": 142.252
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1960,
    "Age0-4": 357.744,
    "Age5-14": 429.874,
    "Age15-24": 337.969,
    "Age25-64": 890.819,
    "AgeOver65": 153.685
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1970,
    "Age0-4": 426.848,
    "Age5-14": 812.095,
    "Age15-24": 461.64,
    "Age25-64": 1084.585,
    "AgeOver65": 184.689
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1980,
    "Age0-4": 478.953,
    "Age5-14": 855.099,
    "Age15-24": 757.272,
    "Age25-64": 1310.308,
    "AgeOver65": 209.342
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1990,
    "Age0-4": 627.933,
    "Age5-14": 1009.076,
    "Age15-24": 792.425,
    "Age25-64": 1723.505,
    "AgeOver65": 219.946
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 2000,
    "Age0-4": 537.784,
    "Age5-14": 1181.546,
    "Age15-24": 958.016,
    "Age25-64": 1972.387,
    "AgeOver65": 270.979
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 2010,
    "Age0-4": 605.252,
    "Age5-14": 1015.845,
    "Age15-24": 1212.437,
    "Age25-64": 2343.488,
    "AgeOver65": 245.276
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 2020,
    "Age0-4": 760.255,
    "Age5-14": 1369.821,
    "Age15-24": 1014.464,
    "Age25-64": 3071.195,
    "AgeOver65": 308.456
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1950,
    "Age0-4": 739.601,
    "Age5-14": 1131.793,
    "Age15-24": 859.758,
    "Age25-64": 1581.617,
    "AgeOver65": 119.955
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1960,
    "Age0-4": 1067.371,
    "Age5-14": 1550.215,
    "Age15-24": 1027.671,
    "Age25-64": 1932.644,
    "AgeOver65": 144.471
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1970,
    "Age0-4": 1207.872,
    "Age5-14": 1978.684,
    "Age15-24": 1361.264,
    "Age25-64": 2269.597,
    "AgeOver65": 179.159
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1980,
    "Age0-4": 892.954,
    "Age5-14": 1856.048,
    "Age15-24": 1364.832,
    "Age25-64": 2398.531,
    "AgeOver65": 181.394
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1990,
    "Age0-4": 1726.332,
    "Age5-14": 2248.465,
    "Age15-24": 1695.494,
    "Age25-64": 3044.953,
    "AgeOver65": 260.353
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 2000,
    "Age0-4": 1575.054,
    "Age5-14": 3480.453,
    "Age15-24": 2398.828,
    "Age25-64": 4326.518,
    "AgeOver65": 374.388
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 2010,
    "Age0-4": 1672.089,
    "Age5-14": 3097.682,
    "Age15-24": 2989.163,
    "Age25-64": 6018.943,
    "AgeOver65": 534.328
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 2020,
    "Age0-4": 1778.977,
    "Age5-14": 3391.354,
    "Age15-24": 2988.631,
    "Age25-64": 7748.657,
    "AgeOver65": 811.352
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1950,
    "Age0-4": 5.509,
    "Age5-14": 7.943,
    "Age15-24": 7.069,
    "Age25-64": 11.29,
    "AgeOver65": 1.239
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1960,
    "Age0-4": 7.688,
    "Age5-14": 10.935,
    "Age15-24": 7.022,
    "Age25-64": 14.004,
    "AgeOver65": 1.547
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1970,
    "Age0-4": 8.022,
    "Age5-14": 14.899,
    "Age15-24": 9.879,
    "Age25-64": 16.575,
    "AgeOver65": 1.767
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1980,
    "Age0-4": 8.881,
    "Age5-14": 14.514,
    "Age15-24": 13.083,
    "Age25-64": 20.871,
    "AgeOver65": 1.947
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1990,
    "Age0-4": 11.594,
    "Age5-14": 17.582,
    "Age15-24": 13.827,
    "Age25-64": 26.924,
    "AgeOver65": 2.467
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 2000,
    "Age0-4": 11.97,
    "Age5-14": 21.775,
    "Age15-24": 15.686,
    "Age25-64": 32.187,
    "AgeOver65": 2.787
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 2010,
    "Age0-4": 13.971,
    "Age5-14": 23.188,
    "Age15-24": 21.285,
    "Age25-64": 40.813,
    "AgeOver65": 3.673
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 2020,
    "Age0-4": 15.16,
    "Age5-14": 27.741,
    "Age15-24": 21.091,
    "Age25-64": 50.42,
    "AgeOver65": 5.034
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1950,
    "Age0-4": 3043.329,
    "Age5-14": 5119.77,
    "Age15-24": 3276.618,
    "Age25-64": 7220.67,
    "AgeOver65": 551
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1960,
    "Age0-4": 4628.509,
    "Age5-14": 6323.526,
    "Age15-24": 4547.913,
    "Age25-64": 8976.522,
    "AgeOver65": 853.051
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1970,
    "Age0-4": 4508.29,
    "Age5-14": 8973.212,
    "Age15-24": 5990.391,
    "Age25-64": 11616.588,
    "AgeOver65": 1107.198
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1980,
    "Age0-4": 3995.229,
    "Age5-14": 8889.195,
    "Age15-24": 8533.009,
    "Age25-64": 15061.575,
    "AgeOver65": 1566.597
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1990,
    "Age0-4": 3118.257,
    "Age5-14": 7799.163,
    "Age15-24": 8860.365,
    "Age25-64": 20894.71,
    "AgeOver65": 2245.921
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 2000,
    "Age0-4": 3171.607,
    "Age5-14": 6595.456,
    "Age15-24": 7805.874,
    "Age25-64": 26401.539,
    "AgeOver65": 3404.761
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 2010,
    "Age0-4": 2288.938,
    "Age5-14": 5688.703,
    "Age15-24": 6561.711,
    "Age25-64": 29708.212,
    "AgeOver65": 5298.074
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 2020,
    "Age0-4": 1897.011,
    "Age5-14": 4533.584,
    "Age15-24": 5692.72,
    "Age25-64": 31049.998,
    "AgeOver65": 8095.87
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1950,
    "Age0-4": 23.102,
    "Age5-14": 32.751,
    "Age15-24": 33.35,
    "Age25-64": 59.45,
    "AgeOver65": 4.45
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1960,
    "Age0-4": 41.866,
    "Age5-14": 50.723,
    "Age15-24": 52.359,
    "Age25-64": 118.704,
    "AgeOver65": 5.374
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1970,
    "Age0-4": 141.982,
    "Age5-14": 184.758,
    "Age15-24": 135.751,
    "Age25-64": 268.073,
    "AgeOver65": 13.88
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1980,
    "Age0-4": 212.351,
    "Age5-14": 339.083,
    "Age15-24": 245.405,
    "Age25-64": 549.463,
    "AgeOver65": 22.378
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1990,
    "Age0-4": 249.005,
    "Age5-14": 482.329,
    "Age15-24": 372.659,
    "Age25-64": 963.461,
    "AgeOver65": 27.896
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 2000,
    "Age0-4": 226.08,
    "Age5-14": 354.279,
    "Age15-24": 331.852,
    "Age25-64": 1100.611,
    "AgeOver65": 32.301
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 2010,
    "Age0-4": 273.634,
    "Age5-14": 420.992,
    "Age15-24": 454.566,
    "Age25-64": 1782.927,
    "AgeOver65": 59.765
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 2020,
    "Age0-4": 289.689,
    "Age5-14": 626.867,
    "Age15-24": 432.09,
    "Age25-64": 2792.275,
    "AgeOver65": 129.642
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1950,
    "Age0-4": 274.742,
    "Age5-14": 405.885,
    "Age15-24": 321.89,
    "Age25-64": 644.418,
    "AgeOver65": 35.98
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1960,
    "Age0-4": 352.299,
    "Age5-14": 541.541,
    "Age15-24": 384.413,
    "Age25-64": 787.288,
    "AgeOver65": 55.351
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1970,
    "Age0-4": 448.041,
    "Age5-14": 687.197,
    "Age15-24": 516.333,
    "Age25-64": 954.757,
    "AgeOver65": 82.101
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1980,
    "Age0-4": 564.86,
    "Age5-14": 883.095,
    "Age15-24": 616.033,
    "Age25-64": 1080.512,
    "AgeOver65": 113.649
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1990,
    "Age0-4": 749.619,
    "Age5-14": 1135.399,
    "Age15-24": 848.808,
    "Age25-64": 1374.435,
    "AgeOver65": 150.21
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 2000,
    "Age0-4": 797.215,
    "Age5-14": 1511.082,
    "Age15-24": 1066.289,
    "Age25-64": 1759.037,
    "AgeOver65": 190.078
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 2010,
    "Age0-4": 784.687,
    "Age5-14": 1492.009,
    "Age15-24": 1412.054,
    "Age25-64": 2330.452,
    "AgeOver65": 229.966
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 2020,
    "Age0-4": 796.887,
    "Age5-14": 1527.454,
    "Age15-24": 1400.651,
    "Age25-64": 3240.686,
    "AgeOver65": 309.878
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1950,
    "Age0-4": 180.936,
    "Age5-14": 275.722,
    "Age15-24": 255.329,
    "Age25-64": 525.434,
    "AgeOver65": 97.196
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1960,
    "Age0-4": 307.588,
    "Age5-14": 443.472,
    "Age15-24": 277.802,
    "Age25-64": 668.673,
    "AgeOver65": 107.4
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1970,
    "Age0-4": 343.396,
    "Age5-14": 619.156,
    "Age15-24": 422.41,
    "Age25-64": 796.484,
    "AgeOver65": 115.99
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1980,
    "Age0-4": 363.907,
    "Age5-14": 648.616,
    "Age15-24": 531.942,
    "Age25-64": 903.641,
    "AgeOver65": 140.822
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1990,
    "Age0-4": 354.309,
    "Age5-14": 689.987,
    "Age15-24": 596.292,
    "Age25-64": 1015.011,
    "AgeOver65": 147.433
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 2000,
    "Age0-4": 415.787,
    "Age5-14": 779.086,
    "Age15-24": 721.338,
    "Age25-64": 1707.544,
    "AgeOver65": 219.019
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 2010,
    "Age0-4": 370.759,
    "Age5-14": 907.944,
    "Age15-24": 966.05,
    "Age25-64": 2393.389,
    "AgeOver65": 314.922
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 2020,
    "Age0-4": 566.127,
    "Age5-14": 1144.926,
    "Age15-24": 1169.273,
    "Age25-64": 3429.86,
    "AgeOver65": 515.256
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1950,
    "Age0-4": 144.617,
    "Age5-14": 241.158,
    "Age15-24": 182.212,
    "Age25-64": 334.062,
    "AgeOver65": 27.973
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1960,
    "Age0-4": 197.091,
    "Age5-14": 262.914,
    "Age15-24": 217.437,
    "Age25-64": 405.798,
    "AgeOver65": 35.415
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1970,
    "Age0-4": 251.643,
    "Age5-14": 358.898,
    "Age15-24": 242.801,
    "Age25-64": 502.784,
    "AgeOver65": 44.604
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1980,
    "Age0-4": 342.443,
    "Age5-14": 489.808,
    "Age15-24": 341.687,
    "Age25-64": 620.507,
    "AgeOver65": 58.546
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1990,
    "Age0-4": 366.225,
    "Age5-14": 566.132,
    "Age15-24": 394.063,
    "Age25-64": 681.049,
    "AgeOver65": 68.448
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 2000,
    "Age0-4": 484.76,
    "Age5-14": 731.322,
    "Age15-24": 572.712,
    "Age25-64": 960.778,
    "AgeOver65": 98.875
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 2010,
    "Age0-4": 641.398,
    "Age5-14": 1033.219,
    "Age15-24": 734.43,
    "Age25-64": 1352.25,
    "AgeOver65": 130.06
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 2020,
    "Age0-4": 740.493,
    "Age5-14": 1301.403,
    "Age15-24": 1015.017,
    "Age25-64": 1832.925,
    "AgeOver65": 167.839
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1950,
    "Age0-4": 174.164,
    "Age5-14": 261.387,
    "Age15-24": 206.568,
    "Age25-64": 423.723,
    "AgeOver65": 58.677
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1960,
    "Age0-4": 253.96,
    "Age5-14": 350.714,
    "Age15-24": 258.565,
    "Age25-64": 528.9,
    "AgeOver65": 56.277
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1970,
    "Age0-4": 433.148,
    "Age5-14": 553.455,
    "Age15-24": 354.044,
    "Age25-64": 728.337,
    "AgeOver65": 64.543
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1980,
    "Age0-4": 594.366,
    "Age5-14": 946.546,
    "Age15-24": 563.605,
    "Age25-64": 1025.177,
    "AgeOver65": 89.768
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1990,
    "Age0-4": 644.143,
    "Age5-14": 1208.074,
    "Age15-24": 948.2,
    "Age25-64": 1498.189,
    "AgeOver65": 138.057
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 2000,
    "Age0-4": 571.204,
    "Age5-14": 1242.628,
    "Age15-24": 1210.108,
    "Age25-64": 2132.234,
    "AgeOver65": 201.719
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 2010,
    "Age0-4": 639.619,
    "Age5-14": 1142.394,
    "Age15-24": 1234.85,
    "Age25-64": 2922.088,
    "AgeOver65": 258.716
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 2020,
    "Age0-4": 623.998,
    "Age5-14": 1285.172,
    "Age15-24": 1104.176,
    "Age25-64": 3546.961,
    "AgeOver65": 310.98
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1950,
    "Age0-4": 11.77,
    "Age5-14": 20.634,
    "Age15-24": 16.237,
    "Age25-64": 30.973,
    "AgeOver65": 3.169
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1960,
    "Age0-4": 16.024,
    "Age5-14": 24.115,
    "Age15-24": 15.779,
    "Age25-64": 30.127,
    "AgeOver65": 3.653
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1970,
    "Age0-4": 19.291,
    "Age5-14": 32.865,
    "Age15-24": 17.246,
    "Age25-64": 29.921,
    "AgeOver65": 4.693
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1980,
    "Age0-4": 16.629,
    "Age5-14": 35.082,
    "Age15-24": 25.025,
    "Age25-64": 35.22,
    "AgeOver65": 5.872
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1990,
    "Age0-4": 17.639,
    "Age5-14": 32.851,
    "Age15-24": 27.698,
    "Age25-64": 49.647,
    "AgeOver65": 10.184
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 2000,
    "Age0-4": 15.844,
    "Age5-14": 34.761,
    "Age15-24": 29.805,
    "Age25-64": 64.625,
    "AgeOver65": 11.702
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 2010,
    "Age0-4": 11.195,
    "Age5-14": 29.219,
    "Age15-24": 31.566,
    "Age25-64": 87.294,
    "AgeOver65": 14.818
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 2020,
    "Age0-4": 10.826,
    "Age5-14": 22.138,
    "Age15-24": 29.053,
    "Age25-64": 102.702,
    "AgeOver65": 18.91
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1950,
    "Age0-4": 1263.415,
    "Age5-14": 1819.806,
    "Age15-24": 1418.479,
    "Age25-64": 2768.964,
    "AgeOver65": 700.434
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1960,
    "Age0-4": 1627.202,
    "Age5-14": 2523.199,
    "Age15-24": 1759.964,
    "Age25-64": 3517.636,
    "AgeOver65": 446.475
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1970,
    "Age0-4": 1798.857,
    "Age5-14": 3230.376,
    "Age15-24": 2463.501,
    "Age25-64": 4532.955,
    "AgeOver65": 460.047
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1980,
    "Age0-4": 1910.559,
    "Age5-14": 3486.506,
    "Age15-24": 3117.227,
    "Age25-64": 5865.807,
    "AgeOver65": 655.741
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1990,
    "Age0-4": 1779.475,
    "Age5-14": 3782.649,
    "Age15-24": 3365.388,
    "Age25-64": 7450.203,
    "AgeOver65": 948.054
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 2000,
    "Age0-4": 1641.32,
    "Age5-14": 3382.26,
    "Age15-24": 3591.578,
    "Age25-64": 8994.553,
    "AgeOver65": 1167.895
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 2010,
    "Age0-4": 1787.837,
    "Age5-14": 3354.245,
    "Age15-24": 3219.847,
    "Age25-64": 10394.035,
    "AgeOver65": 1505.774
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 2020,
    "Age0-4": 1660.41,
    "Age5-14": 3411.286,
    "Age15-24": 3160.21,
    "Age25-64": 10776.022,
    "AgeOver65": 2405.322
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1950,
    "Age0-4": 119.394,
    "Age5-14": 177.067,
    "Age15-24": 125.149,
    "Age25-64": 250.308,
    "AgeOver65": 32.768
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1960,
    "Age0-4": 146.229,
    "Age5-14": 226.925,
    "Age15-24": 153.386,
    "Age25-64": 271.735,
    "AgeOver65": 38.989
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1970,
    "Age0-4": 182.734,
    "Age5-14": 283.463,
    "Age15-24": 203.292,
    "Age25-64": 314.39,
    "AgeOver65": 45.051
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1980,
    "Age0-4": 241.051,
    "Age5-14": 373.42,
    "Age15-24": 265.21,
    "Age25-64": 404.149,
    "AgeOver65": 56.428
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1990,
    "Age0-4": 276.786,
    "Age5-14": 494.988,
    "Age15-24": 342.134,
    "Age25-64": 517.511,
    "AgeOver65": 72.338
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 2000,
    "Age0-4": 276.93,
    "Age5-14": 536.466,
    "Age15-24": 459.604,
    "Age25-64": 676.922,
    "AgeOver65": 82.883
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 2010,
    "Age0-4": 249.721,
    "Age5-14": 446.482,
    "Age15-24": 451.933,
    "Age25-64": 753.965,
    "AgeOver65": 93.474
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 2020,
    "Age0-4": 253.513,
    "Age5-14": 437.106,
    "Age15-24": 420.873,
    "Age25-64": 924.742,
    "AgeOver65": 106.018
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1950,
    "Age0-4": 222.341,
    "Age5-14": 479.101,
    "Age15-24": 478.703,
    "Age25-64": 1145.434,
    "AgeOver65": 241.828
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1960,
    "Age0-4": 276.43,
    "Age5-14": 475.257,
    "Age15-24": 465.624,
    "Age25-64": 1333.031,
    "AgeOver65": 219.537
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1970,
    "Age0-4": 267.923,
    "Age5-14": 579.899,
    "Age15-24": 456.562,
    "Age25-64": 1513.871,
    "AgeOver65": 318.33
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1980,
    "Age0-4": 257.361,
    "Age5-14": 542.701,
    "Age15-24": 578.135,
    "Age25-64": 1663.047,
    "AgeOver65": 389.516
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1990,
    "Age0-4": 289.191,
    "Age5-14": 544.822,
    "Age15-24": 554.344,
    "Age25-64": 1905.602,
    "AgeOver65": 402.076
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 2000,
    "Age0-4": 182.628,
    "Age5-14": 519.123,
    "Age15-24": 494.36,
    "Age25-64": 1818.672,
    "AgeOver65": 487.059
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 2010,
    "Age0-4": 147.539,
    "Age5-14": 313.707,
    "Age15-24": 455.368,
    "Age25-64": 1667.681,
    "AgeOver65": 539.53
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 2020,
    "Age0-4": 145.118,
    "Age5-14": 276.237,
    "Age15-24": 255.806,
    "Age25-64": 1483.848,
    "AgeOver65": 561.282
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1950,
    "Age0-4": 19,
    "Age5-14": 40.001,
    "Age15-24": 48.003,
    "Age25-64": 159.997,
    "AgeOver65": 29.004
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1960,
    "Age0-4": 24.347,
    "Age5-14": 42.288,
    "Age15-24": 41.847,
    "Age25-64": 172.054,
    "AgeOver65": 34.049
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1970,
    "Age0-4": 23.934,
    "Age5-14": 51.461,
    "Age15-24": 46.864,
    "Age25-64": 174.735,
    "AgeOver65": 42.678
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1980,
    "Age0-4": 20.578,
    "Age5-14": 47.705,
    "Age15-24": 57.09,
    "Age25-64": 189.008,
    "AgeOver65": 49.667
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1990,
    "Age0-4": 23.313,
    "Age5-14": 42.943,
    "Age15-24": 50.6,
    "Age25-64": 213.776,
    "AgeOver65": 51.148
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 2000,
    "Age0-4": 28.415,
    "Age5-14": 54.202,
    "Age15-24": 49.639,
    "Age25-64": 242.472,
    "AgeOver65": 61.378
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 2010,
    "Age0-4": 28.854,
    "Age5-14": 60.758,
    "Age15-24": 60.335,
    "Age25-64": 286.876,
    "AgeOver65": 71.067
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 2020,
    "Age0-4": 33.249,
    "Age5-14": 64.138,
    "Age15-24": 74.255,
    "Age25-64": 364.251,
    "AgeOver65": 90.083
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1950,
    "Age0-4": 149.871,
    "Age5-14": 340.86,
    "Age15-24": 338.708,
    "Age25-64": 902.543,
    "AgeOver65": 194.586
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1960,
    "Age0-4": 167.687,
    "Age5-14": 301.703,
    "Age15-24": 337.59,
    "Age25-64": 1097.418,
    "AgeOver65": 225.186
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1970,
    "Age0-4": 160.956,
    "Age5-14": 352.572,
    "Age15-24": 330.582,
    "Age25-64": 1248.031,
    "AgeOver65": 285.881
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1980,
    "Age0-4": 172.012,
    "Age5-14": 340.496,
    "Age15-24": 388.796,
    "Age25-64": 1290.469,
    "AgeOver65": 329.608
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1990,
    "Age0-4": 205.15,
    "Age5-14": 366.551,
    "Age15-24": 365.172,
    "Age25-64": 1411.159,
    "AgeOver65": 316.415
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 2000,
    "Age0-4": 96.607,
    "Age5-14": 329.119,
    "Age15-24": 338.954,
    "Age25-64": 1262.13,
    "AgeOver65": 357.34
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 2010,
    "Age0-4": 112.517,
    "Age5-14": 186.014,
    "Age15-24": 297.119,
    "Age25-64": 1138.03,
    "AgeOver65": 385.175
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 2020,
    "Age0-4": 114.02,
    "Age5-14": 195.921,
    "Age15-24": 156.083,
    "Age25-64": 1029.974,
    "AgeOver65": 390.204
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1950,
    "Age0-4": 22.101,
    "Age5-14": 32.154,
    "Age15-24": 41.366,
    "Age25-64": 94.57,
    "AgeOver65": 6.282
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1960,
    "Age0-4": 23.855,
    "Age5-14": 46.305,
    "Age15-24": 20.466,
    "Age25-64": 68.839,
    "AgeOver65": 8.33
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1970,
    "Age0-4": 19.822,
    "Age5-14": 74.346,
    "Age15-24": 59.341,
    "Age25-64": 81.222,
    "AgeOver65": 11.462
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1980,
    "Age0-4": 16.206,
    "Age5-14": 40.132,
    "Age15-24": 59.149,
    "Age25-64": 104.549,
    "AgeOver65": 18.049
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1990,
    "Age0-4": 35.504,
    "Age5-14": 52.201,
    "Age15-24": 53.945,
    "Age25-64": 179.728,
    "AgeOver65": 22.438
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 2000,
    "Age0-4": 22.847,
    "Age5-14": 74.882,
    "Age15-24": 60.689,
    "Age25-64": 237.756,
    "AgeOver65": 31.598
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 2010,
    "Age0-4": 22.966,
    "Age5-14": 46.824,
    "Age15-24": 98.103,
    "Age25-64": 333.727,
    "AgeOver65": 36.595
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 2020,
    "Age0-4": 35.933,
    "Age5-14": 57.276,
    "Age15-24": 58.467,
    "Age25-64": 419.929,
    "AgeOver65": 77.737
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1950,
    "Age0-4": 1388.349,
    "Age5-14": 2170.75,
    "Age15-24": 1989.472,
    "Age25-64": 3176.258,
    "AgeOver65": 261.157
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1960,
    "Age0-4": 2403.864,
    "Age5-14": 3107.665,
    "Age15-24": 2086.168,
    "Age25-64": 4363.229,
    "AgeOver65": 367.606
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1970,
    "Age0-4": 2875.169,
    "Age5-14": 4740.477,
    "Age15-24": 2667.725,
    "Age25-64": 5169.799,
    "AgeOver65": 551.562
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1980,
    "Age0-4": 3190.797,
    "Age5-14": 5465.676,
    "Age15-24": 4351.563,
    "Age25-64": 6323.531,
    "AgeOver65": 658.439
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1990,
    "Age0-4": 3390.725,
    "Age5-14": 6443.624,
    "Age15-24": 5109.746,
    "Age25-64": 8886.877,
    "AgeOver65": 976.489
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 2000,
    "Age0-4": 3076.786,
    "Age5-14": 6565.432,
    "Age15-24": 6028.154,
    "Age25-64": 11605.708,
    "AgeOver65": 1517.592
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 2010,
    "Age0-4": 3175.822,
    "Age5-14": 6046.488,
    "Age15-24": 6178.615,
    "Age25-64": 14955.386,
    "AgeOver65": 1987.073
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 2020,
    "Age0-4": 3325.038,
    "Age5-14": 6555.18,
    "Age15-24": 5843.937,
    "Age25-64": 18378.744,
    "AgeOver65": 2807.659
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1950,
    "Age0-4": 202.686,
    "Age5-14": 454.715,
    "Age15-24": 448.176,
    "Age25-64": 1054.718,
    "AgeOver65": 180.714
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1960,
    "Age0-4": 398.446,
    "Age5-14": 556.609,
    "Age15-24": 495.385,
    "Age25-64": 1368.327,
    "AgeOver65": 185.679
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1970,
    "Age0-4": 340.259,
    "Age5-14": 814.413,
    "Age15-24": 583.086,
    "Age25-64": 1630.058,
    "AgeOver65": 227.733
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1980,
    "Age0-4": 378.487,
    "Age5-14": 693.736,
    "Age15-24": 746.902,
    "Age25-64": 1881.338,
    "AgeOver65": 310.622
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1990,
    "Age0-4": 427.077,
    "Age5-14": 791.618,
    "Age15-24": 632.866,
    "Age25-64": 2152.027,
    "AgeOver65": 361.974
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 2000,
    "Age0-4": 241.227,
    "Age5-14": 744.543,
    "Age15-24": 757.379,
    "Age25-64": 2063.567,
    "AgeOver65": 395.943
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 2010,
    "Age0-4": 220.201,
    "Age5-14": 454.673,
    "Age15-24": 744.664,
    "Age25-64": 2251.979,
    "AgeOver65": 414.573
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 2020,
    "Age0-4": 202.52,
    "Age5-14": 438.408,
    "Age15-24": 443.534,
    "Age25-64": 2445.539,
    "AgeOver65": 503.962
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1950,
    "Age0-4": 630.876,
    "Age5-14": 929.658,
    "Age15-24": 773.719,
    "Age25-64": 1620.091,
    "AgeOver65": 129.204
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1960,
    "Age0-4": 936.738,
    "Age5-14": 1240.144,
    "Age15-24": 857.968,
    "Age25-64": 1898.173,
    "AgeOver65": 166.345
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1970,
    "Age0-4": 1223.006,
    "Age5-14": 1763.714,
    "Age15-24": 1163.899,
    "Age25-64": 2196.998,
    "AgeOver65": 228.688
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1980,
    "Age0-4": 1635.437,
    "Age5-14": 2388.339,
    "Age15-24": 1675.982,
    "Age25-64": 2723.214,
    "AgeOver65": 293.577
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1990,
    "Age0-4": 2092.168,
    "Age5-14": 3192.468,
    "Age15-24": 2273.987,
    "Age25-64": 3689.14,
    "AgeOver65": 350.884
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 2000,
    "Age0-4": 2842.102,
    "Age5-14": 4276.95,
    "Age15-24": 3078.552,
    "Age25-64": 5101.587,
    "AgeOver65": 467.615
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 2010,
    "Age0-4": 3410.085,
    "Age5-14": 5795.581,
    "Age15-24": 4161.129,
    "Age25-64": 7185.461,
    "AgeOver65": 599.384
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 2020,
    "Age0-4": 4109.427,
    "Age5-14": 6984.3,
    "Age15-24": 5687.882,
    "Age25-64": 10050.798,
    "AgeOver65": 858.612
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1950,
    "Age0-4": 10.157,
    "Age5-14": 20.541,
    "Age15-24": 15.477,
    "Age25-64": 25.237,
    "AgeOver65": 2.304
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1960,
    "Age0-4": 15.835,
    "Age5-14": 18.699,
    "Age15-24": 19.507,
    "Age25-64": 33.517,
    "AgeOver65": 2.315
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1970,
    "Age0-4": 22.062,
    "Age5-14": 31.471,
    "Age15-24": 16.325,
    "Age25-64": 43.122,
    "AgeOver65": 2.708
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1980,
    "Age0-4": 28.242,
    "Age5-14": 43.619,
    "Age15-24": 30.711,
    "Age25-64": 51.688,
    "AgeOver65": 4.011
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1990,
    "Age0-4": 42.515,
    "Age5-14": 63.519,
    "Age15-24": 42.134,
    "Age25-64": 68.761,
    "AgeOver65": 6.23
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 2000,
    "Age0-4": 31.845,
    "Age5-14": 81.213,
    "Age15-24": 60.649,
    "Age25-64": 95.174,
    "AgeOver65": 10.515
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 2010,
    "Age0-4": 33.981,
    "Age5-14": 58.517,
    "Age15-24": 91.162,
    "Age25-64": 165.41,
    "AgeOver65": 16.66
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 2020,
    "Age0-4": 35.579,
    "Age5-14": 70.367,
    "Age15-24": 77.366,
    "Age25-64": 337.81,
    "AgeOver65": 19.42
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1950,
    "Age0-4": 4867.29,
    "Age5-14": 7092.525,
    "Age15-24": 5292.559,
    "Age25-64": 9721.251,
    "AgeOver65": 971.046
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1960,
    "Age0-4": 7031.681,
    "Age5-14": 10235.26,
    "Age15-24": 6700.163,
    "Age25-64": 12520.704,
    "AgeOver65": 1284.053
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1970,
    "Age0-4": 9450.478,
    "Age5-14": 14446.452,
    "Age15-24": 9652.978,
    "Age25-64": 16001.941,
    "AgeOver65": 1941.716
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1980,
    "Age0-4": 11010.897,
    "Age5-14": 19324.163,
    "Age15-24": 13405.821,
    "Age25-64": 21358.877,
    "AgeOver65": 2661.609
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1990,
    "Age0-4": 11515.972,
    "Age5-14": 21395.29,
    "Age15-24": 17796.207,
    "Age25-64": 29626.343,
    "AgeOver65": 3609.323
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 2000,
    "Age0-4": 11451.009,
    "Age5-14": 22369.224,
    "Age15-24": 19468.763,
    "Age25-64": 40516.601,
    "AgeOver65": 5094.248
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 2010,
    "Age0-4": 11202.865,
    "Age5-14": 22463.329,
    "Age15-24": 21175.988,
    "Age25-64": 52241.842,
    "AgeOver65": 7008.937
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 2020,
    "Age0-4": 10958.742,
    "Age5-14": 22351.381,
    "Age15-24": 22149.412,
    "Age25-64": 63650.987,
    "AgeOver65": 9822.231
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1950,
    "Age0-4": 170.612,
    "Age5-14": 280.714,
    "Age15-24": 250.909,
    "Age25-64": 462.914,
    "AgeOver65": 89.295
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1960,
    "Age0-4": 199.846,
    "Age5-14": 365.733,
    "Age15-24": 273.602,
    "Age25-64": 579.574,
    "AgeOver65": 69.915
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1970,
    "Age0-4": 203.313,
    "Age5-14": 381.67,
    "Age15-24": 352.732,
    "Age25-64": 701.741,
    "AgeOver65": 81.349
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1980,
    "Age0-4": 188.754,
    "Age5-14": 385.129,
    "Age15-24": 355.346,
    "Age25-64": 873.056,
    "AgeOver65": 121.918
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1990,
    "Age0-4": 173.578,
    "Age5-14": 349.246,
    "Age15-24": 341.159,
    "Age25-64": 988.416,
    "AgeOver65": 143.819
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 2000,
    "Age0-4": 136.314,
    "Age5-14": 325.176,
    "Age15-24": 334.142,
    "Age25-64": 1037.925,
    "AgeOver65": 201.266
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 2010,
    "Age0-4": 112.711,
    "Age5-14": 258.066,
    "Age15-24": 321.039,
    "Age25-64": 1138.782,
    "AgeOver65": 240.139
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 2020,
    "Age0-4": 111.883,
    "Age5-14": 227.92,
    "Age15-24": 251.494,
    "Age25-64": 1190.464,
    "AgeOver65": 301.619
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1950,
    "Age0-4": 740.898,
    "Age5-14": 1090.295,
    "Age15-24": 868.978,
    "Age25-64": 1874.806,
    "AgeOver65": 133.448
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1960,
    "Age0-4": 891.36,
    "Age5-14": 1257.541,
    "Age15-24": 966.04,
    "Age25-64": 2029.247,
    "AgeOver65": 119.539
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1970,
    "Age0-4": 1034.763,
    "Age5-14": 1468.851,
    "Age15-24": 1115.791,
    "Age25-64": 2176.317,
    "AgeOver65": 153.32
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1980,
    "Age0-4": 1287.084,
    "Age5-14": 1837.279,
    "Age15-24": 1324.754,
    "Age25-64": 2410.801,
    "AgeOver65": 230.206
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1990,
    "Age0-4": 1577.35,
    "Age5-14": 2370.976,
    "Age15-24": 1621.123,
    "Age25-64": 2557.188,
    "AgeOver65": 323.278
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 2000,
    "Age0-4": 2066.891,
    "Age5-14": 3030.606,
    "Age15-24": 2221.264,
    "Age25-64": 3266.53,
    "AgeOver65": 361.157
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 2010,
    "Age0-4": 2928.051,
    "Age5-14": 4218.711,
    "Age15-24": 2889.701,
    "Age25-64": 4599.905,
    "AgeOver65": 412.984
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 2020,
    "Age0-4": 3605.514,
    "Age5-14": 5913.857,
    "Age15-24": 4026.383,
    "Age25-64": 6203.438,
    "AgeOver65": 501.642
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1950,
    "Age0-4": 47,
    "Age5-14": 62,
    "Age15-24": 54.001,
    "Age25-64": 130.998,
    "AgeOver65": 17.999
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1960,
    "Age0-4": 39.441,
    "Age5-14": 80.82,
    "Age15-24": 46.631,
    "Age25-64": 121.198,
    "AgeOver65": 24.883
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1970,
    "Age0-4": 24.623,
    "Age5-14": 63.461,
    "Age15-24": 63.917,
    "Age25-64": 137.031,
    "AgeOver65": 31.516
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1980,
    "Age0-4": 28.718,
    "Age5-14": 50.11,
    "Age15-24": 55.391,
    "Age25-64": 164.616,
    "AgeOver65": 32.659
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1990,
    "Age0-4": 27.256,
    "Age5-14": 57.555,
    "Age15-24": 50.784,
    "Age25-64": 188.457,
    "AgeOver65": 37.965
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 2000,
    "Age0-4": 23.865,
    "Age5-14": 54.29,
    "Age15-24": 58.33,
    "Age25-64": 208.336,
    "AgeOver65": 48.828
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 2010,
    "Age0-4": 19.53,
    "Age5-14": 42.571,
    "Age15-24": 56.436,
    "Age25-64": 230.72,
    "AgeOver65": 65
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 2020,
    "Age0-4": 21.674,
    "Age5-14": 41.793,
    "Age15-24": 45.612,
    "Age25-64": 238.304,
    "AgeOver65": 94.156
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1950,
    "Age0-4": 2487.133,
    "Age5-14": 3869.94,
    "Age15-24": 3538.355,
    "Age25-64": 7305.793,
    "AgeOver65": 578.414
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1960,
    "Age0-4": 3636.663,
    "Age5-14": 5167.35,
    "Age15-24": 3633.554,
    "Age25-64": 8579.191,
    "AgeOver65": 720.189
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1970,
    "Age0-4": 4502.477,
    "Age5-14": 7088.353,
    "Age15-24": 4917.507,
    "Age25-64": 9799.678,
    "AgeOver65": 961.048
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1980,
    "Age0-4": 5222.264,
    "Age5-14": 8906.818,
    "Age15-24": 6808.285,
    "Age25-64": 12034.134,
    "AgeOver65": 1252.815
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1990,
    "Age0-4": 5276.911,
    "Age5-14": 10284.24,
    "Age15-24": 8558.393,
    "Age25-64": 15570.219,
    "AgeOver65": 1645.425
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 2000,
    "Age0-4": 5207.087,
    "Age5-14": 9982.91,
    "Age15-24": 9759.119,
    "Age25-64": 19671.505,
    "AgeOver65": 2099.077
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 2010,
    "Age0-4": 4948.745,
    "Age5-14": 10254.844,
    "Age15-24": 9160.566,
    "Age25-64": 23805.122,
    "AgeOver65": 2431.55
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 2020,
    "Age0-4": 4508.556,
    "Age5-14": 9358.105,
    "Age15-24": 9830.255,
    "Age25-64": 27319.836,
    "AgeOver65": 3393.042
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1950,
    "Age0-4": 48.376,
    "Age5-14": 94.571,
    "Age15-24": 78.481,
    "Age25-64": 143.945,
    "AgeOver65": 29.366
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1960,
    "Age0-4": 63.881,
    "Age5-14": 105.892,
    "Age15-24": 94.238,
    "Age25-64": 193.344,
    "AgeOver65": 30.061
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1970,
    "Age0-4": 54.345,
    "Age5-14": 116.885,
    "Age15-24": 96.646,
    "Age25-64": 214.417,
    "AgeOver65": 37.409
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1980,
    "Age0-4": 51.522,
    "Age5-14": 107.089,
    "Age15-24": 114.697,
    "Age25-64": 260.247,
    "AgeOver65": 47.202
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1990,
    "Age0-4": 51.538,
    "Age5-14": 104.917,
    "Age15-24": 102.015,
    "Age25-64": 305.835,
    "AgeOver65": 50.699
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 2000,
    "Age0-4": 41.573,
    "Age5-14": 90.007,
    "Age15-24": 94.612,
    "Age25-64": 316.393,
    "AgeOver65": 70.973
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 2010,
    "Age0-4": 39.728,
    "Age5-14": 80.404,
    "Age15-24": 90.192,
    "Age25-64": 333.004,
    "AgeOver65": 80.951
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 2020,
    "Age0-4": 36.906,
    "Age5-14": 76.426,
    "Age15-24": 80.416,
    "Age25-64": 335.272,
    "AgeOver65": 99.042
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1950,
    "Age0-4": 95.315,
    "Age5-14": 158.378,
    "Age15-24": 135.918,
    "Age25-64": 359.671,
    "AgeOver65": 30.917
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1960,
    "Age0-4": 154.059,
    "Age5-14": 199.449,
    "Age15-24": 153.809,
    "Age25-64": 402.066,
    "AgeOver65": 46.131
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1970,
    "Age0-4": 228.934,
    "Age5-14": 337.123,
    "Age15-24": 195.29,
    "Age25-64": 456.253,
    "AgeOver65": 61.219
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1980,
    "Age0-4": 274.535,
    "Age5-14": 463.652,
    "Age15-24": 332.1,
    "Age25-64": 543.389,
    "AgeOver65": 75.946
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1990,
    "Age0-4": 332.053,
    "Age5-14": 551.768,
    "Age15-24": 457.609,
    "Age25-64": 752.57,
    "AgeOver65": 90.139
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 2000,
    "Age0-4": 233.94,
    "Age5-14": 599.673,
    "Age15-24": 508.944,
    "Age25-64": 966.374,
    "AgeOver65": 88.486
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 2010,
    "Age0-4": 283.893,
    "Age5-14": 451.074,
    "Age15-24": 590.622,
    "Age25-64": 1290.828,
    "AgeOver65": 103.485
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 2020,
    "Age0-4": 375.46,
    "Age5-14": 643.856,
    "Age15-24": 447.101,
    "Age25-64": 1670.504,
    "AgeOver65": 141.371
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1950,
    "Age0-4": 1017.648,
    "Age5-14": 1467.435,
    "Age15-24": 1127.452,
    "Age25-64": 2183.47,
    "AgeOver65": 162.977
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1960,
    "Age0-4": 1224.023,
    "Age5-14": 1793.39,
    "Age15-24": 1329.798,
    "Age25-64": 2601.495,
    "AgeOver65": 236.164
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1970,
    "Age0-4": 1594.279,
    "Age5-14": 2302.296,
    "Age15-24": 1663.12,
    "Age25-64": 3151.503,
    "AgeOver65": 311.549
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1980,
    "Age0-4": 2043.519,
    "Age5-14": 3000.385,
    "Age15-24": 2184.892,
    "Age25-64": 3998.949,
    "AgeOver65": 402.449
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1990,
    "Age0-4": 2304.883,
    "Age5-14": 3749.969,
    "Age15-24": 2505.471,
    "Age25-64": 3955.249,
    "AgeOver65": 471.72
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 2000,
    "Age0-4": 3161.349,
    "Age5-14": 4721.16,
    "Age15-24": 3450.579,
    "Age25-64": 5788.299,
    "AgeOver65": 590.538
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 2010,
    "Age0-4": 4176.654,
    "Age5-14": 6584.837,
    "Age15-24": 4559.385,
    "Age25-64": 7501.39,
    "AgeOver65": 709.301
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 2020,
    "Age0-4": 5156.628,
    "Age5-14": 8615.39,
    "Age15-24": 6453.779,
    "Age25-64": 10135.162,
    "AgeOver65": 894.476
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1950,
    "Age0-4": 114.612,
    "Age5-14": 170.26,
    "Age15-24": 129.62,
    "Age25-64": 227.48,
    "AgeOver65": 9.462
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1960,
    "Age0-4": 158.983,
    "Age5-14": 218.581,
    "Age15-24": 161.156,
    "Age25-64": 293.843,
    "AgeOver65": 17.814
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1970,
    "Age0-4": 212.522,
    "Age5-14": 315.091,
    "Age15-24": 209.341,
    "Age25-64": 380.305,
    "AgeOver65": 29.517
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1980,
    "Age0-4": 275.285,
    "Age5-14": 425.491,
    "Age15-24": 303.916,
    "Age25-64": 491.682,
    "AgeOver65": 44.27
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1990,
    "Age0-4": 353.349,
    "Age5-14": 559.376,
    "Age15-24": 406.938,
    "Age25-64": 652.09,
    "AgeOver65": 62.594
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 2000,
    "Age0-4": 432.584,
    "Age5-14": 712.66,
    "Age15-24": 536.535,
    "Age25-64": 863.498,
    "AgeOver65": 84.94
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 2010,
    "Age0-4": 551.551,
    "Age5-14": 889.691,
    "Age15-24": 703.431,
    "Age25-64": 1239.457,
    "AgeOver65": 110.07
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 2020,
    "Age0-4": 689.874,
    "Age5-14": 1155.348,
    "Age15-24": 886.288,
    "Age25-64": 1770.387,
    "AgeOver65": 147.763
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 1950,
    "Age0-4": 34,
    "Age5-14": 49.002,
    "Age15-24": 39,
    "Age25-64": 88.401,
    "AgeOver65": 11.6
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 1960,
    "Age0-4": 45.438,
    "Age5-14": 73.772,
    "Age15-24": 49.177,
    "Age25-64": 100.601,
    "AgeOver65": 12.638
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 1970,
    "Age0-4": 48.751,
    "Age5-14": 85.778,
    "Age15-24": 59.35,
    "Age25-64": 114.17,
    "AgeOver65": 16.965
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 1980,
    "Age0-4": 26.363,
    "Age5-14": 72.881,
    "Age15-24": 73.174,
    "Age25-64": 127.076,
    "AgeOver65": 25.954
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 1990,
    "Age0-4": 30.178,
    "Age5-14": 57.588,
    "Age15-24": 69.493,
    "Age25-64": 166.727,
    "AgeOver65": 34.471
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 2000,
    "Age0-4": 27.41,
    "Age5-14": 61.669,
    "Age15-24": 51.79,
    "Age25-64": 199.302,
    "AgeOver65": 46.845
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 2010,
    "Age0-4": 23.445,
    "Age5-14": 53.573,
    "Age15-24": 51.577,
    "Age25-64": 206.288,
    "AgeOver65": 59.783
  },
  {
    "Entity": "Martinique",
    "Code": "MTQ",
    "Year": 2020,
    "Age0-4": 18.353,
    "Age5-14": 40.399,
    "Age15-24": 48.718,
    "Age25-64": 186.372,
    "AgeOver65": 81.423
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1950,
    "Age0-4": 89.055,
    "Age5-14": 133.672,
    "Age15-24": 94.405,
    "Age25-64": 161.484,
    "AgeOver65": 14.642
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1960,
    "Age0-4": 122.634,
    "Age5-14": 184.971,
    "Age15-24": 123.323,
    "Age25-64": 212.754,
    "AgeOver65": 16.343
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1970,
    "Age0-4": 115.325,
    "Age5-14": 246.439,
    "Age15-24": 164.262,
    "Age25-64": 279.109,
    "AgeOver65": 21.316
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1980,
    "Age0-4": 108.899,
    "Age5-14": 235.22,
    "Age15-24": 205.385,
    "Age25-64": 381.433,
    "AgeOver65": 35.102
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1990,
    "Age0-4": 98.182,
    "Age5-14": 207.869,
    "Age15-24": 224.425,
    "Age25-64": 475.667,
    "AgeOver65": 49.726
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 2000,
    "Age0-4": 98.585,
    "Age5-14": 206.667,
    "Age15-24": 213.014,
    "Age25-64": 594.096,
    "AgeOver65": 72.785
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 2010,
    "Age0-4": 80.784,
    "Age5-14": 193.076,
    "Age15-24": 199.336,
    "Age25-64": 679.57,
    "AgeOver65": 95.187
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 2020,
    "Age0-4": 64.048,
    "Age5-14": 149.414,
    "Age15-24": 188.699,
    "Age25-64": 710.38,
    "AgeOver65": 159.226
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1950,
    "Age0-4": 569.451,
    "Age5-14": 780.131,
    "Age15-24": 552.141,
    "Age25-64": 961.303,
    "AgeOver65": 90.845
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1960,
    "Age0-4": 662.328,
    "Age5-14": 941.327,
    "Age15-24": 706.841,
    "Age25-64": 1232.951,
    "AgeOver65": 116.533
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1970,
    "Age0-4": 884.67,
    "Age5-14": 1206.348,
    "Age15-24": 865.732,
    "Age25-64": 1605.193,
    "AgeOver65": 141.84
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1980,
    "Age0-4": 1195.237,
    "Age5-14": 1672.604,
    "Age15-24": 1131.85,
    "Age25-64": 2073.712,
    "AgeOver65": 177.031
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1990,
    "Age0-4": 1726.73,
    "Age5-14": 2485.849,
    "Age15-24": 1768.198,
    "Age25-64": 3131.845,
    "AgeOver65": 291.877
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 2000,
    "Age0-4": 2013.864,
    "Age5-14": 3123.534,
    "Age15-24": 2135.706,
    "Age25-64": 3527.529,
    "AgeOver65": 348.118
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 2010,
    "Age0-4": 2632.444,
    "Age5-14": 4106.877,
    "Age15-24": 2997.192,
    "Age25-64": 4416.939,
    "AgeOver65": 386.157
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 2020,
    "Age0-4": 2923.943,
    "Age5-14": 5300.418,
    "Age15-24": 4014.928,
    "Age25-64": 6385.335,
    "AgeOver65": 505.331
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1950,
    "Age0-4": 1019.7,
    "Age5-14": 1479.101,
    "Age15-24": 1096.2,
    "Age25-64": 2205.995,
    "AgeOver65": 308.906
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1960,
    "Age0-4": 1478.126,
    "Age5-14": 2232.517,
    "Age15-24": 1414.096,
    "Age25-64": 2752.905,
    "AgeOver65": 278.698
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1970,
    "Age0-4": 1700.923,
    "Age5-14": 3080.156,
    "Age15-24": 2128.105,
    "Age25-64": 3537.534,
    "AgeOver65": 357.413
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1980,
    "Age0-4": 1980.246,
    "Age5-14": 3468.733,
    "Age15-24": 2933.869,
    "Age25-64": 4919.846,
    "AgeOver65": 495.4
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1990,
    "Age0-4": 2437.331,
    "Age5-14": 4242.432,
    "Age15-24": 3455.098,
    "Age25-64": 7231.345,
    "AgeOver65": 663.618
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 2000,
    "Age0-4": 2685.612,
    "Age5-14": 5051.111,
    "Age15-24": 4342.619,
    "Age25-64": 10206.846,
    "AgeOver65": 908.064
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 2010,
    "Age0-4": 2439.851,
    "Age5-14": 5447.429,
    "Age15-24": 5703.495,
    "Age25-64": 13224.294,
    "AgeOver65": 1392.959
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 2020,
    "Age0-4": 2635.111,
    "Age5-14": 4954.104,
    "Age15-24": 5532.8,
    "Age25-64": 16918.916,
    "AgeOver65": 2325.067
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 1950,
    "Age0-4": 1.994,
    "Age5-14": 2.785,
    "Age15-24": 1.911,
    "Age25-64": 6.852,
    "AgeOver65": 1.596
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 1960,
    "Age0-4": 4.161,
    "Age5-14": 5.88,
    "Age15-24": 4.023,
    "Age25-64": 8.48,
    "AgeOver65": 1.472
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 1970,
    "Age0-4": 7.324,
    "Age5-14": 9.928,
    "Age15-24": 6.573,
    "Age25-64": 11.241,
    "AgeOver65": 1.898
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 1980,
    "Age0-4": 11.232,
    "Age5-14": 15.897,
    "Age15-24": 10.06,
    "Age25-64": 15.661,
    "AgeOver65": 2.286
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 1990,
    "Age0-4": 18.155,
    "Age5-14": 27.317,
    "Age15-24": 18.739,
    "Age25-64": 27.68,
    "AgeOver65": 2.888
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 2000,
    "Age0-4": 25.022,
    "Age5-14": 41.008,
    "Age15-24": 31.213,
    "Age25-64": 48.509,
    "AgeOver65": 4.579
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 2010,
    "Age0-4": 34.972,
    "Age5-14": 54.656,
    "Age15-24": 40.116,
    "Age25-64": 71.819,
    "AgeOver65": 7.153
  },
  {
    "Entity": "Mayotte",
    "Code": "MYT",
    "Year": 2020,
    "Age0-4": 36.078,
    "Age5-14": 70.328,
    "Age15-24": 54.516,
    "Age25-64": 100.52,
    "AgeOver65": 11.371
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1950,
    "Age0-4": 80.681,
    "Age5-14": 118.67,
    "Age15-24": 95.978,
    "Age25-64": 197.904,
    "AgeOver65": 21.145
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1960,
    "Age0-4": 105.87,
    "Age5-14": 156.661,
    "Age15-24": 111.182,
    "Age25-64": 235.49,
    "AgeOver65": 24.935
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1970,
    "Age0-4": 140.821,
    "Age5-14": 212.337,
    "Age15-24": 149.994,
    "Age25-64": 283.578,
    "AgeOver65": 30.744
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1980,
    "Age0-4": 193.236,
    "Age5-14": 298.801,
    "Age15-24": 196.168,
    "Age25-64": 331.749,
    "AgeOver65": 37.769
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1990,
    "Age0-4": 241.329,
    "Age5-14": 394.322,
    "Age15-24": 297.878,
    "Age25-64": 450.082,
    "AgeOver65": 49.288
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 2000,
    "Age0-4": 265.43,
    "Age5-14": 488.686,
    "Age15-24": 382.029,
    "Age25-64": 600.355,
    "AgeOver65": 58.083
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 2010,
    "Age0-4": 288.161,
    "Age5-14": 504.603,
    "Age15-24": 461.812,
    "Age25-64": 776.965,
    "AgeOver65": 87.336
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 2020,
    "Age0-4": 336.078,
    "Age5-14": 600.026,
    "Age15-24": 489.167,
    "Age25-64": 1024.527,
    "AgeOver65": 91.118
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1950,
    "Age0-4": 8.985,
    "Age5-14": 14.648,
    "Age15-24": 11.441,
    "Age25-64": 27.286,
    "AgeOver65": 2.463
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1960,
    "Age0-4": 11.097,
    "Age5-14": 18.064,
    "Age15-24": 13.622,
    "Age25-64": 32.428,
    "AgeOver65": 2.848
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1970,
    "Age0-4": 15.66,
    "Age5-14": 24.178,
    "Age15-24": 19.169,
    "Age25-64": 42.556,
    "AgeOver65": 3.76
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1980,
    "Age0-4": 18.474,
    "Age5-14": 35.929,
    "Age15-24": 26.493,
    "Age25-64": 58.021,
    "AgeOver65": 6.224
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1990,
    "Age0-4": 18.945,
    "Age5-14": 35.723,
    "Age15-24": 35.858,
    "Age25-64": 71.405,
    "AgeOver65": 8.404
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 2000,
    "Age0-4": 22.531,
    "Age5-14": 43.225,
    "Age15-24": 34.513,
    "Age25-64": 104.949,
    "AgeOver65": 12.045
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 2010,
    "Age0-4": 21.763,
    "Age5-14": 43.729,
    "Age15-24": 38.887,
    "Age25-64": 131.122,
    "AgeOver65": 18.028
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 2020,
    "Age0-4": 19.798,
    "Age5-14": 43.323,
    "Age15-24": 44.745,
    "Age25-64": 149.94,
    "AgeOver65": 27.685
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1950,
    "Age0-4": 514.872,
    "Age5-14": 751.363,
    "Age15-24": 499.213,
    "Age25-64": 770.443,
    "AgeOver65": 23.815
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1960,
    "Age0-4": 700.448,
    "Age5-14": 936.155,
    "Age15-24": 680.434,
    "Age25-64": 1033.423,
    "AgeOver65": 38.314
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1970,
    "Age0-4": 928.778,
    "Age5-14": 1272.72,
    "Age15-24": 856.858,
    "Age25-64": 1380.42,
    "AgeOver65": 71.869
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1980,
    "Age0-4": 1217.656,
    "Age5-14": 1664.718,
    "Age15-24": 1018.314,
    "Age25-64": 1972.951,
    "AgeOver65": 115.361
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1990,
    "Age0-4": 1616.305,
    "Age5-14": 2268.092,
    "Age15-24": 1415.432,
    "Age25-64": 2542.485,
    "AgeOver65": 184.278
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 2000,
    "Age0-4": 2342.97,
    "Age5-14": 3127.339,
    "Age15-24": 2033.933,
    "Age25-64": 3550.816,
    "AgeOver65": 276.503
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 2010,
    "Age0-4": 3423.709,
    "Age5-14": 4814.253,
    "Age15-24": 2978.133,
    "Age25-64": 4835.794,
    "AgeOver65": 412.136
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 2020,
    "Age0-4": 4787.474,
    "Age5-14": 7236.442,
    "Age15-24": 4722.097,
    "Age25-64": 6832.198,
    "AgeOver65": 628.425
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1950,
    "Age0-4": 6329.574,
    "Age5-14": 9468.866,
    "Age15-24": 7119.524,
    "Age25-64": 13812.507,
    "AgeOver65": 1129.279
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1960,
    "Age0-4": 7584.631,
    "Age5-14": 11196.665,
    "Age15-24": 8687.1,
    "Age25-64": 16395.338,
    "AgeOver65": 1274.726
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1970,
    "Age0-4": 9641.499,
    "Age5-14": 14214.937,
    "Age15-24": 10398.61,
    "Age25-64": 20142.424,
    "AgeOver65": 1584.672
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1980,
    "Age0-4": 13367.015,
    "Age5-14": 18986.285,
    "Age15-24": 13567.853,
    "Age25-64": 25458.007,
    "AgeOver65": 2044.486
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1990,
    "Age0-4": 16798.895,
    "Age5-14": 26021.881,
    "Age15-24": 17863.982,
    "Age25-64": 31784.381,
    "AgeOver65": 2743.315
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 2000,
    "Age0-4": 21074.261,
    "Age5-14": 32246.778,
    "Age15-24": 24568.076,
    "Age25-64": 40950.398,
    "AgeOver65": 3444.34
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 2010,
    "Age0-4": 27695.441,
    "Age5-14": 42101.783,
    "Age15-24": 30299.513,
    "Age25-64": 54066.083,
    "AgeOver65": 4340.383
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 2020,
    "Age0-4": 33938.795,
    "Age5-14": 55706.389,
    "Age15-24": 39979.021,
    "Age25-64": 70871.15,
    "AgeOver65": 5644.232
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1950,
    "Age0-4": 211.44,
    "Age5-14": 345.501,
    "Age15-24": 260.675,
    "Age25-64": 441.153,
    "AgeOver65": 36.225
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1960,
    "Age0-4": 363.226,
    "Age5-14": 475.504,
    "Age15-24": 322.663,
    "Age25-64": 566.969,
    "AgeOver65": 44.77
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1970,
    "Age0-4": 447.584,
    "Age5-14": 712.819,
    "Age15-24": 448.533,
    "Age25-64": 737.536,
    "AgeOver65": 60.051
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1980,
    "Age0-4": 613.03,
    "Age5-14": 922.668,
    "Age15-24": 666.112,
    "Age25-64": 975.449,
    "AgeOver65": 88.261
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1990,
    "Age0-4": 696.176,
    "Age5-14": 1216.809,
    "Age15-24": 825.114,
    "Age25-64": 1301.921,
    "AgeOver65": 133.415
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 2000,
    "Age0-4": 670.58,
    "Age5-14": 1339.739,
    "Age15-24": 1111.954,
    "Age25-64": 1754.811,
    "AgeOver65": 192.226
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 2010,
    "Age0-4": 665.69,
    "Age5-14": 1274.798,
    "Age15-24": 1222.906,
    "Age25-64": 2396.994,
    "AgeOver65": 263.67
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 2020,
    "Age0-4": 656.942,
    "Age5-14": 1297.344,
    "Age15-24": 1187.731,
    "Age25-64": 3106.429,
    "AgeOver65": 376.108
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1950,
    "Age0-4": 1190.373,
    "Age5-14": 1737.6,
    "Age15-24": 1610.53,
    "Age25-64": 4732.678,
    "AgeOver65": 770.87
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1960,
    "Age0-4": 1155.795,
    "Age5-14": 2285.296,
    "Age15-24": 1718.749,
    "Age25-64": 5268.909,
    "AgeOver65": 1020.066
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1970,
    "Age0-4": 1196.43,
    "Age5-14": 2369.488,
    "Age15-24": 2286.651,
    "Age25-64": 5838.824,
    "AgeOver65": 1310.548
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1980,
    "Age0-4": 884.11,
    "Age5-14": 2274.742,
    "Age15-24": 2451.94,
    "Age25-64": 6927.891,
    "AgeOver65": 1609.727
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1990,
    "Age0-4": 933.606,
    "Age5-14": 1790.885,
    "Age15-24": 2337.607,
    "Age25-64": 7998.521,
    "AgeOver65": 1904.823
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 2000,
    "Age0-4": 971.263,
    "Age5-14": 1969.957,
    "Age15-24": 1890.905,
    "Age25-64": 8930.957,
    "AgeOver65": 2163.106
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 2010,
    "Age0-4": 929.004,
    "Age5-14": 1994.219,
    "Age15-24": 2044.802,
    "Age25-64": 9139.478,
    "AgeOver65": 2575.424
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 2020,
    "Age0-4": 858.9,
    "Age5-14": 1831.563,
    "Age15-24": 2036.739,
    "Age25-64": 8974.729,
    "AgeOver65": 3432.942
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1950,
    "Age0-4": 319.771,
    "Age5-14": 471.796,
    "Age15-24": 439.089,
    "Age25-64": 1722.208,
    "AgeOver65": 312.41
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1960,
    "Age0-4": 308.839,
    "Age5-14": 620.041,
    "Age15-24": 466.34,
    "Age25-64": 1791.884,
    "AgeOver65": 395.404
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1970,
    "Age0-4": 329.618,
    "Age5-14": 619.702,
    "Age15-24": 616.38,
    "Age25-64": 1812.193,
    "AgeOver65": 498.156
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1980,
    "Age0-4": 261.2,
    "Age5-14": 644.951,
    "Age15-24": 623.807,
    "Age25-64": 1954.268,
    "AgeOver65": 601.844
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1990,
    "Age0-4": 280.385,
    "Age5-14": 523.426,
    "Age15-24": 653.359,
    "Age25-64": 2095.43,
    "AgeOver65": 694.686
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 2000,
    "Age0-4": 301.771,
    "Age5-14": 597.362,
    "Age15-24": 542.809,
    "Age25-64": 2370.988,
    "AgeOver65": 686.445
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 2010,
    "Age0-4": 306.018,
    "Age5-14": 613.092,
    "Age15-24": 634.395,
    "Age25-64": 2604.996,
    "AgeOver65": 727.377
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 2020,
    "Age0-4": 301.748,
    "Age5-14": 633.801,
    "Age15-24": 675.074,
    "Age25-64": 2860.459,
    "AgeOver65": 950.16
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1950,
    "Age0-4": 1228.224,
    "Age5-14": 2048.175,
    "Age15-24": 1698.629,
    "Age25-64": 3349.244,
    "AgeOver65": 159.05
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1960,
    "Age0-4": 1639.665,
    "Age5-14": 2444.186,
    "Age15-24": 1880.482,
    "Age25-64": 3883.912,
    "AgeOver65": 256.815
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1970,
    "Age0-4": 1926.549,
    "Age5-14": 3021.348,
    "Age15-24": 2277.124,
    "Age25-64": 4494.774,
    "AgeOver65": 354.833
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1980,
    "Age0-4": 2463.526,
    "Age5-14": 3754.696,
    "Age15-24": 2862.724,
    "Age25-64": 5441.489,
    "AgeOver65": 493.973
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1990,
    "Age0-4": 3081.762,
    "Age5-14": 4939.116,
    "Age15-24": 3561.543,
    "Age25-64": 6655.786,
    "AgeOver65": 667.273
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 2000,
    "Age0-4": 3594.062,
    "Age5-14": 6213.409,
    "Age15-24": 4674.096,
    "Age25-64": 8558.01,
    "AgeOver65": 901.522
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 2010,
    "Age0-4": 3022.827,
    "Age5-14": 6780,
    "Age15-24": 5269.25,
    "Age25-64": 10587.226,
    "AgeOver65": 1353.904
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 2020,
    "Age0-4": 2706.773,
    "Age5-14": 5687.459,
    "Age15-24": 6410.405,
    "Age25-64": 12634.036,
    "AgeOver65": 1698.135
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1950,
    "Age0-4": 232,
    "Age5-14": 323,
    "Age15-24": 273,
    "Age25-64": 909.006,
    "AgeOver65": 171.005
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1960,
    "Age0-4": 289.134,
    "Age5-14": 491.136,
    "Age15-24": 335.059,
    "Age25-64": 1052.379,
    "AgeOver65": 204.891
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1970,
    "Age0-4": 296.941,
    "Age5-14": 597.104,
    "Age15-24": 492.054,
    "Age25-64": 1193.292,
    "AgeOver65": 239
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1980,
    "Age0-4": 256.568,
    "Age5-14": 599.358,
    "Age15-24": 579.224,
    "Age25-64": 1404.266,
    "AgeOver65": 307.194
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1990,
    "Age0-4": 276.422,
    "Age5-14": 513.018,
    "Age15-24": 568.198,
    "Age25-64": 1662.558,
    "AgeOver65": 377.979
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 2000,
    "Age0-4": 283.435,
    "Age5-14": 593.143,
    "Age15-24": 529.744,
    "Age25-64": 1996.675,
    "AgeOver65": 455.995
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 2010,
    "Age0-4": 312.252,
    "Age5-14": 583.497,
    "Age15-24": 637.383,
    "Age25-64": 2266.513,
    "AgeOver65": 570.415
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 2020,
    "Age0-4": 301.256,
    "Age5-14": 635.735,
    "Age15-24": 627.723,
    "Age25-64": 2468.202,
    "AgeOver65": 789.317
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1950,
    "Age0-4": 78.036,
    "Age5-14": 115.175,
    "Age15-24": 86.356,
    "Age25-64": 163.03,
    "AgeOver65": 13.813
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1960,
    "Age0-4": 99.435,
    "Age5-14": 141.371,
    "Age15-24": 106.922,
    "Age25-64": 187.53,
    "AgeOver65": 16.477
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1970,
    "Age0-4": 137.144,
    "Age5-14": 197.935,
    "Age15-24": 134.281,
    "Age25-64": 231.464,
    "AgeOver65": 23.018
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1980,
    "Age0-4": 230.038,
    "Age5-14": 290.345,
    "Age15-24": 203.52,
    "Age25-64": 398.995,
    "AgeOver65": 31.475
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1990,
    "Age0-4": 323.174,
    "Age5-14": 496.806,
    "Age15-24": 288.635,
    "Age25-64": 662.111,
    "AgeOver65": 41.432
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 2000,
    "Age0-4": 282.874,
    "Age5-14": 558.637,
    "Age15-24": 485.114,
    "Age25-64": 886.179,
    "AgeOver65": 55.169
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 2010,
    "Age0-4": 293.02,
    "Age5-14": 488.294,
    "Age15-24": 641.713,
    "Age25-64": 1536.639,
    "AgeOver65": 81.769
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 2020,
    "Age0-4": 453.666,
    "Age5-14": 694.658,
    "Age15-24": 543.61,
    "Age25-64": 3286.459,
    "AgeOver65": 128.229
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1950,
    "Age0-4": 8.553,
    "Age5-14": 13.296,
    "Age15-24": 13.578,
    "Age25-64": 54.294,
    "AgeOver65": 12.514
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1960,
    "Age0-4": 8.203,
    "Age5-14": 15.343,
    "Age15-24": 14.238,
    "Age25-64": 57.229,
    "AgeOver65": 14.406
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1970,
    "Age0-4": 8.693,
    "Age5-14": 17.56,
    "Age15-24": 17.717,
    "Age25-64": 60.357,
    "AgeOver65": 16.873
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1980,
    "Age0-4": 6.777,
    "Age5-14": 16.663,
    "Age15-24": 20.507,
    "Age25-64": 65.02,
    "AgeOver65": 19.237
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1990,
    "Age0-4": 8.065,
    "Age5-14": 14.62,
    "Age15-24": 21.359,
    "Age25-64": 76.097,
    "AgeOver65": 20.536
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 2000,
    "Age0-4": 7.974,
    "Age5-14": 17.33,
    "Age15-24": 17.36,
    "Age25-64": 84.216,
    "AgeOver65": 21.559
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 2010,
    "Age0-4": 8.43,
    "Age5-14": 16.397,
    "Age15-24": 19.201,
    "Age25-64": 91.122,
    "AgeOver65": 24.568
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 2020,
    "Age0-4": 8.702,
    "Age5-14": 17.331,
    "Age15-24": 19.747,
    "Age25-64": 96.932,
    "AgeOver65": 31.147
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 1950,
    "Age0-4": 393.917,
    "Age5-14": 612.354,
    "Age15-24": 479.566,
    "Age25-64": 911.278,
    "AgeOver65": 96.338
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 1960,
    "Age0-4": 501.369,
    "Age5-14": 754.984,
    "Age15-24": 541.968,
    "Age25-64": 1034.208,
    "AgeOver65": 76.404
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 1970,
    "Age0-4": 608.821,
    "Age5-14": 980.443,
    "Age15-24": 710.805,
    "Age25-64": 1260.15,
    "AgeOver65": 94.411
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 1980,
    "Age0-4": 781.86,
    "Age5-14": 1241.162,
    "Age15-24": 934.026,
    "Age25-64": 1613.275,
    "AgeOver65": 127.487
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 1990,
    "Age0-4": 907.603,
    "Age5-14": 1574.782,
    "Age15-24": 1186.036,
    "Age25-64": 2129.355,
    "AgeOver65": 175.421
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 2000,
    "Age0-4": 1101.382,
    "Age5-14": 1823.337,
    "Age15-24": 1508.054,
    "Age25-64": 2803.085,
    "AgeOver65": 237.635
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 2010,
    "Age0-4": 1237.16,
    "Age5-14": 2183.147,
    "Age15-24": 1733.095,
    "Age25-64": 3705.668,
    "AgeOver65": 328.864
  },
  {
    "Entity": "Melanesia",
    "Code": "OWID_MNS",
    "Year": 2020,
    "Age0-4": 1361.608,
    "Age5-14": 2499.04,
    "Age15-24": 2139.126,
    "Age25-64": 4687.535,
    "AgeOver65": 435.681
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1950,
    "Age0-4": 338496.583,
    "Age5-14": 531111.819,
    "Age15-24": 462383.852,
    "Age25-64": 1075729.38,
    "AgeOver65": 128709.384
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1960,
    "Age0-4": 434008.148,
    "Age5-14": 693630.881,
    "Age15-24": 506969.069,
    "Age25-64": 1249187.619,
    "AgeOver65": 151153.998
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1970,
    "Age0-4": 524080.098,
    "Age5-14": 865062.505,
    "Age15-24": 669319.578,
    "Age25-64": 1445760.209,
    "AgeOver65": 196214.652
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1980,
    "Age0-4": 547597.48,
    "Age5-14": 1027383.952,
    "Age15-24": 844817.999,
    "Age25-64": 1775672.002,
    "AgeOver65": 262532.033
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1990,
    "Age0-4": 643553.449,
    "Age5-14": 1104547.08,
    "Age15-24": 1009042.699,
    "Age25-64": 2241876.929,
    "AgeOver65": 328210.884
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 2000,
    "Age0-4": 615665.603,
    "Age5-14": 1235652.905,
    "Age15-24": 1085431.679,
    "Age25-64": 2784534.52,
    "AgeOver65": 422209.099
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 2010,
    "Age0-4": 652014.313,
    "Age5-14": 1224526.945,
    "Age15-24": 1215716.886,
    "Age25-64": 3337877.409,
    "AgeOver65": 526688.035
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 2020,
    "Age0-4": 677941.79,
    "Age5-14": 1305706.836,
    "Age15-24": 1209583.658,
    "Age25-64": 3873960.1,
    "AgeOver65": 727606.345
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1950,
    "Age0-4": 5778.606,
    "Age5-14": 9363.818,
    "Age15-24": 7009.76,
    "Age25-64": 13296.668,
    "AgeOver65": 2093.518
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1960,
    "Age0-4": 7189.641,
    "Age5-14": 10478.051,
    "Age15-24": 8763.022,
    "Age25-64": 16614.829,
    "AgeOver65": 1943.147
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1970,
    "Age0-4": 9906.548,
    "Age5-14": 14713.034,
    "Age15-24": 9966.004,
    "Age25-64": 21343.923,
    "AgeOver65": 2212.553
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1980,
    "Age0-4": 13207.972,
    "Age5-14": 20246.949,
    "Age15-24": 14526.096,
    "Age25-64": 27076.374,
    "AgeOver65": 2996.955
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1990,
    "Age0-4": 18442.138,
    "Age5-14": 27850.237,
    "Age15-24": 20108.022,
    "Age25-64": 37047.08,
    "AgeOver65": 4200.441
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 2000,
    "Age0-4": 21896.345,
    "Age5-14": 37836.603,
    "Age15-24": 27407.77,
    "Age25-64": 49514.778,
    "AgeOver65": 5688.087
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 2010,
    "Age0-4": 24022.417,
    "Age5-14": 43611.677,
    "Age15-24": 37233.913,
    "Age25-64": 66953.134,
    "AgeOver65": 7603.502
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 2020,
    "Age0-4": 27962.852,
    "Age5-14": 48950.898,
    "Age15-24": 42748.192,
    "Age25-64": 91624.561,
    "AgeOver65": 9605.828
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1950,
    "Age0-4": 143.237,
    "Age5-14": 220.306,
    "Age15-24": 160.857,
    "Age25-64": 304.602,
    "AgeOver65": 30.656
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1960,
    "Age0-4": 198.892,
    "Age5-14": 298.198,
    "Age15-24": 211.605,
    "Age25-64": 383.331,
    "AgeOver65": 40.979
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1970,
    "Age0-4": 255.435,
    "Age5-14": 414.479,
    "Age15-24": 289.304,
    "Age25-64": 502.648,
    "AgeOver65": 57.42
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1980,
    "Age0-4": 288.173,
    "Age5-14": 520.769,
    "Age15-24": 403.909,
    "Age25-64": 683.381,
    "AgeOver65": 82.257
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1990,
    "Age0-4": 309.541,
    "Age5-14": 577.012,
    "Age15-24": 510.821,
    "Age25-64": 956.103,
    "AgeOver65": 117.469
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 2000,
    "Age0-4": 341.816,
    "Age5-14": 627.415,
    "Age15-24": 575.73,
    "Age25-64": 1318.107,
    "AgeOver65": 167.265
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 2010,
    "Age0-4": 368.421,
    "Age5-14": 692.721,
    "Age15-24": 631.494,
    "Age25-64": 1703.788,
    "AgeOver65": 246.267
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 2020,
    "Age0-4": 389.313,
    "Age5-14": 753.877,
    "Age15-24": 706.261,
    "Age25-64": 2096.888,
    "AgeOver65": 368.429
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1950,
    "Age0-4": 1304.935,
    "Age5-14": 1923.164,
    "Age15-24": 1457.989,
    "Age25-64": 2822.96,
    "AgeOver65": 268.404
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1960,
    "Age0-4": 1826.057,
    "Age5-14": 2618.462,
    "Age15-24": 1834.152,
    "Age25-64": 3529.272,
    "AgeOver65": 347.068
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1970,
    "Age0-4": 2334.16,
    "Age5-14": 3662.249,
    "Age15-24": 2514.268,
    "Age25-64": 4483.636,
    "AgeOver65": 465.476
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1980,
    "Age0-4": 2744.178,
    "Age5-14": 4684.301,
    "Age15-24": 3538.44,
    "Age25-64": 5942.797,
    "AgeOver65": 637.896
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1990,
    "Age0-4": 3111.912,
    "Age5-14": 5498.561,
    "Age15-24": 4492.184,
    "Age25-64": 8084.443,
    "AgeOver65": 884.333
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 2000,
    "Age0-4": 2999.922,
    "Age5-14": 6112.736,
    "Age15-24": 5274.026,
    "Age25-64": 10786.579,
    "AgeOver65": 1286.681
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 2010,
    "Age0-4": 3004.452,
    "Age5-14": 5731.466,
    "Age15-24": 5554.783,
    "Age25-64": 12932.718,
    "AgeOver65": 1804.261
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 2020,
    "Age0-4": 2833.265,
    "Age5-14": 5308.19,
    "Age15-24": 5046.642,
    "Age25-64": 16906.869,
    "AgeOver65": 2876.88
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1950,
    "Age0-4": 3252.168,
    "Age5-14": 4847.367,
    "Age15-24": 3328.938,
    "Age25-64": 6485.069,
    "AgeOver65": 666.941
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1960,
    "Age0-4": 4977.527,
    "Age5-14": 7375.569,
    "Age15-24": 4712.769,
    "Age25-64": 8391.643,
    "AgeOver65": 812.233
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1970,
    "Age0-4": 6196.071,
    "Age5-14": 10275.709,
    "Age15-24": 7130.8,
    "Age25-64": 11136.322,
    "AgeOver65": 1064.689
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1980,
    "Age0-4": 7667.74,
    "Age5-14": 12757.089,
    "Age15-24": 9960.7,
    "Age25-64": 15451.586,
    "AgeOver65": 1520.626
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1990,
    "Age0-4": 9441.99,
    "Age5-14": 15895.219,
    "Age15-24": 12463.84,
    "Age25-64": 22149.116,
    "AgeOver65": 1945.004
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 2000,
    "Age0-4": 10748.18,
    "Age5-14": 19255.153,
    "Age15-24": 15432.822,
    "Age25-64": 30006.532,
    "AgeOver65": 2549.07
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 2010,
    "Age0-4": 11019.165,
    "Age5-14": 20921.443,
    "Age15-24": 18338.73,
    "Age25-64": 39800.003,
    "AgeOver65": 3887.443
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 2020,
    "Age0-4": 10616.342,
    "Age5-14": 22304.753,
    "Age15-24": 20567.228,
    "Age25-64": 50053.04,
    "AgeOver65": 6039.722
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1950,
    "Age0-4": 306.745,
    "Age5-14": 480.628,
    "Age15-24": 386.142,
    "Age25-64": 745.843,
    "AgeOver65": 82.789
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1960,
    "Age0-4": 381.536,
    "Age5-14": 575.83,
    "Age15-24": 418.314,
    "Age25-64": 819.818,
    "AgeOver65": 60.36
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1970,
    "Age0-4": 472.099,
    "Age5-14": 741.46,
    "Age15-24": 535.699,
    "Age25-64": 963.106,
    "AgeOver65": 70.768
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1980,
    "Age0-4": 606.931,
    "Age5-14": 951.481,
    "Age15-24": 701.096,
    "Age25-64": 1217.438,
    "AgeOver65": 94.263
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1990,
    "Age0-4": 711.808,
    "Age5-14": 1229.832,
    "Age15-24": 920.97,
    "Age25-64": 1621.524,
    "AgeOver65": 131.709
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 2000,
    "Age0-4": 887.468,
    "Age5-14": 1437.621,
    "Age15-24": 1184.188,
    "Age25-64": 2158.292,
    "AgeOver65": 180.021
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 2010,
    "Age0-4": 1012.142,
    "Age5-14": 1787.942,
    "Age15-24": 1390.289,
    "Age25-64": 2877.592,
    "AgeOver65": 242.547
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 2020,
    "Age0-4": 1107.184,
    "Age5-14": 2037.338,
    "Age15-24": 1760.518,
    "Age25-64": 3722.435,
    "AgeOver65": 319.552
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1950,
    "Age0-4": 2950,
    "Age5-14": 4344.998,
    "Age15-24": 4781,
    "Age25-64": 11449.995,
    "AgeOver65": 1298.014
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1960,
    "Age0-4": 3592.221,
    "Age5-14": 6344.932,
    "Age15-24": 4171.693,
    "Age25-64": 13818.956,
    "AgeOver65": 1686.399
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1970,
    "Age0-4": 2561.214,
    "Age5-14": 6326.535,
    "Age15-24": 6255.698,
    "Age25-64": 14816.733,
    "AgeOver65": 2679.082
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1980,
    "Age0-4": 3197.5,
    "Age5-14": 5341.762,
    "Age15-24": 6244.298,
    "Age25-64": 17128.386,
    "AgeOver65": 3627.777
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1990,
    "Age0-4": 2946.532,
    "Age5-14": 6589.154,
    "Age15-24": 5341.611,
    "Age25-64": 19305.731,
    "AgeOver65": 3777.165
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 2000,
    "Age0-4": 2057.079,
    "Age5-14": 5483.73,
    "Age15-24": 6530.246,
    "Age25-64": 19849.632,
    "AgeOver65": 4636.012
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 2010,
    "Age0-4": 2007.652,
    "Age5-14": 3825.1,
    "Age15-24": 5375.779,
    "Age25-64": 21957.222,
    "AgeOver65": 5164.031
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 2020,
    "Age0-4": 1884.914,
    "Age5-14": 3874.471,
    "Age15-24": 3700.605,
    "Age25-64": 21294.367,
    "AgeOver65": 7092.248
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1950,
    "Age0-4": 366.801,
    "Age5-14": 591.499,
    "Age15-24": 414.199,
    "Age25-64": 759.403,
    "AgeOver65": 86.103
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1960,
    "Age0-4": 345.028,
    "Age5-14": 630.227,
    "Age15-24": 412.18,
    "Age25-64": 783.458,
    "AgeOver65": 124.078
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1970,
    "Age0-4": 308.929,
    "Age5-14": 651.073,
    "Age15-24": 505.287,
    "Age25-64": 990.838,
    "AgeOver65": 175.573
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1980,
    "Age0-4": 327.924,
    "Age5-14": 647.794,
    "Age15-24": 586.807,
    "Age25-64": 1280.664,
    "AgeOver65": 247.499
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1990,
    "Age0-4": 290.827,
    "Age5-14": 631.669,
    "Age15-24": 594.178,
    "Age25-64": 1550.077,
    "AgeOver65": 336.417
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 2000,
    "Age0-4": 275.313,
    "Age5-14": 588.727,
    "Age15-24": 590.486,
    "Age25-64": 1797.316,
    "AgeOver65": 417.113
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 2010,
    "Age0-4": 227.438,
    "Age5-14": 511.043,
    "Age15-24": 556.656,
    "Age25-64": 1815.289,
    "AgeOver65": 469.416
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 2020,
    "Age0-4": 84.291,
    "Age5-14": 366.356,
    "Age15-24": 327.826,
    "Age25-64": 1486.531,
    "AgeOver65": 595.836
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1950,
    "Age0-4": 1553.976,
    "Age5-14": 3028.438,
    "Age15-24": 2065.891,
    "Age25-64": 3579.015,
    "AgeOver65": 322.15
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1960,
    "Age0-4": 1945.59,
    "Age5-14": 2365.069,
    "Age15-24": 2761.261,
    "Age25-64": 3985.724,
    "AgeOver65": 366.545
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1970,
    "Age0-4": 2421.181,
    "Age5-14": 3572.719,
    "Age15-24": 2269.749,
    "Age25-64": 5689.689,
    "AgeOver65": 457.053
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1980,
    "Age0-4": 1685.98,
    "Age5-14": 4716.357,
    "Age15-24": 3503.956,
    "Age25-64": 6944.227,
    "AgeOver65": 621.624
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1990,
    "Age0-4": 1949.57,
    "Age5-14": 3555.181,
    "Age15-24": 4660.989,
    "Age25-64": 9246.761,
    "AgeOver65": 880.556
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 2000,
    "Age0-4": 1987.652,
    "Age5-14": 3959.761,
    "Age15-24": 3515.545,
    "Age25-64": 12114.507,
    "AgeOver65": 1351.613
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 2010,
    "Age0-4": 1700.636,
    "Age5-14": 3856.815,
    "Age15-24": 3912.315,
    "Age25-64": 12929.273,
    "AgeOver65": 2149.801
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 2020,
    "Age0-4": 1746.093,
    "Age5-14": 3369.268,
    "Age15-24": 3817.112,
    "Age25-64": 14436.356,
    "AgeOver65": 2409.986
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1950,
    "Age0-4": 897.68,
    "Age5-14": 1593.152,
    "Age15-24": 1569.171,
    "Age25-64": 3767.414,
    "AgeOver65": 589.554
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1960,
    "Age0-4": 902.576,
    "Age5-14": 1688.827,
    "Age15-24": 1439.194,
    "Age25-64": 4104.123,
    "AgeOver65": 709.918
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1970,
    "Age0-4": 825.464,
    "Age5-14": 1657.987,
    "Age15-24": 1360.142,
    "Age25-64": 3966.759,
    "AgeOver65": 840.982
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1980,
    "Age0-4": 807.776,
    "Age5-14": 1710.276,
    "Age15-24": 1602.676,
    "Age25-64": 4505.969,
    "AgeOver65": 1124.269
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1990,
    "Age0-4": 565.628,
    "Age5-14": 1465.62,
    "Age15-24": 1601.073,
    "Age25-64": 4909.836,
    "AgeOver65": 1353.201
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 2000,
    "Age0-4": 532.463,
    "Age5-14": 1118.24,
    "Age15-24": 1497.344,
    "Age25-64": 5473.886,
    "AgeOver65": 1675.184
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 2010,
    "Age0-4": 492.229,
    "Age5-14": 1093.698,
    "Age15-24": 1165.41,
    "Age25-64": 5867.202,
    "AgeOver65": 1977.516
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 2020,
    "Age0-4": 400.652,
    "Age5-14": 930.423,
    "Age15-24": 1065.001,
    "Age25-64": 5478.61,
    "AgeOver65": 2322.021
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1950,
    "Age0-4": 269.256,
    "Age5-14": 423.246,
    "Age15-24": 281.967,
    "Age25-64": 456.052,
    "AgeOver65": 42.72
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1960,
    "Age0-4": 350.948,
    "Age5-14": 562.473,
    "Age15-24": 341.467,
    "Age25-64": 588.237,
    "AgeOver65": 60.865
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1970,
    "Age0-4": 426.132,
    "Age5-14": 716.076,
    "Age15-24": 484.374,
    "Age25-64": 761.887,
    "AgeOver65": 86.288
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1980,
    "Age0-4": 508.261,
    "Age5-14": 843.423,
    "Age15-24": 645.657,
    "Age25-64": 1062.691,
    "AgeOver65": 121.595
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1990,
    "Age0-4": 659.769,
    "Age5-14": 1089.745,
    "Age15-24": 807.209,
    "Age25-64": 1495.514,
    "AgeOver65": 171.176
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 2000,
    "Age0-4": 709.72,
    "Age5-14": 1338.347,
    "Age15-24": 1064.115,
    "Age25-64": 1979.03,
    "AgeOver65": 231.99
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 2010,
    "Age0-4": 686.547,
    "Age5-14": 1371.264,
    "Age15-24": 1302.96,
    "Age25-64": 2560.985,
    "AgeOver65": 326.261
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 2020,
    "Age0-4": 701.092,
    "Age5-14": 1359.745,
    "Age15-24": 1337.14,
    "Age25-64": 3248.759,
    "AgeOver65": 485.794
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 1950,
    "Age0-4": 171.835,
    "Age5-14": 251.835,
    "Age15-24": 164.01,
    "Age25-64": 299.488,
    "AgeOver65": 44.757
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 1960,
    "Age0-4": 200.125,
    "Age5-14": 294.366,
    "Age15-24": 210.382,
    "Age25-64": 321.514,
    "AgeOver65": 42.931
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 1970,
    "Age0-4": 234.377,
    "Age5-14": 322.406,
    "Age15-24": 208.286,
    "Age25-64": 329.409,
    "AgeOver65": 32.15
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 1980,
    "Age0-4": 300.268,
    "Age5-14": 452.67,
    "Age15-24": 289.514,
    "Age25-64": 434.188,
    "AgeOver65": 34.077
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 1990,
    "Age0-4": 412.137,
    "Age5-14": 607.459,
    "Age15-24": 421.807,
    "Age25-64": 615.317,
    "AgeOver65": 44.725
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 2000,
    "Age0-4": 584.161,
    "Age5-14": 957.106,
    "Age15-24": 627.1,
    "Age25-64": 982.283,
    "AgeOver65": 73.359
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 2010,
    "Age0-4": 625.242,
    "Age5-14": 1090.033,
    "Age15-24": 877.77,
    "Age25-64": 1350.902,
    "AgeOver65": 111.685
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 2020,
    "Age0-4": 692.913,
    "Age5-14": 1264.048,
    "Age15-24": 1015.702,
    "Age25-64": 1964.689,
    "AgeOver65": 164.064
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1950,
    "Age0-4": 8.98,
    "Age5-14": 16.165,
    "Age15-24": 12.465,
    "Age25-64": 21.453,
    "AgeOver65": 1.207
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1960,
    "Age0-4": 13.427,
    "Age5-14": 20.258,
    "Age15-24": 14.282,
    "Age25-64": 27.913,
    "AgeOver65": 2.2
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1970,
    "Age0-4": 19.371,
    "Age5-14": 31.111,
    "Age15-24": 18.576,
    "Age25-64": 38.406,
    "AgeOver65": 3.026
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1980,
    "Age0-4": 21.086,
    "Age5-14": 40.118,
    "Age15-24": 31.907,
    "Age25-64": 55.367,
    "AgeOver65": 4.82
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1990,
    "Age0-4": 27.065,
    "Age5-14": 43.683,
    "Age15-24": 41.453,
    "Age25-64": 81.084,
    "AgeOver65": 6.621
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 2000,
    "Age0-4": 23.709,
    "Age5-14": 52.939,
    "Age15-24": 41.073,
    "Age25-64": 112.706,
    "AgeOver65": 10.254
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 2010,
    "Age0-4": 21.447,
    "Age5-14": 46.442,
    "Age15-24": 47.079,
    "Age25-64": 134.55,
    "AgeOver65": 16.931
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 2020,
    "Age0-4": 20.092,
    "Age5-14": 42.332,
    "Age15-24": 42.802,
    "Age25-64": 150.206,
    "AgeOver65": 25.472
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1950,
    "Age0-4": 4.323,
    "Age5-14": 6.245,
    "Age15-24": 4.635,
    "Age25-64": 8.943,
    "AgeOver65": 0.86
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1960,
    "Age0-4": 8.291,
    "Age5-14": 11.306,
    "Age15-24": 9.184,
    "Age25-64": 17.212,
    "AgeOver65": 1.39
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1970,
    "Age0-4": 16.985,
    "Age5-14": 22.523,
    "Age15-24": 22.789,
    "Age25-64": 45.029,
    "AgeOver65": 2.195
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1980,
    "Age0-4": 33.639,
    "Age5-14": 41.587,
    "Age15-24": 44.933,
    "Age25-64": 99.941,
    "AgeOver65": 3.522
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1990,
    "Age0-4": 51.572,
    "Age5-14": 83.153,
    "Age15-24": 65.903,
    "Age25-64": 269.428,
    "AgeOver65": 6.219
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 2000,
    "Age0-4": 54.852,
    "Age5-14": 97.549,
    "Age15-24": 81.664,
    "Age25-64": 348.068,
    "AgeOver65": 10.334
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 2010,
    "Age0-4": 93.425,
    "Age5-14": 145.804,
    "Age15-24": 266.502,
    "Age25-64": 1337.331,
    "AgeOver65": 13.267
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 2020,
    "Age0-4": 135.162,
    "Age5-14": 257.792,
    "Age15-24": 343.425,
    "Age25-64": 2096.018,
    "AgeOver65": 48.663
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 1950,
    "Age0-4": 41.908,
    "Age5-14": 56.515,
    "Age15-24": 45.832,
    "Age25-64": 94.205,
    "AgeOver65": 9.654
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 1960,
    "Age0-4": 59.57,
    "Age5-14": 91.263,
    "Age15-24": 55.234,
    "Age25-64": 117.766,
    "AgeOver65": 11.861
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 1970,
    "Age0-4": 74.567,
    "Age5-14": 134.863,
    "Age15-24": 84.896,
    "Age25-64": 152.064,
    "AgeOver65": 15.639
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 1980,
    "Age0-4": 57.471,
    "Age5-14": 133.836,
    "Age15-24": 116.007,
    "Age25-64": 179.366,
    "AgeOver65": 22.584
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 1990,
    "Age0-4": 67.54,
    "Age5-14": 121.04,
    "Age15-24": 130.288,
    "Age25-64": 257.294,
    "AgeOver65": 34.422
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 2000,
    "Age0-4": 70.782,
    "Age5-14": 140.076,
    "Age15-24": 123.156,
    "Age25-64": 353.47,
    "AgeOver65": 49.23
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 2010,
    "Age0-4": 70.954,
    "Age5-14": 140.138,
    "Age15-24": 135.731,
    "Age25-64": 412.627,
    "AgeOver65": 71.057
  },
  {
    "Entity": "Reunion",
    "Code": "REU",
    "Year": 2020,
    "Age0-4": 64.839,
    "Age5-14": 135.547,
    "Age15-24": 134.71,
    "Age25-64": 446.305,
    "AgeOver65": 113.907
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1950,
    "Age0-4": 1644.665,
    "Age5-14": 2943.457,
    "Age15-24": 3182.516,
    "Age25-64": 7533.864,
    "AgeOver65": 931.787
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1960,
    "Age0-4": 1863.093,
    "Age5-14": 3511.675,
    "Age15-24": 2905.357,
    "Age25-64": 9062.779,
    "AgeOver65": 1271.041
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1970,
    "Age0-4": 2028.48,
    "Age5-14": 3302.36,
    "Age15-24": 3484.272,
    "Age25-64": 9994.581,
    "AgeOver65": 1739.219
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1980,
    "Age0-4": 2053.751,
    "Age5-14": 4009.027,
    "Age15-24": 3256.703,
    "Age25-64": 10991.547,
    "AgeOver65": 2304.616
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1990,
    "Age0-4": 1817.384,
    "Age5-14": 3760.951,
    "Age15-24": 3920.673,
    "Age25-64": 11546.079,
    "AgeOver65": 2444.069
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 2000,
    "Age0-4": 1101.366,
    "Age5-14": 3013.456,
    "Age15-24": 3562.004,
    "Age25-64": 11447.955,
    "AgeOver65": 3012.642
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 2010,
    "Age0-4": 1109.095,
    "Age5-14": 2120.442,
    "Age15-24": 2718.615,
    "Age25-64": 11316.338,
    "AgeOver65": 3207.37
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 2020,
    "Age0-4": 939.606,
    "Age5-14": 2046.202,
    "Age15-24": 2004.422,
    "Age25-64": 10547.873,
    "AgeOver65": 3699.579
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1950,
    "Age0-4": 11108.268,
    "Age5-14": 19594.212,
    "Age15-24": 22306.819,
    "Age25-64": 44823.854,
    "AgeOver65": 4965.496
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1960,
    "Age0-4": 13280.1,
    "Age5-14": 23124.152,
    "Age15-24": 19212.328,
    "Age25-64": 56962.222,
    "AgeOver65": 7292.898
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1970,
    "Age0-4": 9387.236,
    "Age5-14": 24733.455,
    "Age15-24": 22507.943,
    "Age25-64": 63473.608,
    "AgeOver65": 10046.408
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1980,
    "Age0-4": 10540.649,
    "Age5-14": 19228.336,
    "Age15-24": 24499.753,
    "Age25-64": 69583.977,
    "AgeOver65": 14200.428
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1990,
    "Age0-4": 11520.58,
    "Age5-14": 22260.462,
    "Age15-24": 19597.124,
    "Age25-64": 78947.065,
    "AgeOver65": 15206.331
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 2000,
    "Age0-4": 6434.993,
    "Age5-14": 20276.087,
    "Age15-24": 23019.757,
    "Age25-64": 78456.046,
    "AgeOver65": 18218.007
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 2010,
    "Age0-4": 8060.273,
    "Age5-14": 13357.28,
    "Age15-24": 21391.834,
    "Age25-64": 81864.961,
    "AgeOver65": 18804.925
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 2020,
    "Age0-4": 9271.691,
    "Age5-14": 17525.178,
    "Age15-24": 13696.471,
    "Age25-64": 82808.25,
    "AgeOver65": 22632.87
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1950,
    "Age0-4": 420.902,
    "Age5-14": 523.688,
    "Age15-24": 466.799,
    "Age25-64": 713.774,
    "AgeOver65": 61.02
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1960,
    "Age0-4": 587.859,
    "Age5-14": 815.05,
    "Age15-24": 487.813,
    "Age25-64": 953.08,
    "AgeOver65": 91.773
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1970,
    "Age0-4": 706.27,
    "Age5-14": 1088.004,
    "Age15-24": 756.482,
    "Age25-64": 1098.362,
    "AgeOver65": 108.233
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1980,
    "Age0-4": 1056.603,
    "Age5-14": 1416.978,
    "Age15-24": 1022.609,
    "Age25-64": 1534.27,
    "AgeOver65": 122.854
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1990,
    "Age0-4": 1422.33,
    "Age5-14": 2179.994,
    "Age15-24": 1363.555,
    "Age25-64": 2164.813,
    "AgeOver65": 158.191
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 2000,
    "Age0-4": 1289.528,
    "Age5-14": 2230.892,
    "Age15-24": 1652.919,
    "Age25-64": 2471.548,
    "AgeOver65": 288.801
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 2010,
    "Age0-4": 1578.409,
    "Age5-14": 2591.868,
    "Age15-24": 2132.803,
    "Age25-64": 3478.143,
    "AgeOver65": 258.115
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 2020,
    "Age0-4": 1885.105,
    "Age5-14": 3227.684,
    "Age15-24": 2537.59,
    "Age25-64": 4897.814,
    "AgeOver65": 404.016
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1950,
    "Age0-4": 537.36,
    "Age5-14": 773.951,
    "Age15-24": 574.912,
    "Age25-64": 1130.908,
    "AgeOver65": 104.209
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1960,
    "Age0-4": 714.698,
    "Age5-14": 1048.422,
    "Age15-24": 746.56,
    "Age25-64": 1428.851,
    "AgeOver65": 148.003
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1970,
    "Age0-4": 1063.331,
    "Age5-14": 1517.816,
    "Age15-24": 1071.581,
    "Age25-64": 1982.878,
    "AgeOver65": 200.782
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1980,
    "Age0-4": 1753.332,
    "Age5-14": 2474.707,
    "Age15-24": 1730.254,
    "Age25-64": 3440.079,
    "AgeOver65": 293.099
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1990,
    "Age0-4": 2695.119,
    "Age5-14": 4123.848,
    "Age15-24": 2991.18,
    "Age25-64": 5966.313,
    "AgeOver65": 457.326
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 2000,
    "Age0-4": 2695.655,
    "Age5-14": 5212.891,
    "Age15-24": 3751.597,
    "Age25-64": 8383.562,
    "AgeOver65": 620.135
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 2010,
    "Age0-4": 2919.907,
    "Age5-14": 5225.213,
    "Age15-24": 5075.708,
    "Age25-64": 13386.375,
    "AgeOver65": 814.265
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 2020,
    "Age0-4": 2978.337,
    "Age5-14": 5619.378,
    "Age15-24": 4551.913,
    "Age25-64": 20446.29,
    "AgeOver65": 1217.949
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1950,
    "Age0-4": 1030.239,
    "Age5-14": 1476.137,
    "Age15-24": 1074.27,
    "Age25-64": 1960.615,
    "AgeOver65": 192.528
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1960,
    "Age0-4": 1390.108,
    "Age5-14": 2004.504,
    "Age15-24": 1397.639,
    "Age25-64": 2508.169,
    "AgeOver65": 244.078
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1970,
    "Age0-4": 1960.054,
    "Age5-14": 2799.705,
    "Age15-24": 1916.374,
    "Age25-64": 3297.646,
    "AgeOver65": 307.916
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1980,
    "Age0-4": 2751.919,
    "Age5-14": 4079.244,
    "Age15-24": 2734,
    "Age25-64": 4517.316,
    "AgeOver65": 424.987
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1990,
    "Age0-4": 3533.683,
    "Age5-14": 5636.885,
    "Age15-24": 4019.931,
    "Age25-64": 6368.217,
    "AgeOver65": 588.876
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 2000,
    "Age0-4": 4669.643,
    "Age5-14": 7277.288,
    "Age15-24": 5423.284,
    "Age25-64": 9070.089,
    "AgeOver65": 834.715
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 2010,
    "Age0-4": 5557.947,
    "Age5-14": 9294.487,
    "Age15-24": 6672.484,
    "Age25-64": 11891.683,
    "AgeOver65": 1128.413
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 2020,
    "Age0-4": 6339.078,
    "Age5-14": 11112.652,
    "Age15-24": 8960.121,
    "Age25-64": 15826.341,
    "AgeOver65": 1611.077
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1950,
    "Age0-4": 427.813,
    "Age5-14": 611.932,
    "Age15-24": 468.348,
    "Age25-64": 893.171,
    "AgeOver65": 85.378
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1960,
    "Age0-4": 601.279,
    "Age5-14": 806.704,
    "Age15-24": 578.893,
    "Age25-64": 1135.77,
    "AgeOver65": 84.111
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1970,
    "Age0-4": 794.407,
    "Age5-14": 1102.438,
    "Age15-24": 776.346,
    "Age25-64": 1478.28,
    "AgeOver65": 106.037
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1980,
    "Age0-4": 1072.846,
    "Age5-14": 1513.292,
    "Age15-24": 1021.879,
    "Age25-64": 1826.688,
    "AgeOver65": 148.452
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1990,
    "Age0-4": 1368.367,
    "Age5-14": 2156.732,
    "Age15-24": 1449.48,
    "Age25-64": 2328.203,
    "AgeOver65": 223.524
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 2000,
    "Age0-4": 1658.629,
    "Age5-14": 2721.771,
    "Age15-24": 2047.749,
    "Age25-64": 3055.63,
    "AgeOver65": 313.952
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 2010,
    "Age0-4": 2147.173,
    "Age5-14": 3368.704,
    "Age15-24": 2592.903,
    "Age25-64": 4169.304,
    "AgeOver65": 400.059
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 2020,
    "Age0-4": 2615.341,
    "Age5-14": 4516.159,
    "Age15-24": 3283.825,
    "Age25-64": 5808.178,
    "AgeOver65": 520.427
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1950,
    "Age0-4": 164.501,
    "Age5-14": 249.1,
    "Age15-24": 182.401,
    "Age25-64": 401.596,
    "AgeOver65": 24.497
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1960,
    "Age0-4": 301.994,
    "Age5-14": 403.986,
    "Age15-24": 283.854,
    "Age25-64": 609.908,
    "AgeOver65": 33.391
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1970,
    "Age0-4": 235.32,
    "Age5-14": 568.21,
    "Age15-24": 449.806,
    "Age25-64": 749.949,
    "AgeOver65": 68.999
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1980,
    "Age0-4": 193.577,
    "Age5-14": 458.56,
    "Age15-24": 582.63,
    "Age25-64": 1062.945,
    "AgeOver65": 113.978
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1990,
    "Age0-4": 228.261,
    "Age5-14": 418.355,
    "Age15-24": 561.934,
    "Age25-64": 1635.728,
    "AgeOver65": 168.69
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 2000,
    "Age0-4": 237.083,
    "Age5-14": 516.74,
    "Age15-24": 551.218,
    "Age25-64": 2466.642,
    "AgeOver65": 257.189
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 2010,
    "Age0-4": 212.562,
    "Age5-14": 505.484,
    "Age15-24": 746.506,
    "Age25-64": 3294.09,
    "AgeOver65": 372.528
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 2020,
    "Age0-4": 258.176,
    "Age5-14": 461.486,
    "Age15-24": 662.706,
    "Age25-64": 3686.862,
    "AgeOver65": 781.113
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1950,
    "Age0-4": 14.202,
    "Age5-14": 24.001,
    "Age15-24": 17.801,
    "Age25-64": 32,
    "AgeOver65": 1.789
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1960,
    "Age0-4": 19.466,
    "Age5-14": 30.775,
    "Age15-24": 22.913,
    "Age25-64": 41.569,
    "AgeOver65": 3.124
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1970,
    "Age0-4": 27.574,
    "Age5-14": 41.747,
    "Age15-24": 31.066,
    "Age25-64": 54.251,
    "AgeOver65": 5.602
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1980,
    "Age0-4": 44.577,
    "Age5-14": 64.69,
    "Age15-24": 42.239,
    "Age25-64": 71.791,
    "AgeOver65": 7.253
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1990,
    "Age0-4": 53.137,
    "Age5-14": 88.587,
    "Age15-24": 63.061,
    "Age25-64": 98.334,
    "AgeOver65": 8.75
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 2000,
    "Age0-4": 64.805,
    "Age5-14": 108.19,
    "Age15-24": 86.524,
    "Age25-64": 141.361,
    "AgeOver65": 11.785
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 2010,
    "Age0-4": 79.634,
    "Age5-14": 135.478,
    "Age15-24": 100.306,
    "Age25-64": 194.813,
    "AgeOver65": 17.63
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 2020,
    "Age0-4": 103.156,
    "Age5-14": 171.805,
    "Age15-24": 131.029,
    "Age25-64": 255.675,
    "AgeOver65": 25.213
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1950,
    "Age0-4": 326.865,
    "Age5-14": 477.542,
    "Age15-24": 381.78,
    "Age25-64": 793.376,
    "AgeOver65": 61.638
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1960,
    "Age0-4": 362.35,
    "Age5-14": 526.282,
    "Age15-24": 432.288,
    "Age25-64": 911.103,
    "AgeOver65": 85.615
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1970,
    "Age0-4": 459.144,
    "Age5-14": 644.637,
    "Age15-24": 483.15,
    "Age25-64": 1050.093,
    "AgeOver65": 107.866
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1980,
    "Age0-4": 587.012,
    "Age5-14": 854.53,
    "Age15-24": 600.928,
    "Age25-64": 1214.889,
    "AgeOver65": 131.135
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1990,
    "Age0-4": 760.355,
    "Age5-14": 1136.074,
    "Age15-24": 809.122,
    "Age25-64": 1457.705,
    "AgeOver65": 156.507
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 2000,
    "Age0-4": 788.65,
    "Age5-14": 1236.32,
    "Age15-24": 902.573,
    "Age25-64": 1506.089,
    "AgeOver65": 150.938
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 2010,
    "Age0-4": 1054.666,
    "Age5-14": 1706.488,
    "Age15-24": 1294.245,
    "Age25-64": 2164.134,
    "AgeOver65": 196.103
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 2020,
    "Age0-4": 1158.651,
    "Age5-14": 2059.553,
    "Age15-24": 1628.898,
    "Age25-64": 2896.369,
    "AgeOver65": 233.514
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1950,
    "Age0-4": 364.752,
    "Age5-14": 574.9,
    "Age15-24": 415.723,
    "Age25-64": 757.228,
    "AgeOver65": 87.3
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1960,
    "Age0-4": 511.465,
    "Age5-14": 732.372,
    "Age15-24": 505.797,
    "Age25-64": 924.248,
    "AgeOver65": 92.437
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1970,
    "Age0-4": 650.208,
    "Age5-14": 1025.433,
    "Age15-24": 690.542,
    "Age25-64": 1188.606,
    "AgeOver65": 118.277
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1980,
    "Age0-4": 761.191,
    "Age5-14": 1252.237,
    "Age15-24": 888.672,
    "Age25-64": 1528.79,
    "AgeOver65": 160.245
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1990,
    "Age0-4": 747.548,
    "Age5-14": 1360.228,
    "Age15-24": 1037.019,
    "Age25-64": 1896.515,
    "AgeOver65": 228.764
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 2000,
    "Age0-4": 752.599,
    "Age5-14": 1404.802,
    "Age15-24": 1104.263,
    "Age25-64": 2303.819,
    "AgeOver65": 322.447
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 2010,
    "Age0-4": 606.673,
    "Age5-14": 1349.947,
    "Age15-24": 1223.103,
    "Age25-64": 2566.752,
    "AgeOver65": 437.402
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 2020,
    "Age0-4": 576.216,
    "Age5-14": 1148.503,
    "Age15-24": 1221.011,
    "Age25-64": 2979.352,
    "AgeOver65": 561.119
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1950,
    "Age0-4": 388.87,
    "Age5-14": 544.967,
    "Age15-24": 413.28,
    "Age25-64": 858.221,
    "AgeOver65": 58.738
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1960,
    "Age0-4": 481.588,
    "Age5-14": 692.304,
    "Age15-24": 501.113,
    "Age25-64": 999.343,
    "AgeOver65": 81.619
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1970,
    "Age0-4": 609.196,
    "Age5-14": 882.221,
    "Age15-24": 644.716,
    "Age25-64": 1199.016,
    "AgeOver65": 109.42
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1980,
    "Age0-4": 1089.685,
    "Age5-14": 1659.067,
    "Age15-24": 1192.626,
    "Age25-64": 2139.117,
    "AgeOver65": 200.643
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1990,
    "Age0-4": 1339.292,
    "Age5-14": 1854.01,
    "Age15-24": 1399.468,
    "Age25-64": 2419.943,
    "AgeOver65": 212.376
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 2000,
    "Age0-4": 1777.544,
    "Age5-14": 2410.108,
    "Age15-24": 1569.588,
    "Age25-64": 2881.721,
    "AgeOver65": 233.289
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 2010,
    "Age0-4": 2266.662,
    "Age5-14": 3535.421,
    "Age15-24": 2275.719,
    "Age25-64": 3642.032,
    "AgeOver65": 324.052
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 2020,
    "Age0-4": 2826.505,
    "Age5-14": 4508.202,
    "Age15-24": 3352.522,
    "Age25-64": 4744.746,
    "AgeOver65": 461.244
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 1950,
    "Age0-4": 747.122,
    "Age5-14": 1143.33,
    "Age15-24": 1382.12,
    "Age25-64": 2946.652,
    "AgeOver65": 513.028
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 1960,
    "Age0-4": 710.818,
    "Age5-14": 1546.716,
    "Age15-24": 1131.695,
    "Age25-64": 3670.091,
    "AgeOver65": 497.412
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 1970,
    "Age0-4": 690.926,
    "Age5-14": 1352.044,
    "Age15-24": 1507.222,
    "Age25-64": 3893.398,
    "AgeOver65": 676.275
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 1980,
    "Age0-4": 779.578,
    "Age5-14": 1420.732,
    "Age15-24": 1343.878,
    "Age25-64": 4543.208,
    "AgeOver65": 820.899
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 1990,
    "Age0-4": 731.948,
    "Age5-14": 1530.662,
    "Age15-24": 1409.221,
    "Age25-64": 4933.482,
    "AgeOver65": 912.364
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 2000,
    "Age0-4": 598.343,
    "Age5-14": 1346.413,
    "Age15-24": 1362.624,
    "Age25-64": 4895.925,
    "AgeOver65": 1284.307
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 2010,
    "Age0-4": 489.48,
    "Age5-14": 1069.162,
    "Age15-24": 1228.118,
    "Age25-64": 4879.158,
    "AgeOver65": 1325.34
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 2020,
    "Age0-4": 419.057,
    "Age5-14": 923.626,
    "Age15-24": 1042.037,
    "Age25-64": 4687.437,
    "AgeOver65": 1665.213
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1950,
    "Age0-4": 434.439,
    "Age5-14": 627.709,
    "Age15-24": 472.752,
    "Age25-64": 861.153,
    "AgeOver65": 86.253
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1960,
    "Age0-4": 487.081,
    "Age5-14": 693.15,
    "Age15-24": 563.146,
    "Age25-64": 1020.923,
    "AgeOver65": 78.418
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1970,
    "Age0-4": 633.996,
    "Age5-14": 879.886,
    "Age15-24": 632.826,
    "Age25-64": 1258.577,
    "AgeOver65": 88.726
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1980,
    "Age0-4": 810.532,
    "Age5-14": 1185.982,
    "Age15-24": 830.692,
    "Age25-64": 1555.772,
    "AgeOver65": 119.625
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1990,
    "Age0-4": 996.827,
    "Age5-14": 1434.347,
    "Age15-24": 1055.227,
    "Age25-64": 1851.7,
    "AgeOver65": 154.519
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 2000,
    "Age0-4": 1104.315,
    "Age5-14": 1674.461,
    "Age15-24": 1164.112,
    "Age25-64": 2065.571,
    "AgeOver65": 190.937
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 2010,
    "Age0-4": 1583.166,
    "Age5-14": 2554.715,
    "Age15-24": 1892.463,
    "Age25-64": 3161.43,
    "AgeOver65": 316.598
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 2020,
    "Age0-4": 1707.392,
    "Age5-14": 2918.721,
    "Age15-24": 2263.635,
    "Age25-64": 3928.679,
    "AgeOver65": 375.302
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1950,
    "Age0-4": 9.758,
    "Age5-14": 9.998,
    "Age15-24": 10.945,
    "Age25-64": 26.912,
    "AgeOver65": 2.385
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1960,
    "Age0-4": 10.322,
    "Age5-14": 10.931,
    "Age15-24": 11.796,
    "Age25-64": 28.795,
    "AgeOver65": 2.45
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1970,
    "Age0-4": 14.999,
    "Age5-14": 20.254,
    "Age15-24": 14.284,
    "Age25-64": 21.646,
    "AgeOver65": 3.387
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1980,
    "Age0-4": 19.344,
    "Age5-14": 26.279,
    "Age15-24": 18.057,
    "Age25-64": 27.997,
    "AgeOver65": 4.111
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1990,
    "Age0-4": 20.388,
    "Age5-14": 37.511,
    "Age15-24": 22.463,
    "Age25-64": 34.549,
    "AgeOver65": 4.3
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 2000,
    "Age0-4": 23.065,
    "Age5-14": 40.058,
    "Age15-24": 33.121,
    "Age25-64": 41.345,
    "AgeOver65": 4.675
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 2010,
    "Age0-4": 29.765,
    "Age5-14": 48.524,
    "Age15-24": 35.039,
    "Age25-64": 61.63,
    "AgeOver65": 5.414
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 2020,
    "Age0-4": 31.754,
    "Age5-14": 59.763,
    "Age15-24": 43.68,
    "Age25-64": 77.371,
    "AgeOver65": 6.593
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1950,
    "Age0-4": 37,
    "Age5-14": 49,
    "Age15-24": 38.997,
    "Age25-64": 77.009,
    "AgeOver65": 12.99
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1960,
    "Age0-4": 58.046,
    "Age5-14": 77.852,
    "Age15-24": 44.969,
    "Age25-64": 95.008,
    "AgeOver65": 11.995
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1970,
    "Age0-4": 62.676,
    "Age5-14": 114.151,
    "Age15-24": 65.828,
    "Age25-64": 110.885,
    "AgeOver65": 14.386
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1980,
    "Age0-4": 44.852,
    "Age5-14": 98.206,
    "Age15-24": 81.481,
    "Age25-64": 119.025,
    "AgeOver65": 15.967
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1990,
    "Age0-4": 52.557,
    "Age5-14": 86.294,
    "Age15-24": 82.986,
    "Age25-64": 164.087,
    "AgeOver65": 19.245
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 2000,
    "Age0-4": 53.65,
    "Age5-14": 100.388,
    "Age15-24": 82.949,
    "Age25-64": 208.1,
    "AgeOver65": 25.857
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 2010,
    "Age0-4": 52.358,
    "Age5-14": 103.221,
    "Age15-24": 94.831,
    "Age25-64": 246.052,
    "AgeOver65": 32.664
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 2020,
    "Age0-4": 52.186,
    "Age5-14": 104.239,
    "Age15-24": 99.373,
    "Age25-64": 288.975,
    "AgeOver65": 41.861
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1950,
    "Age0-4": 372.57,
    "Age5-14": 617.095,
    "Age15-24": 606.742,
    "Age25-64": 1612.593,
    "AgeOver65": 227.576
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1960,
    "Age0-4": 455.781,
    "Age5-14": 846.836,
    "Age15-24": 614.308,
    "Age25-64": 1942.658,
    "AgeOver65": 280.545
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1970,
    "Age0-4": 386.167,
    "Age5-14": 862.313,
    "Age15-24": 822.024,
    "Age25-64": 2051.518,
    "AgeOver65": 416.821
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1980,
    "Age0-4": 485.118,
    "Age5-14": 822.166,
    "Age15-24": 851.437,
    "Age25-64": 2314.135,
    "AgeOver65": 523.874
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1990,
    "Age0-4": 416.053,
    "Age5-14": 926.64,
    "Age15-24": 804.704,
    "Age25-64": 2599.703,
    "AgeOver65": 541.355
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 2000,
    "Age0-4": 286.865,
    "Age5-14": 777.506,
    "Age15-24": 928.622,
    "Age25-64": 2796.56,
    "AgeOver65": 609.654
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 2010,
    "Age0-4": 280.029,
    "Age5-14": 548.725,
    "Age15-24": 772.202,
    "Age25-64": 3130.378,
    "AgeOver65": 672.959
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 2020,
    "Age0-4": 283.691,
    "Age5-14": 565.477,
    "Age15-24": 553.623,
    "Age25-64": 3145.138,
    "AgeOver65": 911.714
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1950,
    "Age0-4": 149,
    "Age5-14": 256.1,
    "Age15-24": 269.7,
    "Age25-64": 694.997,
    "AgeOver65": 103.296
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1960,
    "Age0-4": 141.332,
    "Age5-14": 297.553,
    "Age15-24": 246.201,
    "Age25-64": 778.131,
    "AgeOver65": 123.411
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1970,
    "Age0-4": 133.943,
    "Age5-14": 268.831,
    "Age15-24": 290.505,
    "Age25-64": 811.725,
    "AgeOver65": 164.58
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1980,
    "Age0-4": 149.414,
    "Age5-14": 279.895,
    "Age15-24": 287.508,
    "Age25-64": 910.118,
    "AgeOver65": 208.907
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1990,
    "Age0-4": 122.853,
    "Age5-14": 293.031,
    "Age15-24": 295.713,
    "Age25-64": 1081.318,
    "AgeOver65": 213.489
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 2000,
    "Age0-4": 90.018,
    "Age5-14": 223.507,
    "Age15-24": 291.777,
    "Age25-64": 1101.943,
    "AgeOver65": 280.465
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 2010,
    "Age0-4": 104.205,
    "Age5-14": 181.668,
    "Age15-24": 232.481,
    "Age25-64": 1183.97,
    "AgeOver65": 341.012
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 2020,
    "Age0-4": 101.272,
    "Age5-14": 213.405,
    "Age15-24": 188.186,
    "Age25-64": 1144.948,
    "AgeOver65": 431.121
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1950,
    "Age0-4": 617.943,
    "Age5-14": 1016.444,
    "Age15-24": 882.676,
    "Age25-64": 3778.608,
    "AgeOver65": 714.242
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1960,
    "Age0-4": 522.439,
    "Age5-14": 1156.082,
    "Age15-24": 1037.145,
    "Age25-64": 3886.98,
    "AgeOver65": 879.89
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1970,
    "Age0-4": 582.466,
    "Age5-14": 1096.027,
    "Age15-24": 1217.63,
    "Age25-64": 4055.199,
    "AgeOver65": 1103.587
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1980,
    "Age0-4": 487.696,
    "Age5-14": 1141.418,
    "Age15-24": 1125.659,
    "Age25-64": 4204.231,
    "AgeOver65": 1357.327
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1990,
    "Age0-4": 553.121,
    "Age5-14": 982.573,
    "Age15-24": 1172.216,
    "Age25-64": 4332.441,
    "AgeOver65": 1527.024
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 2000,
    "Age0-4": 463.549,
    "Age5-14": 1172.655,
    "Age15-24": 1025.624,
    "Age25-64": 4682.964,
    "AgeOver65": 1536.85
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 2010,
    "Age0-4": 555.834,
    "Age5-14": 994.285,
    "Age15-24": 1270.422,
    "Age25-64": 4858.862,
    "AgeOver65": 1710.754
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 2020,
    "Age0-4": 601.45,
    "Age5-14": 1178.402,
    "Age15-24": 1085.012,
    "Age25-64": 5181.346,
    "AgeOver65": 2053.06
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1950,
    "Age0-4": 48.672,
    "Age5-14": 68.716,
    "Age15-24": 51.93,
    "Age25-64": 96.368,
    "AgeOver65": 7.311
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1960,
    "Age0-4": 61.998,
    "Age5-14": 92.227,
    "Age15-24": 62.284,
    "Age25-64": 110.072,
    "AgeOver65": 9.997
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1970,
    "Age0-4": 83.234,
    "Age5-14": 120.614,
    "Age15-24": 84.258,
    "Age25-64": 130.506,
    "AgeOver65": 12.639
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1980,
    "Age0-4": 120.06,
    "Age5-14": 174.316,
    "Age15-24": 110.076,
    "Age25-64": 167.68,
    "AgeOver65": 15.72
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1990,
    "Age0-4": 146.659,
    "Age5-14": 254.099,
    "Age15-24": 163.699,
    "Age25-64": 237.767,
    "AgeOver65": 20.199
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 2000,
    "Age0-4": 146.358,
    "Age5-14": 286.061,
    "Age15-24": 229.905,
    "Age25-64": 314.628,
    "AgeOver65": 28.48
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 2010,
    "Age0-4": 151.903,
    "Age5-14": 276.035,
    "Age15-24": 235.436,
    "Age25-64": 362.412,
    "AgeOver65": 39.055
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 2020,
    "Age0-4": 143.677,
    "Age5-14": 290.722,
    "Age15-24": 242.056,
    "Age25-64": 437.154,
    "AgeOver65": 46.555
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1950,
    "Age0-4": 4.461,
    "Age5-14": 6.931,
    "Age15-24": 6.109,
    "Age25-64": 16.172,
    "AgeOver65": 2.652
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1960,
    "Age0-4": 6.836,
    "Age5-14": 9.251,
    "Age15-24": 6.613,
    "Age25-64": 16.326,
    "AgeOver65": 2.585
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1970,
    "Age0-4": 8.27,
    "Age5-14": 14.532,
    "Age15-24": 8.651,
    "Age25-64": 17.749,
    "AgeOver65": 3.169
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1980,
    "Age0-4": 8.684,
    "Age5-14": 16.724,
    "Age15-24": 14.114,
    "Age25-64": 22.401,
    "AgeOver65": 4.314
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1990,
    "Age0-4": 8.235,
    "Age5-14": 17.069,
    "Age15-24": 14.024,
    "Age25-64": 26.564,
    "AgeOver65": 4.68
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 2000,
    "Age0-4": 7.327,
    "Age5-14": 15.878,
    "Age15-24": 15.589,
    "Age25-64": 36.033,
    "AgeOver65": 6.171
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 2010,
    "Age0-4": 7.515,
    "Age5-14": 13.307,
    "Age15-24": 15.063,
    "Age25-64": 48.473,
    "AgeOver65": 6.915
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 2020,
    "Age0-4": 7.967,
    "Age5-14": 15.404,
    "Age15-24": 12.791,
    "Age25-64": 54.245,
    "AgeOver65": 7.933
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 1950,
    "Age0-4": 545.959,
    "Age5-14": 779.759,
    "Age15-24": 683.509,
    "Age25-64": 1250.971,
    "AgeOver65": 153.127
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 1960,
    "Age0-4": 892.382,
    "Age5-14": 1233.21,
    "Age15-24": 738.664,
    "Age25-64": 1526.484,
    "AgeOver65": 182.774
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 1970,
    "Age0-4": 1209.993,
    "Age5-14": 1842.655,
    "Age15-24": 1192.994,
    "Age25-64": 1893.306,
    "AgeOver65": 211.596
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 1980,
    "Age0-4": 1757.101,
    "Age5-14": 2614.712,
    "Age15-24": 1767.769,
    "Age25-64": 2526.419,
    "AgeOver65": 264.775
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 1990,
    "Age0-4": 2144.859,
    "Age5-14": 3714.53,
    "Age15-24": 2551.298,
    "Age25-64": 3659.449,
    "AgeOver65": 376.032
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 2000,
    "Age0-4": 2432.026,
    "Age5-14": 4298.746,
    "Age15-24": 3657.797,
    "Age25-64": 5474.066,
    "AgeOver65": 548.212
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 2010,
    "Age0-4": 2942.763,
    "Age5-14": 5044.76,
    "Age15-24": 4391.366,
    "Age25-64": 8254.451,
    "AgeOver65": 729.201
  },
  {
    "Entity": "Syria",
    "Code": "SYR",
    "Year": 2020,
    "Age0-4": 1919.096,
    "Age5-14": 3466.67,
    "Age15-24": 3178.762,
    "Age25-64": 8083.069,
    "AgeOver65": 853.06
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1950,
    "Age0-4": 375.827,
    "Age5-14": 570.602,
    "Age15-24": 452.553,
    "Age25-64": 994.358,
    "AgeOver65": 108.981
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1960,
    "Age0-4": 508.996,
    "Age5-14": 720.844,
    "Age15-24": 525.629,
    "Age25-64": 1131.41,
    "AgeOver65": 114.725
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1970,
    "Age0-4": 629.452,
    "Age5-14": 924.958,
    "Age15-24": 660.815,
    "Age25-64": 1293.333,
    "AgeOver65": 135.05
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1980,
    "Age0-4": 857.456,
    "Age5-14": 1177.896,
    "Age15-24": 823.024,
    "Age25-64": 1498.275,
    "AgeOver65": 157.776
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1990,
    "Age0-4": 1176.812,
    "Age5-14": 1654.906,
    "Age15-24": 1083.582,
    "Age25-64": 1855.579,
    "AgeOver65": 192.371
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 2000,
    "Age0-4": 1688.335,
    "Age5-14": 2395.287,
    "Age15-24": 1584.413,
    "Age25-64": 2448.755,
    "AgeOver65": 238.864
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 2010,
    "Age0-4": 2324.09,
    "Age5-14": 3504.589,
    "Age15-24": 2355.386,
    "Age25-64": 3462.763,
    "AgeOver65": 305.306
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 2020,
    "Age0-4": 2930.435,
    "Age5-14": 4705.992,
    "Age15-24": 3390.351,
    "Age25-64": 4988.664,
    "AgeOver65": 410.417
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1950,
    "Age0-4": 235.154,
    "Age5-14": 340.981,
    "Age15-24": 255.585,
    "Age25-64": 503.331,
    "AgeOver65": 60.4
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1960,
    "Age0-4": 277.317,
    "Age5-14": 401.688,
    "Age15-24": 294.85,
    "Age25-64": 555.901,
    "AgeOver65": 50.752
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1970,
    "Age0-4": 392.21,
    "Age5-14": 554.24,
    "Age15-24": 390.097,
    "Age25-64": 718.54,
    "AgeOver65": 60.435
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1980,
    "Age0-4": 517.381,
    "Age5-14": 745.315,
    "Age15-24": 501.234,
    "Age25-64": 877.503,
    "AgeOver65": 79.402
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1990,
    "Age0-4": 671.217,
    "Age5-14": 1066.844,
    "Age15-24": 732.657,
    "Age25-64": 1191.153,
    "AgeOver65": 112.439
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 2000,
    "Age0-4": 817.748,
    "Age5-14": 1312.068,
    "Age15-24": 1037.593,
    "Age25-64": 1616.115,
    "AgeOver65": 140.882
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 2010,
    "Age0-4": 1065.211,
    "Age5-14": 1682.436,
    "Age15-24": 1256.727,
    "Age25-64": 2241.968,
    "AgeOver65": 175.332
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 2020,
    "Age0-4": 1220.06,
    "Age5-14": 2144.112,
    "Age15-24": 1634.738,
    "Age25-64": 3039.328,
    "AgeOver65": 240.499
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1950,
    "Age0-4": 3404.702,
    "Age5-14": 5321.336,
    "Age15-24": 4168.064,
    "Age25-64": 7144.187,
    "AgeOver65": 672.064
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1960,
    "Age0-4": 4776.774,
    "Age5-14": 6931.37,
    "Age15-24": 5121.559,
    "Age25-64": 9659.383,
    "AgeOver65": 908.122
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1970,
    "Age0-4": 6316.43,
    "Age5-14": 9909.344,
    "Age15-24": 6717.982,
    "Age25-64": 12649.64,
    "AgeOver65": 1291.129
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1980,
    "Age0-4": 6156.819,
    "Age5-14": 12525.213,
    "Age15-24": 9878.809,
    "Age25-64": 17038.525,
    "AgeOver65": 1775.097
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1990,
    "Age0-4": 5352.949,
    "Age5-14": 11735.503,
    "Age15-24": 11997.777,
    "Age25-64": 24916.714,
    "AgeOver65": 2555.253
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 2000,
    "Age0-4": 4694.024,
    "Age5-14": 10402.508,
    "Age15-24": 10762.642,
    "Age25-64": 32981.635,
    "AgeOver65": 4111.83
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 2010,
    "Age0-4": 4034.323,
    "Age5-14": 8856.213,
    "Age15-24": 9620.125,
    "Age25-64": 38706.099,
    "AgeOver65": 5978.272
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 2020,
    "Age0-4": 3596.052,
    "Age5-14": 7957.585,
    "Age15-24": 9186.41,
    "Age25-64": 40015.435,
    "AgeOver65": 9044.496
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1950,
    "Age0-4": 172.023,
    "Age5-14": 345.715,
    "Age15-24": 334.807,
    "Age25-64": 612.212,
    "AgeOver65": 66.75
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1960,
    "Age0-4": 386.976,
    "Age5-14": 445.571,
    "Age15-24": 346.184,
    "Age25-64": 808.656,
    "AgeOver65": 99.666
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1970,
    "Age0-4": 513.042,
    "Age5-14": 835.653,
    "Age15-24": 449.076,
    "Age25-64": 983.556,
    "AgeOver65": 148.781
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1980,
    "Age0-4": 633.438,
    "Age5-14": 1037.471,
    "Age15-24": 799.839,
    "Age25-64": 1255.206,
    "AgeOver65": 179.489
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1990,
    "Age0-4": 938.71,
    "Age5-14": 1376.528,
    "Age15-24": 991.141,
    "Age25-64": 1774.788,
    "AgeOver65": 202.644
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 2000,
    "Age0-4": 892.437,
    "Age5-14": 1751.062,
    "Age15-24": 1247.928,
    "Age25-64": 2101.089,
    "AgeOver65": 223.813
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 2010,
    "Age0-4": 987.283,
    "Age5-14": 1698.287,
    "Age15-24": 1695.601,
    "Age25-64": 2897.809,
    "AgeOver65": 248.417
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 2020,
    "Age0-4": 1356.75,
    "Age5-14": 2197.938,
    "Age15-24": 1645.092,
    "Age25-64": 4034.589,
    "AgeOver65": 303.273
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1950,
    "Age0-4": 141.781,
    "Age5-14": 255.691,
    "Age15-24": 243.598,
    "Age25-64": 498.986,
    "AgeOver65": 70.942
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1960,
    "Age0-4": 287.097,
    "Age5-14": 351.838,
    "Age15-24": 258.25,
    "Age25-64": 622.683,
    "AgeOver65": 83.386
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1970,
    "Age0-4": 358.137,
    "Age5-14": 624.375,
    "Age15-24": 357.644,
    "Age25-64": 752.853,
    "AgeOver65": 102.156
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1980,
    "Age0-4": 447.384,
    "Age5-14": 748.074,
    "Age15-24": 615.458,
    "Age25-64": 943.532,
    "AgeOver65": 122.361
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1990,
    "Age0-4": 580.457,
    "Age5-14": 914.772,
    "Age15-24": 716.248,
    "Age25-64": 1333.465,
    "AgeOver65": 139.036
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 2000,
    "Age0-4": 489.647,
    "Age5-14": 1148.2,
    "Age15-24": 906.053,
    "Age25-64": 1779.013,
    "AgeOver65": 193.215
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 2010,
    "Age0-4": 536.023,
    "Age5-14": 965.586,
    "Age15-24": 1102.839,
    "Age25-64": 2272.227,
    "AgeOver65": 210.536
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 2020,
    "Age0-4": 661.065,
    "Age5-14": 1196.048,
    "Age15-24": 946.097,
    "Age25-64": 2940.413,
    "AgeOver65": 287.564
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1950,
    "Age0-4": 74.801,
    "Age5-14": 108.024,
    "Age15-24": 76.229,
    "Age25-64": 142.649,
    "AgeOver65": 13.051
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1960,
    "Age0-4": 74.57,
    "Age5-14": 120.824,
    "Age15-24": 99.26,
    "Age25-64": 168.032,
    "AgeOver65": 11.849
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1970,
    "Age0-4": 91.421,
    "Age5-14": 140.785,
    "Age15-24": 112.624,
    "Age25-64": 211.687,
    "AgeOver65": 15.048
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1980,
    "Age0-4": 77.365,
    "Age5-14": 162.415,
    "Age15-24": 123.899,
    "Age25-64": 220.181,
    "AgeOver65": 16.047
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1990,
    "Age0-4": 118.663,
    "Age5-14": 162.143,
    "Age15-24": 154.107,
    "Age25-64": 280.386,
    "AgeOver65": 22.515
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 2000,
    "Age0-4": 152.243,
    "Age5-14": 244.585,
    "Age15-24": 147.494,
    "Age25-64": 309.906,
    "AgeOver65": 30.138
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 2010,
    "Age0-4": 160.956,
    "Age5-14": 304.165,
    "Age15-24": 224.725,
    "Age25-64": 359.457,
    "AgeOver65": 44.214
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 2020,
    "Age0-4": 178.084,
    "Age5-14": 307.524,
    "Age15-24": 282.771,
    "Age25-64": 493.595,
    "AgeOver65": 56.468
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1950,
    "Age0-4": 9.451,
    "Age5-14": 13.612,
    "Age15-24": 9.261,
    "Age25-64": 14.033,
    "AgeOver65": 0.86
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1960,
    "Age0-4": 11.723,
    "Age5-14": 16.256,
    "Age15-24": 11.34,
    "Age25-64": 20.177,
    "AgeOver65": 2.078
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1970,
    "Age0-4": 15.077,
    "Age5-14": 25.518,
    "Age15-24": 15.226,
    "Age25-64": 26.131,
    "AgeOver65": 2.392
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1980,
    "Age0-4": 13.27,
    "Age5-14": 25.512,
    "Age15-24": 19.752,
    "Age25-64": 31.403,
    "AgeOver65": 3.029
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1990,
    "Age0-4": 13.411,
    "Age5-14": 24.08,
    "Age15-24": 22.051,
    "Age25-64": 31.355,
    "AgeOver65": 4.172
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 2000,
    "Age0-4": 13.278,
    "Age5-14": 24.424,
    "Age15-24": 20.659,
    "Age25-64": 34.108,
    "AgeOver65": 5.493
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 2010,
    "Age0-4": 13.75,
    "Age5-14": 25.148,
    "Age15-24": 19.442,
    "Age25-64": 39.695,
    "AgeOver65": 5.946
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 2020,
    "Age0-4": 12.201,
    "Age5-14": 24.541,
    "Age15-24": 21.117,
    "Age25-64": 41.579,
    "AgeOver65": 6.259
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1950,
    "Age0-4": 106.992,
    "Age5-14": 150.913,
    "Age15-24": 108.597,
    "Age25-64": 253.304,
    "AgeOver65": 25.82
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1960,
    "Age0-4": 138.676,
    "Age5-14": 224.571,
    "Age15-24": 147.165,
    "Age25-64": 308.169,
    "AgeOver65": 29.392
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1970,
    "Age0-4": 121.077,
    "Age5-14": 270.93,
    "Age15-24": 187.642,
    "Age25-64": 326.467,
    "AgeOver65": 39.241
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1980,
    "Age0-4": 132.478,
    "Age5-14": 236.131,
    "Age15-24": 251.034,
    "Age25-64": 406.232,
    "AgeOver65": 58.868
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1990,
    "Age0-4": 133.078,
    "Age5-14": 277.278,
    "Age15-24": 219.418,
    "Age25-64": 521.655,
    "AgeOver65": 69.692
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 2000,
    "Age0-4": 89.616,
    "Age5-14": 234.667,
    "Age15-24": 255.983,
    "Age25-64": 604.826,
    "AgeOver65": 82.067
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 2010,
    "Age0-4": 97.088,
    "Age5-14": 178.132,
    "Age15-24": 219.545,
    "Age25-64": 723.2,
    "AgeOver65": 110.179
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 2020,
    "Age0-4": 88.366,
    "Age5-14": 192.405,
    "Age15-24": 175.186,
    "Age25-64": 782.388,
    "AgeOver65": 161.146
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1950,
    "Age0-4": 583.176,
    "Age5-14": 861.942,
    "Age15-24": 638.278,
    "Age25-64": 1360.918,
    "AgeOver65": 160.998
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1960,
    "Age0-4": 699.881,
    "Age5-14": 1116.148,
    "Age15-24": 692.052,
    "Age25-64": 1514.34,
    "AgeOver65": 155.814
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1970,
    "Age0-4": 845.304,
    "Age5-14": 1458.676,
    "Age15-24": 892.121,
    "Age25-64": 1691.498,
    "AgeOver65": 176.206
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1980,
    "Age0-4": 980.381,
    "Age5-14": 1680.232,
    "Age15-24": 1331.702,
    "Age25-64": 2132.641,
    "AgeOver65": 249.084
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1990,
    "Age0-4": 1066.961,
    "Age5-14": 2000.344,
    "Age15-24": 1621.89,
    "Age25-64": 3151.923,
    "AgeOver65": 401.391
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 2000,
    "Age0-4": 840.666,
    "Age5-14": 2028.452,
    "Age15-24": 1972.961,
    "Age25-64": 4213.031,
    "AgeOver65": 653.237
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 2010,
    "Age0-4": 860.068,
    "Age5-14": 1621.471,
    "Age15-24": 1984.282,
    "Age25-64": 5373.247,
    "AgeOver65": 796.177
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 2020,
    "Age0-4": 1004.154,
    "Age5-14": 1866.671,
    "Age15-24": 1608.159,
    "Age25-64": 6290.972,
    "AgeOver65": 1048.662
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1950,
    "Age0-4": 3368.545,
    "Age5-14": 5075.617,
    "Age15-24": 4390.904,
    "Age25-64": 7933.798,
    "AgeOver65": 639.534
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1960,
    "Age0-4": 4710.041,
    "Age5-14": 6801.333,
    "Age15-24": 4811.085,
    "Age25-64": 10273.418,
    "AgeOver65": 876.462
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1970,
    "Age0-4": 5528.212,
    "Age5-14": 8951.293,
    "Age15-24": 6432.568,
    "Age25-64": 12571.688,
    "AgeOver65": 1392.535
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1980,
    "Age0-4": 6520.842,
    "Age5-14": 10913.228,
    "Age15-24": 8473.521,
    "Age25-64": 15994.886,
    "AgeOver65": 2073.495
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1990,
    "Age0-4": 6581,
    "Age5-14": 12719.404,
    "Age15-24": 10541.437,
    "Age25-64": 21596.139,
    "AgeOver65": 2483.778
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 2000,
    "Age0-4": 6644.895,
    "Age5-14": 12708.763,
    "Age15-24": 12391.977,
    "Age25-64": 27641.981,
    "AgeOver65": 3852.58
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 2010,
    "Age0-4": 6417.747,
    "Age5-14": 13039.586,
    "Age15-24": 12538.719,
    "Age25-64": 35114.956,
    "AgeOver65": 5215.984
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 2020,
    "Age0-4": 6567.148,
    "Age5-14": 13625.36,
    "Age15-24": 13591.93,
    "Age25-64": 42980.077,
    "AgeOver65": 7574.552
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 1950,
    "Age0-4": 1256.631,
    "Age5-14": 1942.955,
    "Age15-24": 1493.246,
    "Age25-64": 2744.331,
    "AgeOver65": 165.192
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 1960,
    "Age0-4": 1940.169,
    "Age5-14": 2992.975,
    "Age15-24": 1917.651,
    "Age25-64": 3756.367,
    "AgeOver65": 268.985
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 1970,
    "Age0-4": 2006.698,
    "Age5-14": 4022.825,
    "Age15-24": 2993.587,
    "Age25-64": 5464.884,
    "AgeOver65": 436.468
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 1980,
    "Age0-4": 1948.651,
    "Age5-14": 3748.074,
    "Age15-24": 3953.171,
    "Age25-64": 7409.019,
    "AgeOver65": 846.544
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 1990,
    "Age0-4": 1604.503,
    "Age5-14": 3961.109,
    "Age15-24": 3675.178,
    "Age25-64": 9872.211,
    "AgeOver65": 1365.515
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 2000,
    "Age0-4": 1490.957,
    "Age5-14": 3172.194,
    "Age15-24": 3874.839,
    "Age25-64": 11510.179,
    "AgeOver65": 1918.359
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 2010,
    "Age0-4": 966.156,
    "Age5-14": 2709.25,
    "Age15-24": 3198.602,
    "Age25-64": 13830.284,
    "AgeOver65": 2483.264
  },
  {
    "Entity": "Taiwan",
    "Code": "TWN",
    "Year": 2020,
    "Age0-4": 1011.137,
    "Age5-14": 2017.552,
    "Age15-24": 2715.287,
    "Age25-64": 14298.098,
    "AgeOver65": 3774.701
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1950,
    "Age0-4": 1460.639,
    "Age5-14": 2055.042,
    "Age15-24": 1470.786,
    "Age25-64": 2494.942,
    "AgeOver65": 168.356
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1960,
    "Age0-4": 1872.176,
    "Age5-14": 2713.667,
    "Age15-24": 1925.691,
    "Age25-64": 3292.349,
    "AgeOver65": 248.268
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1970,
    "Age0-4": 2543.383,
    "Age5-14": 3680.344,
    "Age15-24": 2579.44,
    "Age25-64": 4383.909,
    "AgeOver65": 348.411
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1980,
    "Age0-4": 3458.076,
    "Age5-14": 5123.651,
    "Age15-24": 3543.461,
    "Age25-64": 5929.683,
    "AgeOver65": 483.392
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1990,
    "Age0-4": 4551.668,
    "Age5-14": 6969.888,
    "Age15-24": 4953.319,
    "Age25-64": 8067.033,
    "AgeOver65": 661.94
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 2000,
    "Age0-4": 5754.096,
    "Age5-14": 9242.802,
    "Age15-24": 6776.803,
    "Age25-64": 10858.223,
    "AgeOver65": 867.253
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 2010,
    "Age0-4": 7901.238,
    "Age5-14": 11999.543,
    "Age15-24": 8825.2,
    "Age25-64": 14520.252,
    "AgeOver65": 1100.299
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 2020,
    "Age0-4": 9738.602,
    "Age5-14": 16278.294,
    "Age15-24": 11697.017,
    "Age25-64": 20441.173,
    "AgeOver65": 1579.127
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1950,
    "Age0-4": 945.091,
    "Age5-14": 1276.119,
    "Age15-24": 1039.302,
    "Age25-64": 1744.993,
    "AgeOver65": 152.686
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1960,
    "Age0-4": 1272.394,
    "Age5-14": 1823.428,
    "Age15-24": 1191.023,
    "Age25-64": 2295.235,
    "AgeOver65": 185.012
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1970,
    "Age0-4": 1801.657,
    "Age5-14": 2597.28,
    "Age15-24": 1772.839,
    "Age25-64": 2986.771,
    "AgeOver65": 247.059
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1980,
    "Age0-4": 2382.845,
    "Age5-14": 3471.126,
    "Age15-24": 2396.205,
    "Age25-64": 3868.44,
    "AgeOver65": 323.717
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1990,
    "Age0-4": 3434.408,
    "Age5-14": 4897.915,
    "Age15-24": 3351.074,
    "Age25-64": 5224.031,
    "AgeOver65": 446.967
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 2000,
    "Age0-4": 4736.456,
    "Age5-14": 7008.091,
    "Age15-24": 4659.167,
    "Age25-64": 6705.551,
    "AgeOver65": 540.894
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 2010,
    "Age0-4": 6266.988,
    "Age5-14": 9652.833,
    "Age15-24": 6579.569,
    "Age25-64": 9321.987,
    "AgeOver65": 606.787
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 2020,
    "Age0-4": 7796.039,
    "Age5-14": 13252.089,
    "Age15-24": 9585.429,
    "Age25-64": 14199.167,
    "AgeOver65": 908.276
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1950,
    "Age0-4": 2987.89,
    "Age5-14": 7171.841,
    "Age15-24": 6982.858,
    "Age25-64": 17316.86,
    "AgeOver65": 2838.191
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1960,
    "Age0-4": 4014.324,
    "Age5-14": 7612.4,
    "Age15-24": 7299.81,
    "Age25-64": 20693.648,
    "AgeOver65": 3044.464
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1970,
    "Age0-4": 3440.542,
    "Age5-14": 8052.352,
    "Age15-24": 7494.642,
    "Age25-64": 23738.727,
    "AgeOver65": 4362.599
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1980,
    "Age0-4": 3718.001,
    "Age5-14": 7023.692,
    "Age15-24": 7798.575,
    "Age25-64": 25515.97,
    "AgeOver65": 5909.634
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1990,
    "Age0-4": 3458.568,
    "Age5-14": 7468.497,
    "Age15-24": 6976.078,
    "Age25-64": 27390.809,
    "AgeOver65": 6169.149
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 2000,
    "Age0-4": 2160.097,
    "Age5-14": 6199.822,
    "Age15-24": 7384.688,
    "Age25-64": 26353.873,
    "AgeOver65": 6739.578
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 2010,
    "Age0-4": 2381.686,
    "Age5-14": 4086.902,
    "Age15-24": 6362.323,
    "Age25-64": 25768.41,
    "AgeOver65": 7192.765
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 2020,
    "Age0-4": 2113.85,
    "Age5-14": 4879.404,
    "Age15-24": 4125.821,
    "Age25-64": 25202.187,
    "AgeOver65": 7412.497
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1950,
    "Age0-4": 219.747,
    "Age5-14": 404.241,
    "Age15-24": 394.751,
    "Age25-64": 1035.447,
    "AgeOver65": 184.315
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1960,
    "Age0-4": 255.565,
    "Age5-14": 451.702,
    "Age15-24": 405.183,
    "Age25-64": 1219.033,
    "AgeOver65": 207.165
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1970,
    "Age0-4": 265.979,
    "Age5-14": 517.714,
    "Age15-24": 439.013,
    "Age25-64": 1336.622,
    "AgeOver65": 250.471
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1980,
    "Age0-4": 276.9,
    "Age5-14": 507.988,
    "Age15-24": 468.131,
    "Age25-64": 1355.618,
    "AgeOver65": 306.752
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1990,
    "Age0-4": 271.359,
    "Age5-14": 537.333,
    "Age15-24": 489.083,
    "Age25-64": 1449.943,
    "AgeOver65": 361.88
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 2000,
    "Age0-4": 270.088,
    "Age5-14": 544.55,
    "Age15-24": 524.997,
    "Age25-64": 1545.483,
    "AgeOver65": 434.616
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 2010,
    "Age0-4": 236.957,
    "Age5-14": 508.882,
    "Age15-24": 516.082,
    "Age25-64": 1627.007,
    "AgeOver65": 470.345
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 2020,
    "Age0-4": 236.656,
    "Age5-14": 469.728,
    "Age15-24": 499.68,
    "Age25-64": 1743.562,
    "AgeOver65": 524.101
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1950,
    "Age0-4": 17236.887,
    "Age5-14": 25358.838,
    "Age15-24": 23466.761,
    "Age25-64": 79699.13,
    "AgeOver65": 13042.781
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1960,
    "Age0-4": 20732.517,
    "Age5-14": 36574.045,
    "Age15-24": 25250.877,
    "Age25-64": 87142.203,
    "AgeOver65": 17020.928
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1970,
    "Age0-4": 17614.99,
    "Age5-14": 41252.935,
    "Age15-24": 36306.328,
    "Age25-64": 93281.291,
    "AgeOver65": 21057.796
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1980,
    "Age0-4": 16579.777,
    "Age5-14": 35449.768,
    "Age15-24": 42742.588,
    "Age25-64": 108184.692,
    "AgeOver65": 26519.535
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1990,
    "Age0-4": 19240.996,
    "Age5-14": 35404.813,
    "Age15-24": 37392.631,
    "Age25-64": 128244.658,
    "AgeOver65": 31837.211
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 2000,
    "Age0-4": 19564.581,
    "Age5-14": 41574.8,
    "Age15-24": 38969.831,
    "Age25-64": 146856.206,
    "AgeOver65": 34745.496
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 2010,
    "Age0-4": 20890.229,
    "Age5-14": 41544.921,
    "Age15-24": 43937.524,
    "Age25-64": 162523.629,
    "AgeOver65": 40115.166
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 2020,
    "Age0-4": 19676.332,
    "Age5-14": 41134.639,
    "Age15-24": 43501.653,
    "Age25-64": 171641.217,
    "AgeOver65": 55048.806
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1950,
    "Age0-4": 692.56,
    "Age5-14": 1244.958,
    "Age15-24": 1344.539,
    "Age25-64": 2611.44,
    "AgeOver65": 370.561
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1960,
    "Age0-4": 1519.236,
    "Age5-14": 1861.811,
    "Age15-24": 1282.474,
    "Age25-64": 3358.087,
    "AgeOver65": 504.691
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1970,
    "Age0-4": 1963.077,
    "Age5-14": 3496.267,
    "Age15-24": 1864.253,
    "Age25-64": 4040.643,
    "AgeOver65": 716.071
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1980,
    "Age0-4": 2429.782,
    "Age5-14": 4045.169,
    "Age15-24": 3473.166,
    "Age25-64": 5129.582,
    "AgeOver65": 821.061
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1990,
    "Age0-4": 3208.343,
    "Age5-14": 5090.87,
    "Age15-24": 3879.764,
    "Age25-64": 7381.246,
    "AgeOver65": 838.124
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 2000,
    "Age0-4": 2847.073,
    "Age5-14": 6385.14,
    "Age15-24": 4935.459,
    "Age25-64": 9458.008,
    "AgeOver65": 1144.275
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 2010,
    "Age0-4": 2945.877,
    "Age5-14": 5362.327,
    "Age15-24": 6288.634,
    "Age25-64": 12633.726,
    "AgeOver65": 1285.344
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 2020,
    "Age0-4": 3431.637,
    "Age5-14": 6207.509,
    "Age15-24": 5317.768,
    "Age25-64": 16909.492,
    "AgeOver65": 1602.793
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1950,
    "Age0-4": 13.638,
    "Age5-14": 19.426,
    "Age15-24": 11.205,
    "Age25-64": 20.14,
    "AgeOver65": 2.588
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1960,
    "Age0-4": 16.092,
    "Age5-14": 24.077,
    "Age15-24": 13.356,
    "Age25-64": 24.157,
    "AgeOver65": 3.288
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1970,
    "Age0-4": 16.587,
    "Age5-14": 28.384,
    "Age15-24": 17.62,
    "Age25-64": 23.524,
    "AgeOver65": 4.386
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1980,
    "Age0-4": 14.765,
    "Age5-14": 29.168,
    "Age15-24": 22.891,
    "Age25-64": 27.898,
    "AgeOver65": 5.844
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1990,
    "Age0-4": 13.368,
    "Age5-14": 27.434,
    "Age15-24": 22.588,
    "Age25-64": 37.459,
    "AgeOver65": 6.64
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 2000,
    "Age0-4": 10.945,
    "Age5-14": 22.989,
    "Age15-24": 21.689,
    "Age25-64": 44.804,
    "AgeOver65": 7.36
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 2010,
    "Age0-4": 9.009,
    "Age5-14": 18.957,
    "Age15-24": 19.035,
    "Age25-64": 52.353,
    "AgeOver65": 8.906
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 2020,
    "Age0-4": 7.706,
    "Age5-14": 16.596,
    "Age15-24": 18.363,
    "Age25-64": 57.286,
    "AgeOver65": 10.996
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1950,
    "Age0-4": 1021.737,
    "Age5-14": 1472.898,
    "Age15-24": 1035.688,
    "Age25-64": 1825.533,
    "AgeOver65": 126.12
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1960,
    "Age0-4": 1536.108,
    "Age5-14": 2212.118,
    "Age15-24": 1513.174,
    "Age25-64": 2692.561,
    "AgeOver65": 187.878
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1970,
    "Age0-4": 1952.989,
    "Age5-14": 3229.891,
    "Age15-24": 2186.888,
    "Age25-64": 3725.669,
    "AgeOver65": 300.959
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1980,
    "Age0-4": 2291.417,
    "Age5-14": 3965.692,
    "Age15-24": 3196.661,
    "Age25-64": 5242.703,
    "AgeOver65": 486.143
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1990,
    "Age0-4": 2701.037,
    "Age5-14": 4737.459,
    "Age15-24": 3932.792,
    "Age25-64": 7518.037,
    "AgeOver65": 743.34
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 2000,
    "Age0-4": 2790.755,
    "Age5-14": 5428.564,
    "Age15-24": 4692.494,
    "Age25-64": 10195.42,
    "AgeOver65": 1085.216
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 2010,
    "Age0-4": 2900.078,
    "Age5-14": 5605.592,
    "Age15-24": 5318.463,
    "Age25-64": 13032.313,
    "AgeOver65": 1583.496
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 2020,
    "Age0-4": 2363.409,
    "Age5-14": 5388.986,
    "Age15-24": 4602.4,
    "Age25-64": 13814.03,
    "AgeOver65": 2267.118
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1950,
    "Age0-4": 3.884,
    "Age5-14": 6.594,
    "Age15-24": 3.962,
    "Age25-64": 10.337,
    "AgeOver65": 2.015
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1960,
    "Age0-4": 5.22,
    "Age5-14": 7.75,
    "Age15-24": 5.245,
    "Age25-64": 12.515,
    "AgeOver65": 2.407
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1970,
    "Age0-4": 8.748,
    "Age5-14": 14.42,
    "Age15-24": 11.429,
    "Age25-64": 27.477,
    "AgeOver65": 2.649
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1980,
    "Age0-4": 10.849,
    "Age5-14": 24.581,
    "Age15-24": 17.861,
    "Age25-64": 40.97,
    "AgeOver65": 4.828
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1990,
    "Age0-4": 9.488,
    "Age5-14": 20.372,
    "Age15-24": 17.234,
    "Age25-64": 50.199,
    "AgeOver65": 6.462
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 2000,
    "Age0-4": 8.476,
    "Age5-14": 19.661,
    "Age15-24": 14.6,
    "Age25-64": 56.58,
    "AgeOver65": 9.413
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 2010,
    "Age0-4": 7.427,
    "Age5-14": 14.571,
    "Age15-24": 13.409,
    "Age25-64": 56.377,
    "AgeOver65": 14.302
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 2020,
    "Age0-4": 5.97,
    "Age5-14": 14.14,
    "Age15-24": 13.26,
    "Age25-64": 49.651,
    "AgeOver65": 21.402
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1950,
    "Age0-4": 3088.167,
    "Age5-14": 4828.225,
    "Age15-24": 4715.418,
    "Age25-64": 11141.607,
    "AgeOver65": 1036.492
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1960,
    "Age0-4": 5841.592,
    "Age5-14": 7270.263,
    "Age15-24": 4674.111,
    "Age25-64": 13341.351,
    "AgeOver65": 1542.731
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1970,
    "Age0-4": 7063.312,
    "Age5-14": 11937.681,
    "Age15-24": 7067.665,
    "Age25-64": 14998.08,
    "AgeOver65": 2338.064
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1980,
    "Age0-4": 7956.273,
    "Age5-14": 14214.308,
    "Age15-24": 11367.004,
    "Age25-64": 17847.139,
    "AgeOver65": 2897.117
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1990,
    "Age0-4": 9142.037,
    "Age5-14": 16188.698,
    "Age15-24": 13834.298,
    "Age25-64": 24918.294,
    "AgeOver65": 3905.528
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 2000,
    "Age0-4": 7190.756,
    "Age5-14": 18039.888,
    "Age15-24": 15911.393,
    "Age25-64": 33638.601,
    "AgeOver65": 5129.773
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 2010,
    "Age0-4": 7210.284,
    "Age5-14": 13573.977,
    "Age15-24": 17542.938,
    "Age25-64": 43931.357,
    "AgeOver65": 5709.099
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 2020,
    "Age0-4": 7892.471,
    "Age5-14": 14684.275,
    "Age15-24": 13321.072,
    "Age25-64": 53784.101,
    "AgeOver65": 7656.664
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1950,
    "Age0-4": 8.985,
    "Age5-14": 13.077,
    "Age15-24": 9.178,
    "Age25-64": 15.153,
    "AgeOver65": 1.303
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1960,
    "Age0-4": 11.893,
    "Age5-14": 17.546,
    "Age15-24": 12.452,
    "Age25-64": 20.237,
    "AgeOver65": 1.561
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1970,
    "Age0-4": 14.734,
    "Age5-14": 23.93,
    "Age15-24": 15.875,
    "Age25-64": 28.286,
    "AgeOver65": 2.549
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1980,
    "Age0-4": 19.491,
    "Age5-14": 31.956,
    "Age15-24": 23.323,
    "Age25-64": 37.366,
    "AgeOver65": 3.462
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1990,
    "Age0-4": 23.774,
    "Age5-14": 40.51,
    "Age15-24": 27.006,
    "Age25-64": 50.076,
    "AgeOver65": 5.209
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 2000,
    "Age0-4": 28.332,
    "Age5-14": 48.434,
    "Age15-24": 36.82,
    "Age25-64": 65.294,
    "AgeOver65": 6.084
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 2010,
    "Age0-4": 34.017,
    "Age5-14": 56.252,
    "Age15-24": 45.447,
    "Age25-64": 91.274,
    "AgeOver65": 9.226
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 2020,
    "Age0-4": 42.08,
    "Age5-14": 75.897,
    "Age15-24": 55.743,
    "Age25-64": 122.349,
    "AgeOver65": 11.081
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1950,
    "Age0-4": 14.829,
    "Age5-14": 23.649,
    "Age15-24": 15.533,
    "Age25-64": 26.209,
    "AgeOver65": 1.886
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1960,
    "Age0-4": 21.474,
    "Age5-14": 32.389,
    "Age15-24": 20.465,
    "Age25-64": 32.146,
    "AgeOver65": 2.153
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1970,
    "Age0-4": 27.3,
    "Age5-14": 45.618,
    "Age15-24": 26.133,
    "Age25-64": 40.823,
    "AgeOver65": 3.272
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1980,
    "Age0-4": 24.339,
    "Age5-14": 47.56,
    "Age15-24": 34.708,
    "Age25-64": 44.617,
    "AgeOver65": 4.298
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1990,
    "Age0-4": 23.138,
    "Age5-14": 42.591,
    "Age15-24": 37.362,
    "Age25-64": 53.467,
    "AgeOver65": 6.239
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 2000,
    "Age0-4": 25.599,
    "Age5-14": 45.501,
    "Age15-24": 32.261,
    "Age25-64": 63.417,
    "AgeOver65": 7.676
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 2010,
    "Age0-4": 25.871,
    "Age5-14": 45.365,
    "Age15-24": 34.1,
    "Age25-64": 71.377,
    "AgeOver65": 9.231
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 2020,
    "Age0-4": 26.99,
    "Age5-14": 46.817,
    "Age15-24": 35.886,
    "Age25-64": 78.63,
    "AgeOver65": 10.087
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1950,
    "Age0-4": 815.508,
    "Age5-14": 1155.815,
    "Age15-24": 863.783,
    "Age25-64": 1642.356,
    "AgeOver65": 183.817
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1960,
    "Age0-4": 903.013,
    "Age5-14": 1329.778,
    "Age15-24": 1028.19,
    "Age25-64": 1857.398,
    "AgeOver65": 196.972
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1970,
    "Age0-4": 1184.278,
    "Age5-14": 1597.736,
    "Age15-24": 1149.128,
    "Age25-64": 2051.289,
    "AgeOver65": 210.948
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1980,
    "Age0-4": 1632.28,
    "Age5-14": 2305.658,
    "Age15-24": 1445.154,
    "Age25-64": 2318.657,
    "AgeOver65": 240.154
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1990,
    "Age0-4": 2544.165,
    "Age5-14": 3495.172,
    "Age15-24": 2222.641,
    "Age25-64": 3151.76,
    "AgeOver65": 296.249
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 2000,
    "Age0-4": 3092.834,
    "Age5-14": 5425.549,
    "Age15-24": 3437.447,
    "Age25-64": 4968.4,
    "AgeOver65": 484.841
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 2010,
    "Age0-4": 3616.155,
    "Age5-14": 6264.741,
    "Age15-24": 5310.842,
    "Age25-64": 7346.48,
    "AgeOver65": 616.636
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 2020,
    "Age0-4": 4115.306,
    "Age5-14": 7466.783,
    "Age15-24": 6126.839,
    "Age25-64": 11242.844,
    "AgeOver65": 874.196
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1950,
    "Age0-4": 2023.75,
    "Age5-14": 3188.999,
    "Age15-24": 2536.136,
    "Age25-64": 5324.001,
    "AgeOver65": 555.548
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1960,
    "Age0-4": 2831.612,
    "Age5-14": 4140.807,
    "Age15-24": 3029.507,
    "Age25-64": 6436.885,
    "AgeOver65": 661.025
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1970,
    "Age0-4": 3539.204,
    "Age5-14": 5631.913,
    "Age15-24": 4019.321,
    "Age25-64": 8049.459,
    "AgeOver65": 829.886
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1980,
    "Age0-4": 4428.727,
    "Age5-14": 7240.123,
    "Age15-24": 5491.533,
    "Age25-64": 10294.398,
    "AgeOver65": 1101.99
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1990,
    "Age0-4": 5429.347,
    "Age5-14": 9335.113,
    "Age15-24": 7071.432,
    "Age25-64": 13504.803,
    "AgeOver65": 1459.812
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 2000,
    "Age0-4": 4859.428,
    "Age5-14": 10368.422,
    "Age15-24": 9308.883,
    "Age25-64": 18400.356,
    "AgeOver65": 2030.624
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 2010,
    "Age0-4": 5520.408,
    "Age5-14": 9676.534,
    "Age15-24": 10449.411,
    "Age25-64": 23137.261,
    "AgeOver65": 2433.353
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 2020,
    "Age0-4": 5764.945,
    "Age5-14": 11316.623,
    "Age15-24": 9837.302,
    "Age25-64": 29122.245,
    "AgeOver65": 3267.575
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1950,
    "Age0-4": 423.044,
    "Age5-14": 610.869,
    "Age15-24": 441.545,
    "Age25-64": 771.335,
    "AgeOver65": 63.643
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1960,
    "Age0-4": 584.278,
    "Age5-14": 822.299,
    "Age15-24": 576.408,
    "Age25-64": 1009.576,
    "AgeOver65": 78.219
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1970,
    "Age0-4": 814.523,
    "Age5-14": 1188.626,
    "Age15-24": 773.628,
    "Age25-64": 1295.402,
    "AgeOver65": 106.883
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1980,
    "Age0-4": 1151.982,
    "Age5-14": 1687.683,
    "Age15-24": 1134.793,
    "Age25-64": 1728.923,
    "AgeOver65": 148.437
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1990,
    "Age0-4": 1482.52,
    "Age5-14": 2316.005,
    "Age15-24": 1609.472,
    "Age25-64": 2425.212,
    "AgeOver65": 203.64
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 2000,
    "Age0-4": 1908.027,
    "Age5-14": 2925.969,
    "Age15-24": 2209.254,
    "Age25-64": 3123.5,
    "AgeOver65": 249.192
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 2010,
    "Age0-4": 2486.008,
    "Age5-14": 3948.143,
    "Age15-24": 2750.825,
    "Age25-64": 4137.667,
    "AgeOver65": 283.343
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 2020,
    "Age0-4": 2946.454,
    "Age5-14": 5145.686,
    "Age15-24": 3868.522,
    "Age25-64": 6031.34,
    "AgeOver65": 391.954
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1950,
    "Age0-4": 441.553,
    "Age5-14": 711.452,
    "Age15-24": 522.408,
    "Age25-64": 982.476,
    "AgeOver65": 88.963
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1960,
    "Age0-4": 730.88,
    "Age5-14": 993.072,
    "Age15-24": 682.079,
    "Age25-64": 1247.427,
    "AgeOver65": 123.221
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1970,
    "Age0-4": 1042.114,
    "Age5-14": 1538.31,
    "Age15-24": 953.629,
    "Age25-64": 1596.486,
    "AgeOver65": 158.773
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1980,
    "Age0-4": 1480.913,
    "Age5-14": 2199.849,
    "Age15-24": 1463.904,
    "Age25-64": 2063.121,
    "AgeOver65": 200.843
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1990,
    "Age0-4": 1752.528,
    "Age5-14": 3016.474,
    "Age15-24": 2186.641,
    "Age25-64": 3197.402,
    "AgeOver65": 279.364
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 2000,
    "Age0-4": 1691.691,
    "Age5-14": 3306.1,
    "Age15-24": 2786.557,
    "Age25-64": 3741.829,
    "AgeOver65": 355.305
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 2010,
    "Age0-4": 1997.281,
    "Age5-14": 3286.217,
    "Age15-24": 2873.312,
    "Age25-64": 4150.85,
    "AgeOver65": 390.068
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 2020,
    "Age0-4": 2097.448,
    "Age5-14": 4131.772,
    "Age15-24": 3016.724,
    "Age25-64": 5168.991,
    "AgeOver65": 447.992
  }
]