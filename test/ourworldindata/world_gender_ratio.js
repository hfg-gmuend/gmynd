// Shortened version from https://ourworldindata.org/gender-ratio
// "FemalePerc" is the percentage of female people in the population

let worldGenderRatio = [
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1960,
    "FemalePerc": 48.3194782591104
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1970,
    "FemalePerc": 48.996771293371
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1980,
    "FemalePerc": 49.1487859791377
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 1990,
    "FemalePerc": 48.829217457751
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 2000,
    "FemalePerc": 48.5064597394804
  },
  {
    "Entity": "Afghanistan",
    "Code": "AFG",
    "Year": 2010,
    "FemalePerc": 48.6247691399459
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1960,
    "FemalePerc": 48.5203458557093
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1970,
    "FemalePerc": 48.5115542228002
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1980,
    "FemalePerc": 48.5700880447881
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 1990,
    "FemalePerc": 48.7837396372094
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 2000,
    "FemalePerc": 49.4668902438048
  },
  {
    "Entity": "Albania",
    "Code": "ALB",
    "Year": 2010,
    "FemalePerc": 49.825319833213
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1960,
    "FemalePerc": 49.6818530626502
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1970,
    "FemalePerc": 49.727780667424
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1980,
    "FemalePerc": 49.6050620647044
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 1990,
    "FemalePerc": 49.3784416237666
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 2000,
    "FemalePerc": 49.3223293214135
  },
  {
    "Entity": "Algeria",
    "Code": "DZA",
    "Year": 2010,
    "FemalePerc": 49.524942672751
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1960,
    "FemalePerc": 51.4000333499492
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1970,
    "FemalePerc": 51.2945990073762
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1980,
    "FemalePerc": 51.1325932358743
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 1990,
    "FemalePerc": 51.1064223558812
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 2000,
    "FemalePerc": 51.1368979876492
  },
  {
    "Entity": "Angola",
    "Code": "AGO",
    "Year": 2010,
    "FemalePerc": 51.0759924077599
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1960,
    "FemalePerc": 52.8983412236638
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1970,
    "FemalePerc": 52.2243252507489
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1980,
    "FemalePerc": 51.2050653594771
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 1990,
    "FemalePerc": 51.6462262736514
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 2000,
    "FemalePerc": 52.8748833536717
  },
  {
    "Entity": "Antigua and Barbuda",
    "Code": "ATG",
    "Year": 2010,
    "FemalePerc": 52.0706996006508
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1960,
    "FemalePerc": 49.2168829865663
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1970,
    "FemalePerc": 49.8518274819131
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1980,
    "FemalePerc": 50.683712632873
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 1990,
    "FemalePerc": 50.9705713833788
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 2000,
    "FemalePerc": 51.0723956701717
  },
  {
    "Entity": "Argentina",
    "Code": "ARG",
    "Year": 2010,
    "FemalePerc": 51.0871158584117
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1960,
    "FemalePerc": 51.8172815158917
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1970,
    "FemalePerc": 51.2029600845603
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1980,
    "FemalePerc": 51.3120396005619
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 1990,
    "FemalePerc": 51.5337787441315
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 2000,
    "FemalePerc": 53.0582738873029
  },
  {
    "Entity": "Armenia",
    "Code": "ARM",
    "Year": 2010,
    "FemalePerc": 53.2079985875687
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1960,
    "FemalePerc": 50.9795602125148
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1970,
    "FemalePerc": 51.0953106483833
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1980,
    "FemalePerc": 51.2604622526915
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 1990,
    "FemalePerc": 50.6709357703694
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 2000,
    "FemalePerc": 51.7454273325556
  },
  {
    "Entity": "Aruba",
    "Code": "ABW",
    "Year": 2010,
    "FemalePerc": 52.3287267004377
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1960,
    "FemalePerc": 49.4821673875321
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1970,
    "FemalePerc": 49.7279394056379
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1980,
    "FemalePerc": 50.0848344416023
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 1990,
    "FemalePerc": 50.1352233938114
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 2000,
    "FemalePerc": 50.1122242536037
  },
  {
    "Entity": "Australia",
    "Code": "AUS",
    "Year": 2010,
    "FemalePerc": 49.9937545380187
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1960,
    "FemalePerc": 53.4192371894841
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1970,
    "FemalePerc": 53.0291350539991
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1980,
    "FemalePerc": 52.6821117645126
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 1990,
    "FemalePerc": 52.1660667580361
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 2000,
    "FemalePerc": 51.4652367820855
  },
  {
    "Entity": "Austria",
    "Code": "AUT",
    "Year": 2010,
    "FemalePerc": 51.2643423946292
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1960,
    "FemalePerc": 52.1687140408831
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1970,
    "FemalePerc": 51.3533115805804
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1980,
    "FemalePerc": 50.9603885060985
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 1990,
    "FemalePerc": 51.1036664435476
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 2000,
    "FemalePerc": 51.1069721152079
  },
  {
    "Entity": "Azerbaijan",
    "Code": "AZE",
    "Year": 2010,
    "FemalePerc": 50.4554958142655
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1960,
    "FemalePerc": 52.172245658248
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1970,
    "FemalePerc": 50.4661860138291
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1980,
    "FemalePerc": 50.3553203104602
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 1990,
    "FemalePerc": 50.3922601283477
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 2000,
    "FemalePerc": 51.2915971492546
  },
  {
    "Entity": "Bahamas",
    "Code": "BHS",
    "Year": 2010,
    "FemalePerc": 51.1160442094294
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1960,
    "FemalePerc": 46.4615308842633
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1970,
    "FemalePerc": 45.9458061117461
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1980,
    "FemalePerc": 41.5499434560444
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 1990,
    "FemalePerc": 42.2963771023675
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 2000,
    "FemalePerc": 42.6394426806699
  },
  {
    "Entity": "Bahrain",
    "Code": "BHR",
    "Year": 2010,
    "FemalePerc": 37.6199363992566
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1960,
    "FemalePerc": 48.315344029156
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1970,
    "FemalePerc": 48.7386109283096
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1980,
    "FemalePerc": 49.0017374067347
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 1990,
    "FemalePerc": 48.8919342657406
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 2000,
    "FemalePerc": 48.9709232732008
  },
  {
    "Entity": "Bangladesh",
    "Code": "BGD",
    "Year": 2010,
    "FemalePerc": 49.4304813913766
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1960,
    "FemalePerc": 55.1997540422805
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1970,
    "FemalePerc": 53.0032657846257
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1980,
    "FemalePerc": 52.5567821342469
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 1990,
    "FemalePerc": 51.8694621863586
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 2000,
    "FemalePerc": 51.958967669251
  },
  {
    "Entity": "Barbados",
    "Code": "BRB",
    "Year": 2010,
    "FemalePerc": 52.016325187432
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1960,
    "FemalePerc": 54.7925480937228
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1970,
    "FemalePerc": 54.0407561498073
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1980,
    "FemalePerc": 53.4976754961966
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 1990,
    "FemalePerc": 53.102698601369
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 2000,
    "FemalePerc": 53.062168511883
  },
  {
    "Entity": "Belarus",
    "Code": "BLR",
    "Year": 2010,
    "FemalePerc": 53.5159985094589
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1960,
    "FemalePerc": 50.7999194097407
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1970,
    "FemalePerc": 50.9854312300467
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1980,
    "FemalePerc": 51.1295015836966
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 1990,
    "FemalePerc": 51.0733225104169
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 2000,
    "FemalePerc": 51.032897538097
  },
  {
    "Entity": "Belgium",
    "Code": "BEL",
    "Year": 2010,
    "FemalePerc": 50.8904731671441
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1960,
    "FemalePerc": 50.6201937698223
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1970,
    "FemalePerc": 50.3339226085249
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1980,
    "FemalePerc": 49.5476682715655
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 1990,
    "FemalePerc": 49.5761220768419
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 2000,
    "FemalePerc": 49.6518539484857
  },
  {
    "Entity": "Belize",
    "Code": "BLZ",
    "Year": 2010,
    "FemalePerc": 49.979788934286
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1960,
    "FemalePerc": 52.4328461266721
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1970,
    "FemalePerc": 51.9116256423533
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1980,
    "FemalePerc": 51.7055085857191
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 1990,
    "FemalePerc": 51.319767905483
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 2000,
    "FemalePerc": 50.7299067018587
  },
  {
    "Entity": "Benin",
    "Code": "BEN",
    "Year": 2010,
    "FemalePerc": 50.3347336642732
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1960,
    "FemalePerc": 49.028591390337
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1970,
    "FemalePerc": 49.2849384503983
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1980,
    "FemalePerc": 48.2892614497287
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 1990,
    "FemalePerc": 48.6145129949896
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 2000,
    "FemalePerc": 48.9526672933281
  },
  {
    "Entity": "Bhutan",
    "Code": "BTN",
    "Year": 2010,
    "FemalePerc": 47.0052017123735
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1960,
    "FemalePerc": 50.4626168793633
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1970,
    "FemalePerc": 50.2084325116101
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1980,
    "FemalePerc": 50.0003667547057
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 1990,
    "FemalePerc": 49.8699214715698
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 2000,
    "FemalePerc": 49.8596561912436
  },
  {
    "Entity": "Bolivia",
    "Code": "BOL",
    "Year": 2010,
    "FemalePerc": 49.885564420476
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1960,
    "FemalePerc": 50.9434962497621
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1970,
    "FemalePerc": 50.8334986467347
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1980,
    "FemalePerc": 50.5467542009293
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 1990,
    "FemalePerc": 50.4754423847891
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 2000,
    "FemalePerc": 50.8962337659924
  },
  {
    "Entity": "Bosnia and Herzegovina",
    "Code": "BIH",
    "Year": 2010,
    "FemalePerc": 50.8874876413188
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1960,
    "FemalePerc": 52.3276097081123
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1970,
    "FemalePerc": 52.2337807220324
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1980,
    "FemalePerc": 51.2975000898961
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 1990,
    "FemalePerc": 50.8117319027692
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 2000,
    "FemalePerc": 50.7038879750325
  },
  {
    "Entity": "Botswana",
    "Code": "BWA",
    "Year": 2010,
    "FemalePerc": 50.5580029222816
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1960,
    "FemalePerc": 50.2100895062826
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1970,
    "FemalePerc": 50.1771207103497
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1980,
    "FemalePerc": 50.277582674954
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 1990,
    "FemalePerc": 50.4086235280292
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 2000,
    "FemalePerc": 50.5822163517933
  },
  {
    "Entity": "Brazil",
    "Code": "BRA",
    "Year": 2010,
    "FemalePerc": 50.7450443509674
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1960,
    "FemalePerc": 48.3981455430648
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1970,
    "FemalePerc": 48.4299395744746
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1980,
    "FemalePerc": 46.8302869370182
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 1990,
    "FemalePerc": 47.2662001167019
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 2000,
    "FemalePerc": 49.3605324595044
  },
  {
    "Entity": "Brunei",
    "Code": "BRN",
    "Year": 2010,
    "FemalePerc": 48.3704140154429
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1960,
    "FemalePerc": 50.0718721597498
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1970,
    "FemalePerc": 50.0123597073306
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1980,
    "FemalePerc": 50.1898910390351
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 1990,
    "FemalePerc": 50.7157491274538
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 2000,
    "FemalePerc": 51.2656515347138
  },
  {
    "Entity": "Bulgaria",
    "Code": "BGR",
    "Year": 2010,
    "FemalePerc": 51.3120032390707
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1960,
    "FemalePerc": 49.1025904641449
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1970,
    "FemalePerc": 50.2253674577641
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1980,
    "FemalePerc": 50.9719344020676
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 1990,
    "FemalePerc": 51.1329715823332
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 2000,
    "FemalePerc": 50.8814087860984
  },
  {
    "Entity": "Burkina Faso",
    "Code": "BFA",
    "Year": 2010,
    "FemalePerc": 50.4164410208872
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1960,
    "FemalePerc": 51.7287433073986
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1970,
    "FemalePerc": 51.4107684369627
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1980,
    "FemalePerc": 51.5215392081943
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 1990,
    "FemalePerc": 51.1852635621983
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 2000,
    "FemalePerc": 50.9319440699198
  },
  {
    "Entity": "Burundi",
    "Code": "BDI",
    "Year": 2010,
    "FemalePerc": 50.8953983466972
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1960,
    "FemalePerc": 50.0892636829622
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1970,
    "FemalePerc": 50.2455452525654
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1980,
    "FemalePerc": 52.956360277186
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 1990,
    "FemalePerc": 51.7059311248654
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 2000,
    "FemalePerc": 51.399769493295
  },
  {
    "Entity": "Cambodia",
    "Code": "KHM",
    "Year": 2010,
    "FemalePerc": 51.2860395215902
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1960,
    "FemalePerc": 50.8454261905061
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1970,
    "FemalePerc": 50.6514756783537
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1980,
    "FemalePerc": 50.4941142452889
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 1990,
    "FemalePerc": 50.3371042402195
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 2000,
    "FemalePerc": 50.1539062248351
  },
  {
    "Entity": "Cameroon",
    "Code": "CMR",
    "Year": 2010,
    "FemalePerc": 49.9988533087451
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1960,
    "FemalePerc": 49.4261891404184
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1970,
    "FemalePerc": 49.8601763821147
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1980,
    "FemalePerc": 50.1963531618239
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 1990,
    "FemalePerc": 50.4111754887402
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 2000,
    "FemalePerc": 50.4646881362191
  },
  {
    "Entity": "Canada",
    "Code": "CAN",
    "Year": 2010,
    "FemalePerc": 50.3864388275247
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1960,
    "FemalePerc": 53.0654105831299
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1970,
    "FemalePerc": 52.355521012602
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1980,
    "FemalePerc": 53.7007385081229
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 1990,
    "FemalePerc": 52.5433693391715
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 2000,
    "FemalePerc": 51.760928374586
  },
  {
    "Entity": "Cape Verde",
    "Code": "CPV",
    "Year": 2010,
    "FemalePerc": 50.317587647622
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1960,
    "FemalePerc": 50.8239790302209
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1970,
    "FemalePerc": 50.8586936788159
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1980,
    "FemalePerc": 50.8675015560419
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 1990,
    "FemalePerc": 50.8883150740243
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 2000,
    "FemalePerc": 50.7917341880194
  },
  {
    "Entity": "Central African Republic",
    "Code": "CAF",
    "Year": 2010,
    "FemalePerc": 50.6660753090746
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1960,
    "FemalePerc": 51.1324115814117
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1970,
    "FemalePerc": 50.9948001205419
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1980,
    "FemalePerc": 50.6492176719829
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 1990,
    "FemalePerc": 50.356597267688
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 2000,
    "FemalePerc": 50.1894503769469
  },
  {
    "Entity": "Chad",
    "Code": "TCD",
    "Year": 2010,
    "FemalePerc": 49.9880964478791
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1960,
    "FemalePerc": 51.598899642658
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1970,
    "FemalePerc": 51.3333333333333
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1980,
    "FemalePerc": 51.5724938379458
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 1990,
    "FemalePerc": 51.3779793427497
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 2000,
    "FemalePerc": 51.1915008068854
  },
  {
    "Entity": "Channel Islands",
    "Code": "OWID_CIS",
    "Year": 2010,
    "FemalePerc": 50.4906506917987
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1960,
    "FemalePerc": 50.7915446411065
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1970,
    "FemalePerc": 50.8237722620417
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1980,
    "FemalePerc": 50.7710621128857
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 1990,
    "FemalePerc": 50.6691443132739
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 2000,
    "FemalePerc": 50.5590897580417
  },
  {
    "Entity": "Chile",
    "Code": "CHL",
    "Year": 2010,
    "FemalePerc": 50.5082193617963
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1960,
    "FemalePerc": 48.4552594517877
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1970,
    "FemalePerc": 48.6747971491347
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1980,
    "FemalePerc": 48.6792224807661
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 1990,
    "FemalePerc": 48.6894100028636
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 2000,
    "FemalePerc": 48.643895805633
  },
  {
    "Entity": "China",
    "Code": "CHN",
    "Year": 2010,
    "FemalePerc": 48.5288023264619
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1960,
    "FemalePerc": 50.3267460669298
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1970,
    "FemalePerc": 50.2320724718116
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1980,
    "FemalePerc": 50.2090064044488
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 1990,
    "FemalePerc": 50.335613493705
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 2000,
    "FemalePerc": 50.5471097658304
  },
  {
    "Entity": "Colombia",
    "Code": "COL",
    "Year": 2010,
    "FemalePerc": 50.6928704466656
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1960,
    "FemalePerc": 50.2537646110861
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1970,
    "FemalePerc": 50.1510508356697
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1980,
    "FemalePerc": 50.0472661947627
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 1990,
    "FemalePerc": 49.8573851184894
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 2000,
    "FemalePerc": 49.6913477813548
  },
  {
    "Entity": "Comoros",
    "Code": "COM",
    "Year": 2010,
    "FemalePerc": 49.5970688535239
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1960,
    "FemalePerc": 50.3832330018087
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1970,
    "FemalePerc": 50.2924953546579
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1980,
    "FemalePerc": 50.1882944905179
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 1990,
    "FemalePerc": 50.1282754703946
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 2000,
    "FemalePerc": 50.0708520693733
  },
  {
    "Entity": "Congo",
    "Code": "COG",
    "Year": 2010,
    "FemalePerc": 49.98538764903
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1960,
    "FemalePerc": 49.1440985597571
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1970,
    "FemalePerc": 49.2578992716103
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1980,
    "FemalePerc": 49.4253994455308
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 1990,
    "FemalePerc": 49.5971403017644
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 2000,
    "FemalePerc": 49.8045826153678
  },
  {
    "Entity": "Costa Rica",
    "Code": "CRI",
    "Year": 2010,
    "FemalePerc": 49.9077284161717
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1960,
    "FemalePerc": 48.9367465190889
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1961,
    "FemalePerc": 48.8601742458797
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1962,
    "FemalePerc": 48.7736483707136
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1963,
    "FemalePerc": 48.6869570373514
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1964,
    "FemalePerc": 48.6113883567109
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1965,
    "FemalePerc": 48.5525918171944
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1966,
    "FemalePerc": 48.5128188671189
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1967,
    "FemalePerc": 48.4864448694311
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1968,
    "FemalePerc": 48.4632778014858
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1969,
    "FemalePerc": 48.4309578494073
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1970,
    "FemalePerc": 48.3825070296961
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1971,
    "FemalePerc": 48.3178448499272
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1972,
    "FemalePerc": 48.2432357766684
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1973,
    "FemalePerc": 48.1665451419345
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1974,
    "FemalePerc": 48.0967074599653
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1975,
    "FemalePerc": 48.0391108022883
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1976,
    "FemalePerc": 47.994642770217
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1977,
    "FemalePerc": 47.9608129323117
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1978,
    "FemalePerc": 47.9354635616846
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1979,
    "FemalePerc": 47.9153989601572
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1980,
    "FemalePerc": 47.8989413138396
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1981,
    "FemalePerc": 47.8852463954828
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1982,
    "FemalePerc": 47.8752378110339
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1983,
    "FemalePerc": 47.8717669357899
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1984,
    "FemalePerc": 47.8777862133958
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1985,
    "FemalePerc": 47.8947798326545
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1986,
    "FemalePerc": 47.9226463892104
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1987,
    "FemalePerc": 47.9589954197262
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1988,
    "FemalePerc": 48.0000987372141
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1989,
    "FemalePerc": 48.0412228849989
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1990,
    "FemalePerc": 48.0794489293273
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1991,
    "FemalePerc": 48.1146047518122
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1992,
    "FemalePerc": 48.1476366141453
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1993,
    "FemalePerc": 48.1787546542586
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1994,
    "FemalePerc": 48.2083928469486
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1995,
    "FemalePerc": 48.237179762708
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1996,
    "FemalePerc": 48.2643002460313
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1997,
    "FemalePerc": 48.2906272030399
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1998,
    "FemalePerc": 48.319678661361
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 1999,
    "FemalePerc": 48.3559586800897
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2000,
    "FemalePerc": 48.4019984705057
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2001,
    "FemalePerc": 48.4591857370236
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2002,
    "FemalePerc": 48.5255912799115
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2003,
    "FemalePerc": 48.5966912829424
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2004,
    "FemalePerc": 48.6661017437915
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2005,
    "FemalePerc": 48.7295201321968
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2006,
    "FemalePerc": 48.7853777400226
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2007,
    "FemalePerc": 48.83536769322
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2008,
    "FemalePerc": 48.8820513746315
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2009,
    "FemalePerc": 48.9291323921852
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2010,
    "FemalePerc": 48.978983333049
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2011,
    "FemalePerc": 49.0317614259464
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2012,
    "FemalePerc": 49.08608185137
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2013,
    "FemalePerc": 49.1407818346525
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2014,
    "FemalePerc": 49.194313843722
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2015,
    "FemalePerc": 49.2458157238143
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2016,
    "FemalePerc": 49.2951213590625
  },
  {
    "Entity": "Cote d'Ivoire",
    "Code": "CIV",
    "Year": 2017,
    "FemalePerc": 49.3425883381292
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1960,
    "FemalePerc": 51.9778354396837
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1970,
    "FemalePerc": 51.6114044847161
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1980,
    "FemalePerc": 51.5631269541941
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 1990,
    "FemalePerc": 51.5152092488647
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 2000,
    "FemalePerc": 51.8583817385124
  },
  {
    "Entity": "Croatia",
    "Code": "HRV",
    "Year": 2010,
    "FemalePerc": 51.8340048672054
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1960,
    "FemalePerc": 48.9105094763634
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1970,
    "FemalePerc": 49.156345233231
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1980,
    "FemalePerc": 49.3952477762238
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 1990,
    "FemalePerc": 49.6169988460684
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 2000,
    "FemalePerc": 49.8300649374525
  },
  {
    "Entity": "Cuba",
    "Code": "CUB",
    "Year": 2010,
    "FemalePerc": 49.8988975081209
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1960,
    "FemalePerc": 49.8790776817577
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1970,
    "FemalePerc": 50.7752072904991
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1980,
    "FemalePerc": 51.2260383656425
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 1990,
    "FemalePerc": 52.0159530951732
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 2000,
    "FemalePerc": 53.0476450015897
  },
  {
    "Entity": "Curacao",
    "Code": "CUW",
    "Year": 2010,
    "FemalePerc": 54.1065682056841
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1960,
    "FemalePerc": 50.8377957593571
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1970,
    "FemalePerc": 50.5831794647819
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1980,
    "FemalePerc": 49.6461981990394
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 1990,
    "FemalePerc": 49.3061072217287
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 2000,
    "FemalePerc": 49.5991680165549
  },
  {
    "Entity": "Cyprus",
    "Code": "CYP",
    "Year": 2010,
    "FemalePerc": 50.0653867344472
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1960,
    "FemalePerc": 51.3715941632445
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1970,
    "FemalePerc": 51.6092065244627
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1980,
    "FemalePerc": 51.5138702066784
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 1990,
    "FemalePerc": 51.4565276462915
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 2000,
    "FemalePerc": 51.3531398296161
  },
  {
    "Entity": "Czechia",
    "Code": "CZE",
    "Year": 2010,
    "FemalePerc": 50.9181272146682
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1960,
    "FemalePerc": 52.2339538370814
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1970,
    "FemalePerc": 51.5338858489817
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1980,
    "FemalePerc": 51.0216198407009
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 1990,
    "FemalePerc": 50.655466493545
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 2000,
    "FemalePerc": 50.4113442003518
  },
  {
    "Entity": "Democratic Republic of Congo",
    "Code": "COD",
    "Year": 2010,
    "FemalePerc": 50.2173115454499
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1960,
    "FemalePerc": 50.384481976923
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1970,
    "FemalePerc": 50.3396002505658
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1980,
    "FemalePerc": 50.6099499506728
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 1990,
    "FemalePerc": 50.6758356209361
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 2000,
    "FemalePerc": 50.518629549359
  },
  {
    "Entity": "Denmark",
    "Code": "DNK",
    "Year": 2010,
    "FemalePerc": 50.3805954041235
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1960,
    "FemalePerc": 50.2917473754693
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1970,
    "FemalePerc": 50.2135761796796
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1980,
    "FemalePerc": 49.5520392244261
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 1990,
    "FemalePerc": 49.7014700377545
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 2000,
    "FemalePerc": 49.7253953234287
  },
  {
    "Entity": "Djibouti",
    "Code": "DJI",
    "Year": 2010,
    "FemalePerc": 49.7666096065436
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1960,
    "FemalePerc": 49.3682687202323
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1970,
    "FemalePerc": 49.491463470422
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1980,
    "FemalePerc": 49.59484603323
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 1990,
    "FemalePerc": 49.6856053318886
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 2000,
    "FemalePerc": 49.8837622672676
  },
  {
    "Entity": "Dominican Republic",
    "Code": "DOM",
    "Year": 2010,
    "FemalePerc": 50.0835221261397
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1960,
    "FemalePerc": 50.0061378738053
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1970,
    "FemalePerc": 49.8049077548138
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1980,
    "FemalePerc": 49.7229279459709
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 1990,
    "FemalePerc": 49.7541369053008
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 2000,
    "FemalePerc": 49.8661213012119
  },
  {
    "Entity": "Ecuador",
    "Code": "ECU",
    "Year": 2010,
    "FemalePerc": 49.9668757682619
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1960,
    "FemalePerc": 49.3470604812589
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1970,
    "FemalePerc": 49.354227848893
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1980,
    "FemalePerc": 49.525284274889
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 1990,
    "FemalePerc": 49.7973706431179
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 2000,
    "FemalePerc": 49.697786959125
  },
  {
    "Entity": "Egypt",
    "Code": "EGY",
    "Year": 2010,
    "FemalePerc": 49.5099509612704
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1960,
    "FemalePerc": 50.7130352197884
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1970,
    "FemalePerc": 50.2552342302535
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1980,
    "FemalePerc": 50.6850807332764
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 1990,
    "FemalePerc": 51.1911925169734
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 2000,
    "FemalePerc": 51.8127673672731
  },
  {
    "Entity": "El Salvador",
    "Code": "SLV",
    "Year": 2010,
    "FemalePerc": 52.6566899597802
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1960,
    "FemalePerc": 51.0113037279585
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1970,
    "FemalePerc": 50.3750248765958
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1980,
    "FemalePerc": 50.5120924312151
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 1990,
    "FemalePerc": 50.4431267907219
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 2000,
    "FemalePerc": 48.225607701486
  },
  {
    "Entity": "Equatorial Guinea",
    "Code": "GNQ",
    "Year": 2010,
    "FemalePerc": 45.6967812074835
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1960,
    "FemalePerc": 50.3074451604132
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1970,
    "FemalePerc": 50.1557221473154
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1980,
    "FemalePerc": 50.0887636347021
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 1990,
    "FemalePerc": 49.9936723335149
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 2000,
    "FemalePerc": 50.0034189989053
  },
  {
    "Entity": "Eritrea",
    "Code": "ERI",
    "Year": 2010,
    "FemalePerc": 49.9525489319923
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1960,
    "FemalePerc": 55.8535362666623
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1970,
    "FemalePerc": 54.2531057795657
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1980,
    "FemalePerc": 53.7087087596266
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 1990,
    "FemalePerc": 53.2366539891889
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 2000,
    "FemalePerc": 53.3590258385503
  },
  {
    "Entity": "Estonia",
    "Code": "EST",
    "Year": 2010,
    "FemalePerc": 53.4303278350097
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1960,
    "FemalePerc": 51.5920976509471
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1970,
    "FemalePerc": 52.5335128161983
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1980,
    "FemalePerc": 52.5166978802393
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 1990,
    "FemalePerc": 52.8937421056542
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 2000,
    "FemalePerc": 51.8762623978777
  },
  {
    "Entity": "Eswatini",
    "Code": "SWZ",
    "Year": 2010,
    "FemalePerc": 51.5058074910857
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1960,
    "FemalePerc": 50.2927685817219
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1970,
    "FemalePerc": 50.2417343185379
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1980,
    "FemalePerc": 50.2208314783255
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 1990,
    "FemalePerc": 50.1292534816255
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 2000,
    "FemalePerc": 50.1382787469412
  },
  {
    "Entity": "Ethiopia",
    "Code": "ETH",
    "Year": 2010,
    "FemalePerc": 50.0948443123902
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1960,
    "FemalePerc": 48.4954483403792
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1970,
    "FemalePerc": 49.1433599348346
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1980,
    "FemalePerc": 49.3733274564745
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 1990,
    "FemalePerc": 49.2083054841503
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 2000,
    "FemalePerc": 49.2100864368587
  },
  {
    "Entity": "Fiji",
    "Code": "FJI",
    "Year": 2010,
    "FemalePerc": 48.9598280838277
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1960,
    "FemalePerc": 51.8349034511172
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1970,
    "FemalePerc": 51.7017191831089
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1980,
    "FemalePerc": 51.6520346590308
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 1990,
    "FemalePerc": 51.4705717522447
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 2000,
    "FemalePerc": 51.1834821942296
  },
  {
    "Entity": "Finland",
    "Code": "FIN",
    "Year": 2010,
    "FemalePerc": 50.9236488088227
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1960,
    "FemalePerc": 51.3608864791711
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1970,
    "FemalePerc": 50.8570205442069
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1980,
    "FemalePerc": 50.7065798282064
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 1990,
    "FemalePerc": 50.8975965363711
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 2000,
    "FemalePerc": 50.9735690073803
  },
  {
    "Entity": "France",
    "Code": "FRA",
    "Year": 2010,
    "FemalePerc": 50.9203402752384
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1960,
    "FemalePerc": 48.5771004098361
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1970,
    "FemalePerc": 48.8143723413884
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1980,
    "FemalePerc": 48.0029795452897
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 1990,
    "FemalePerc": 48.0382123862576
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 2000,
    "FemalePerc": 48.5191413675235
  },
  {
    "Entity": "French Polynesia",
    "Code": "PYF",
    "Year": 2010,
    "FemalePerc": 48.8480897332497
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1960,
    "FemalePerc": 51.1927465623898
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1970,
    "FemalePerc": 52.1001026920222
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1980,
    "FemalePerc": 51.5587049809165
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 1990,
    "FemalePerc": 51.0210939977778
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 2000,
    "FemalePerc": 50.3969581971421
  },
  {
    "Entity": "Gabon",
    "Code": "GAB",
    "Year": 2010,
    "FemalePerc": 48.9742490761871
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1960,
    "FemalePerc": 50.8085865092437
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1970,
    "FemalePerc": 48.8296026685506
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1980,
    "FemalePerc": 50.411336064543
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 1990,
    "FemalePerc": 49.654182477779
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 2000,
    "FemalePerc": 50.323333771697
  },
  {
    "Entity": "Gambia",
    "Code": "GMB",
    "Year": 2010,
    "FemalePerc": 50.4752837667177
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1960,
    "FemalePerc": 53.4114826029296
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1970,
    "FemalePerc": 52.9254313624234
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1980,
    "FemalePerc": 53.033571989715
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 1990,
    "FemalePerc": 52.4594418056866
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 2000,
    "FemalePerc": 52.5948988713172
  },
  {
    "Entity": "Georgia",
    "Code": "GEO",
    "Year": 2010,
    "FemalePerc": 52.4980315016452
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1960,
    "FemalePerc": 53.4931996404467
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1970,
    "FemalePerc": 52.6535980969034
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1980,
    "FemalePerc": 52.3414440446436
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 1990,
    "FemalePerc": 51.7567768651939
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 2000,
    "FemalePerc": 51.3050249403736
  },
  {
    "Entity": "Germany",
    "Code": "DEU",
    "Year": 2010,
    "FemalePerc": 50.9777538476578
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1960,
    "FemalePerc": 49.1875799067538
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1970,
    "FemalePerc": 49.0704116109651
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1980,
    "FemalePerc": 49.1760475518512
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 1990,
    "FemalePerc": 49.1836556955767
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 2000,
    "FemalePerc": 49.4951964899488
  },
  {
    "Entity": "Ghana",
    "Code": "GHA",
    "Year": 2010,
    "FemalePerc": 50.4985477984275
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1960,
    "FemalePerc": 50.9814505620128
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1970,
    "FemalePerc": 50.829383667344
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1980,
    "FemalePerc": 50.5053712169036
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 1990,
    "FemalePerc": 50.4132202374389
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 2000,
    "FemalePerc": 50.2842320350087
  },
  {
    "Entity": "Greece",
    "Code": "GRC",
    "Year": 2010,
    "FemalePerc": 50.7068278979979
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1960,
    "FemalePerc": 53.6033028421357
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1970,
    "FemalePerc": 52.6903241520263
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1980,
    "FemalePerc": 51.6909732365565
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 1990,
    "FemalePerc": 50.6542735486551
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 2000,
    "FemalePerc": 50.5569660112968
  },
  {
    "Entity": "Grenada",
    "Code": "GRD",
    "Year": 2010,
    "FemalePerc": 50.0401238106156
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1960,
    "FemalePerc": 41.493713754814
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1970,
    "FemalePerc": 44.274217585693
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1980,
    "FemalePerc": 47.8594887356675
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 1990,
    "FemalePerc": 46.6531269160024
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 2000,
    "FemalePerc": 48.863336402207
  },
  {
    "Entity": "Guam",
    "Code": "GUM",
    "Year": 2010,
    "FemalePerc": 49.1824459511161
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1960,
    "FemalePerc": 49.3695780158931
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1970,
    "FemalePerc": 49.3923647860452
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1980,
    "FemalePerc": 49.7563656593793
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 1990,
    "FemalePerc": 50.3100988577066
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 2000,
    "FemalePerc": 50.932429722943
  },
  {
    "Entity": "Guatemala",
    "Code": "GTM",
    "Year": 2010,
    "FemalePerc": 50.8815468045347
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1960,
    "FemalePerc": 50.5263996489085
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1970,
    "FemalePerc": 50.6793852083442
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1980,
    "FemalePerc": 50.6976870982298
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 1990,
    "FemalePerc": 50.548153935669
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 2000,
    "FemalePerc": 50.2040516061884
  },
  {
    "Entity": "Guinea",
    "Code": "GIN",
    "Year": 2010,
    "FemalePerc": 49.9737358368068
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1960,
    "FemalePerc": 50.6477051688251
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1970,
    "FemalePerc": 50.696734150861
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1980,
    "FemalePerc": 51.4532556998316
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 1990,
    "FemalePerc": 51.2080578018465
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 2000,
    "FemalePerc": 51.0722909591659
  },
  {
    "Entity": "Guinea-Bissau",
    "Code": "GNB",
    "Year": 2010,
    "FemalePerc": 50.9804488681245
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1960,
    "FemalePerc": 49.9042519145245
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1970,
    "FemalePerc": 49.8065056104861
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1980,
    "FemalePerc": 49.6621816489842
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 1990,
    "FemalePerc": 50.6620422813754
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 2000,
    "FemalePerc": 50.2834871239365
  },
  {
    "Entity": "Guyana",
    "Code": "GUY",
    "Year": 2010,
    "FemalePerc": 49.9754205628758
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1960,
    "FemalePerc": 50.9218444545262
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1970,
    "FemalePerc": 50.7776124081583
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1980,
    "FemalePerc": 50.8280690763332
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 1990,
    "FemalePerc": 50.7080201816211
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 2000,
    "FemalePerc": 50.6235440151331
  },
  {
    "Entity": "Haiti",
    "Code": "HTI",
    "Year": 2010,
    "FemalePerc": 50.5662921986542
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1960,
    "FemalePerc": 49.8358950964739
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1970,
    "FemalePerc": 50.1480495520599
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1980,
    "FemalePerc": 50.3146704191319
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 1990,
    "FemalePerc": 50.3314612750311
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 2000,
    "FemalePerc": 50.2796168897614
  },
  {
    "Entity": "Honduras",
    "Code": "HND",
    "Year": 2010,
    "FemalePerc": 50.1764171395896
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1960,
    "FemalePerc": 48.6055676809594
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1970,
    "FemalePerc": 49.0131302921041
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1980,
    "FemalePerc": 47.832597018229
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 1990,
    "FemalePerc": 49.2379782138151
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 2000,
    "FemalePerc": 50.8620701298339
  },
  {
    "Entity": "Hong Kong",
    "Code": "HKG",
    "Year": 2010,
    "FemalePerc": 53.0806437378474
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1960,
    "FemalePerc": 51.7826688808417
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1970,
    "FemalePerc": 51.5309523866944
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1980,
    "FemalePerc": 51.5574073445584
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 1990,
    "FemalePerc": 51.9741906762083
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 2000,
    "FemalePerc": 52.425126369049
  },
  {
    "Entity": "Hungary",
    "Code": "HUN",
    "Year": 2010,
    "FemalePerc": 52.5516199378516
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1960,
    "FemalePerc": 49.4731866229269
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1970,
    "FemalePerc": 49.4406206737989
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1980,
    "FemalePerc": 49.5903722136548
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 1990,
    "FemalePerc": 49.7902322736469
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 2000,
    "FemalePerc": 49.9573882377273
  },
  {
    "Entity": "Iceland",
    "Code": "ISL",
    "Year": 2010,
    "FemalePerc": 49.6219665232782
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1960,
    "FemalePerc": 48.4006556064729
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1970,
    "FemalePerc": 48.2225725340701
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1980,
    "FemalePerc": 48.2089303078999
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 1990,
    "FemalePerc": 48.2433651605419
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 2000,
    "FemalePerc": 48.1968478583753
  },
  {
    "Entity": "India",
    "Code": "IND",
    "Year": 2010,
    "FemalePerc": 48.1330661562192
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1960,
    "FemalePerc": 50.2955462795682
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1970,
    "FemalePerc": 50.1490598070468
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1980,
    "FemalePerc": 50.043664207575
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 1990,
    "FemalePerc": 49.7808548524763
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 2000,
    "FemalePerc": 49.9536105228036
  },
  {
    "Entity": "Indonesia",
    "Code": "IDN",
    "Year": 2010,
    "FemalePerc": 49.580955910027
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1960,
    "FemalePerc": 48.6800397080209
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1970,
    "FemalePerc": 48.6130763733066
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1980,
    "FemalePerc": 48.4709188731016
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 1990,
    "FemalePerc": 49.0422344522699
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 2000,
    "FemalePerc": 49.2969417570148
  },
  {
    "Entity": "Iran",
    "Code": "IRN",
    "Year": 2010,
    "FemalePerc": 49.4196608112704
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1960,
    "FemalePerc": 49.7016428402993
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1970,
    "FemalePerc": 49.13430943283
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1980,
    "FemalePerc": 48.9325771429609
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 1990,
    "FemalePerc": 49.5433882616857
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 2000,
    "FemalePerc": 49.5459192480912
  },
  {
    "Entity": "Iraq",
    "Code": "IRQ",
    "Year": 2010,
    "FemalePerc": 49.4550186131244
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1960,
    "FemalePerc": 49.7005782206622
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1970,
    "FemalePerc": 49.8015591874978
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1980,
    "FemalePerc": 49.7701425491746
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 1990,
    "FemalePerc": 50.2121307463926
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 2000,
    "FemalePerc": 50.2633557698454
  },
  {
    "Entity": "Ireland",
    "Code": "IRL",
    "Year": 2010,
    "FemalePerc": 50.1772234190807
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1960,
    "FemalePerc": 49.2948176574309
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1970,
    "FemalePerc": 49.561468922073
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1980,
    "FemalePerc": 50.0764286305602
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 1990,
    "FemalePerc": 50.0926344399249
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 2000,
    "FemalePerc": 50.7205321139056
  },
  {
    "Entity": "Israel",
    "Code": "ISR",
    "Year": 2010,
    "FemalePerc": 50.6045012924935
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1960,
    "FemalePerc": 51.3583223743298
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1970,
    "FemalePerc": 51.2573675285728
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1980,
    "FemalePerc": 51.3692659672367
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 1990,
    "FemalePerc": 51.3636954185302
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 2000,
    "FemalePerc": 51.4817688311778
  },
  {
    "Entity": "Italy",
    "Code": "ITA",
    "Year": 2010,
    "FemalePerc": 51.4196900039846
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1960,
    "FemalePerc": 51.8654452281108
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1970,
    "FemalePerc": 51.1420036813715
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1980,
    "FemalePerc": 50.5825358071939
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 1990,
    "FemalePerc": 50.6918852294693
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 2000,
    "FemalePerc": 50.3149771967575
  },
  {
    "Entity": "Jamaica",
    "Code": "JAM",
    "Year": 2010,
    "FemalePerc": 50.3436900006709
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1960,
    "FemalePerc": 50.7768601898259
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1970,
    "FemalePerc": 50.7091298315479
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1980,
    "FemalePerc": 50.6313028815541
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 1990,
    "FemalePerc": 50.7189017122125
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 2000,
    "FemalePerc": 50.8918383593436
  },
  {
    "Entity": "Japan",
    "Code": "JPN",
    "Year": 2010,
    "FemalePerc": 51.0864349677737
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1960,
    "FemalePerc": 47.7269533634182
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1970,
    "FemalePerc": 48.1383056085282
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1980,
    "FemalePerc": 47.7493727960472
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 1990,
    "FemalePerc": 47.612498399139
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 2000,
    "FemalePerc": 48.16502884895
  },
  {
    "Entity": "Jordan",
    "Code": "JOR",
    "Year": 2010,
    "FemalePerc": 49.0012582168017
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1960,
    "FemalePerc": 51.8521767968071
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1970,
    "FemalePerc": 51.8299101417942
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1980,
    "FemalePerc": 51.7333118116352
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 1990,
    "FemalePerc": 51.4551344966929
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 2000,
    "FemalePerc": 51.8944054148127
  },
  {
    "Entity": "Kazakhstan",
    "Code": "KAZ",
    "Year": 2010,
    "FemalePerc": 51.661201082165
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1960,
    "FemalePerc": 49.8476270445988
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1970,
    "FemalePerc": 50.1186359535857
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1980,
    "FemalePerc": 50.2041521561906
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 1990,
    "FemalePerc": 50.2222753029483
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 2000,
    "FemalePerc": 50.3373653017293
  },
  {
    "Entity": "Kenya",
    "Code": "KEN",
    "Year": 2010,
    "FemalePerc": 50.293083530493
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1960,
    "FemalePerc": 50.654958276732
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1970,
    "FemalePerc": 50.58127039331
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1980,
    "FemalePerc": 50.7238072768331
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 1990,
    "FemalePerc": 50.5317238902853
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 2000,
    "FemalePerc": 50.7232469701816
  },
  {
    "Entity": "Kiribati",
    "Code": "KIR",
    "Year": 2010,
    "FemalePerc": 50.7735323344309
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1960,
    "FemalePerc": 35.7787956901508
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1970,
    "FemalePerc": 43.589180474074
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1980,
    "FemalePerc": 42.794568901254
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 1990,
    "FemalePerc": 43.1784874846103
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 2000,
    "FemalePerc": 41.5574625038888
  },
  {
    "Entity": "Kuwait",
    "Code": "KWT",
    "Year": 2010,
    "FemalePerc": 42.1769072796281
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1960,
    "FemalePerc": 52.4879152477547
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1970,
    "FemalePerc": 52.1135809203449
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1980,
    "FemalePerc": 51.3810639980681
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 1990,
    "FemalePerc": 50.9557864579748
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 2000,
    "FemalePerc": 50.5561180299298
  },
  {
    "Entity": "Kyrgyzstan",
    "Code": "KGZ",
    "Year": 2010,
    "FemalePerc": 50.5803027547875
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1960,
    "FemalePerc": 50.8569507546825
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1970,
    "FemalePerc": 50.6490593577141
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1980,
    "FemalePerc": 50.3327502824457
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 1990,
    "FemalePerc": 49.9854173046107
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 2000,
    "FemalePerc": 50.1445781414363
  },
  {
    "Entity": "Laos",
    "Code": "LAO",
    "Year": 2010,
    "FemalePerc": 50.2521582863387
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1960,
    "FemalePerc": 55.8669674452851
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1970,
    "FemalePerc": 54.2128588651805
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1980,
    "FemalePerc": 53.9167471120951
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 1990,
    "FemalePerc": 53.4074553085699
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 2000,
    "FemalePerc": 54.0477965093625
  },
  {
    "Entity": "Latvia",
    "Code": "LVA",
    "Year": 2010,
    "FemalePerc": 54.2078428725893
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1960,
    "FemalePerc": 49.7150569387486
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1970,
    "FemalePerc": 49.4987139759841
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1980,
    "FemalePerc": 50.4250969566512
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 1990,
    "FemalePerc": 50.6839219789176
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 2000,
    "FemalePerc": 50.3874514623198
  },
  {
    "Entity": "Lebanon",
    "Code": "LBN",
    "Year": 2010,
    "FemalePerc": 49.0058199616245
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1960,
    "FemalePerc": 53.4676555689163
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1970,
    "FemalePerc": 53.7786760912137
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1980,
    "FemalePerc": 53.2345793222626
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 1990,
    "FemalePerc": 51.6986660930773
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 2000,
    "FemalePerc": 51.8753719171016
  },
  {
    "Entity": "Lesotho",
    "Code": "LSO",
    "Year": 2010,
    "FemalePerc": 51.5620015142939
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1960,
    "FemalePerc": 49.2897501584383
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1970,
    "FemalePerc": 49.9576077050202
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1980,
    "FemalePerc": 50.1639290436934
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 1990,
    "FemalePerc": 50.2196459249518
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 2000,
    "FemalePerc": 50.029120942742
  },
  {
    "Entity": "Liberia",
    "Code": "LBR",
    "Year": 2010,
    "FemalePerc": 49.713307748264
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1960,
    "FemalePerc": 48.689050659479
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1970,
    "FemalePerc": 48.4210417773012
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1980,
    "FemalePerc": 47.6465011856018
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 1990,
    "FemalePerc": 47.2816619157236
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 2000,
    "FemalePerc": 48.0883356809651
  },
  {
    "Entity": "Libya",
    "Code": "LBY",
    "Year": 2010,
    "FemalePerc": 48.9465813129584
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1960,
    "FemalePerc": 53.9002163276859
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1970,
    "FemalePerc": 53.0929079101786
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1980,
    "FemalePerc": 52.8625881328301
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 1990,
    "FemalePerc": 52.6803609925455
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 2000,
    "FemalePerc": 53.1965347350349
  },
  {
    "Entity": "Lithuania",
    "Code": "LTU",
    "Year": 2010,
    "FemalePerc": 53.9680217529165
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1960,
    "FemalePerc": 50.6108047109684
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1970,
    "FemalePerc": 51.0006712357804
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1980,
    "FemalePerc": 51.1858326374544
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 1990,
    "FemalePerc": 51.0712976059511
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 2000,
    "FemalePerc": 50.7489004966682
  },
  {
    "Entity": "Luxembourg",
    "Code": "LUX",
    "Year": 2010,
    "FemalePerc": 50.3244797101735
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1960,
    "FemalePerc": 50.8572654513382
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1970,
    "FemalePerc": 48.5663919544105
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1980,
    "FemalePerc": 48.7569814807038
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 1990,
    "FemalePerc": 50.602574278728
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 2000,
    "FemalePerc": 52.0987354312899
  },
  {
    "Entity": "Macao",
    "Code": "MAC",
    "Year": 2010,
    "FemalePerc": 52.0110993165354
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1960,
    "FemalePerc": 49.1544050164648
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1970,
    "FemalePerc": 49.5579204431668
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1980,
    "FemalePerc": 49.8568756970218
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 1990,
    "FemalePerc": 50.0706418602101
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 2000,
    "FemalePerc": 50.2087803959787
  },
  {
    "Entity": "Madagascar",
    "Code": "MDG",
    "Year": 2010,
    "FemalePerc": 50.1868649428602
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1960,
    "FemalePerc": 51.5878248979301
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1970,
    "FemalePerc": 51.3735302378228
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1980,
    "FemalePerc": 51.0294220250622
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 1990,
    "FemalePerc": 50.8594765143951
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 2000,
    "FemalePerc": 50.6832401545653
  },
  {
    "Entity": "Malawi",
    "Code": "MWI",
    "Year": 2010,
    "FemalePerc": 50.5587358318296
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1960,
    "FemalePerc": 49.0920986834919
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1970,
    "FemalePerc": 49.315251961917
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1980,
    "FemalePerc": 49.4482513210123
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 1990,
    "FemalePerc": 49.1240674920983
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 2000,
    "FemalePerc": 49.0524208765696
  },
  {
    "Entity": "Malaysia",
    "Code": "MYS",
    "Year": 2010,
    "FemalePerc": 48.464309216962
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1960,
    "FemalePerc": 45.5381774494972
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1970,
    "FemalePerc": 48.3051433112766
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1980,
    "FemalePerc": 47.6986602351218
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 1990,
    "FemalePerc": 48.7321924558731
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 2000,
    "FemalePerc": 49.371589571668
  },
  {
    "Entity": "Maldives",
    "Code": "MDV",
    "Year": 2010,
    "FemalePerc": 45.2316547236275
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1960,
    "FemalePerc": 49.4491450639442
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1970,
    "FemalePerc": 49.946999869895
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1980,
    "FemalePerc": 50.1950741623137
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 1990,
    "FemalePerc": 50.6211854791124
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 2000,
    "FemalePerc": 50.397914164621
  },
  {
    "Entity": "Mali",
    "Code": "MLI",
    "Year": 2010,
    "FemalePerc": 50.0440229807057
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1960,
    "FemalePerc": 51.5961390928088
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1970,
    "FemalePerc": 51.5526883064138
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1980,
    "FemalePerc": 51.2767195957705
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 1990,
    "FemalePerc": 50.5835027727701
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 2000,
    "FemalePerc": 50.1702913987088
  },
  {
    "Entity": "Malta",
    "Code": "MLT",
    "Year": 2010,
    "FemalePerc": 50.2143643328511
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1960,
    "FemalePerc": 50.4682633181499
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1970,
    "FemalePerc": 50.2238210336937
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1980,
    "FemalePerc": 50.180140422833
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 1990,
    "FemalePerc": 50.1417382253832
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 2000,
    "FemalePerc": 50.0204291411456
  },
  {
    "Entity": "Mauritania",
    "Code": "MRT",
    "Year": 2010,
    "FemalePerc": 49.7875353715236
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1960,
    "FemalePerc": 50.1376463012765
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1970,
    "FemalePerc": 49.968479679981
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1980,
    "FemalePerc": 50.6917422588529
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 1990,
    "FemalePerc": 50.1317871819326
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 2000,
    "FemalePerc": 50.411805455357
  },
  {
    "Entity": "Mauritius",
    "Code": "MUS",
    "Year": 2010,
    "FemalePerc": 50.4325884067749
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1960,
    "FemalePerc": 50.1820696801375
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1970,
    "FemalePerc": 50.1269203851996
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1980,
    "FemalePerc": 50.1274255986448
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 1990,
    "FemalePerc": 50.2673760392319
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 2000,
    "FemalePerc": 50.3472425804614
  },
  {
    "Entity": "Mexico",
    "Code": "MEX",
    "Year": 2010,
    "FemalePerc": 50.2311246589852
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1960,
    "FemalePerc": 48.4911083168673
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1961,
    "FemalePerc": 48.4844528581065
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1962,
    "FemalePerc": 48.4796691354899
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1963,
    "FemalePerc": 48.4837944017024
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1964,
    "FemalePerc": 48.4748247038783
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1965,
    "FemalePerc": 48.468665058765
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1966,
    "FemalePerc": 48.4740571259872
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1967,
    "FemalePerc": 48.4713986436104
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1968,
    "FemalePerc": 48.4786219414051
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1969,
    "FemalePerc": 48.4684804467417
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1970,
    "FemalePerc": 48.4373473972068
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1971,
    "FemalePerc": 48.3986280855997
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1972,
    "FemalePerc": 48.3393530780962
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1973,
    "FemalePerc": 48.2854941244462
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1974,
    "FemalePerc": 48.2770210790826
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1975,
    "FemalePerc": 48.3086814683432
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1976,
    "FemalePerc": 48.4041313970645
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1977,
    "FemalePerc": 48.5387989714113
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1978,
    "FemalePerc": 48.6865636635492
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1979,
    "FemalePerc": 48.8129154795821
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1980,
    "FemalePerc": 48.885143005934
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1981,
    "FemalePerc": 48.9114158881601
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1982,
    "FemalePerc": 48.8995080455058
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1983,
    "FemalePerc": 48.8583399444665
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1984,
    "FemalePerc": 48.8268720191257
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1985,
    "FemalePerc": 48.8089541438592
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1986,
    "FemalePerc": 48.8061670001819
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1987,
    "FemalePerc": 48.8136233365177
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1988,
    "FemalePerc": 48.8280103887072
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1989,
    "FemalePerc": 48.8442040152618
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1990,
    "FemalePerc": 48.8503181737966
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1991,
    "FemalePerc": 48.8440359543283
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1992,
    "FemalePerc": 48.8284947933102
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1993,
    "FemalePerc": 48.8228219560302
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1994,
    "FemalePerc": 48.8378671444062
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1995,
    "FemalePerc": 48.8806247675716
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1996,
    "FemalePerc": 48.9689294219728
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1997,
    "FemalePerc": 49.0811906736706
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1998,
    "FemalePerc": 49.2077424123435
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 1999,
    "FemalePerc": 49.3108501678817
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2000,
    "FemalePerc": 49.3800383519818
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2001,
    "FemalePerc": 49.3929921149629
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2002,
    "FemalePerc": 49.3643552880031
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2003,
    "FemalePerc": 49.3104771891062
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2004,
    "FemalePerc": 49.2423033976711
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2005,
    "FemalePerc": 49.1812232214323
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2006,
    "FemalePerc": 49.1247161241484
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2007,
    "FemalePerc": 49.0835902706406
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2008,
    "FemalePerc": 49.0385259631491
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2009,
    "FemalePerc": 48.9900544408749
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2010,
    "FemalePerc": 48.9466217585578
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2011,
    "FemalePerc": 48.9088624722142
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2012,
    "FemalePerc": 48.8743961352657
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2013,
    "FemalePerc": 48.8403938321488
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2014,
    "FemalePerc": 48.8103821196828
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2015,
    "FemalePerc": 48.7862334453733
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2016,
    "FemalePerc": 48.7640085385378
  },
  {
    "Entity": "Micronesia (country)",
    "Code": "FSM",
    "Year": 2017,
    "FemalePerc": 48.7454755633042
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1960,
    "FemalePerc": 53.2148361327345
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1970,
    "FemalePerc": 53.2366491214404
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1980,
    "FemalePerc": 52.7165436608661
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 1990,
    "FemalePerc": 52.3372561617905
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 2000,
    "FemalePerc": 52.1368874293725
  },
  {
    "Entity": "Moldova",
    "Code": "MDA",
    "Year": 2010,
    "FemalePerc": 51.9222473307561
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1960,
    "FemalePerc": 50.8278266985099
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1970,
    "FemalePerc": 50.7472910552627
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1980,
    "FemalePerc": 50.6869583847748
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 1990,
    "FemalePerc": 50.6326291504341
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 2000,
    "FemalePerc": 50.1295965696743
  },
  {
    "Entity": "Mongolia",
    "Code": "MNG",
    "Year": 2010,
    "FemalePerc": 50.3844948666433
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1960,
    "FemalePerc": 51.3136622515469
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1970,
    "FemalePerc": 51.171825392244
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1980,
    "FemalePerc": 50.9288738663503
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 1990,
    "FemalePerc": 50.2093485722834
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 2000,
    "FemalePerc": 50.6071165468189
  },
  {
    "Entity": "Montenegro",
    "Code": "MNE",
    "Year": 2010,
    "FemalePerc": 50.7255500292334
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1960,
    "FemalePerc": 50.1730051882901
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1970,
    "FemalePerc": 50.5512747243626
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1980,
    "FemalePerc": 50.2604914362004
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 1990,
    "FemalePerc": 50.1067360474422
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 2000,
    "FemalePerc": 50.4534825762003
  },
  {
    "Entity": "Morocco",
    "Code": "MAR",
    "Year": 2010,
    "FemalePerc": 50.715850350314
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1960,
    "FemalePerc": 51.1365409651047
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1970,
    "FemalePerc": 51.0976934090369
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1980,
    "FemalePerc": 51.0923523477446
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 1990,
    "FemalePerc": 52.2357090545994
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 2000,
    "FemalePerc": 52.0347772414363
  },
  {
    "Entity": "Mozambique",
    "Code": "MOZ",
    "Year": 2010,
    "FemalePerc": 51.4421499726316
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1960,
    "FemalePerc": 51.1395672683531
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1970,
    "FemalePerc": 51.266989792971
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1980,
    "FemalePerc": 51.1673461451925
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 1990,
    "FemalePerc": 51.0616238977694
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 2000,
    "FemalePerc": 51.1453112984513
  },
  {
    "Entity": "Myanmar",
    "Code": "MMR",
    "Year": 2010,
    "FemalePerc": 51.1962123057277
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1960,
    "FemalePerc": 50.6332286112121
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1970,
    "FemalePerc": 50.6080972853143
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1980,
    "FemalePerc": 51.3004665860222
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 1990,
    "FemalePerc": 51.3204594340696
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 2000,
    "FemalePerc": 51.1119067426261
  },
  {
    "Entity": "Namibia",
    "Code": "NAM",
    "Year": 2010,
    "FemalePerc": 51.5709755141333
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1960,
    "FemalePerc": 50.1969787972031
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1970,
    "FemalePerc": 50.2887914831975
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1980,
    "FemalePerc": 49.987219974338
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 1990,
    "FemalePerc": 50.3804038686007
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 2000,
    "FemalePerc": 50.2701307460358
  },
  {
    "Entity": "Nepal",
    "Code": "NPL",
    "Year": 2010,
    "FemalePerc": 51.2212072195763
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1960,
    "FemalePerc": 50.2081045068856
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1970,
    "FemalePerc": 50.1159096168795
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1980,
    "FemalePerc": 50.3443991232937
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 1990,
    "FemalePerc": 50.5386743672522
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 2000,
    "FemalePerc": 50.4668662708239
  },
  {
    "Entity": "Netherlands",
    "Code": "NLD",
    "Year": 2010,
    "FemalePerc": 50.3420233152132
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1960,
    "FemalePerc": 47.2860272358088
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1970,
    "FemalePerc": 47.72366909412
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1980,
    "FemalePerc": 48.366071613121
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 1990,
    "FemalePerc": 48.9858059956417
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 2000,
    "FemalePerc": 49.3583058522882
  },
  {
    "Entity": "New Caledonia",
    "Code": "NCL",
    "Year": 2010,
    "FemalePerc": 49.2743808434949
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1960,
    "FemalePerc": 49.7491569371815
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1970,
    "FemalePerc": 50.0339732847572
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1980,
    "FemalePerc": 50.2952383676401
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 1990,
    "FemalePerc": 50.7812281592325
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 2000,
    "FemalePerc": 50.9202662249624
  },
  {
    "Entity": "New Zealand",
    "Code": "NZL",
    "Year": 2010,
    "FemalePerc": 50.8985460153865
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1960,
    "FemalePerc": 50.091198769366
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1970,
    "FemalePerc": 49.9930361536216
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1980,
    "FemalePerc": 49.9446753910108
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 1990,
    "FemalePerc": 50.4073051939435
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 2000,
    "FemalePerc": 50.5233763774214
  },
  {
    "Entity": "Nicaragua",
    "Code": "NIC",
    "Year": 2010,
    "FemalePerc": 50.7321289174322
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1960,
    "FemalePerc": 52.8890979451566
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1970,
    "FemalePerc": 51.6031417450045
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1980,
    "FemalePerc": 50.821711696353
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 1990,
    "FemalePerc": 51.1875102725532
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 2000,
    "FemalePerc": 50.3686036293023
  },
  {
    "Entity": "Niger",
    "Code": "NER",
    "Year": 2010,
    "FemalePerc": 50.0193843968512
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1960,
    "FemalePerc": 50.0857584862286
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1970,
    "FemalePerc": 49.9947348586458
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1980,
    "FemalePerc": 49.7296419534725
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 1990,
    "FemalePerc": 49.6915382175921
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 2000,
    "FemalePerc": 49.5840979679525
  },
  {
    "Entity": "Nigeria",
    "Code": "NGA",
    "Year": 2010,
    "FemalePerc": 49.4229508472533
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1960,
    "FemalePerc": 53.78949000231
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1970,
    "FemalePerc": 52.719617392755
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1980,
    "FemalePerc": 51.9564971534117
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 1990,
    "FemalePerc": 51.4156541323468
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 2000,
    "FemalePerc": 51.2508614607181
  },
  {
    "Entity": "North Korea",
    "Code": "PRK",
    "Year": 2010,
    "FemalePerc": 51.1358795465314
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1960,
    "FemalePerc": 49.3920748050273
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1970,
    "FemalePerc": 49.2654310046751
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1980,
    "FemalePerc": 49.324733409105
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 1990,
    "FemalePerc": 49.7002832355985
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 2000,
    "FemalePerc": 49.9051268832719
  },
  {
    "Entity": "North Macedonia",
    "Code": "MKD",
    "Year": 2010,
    "FemalePerc": 50.0423280065561
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1960,
    "FemalePerc": 50.1893366323257
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1970,
    "FemalePerc": 50.2726358722503
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1980,
    "FemalePerc": 50.445489186431
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 1990,
    "FemalePerc": 50.5584507377182
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 2000,
    "FemalePerc": 50.4595416030004
  },
  {
    "Entity": "Norway",
    "Code": "NOR",
    "Year": 2010,
    "FemalePerc": 50.0101721737628
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1960,
    "FemalePerc": 50.4694291089547
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1970,
    "FemalePerc": 50.8660681968264
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1980,
    "FemalePerc": 47.2974143606589
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 1990,
    "FemalePerc": 44.3375126851172
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 2000,
    "FemalePerc": 43.8599624072582
  },
  {
    "Entity": "Oman",
    "Code": "OMN",
    "Year": 2010,
    "FemalePerc": 39.6817782488959
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1960,
    "FemalePerc": 46.4325046023231
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1970,
    "FemalePerc": 47.1301956245911
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1980,
    "FemalePerc": 47.6879115130973
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 1990,
    "FemalePerc": 48.1657675558776
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 2000,
    "FemalePerc": 48.404962431985
  },
  {
    "Entity": "Pakistan",
    "Code": "PAK",
    "Year": 2010,
    "FemalePerc": 48.5889525748501
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 1990,
    "FemalePerc": 49.3920172575138
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 2000,
    "FemalePerc": 49.3030283756048
  },
  {
    "Entity": "Palestine",
    "Code": "PSE",
    "Year": 2010,
    "FemalePerc": 49.284183783619
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1960,
    "FemalePerc": 48.9606053036448
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1970,
    "FemalePerc": 49.1398647794768
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1980,
    "FemalePerc": 49.3399785299701
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 1990,
    "FemalePerc": 49.4531772940694
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 2000,
    "FemalePerc": 49.608723257091
  },
  {
    "Entity": "Panama",
    "Code": "PAN",
    "Year": 2010,
    "FemalePerc": 49.7651528043873
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1960,
    "FemalePerc": 48.2927872480635
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1970,
    "FemalePerc": 48.7806142149974
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1980,
    "FemalePerc": 48.9559016582952
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 1990,
    "FemalePerc": 49.1436006656994
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 2000,
    "FemalePerc": 49.1913459298642
  },
  {
    "Entity": "Papua New Guinea",
    "Code": "PNG",
    "Year": 2010,
    "FemalePerc": 49.143586436489
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1960,
    "FemalePerc": 50.7638453873934
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1970,
    "FemalePerc": 50.1182855805573
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1980,
    "FemalePerc": 49.564206381495
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 1990,
    "FemalePerc": 49.4593988468663
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 2000,
    "FemalePerc": 49.3940545438602
  },
  {
    "Entity": "Paraguay",
    "Code": "PRY",
    "Year": 2010,
    "FemalePerc": 49.2680364426191
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1960,
    "FemalePerc": 49.7412220022422
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1970,
    "FemalePerc": 49.7799501839058
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1980,
    "FemalePerc": 49.9422032914111
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 1990,
    "FemalePerc": 50.0342150473453
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 2000,
    "FemalePerc": 50.0254679956433
  },
  {
    "Entity": "Peru",
    "Code": "PER",
    "Year": 2010,
    "FemalePerc": 50.0377872826721
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1960,
    "FemalePerc": 49.67444552058
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1970,
    "FemalePerc": 49.4089705301219
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1980,
    "FemalePerc": 49.414948851052
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 1990,
    "FemalePerc": 49.4852515221718
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 2000,
    "FemalePerc": 49.6350849481488
  },
  {
    "Entity": "Philippines",
    "Code": "PHL",
    "Year": 2010,
    "FemalePerc": 49.523590518079
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1960,
    "FemalePerc": 51.6311268229962
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1970,
    "FemalePerc": 51.4414551831527
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1980,
    "FemalePerc": 51.3367836489137
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 1990,
    "FemalePerc": 51.3048341972349
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 2000,
    "FemalePerc": 51.4524921855748
  },
  {
    "Entity": "Poland",
    "Code": "POL",
    "Year": 2010,
    "FemalePerc": 51.6504495542372
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1960,
    "FemalePerc": 52.1539928565092
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1970,
    "FemalePerc": 52.5172965994032
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1980,
    "FemalePerc": 51.8743494285782
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 1990,
    "FemalePerc": 51.8260719124008
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 2000,
    "FemalePerc": 51.7451483847392
  },
  {
    "Entity": "Portugal",
    "Code": "PRT",
    "Year": 2010,
    "FemalePerc": 52.1229496846932
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1960,
    "FemalePerc": 50.5704346969653
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1970,
    "FemalePerc": 50.9982312628444
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1980,
    "FemalePerc": 51.3182661202282
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 1990,
    "FemalePerc": 51.5717102669342
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 2000,
    "FemalePerc": 51.8685903007127
  },
  {
    "Entity": "Puerto Rico",
    "Code": "PRI",
    "Year": 2010,
    "FemalePerc": 51.9424681483977
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1960,
    "FemalePerc": 43.5198277863369
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1970,
    "FemalePerc": 36.1775367281161
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1980,
    "FemalePerc": 36.9924476024489
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 1990,
    "FemalePerc": 33.0409577661079
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 2000,
    "FemalePerc": 34.7688884086258
  },
  {
    "Entity": "Qatar",
    "Code": "QAT",
    "Year": 2010,
    "FemalePerc": 24.1728424058496
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1960,
    "FemalePerc": 51.1655481951838
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1970,
    "FemalePerc": 50.8792533638764
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1980,
    "FemalePerc": 50.6795712131167
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 1990,
    "FemalePerc": 50.7027583414437
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 2000,
    "FemalePerc": 51.0796440692718
  },
  {
    "Entity": "Romania",
    "Code": "ROU",
    "Year": 2010,
    "FemalePerc": 51.4481945219328
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1960,
    "FemalePerc": 55.2124690772271
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1970,
    "FemalePerc": 54.3558929097962
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1980,
    "FemalePerc": 53.8541772992194
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 1990,
    "FemalePerc": 53.1829301086208
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 2000,
    "FemalePerc": 53.2027892332539
  },
  {
    "Entity": "Russia",
    "Code": "RUS",
    "Year": 2010,
    "FemalePerc": 53.6241513100791
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1960,
    "FemalePerc": 50.9240203706854
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1970,
    "FemalePerc": 50.9160236012745
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1980,
    "FemalePerc": 50.8344666076216
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 1990,
    "FemalePerc": 50.7337888369235
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 2000,
    "FemalePerc": 51.2196942322788
  },
  {
    "Entity": "Rwanda",
    "Code": "RWA",
    "Year": 2010,
    "FemalePerc": 51.0384619175654
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1960,
    "FemalePerc": 51.9421579532814
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1970,
    "FemalePerc": 51.9067918658909
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1980,
    "FemalePerc": 51.0946863424847
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 1990,
    "FemalePerc": 50.8988276161528
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 2000,
    "FemalePerc": 51.0280671572844
  },
  {
    "Entity": "Saint Lucia",
    "Code": "LCA",
    "Year": 2010,
    "FemalePerc": 50.928876887596
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1960,
    "FemalePerc": 53.1187843597505
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1970,
    "FemalePerc": 52.7002376872478
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1980,
    "FemalePerc": 51.5701492537313
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 1990,
    "FemalePerc": 50.2874151241745
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 2000,
    "FemalePerc": 49.645968489342
  },
  {
    "Entity": "Saint Vincent and the Grenadines",
    "Code": "VCT",
    "Year": 2010,
    "FemalePerc": 49.5032476443143
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1960,
    "FemalePerc": 49.2406391517249
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1970,
    "FemalePerc": 49.0430956205909
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1980,
    "FemalePerc": 48.8596186729407
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 1990,
    "FemalePerc": 47.803581077762
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 2000,
    "FemalePerc": 47.9248870384899
  },
  {
    "Entity": "Samoa",
    "Code": "WSM",
    "Year": 2010,
    "FemalePerc": 48.4165301683628
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1960,
    "FemalePerc": 44.3647285856574
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1970,
    "FemalePerc": 49.8794693960003
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1980,
    "FemalePerc": 50.6619064168589
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 1990,
    "FemalePerc": 50.4811744872155
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 2000,
    "FemalePerc": 50.3542415191262
  },
  {
    "Entity": "Sao Tome and Principe",
    "Code": "STP",
    "Year": 2010,
    "FemalePerc": 50.2408880242605
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1960,
    "FemalePerc": 49.7815263497135
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1970,
    "FemalePerc": 49.0852390211206
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1980,
    "FemalePerc": 46.3590769063033
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 1990,
    "FemalePerc": 43.988090753797
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 2000,
    "FemalePerc": 45.5352788286863
  },
  {
    "Entity": "Saudi Arabia",
    "Code": "SAU",
    "Year": 2010,
    "FemalePerc": 43.8459253405867
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1960,
    "FemalePerc": 50.3160357956652
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1970,
    "FemalePerc": 49.6645690389777
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1980,
    "FemalePerc": 49.9209496201791
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 1990,
    "FemalePerc": 50.2235026237437
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 2000,
    "FemalePerc": 50.7844207508161
  },
  {
    "Entity": "Senegal",
    "Code": "SEN",
    "Year": 2010,
    "FemalePerc": 51.0399203978189
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 1990,
    "FemalePerc": 50.6386643125906
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 2000,
    "FemalePerc": 50.9253383175174
  },
  {
    "Entity": "Serbia",
    "Code": "SRB",
    "Year": 2010,
    "FemalePerc": 51.092663881863
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1960,
    "FemalePerc": 51.0496412923107
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1970,
    "FemalePerc": 49.8997421942137
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1980,
    "FemalePerc": 49.5248152059134
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 1990,
    "FemalePerc": 50.1217716357046
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 2000,
    "FemalePerc": 50.1909996056782
  },
  {
    "Entity": "Seychelles",
    "Code": "SYC",
    "Year": 2010,
    "FemalePerc": 48.4261660156891
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1960,
    "FemalePerc": 51.2540371537865
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1970,
    "FemalePerc": 51.3040545534843
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1980,
    "FemalePerc": 50.8872847381439
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 1990,
    "FemalePerc": 50.6157250779353
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 2000,
    "FemalePerc": 50.6309398457858
  },
  {
    "Entity": "Sierra Leone",
    "Code": "SLE",
    "Year": 2010,
    "FemalePerc": 50.6125285834544
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1960,
    "FemalePerc": 47.3203012196481
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1970,
    "FemalePerc": 48.803066743361
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1980,
    "FemalePerc": 48.9897167972799
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 1990,
    "FemalePerc": 49.6895741659857
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 2000,
    "FemalePerc": 50.0428466529278
  },
  {
    "Entity": "Singapore",
    "Code": "SGP",
    "Year": 2010,
    "FemalePerc": 50.657071567325
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1960,
    "FemalePerc": 50.6394005209501
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1970,
    "FemalePerc": 50.6728697159166
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1980,
    "FemalePerc": 50.8661864859618
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 1990,
    "FemalePerc": 51.1896952890778
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 2000,
    "FemalePerc": 51.4433878901105
  },
  {
    "Entity": "Slovakia",
    "Code": "SVK",
    "Year": 2010,
    "FemalePerc": 51.4953574870941
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1960,
    "FemalePerc": 52.0957023322417
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1970,
    "FemalePerc": 51.5972242187275
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1980,
    "FemalePerc": 51.7823108352711
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 1990,
    "FemalePerc": 51.4631351736051
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 2000,
    "FemalePerc": 51.1808164659036
  },
  {
    "Entity": "Slovenia",
    "Code": "SVN",
    "Year": 2010,
    "FemalePerc": 50.5374630103014
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1960,
    "FemalePerc": 46.3466987935452
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1970,
    "FemalePerc": 47.4489350286363
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1980,
    "FemalePerc": 48.3067862981739
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 1990,
    "FemalePerc": 48.6234795742648
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 2000,
    "FemalePerc": 48.5989122847836
  },
  {
    "Entity": "Solomon Islands",
    "Code": "SLB",
    "Year": 2010,
    "FemalePerc": 49.1904068996355
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1960,
    "FemalePerc": 50.5199124075408
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1970,
    "FemalePerc": 50.5678372367335
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1980,
    "FemalePerc": 49.005248363572
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 1990,
    "FemalePerc": 49.6955528903347
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 2000,
    "FemalePerc": 49.8839370110545
  },
  {
    "Entity": "Somalia",
    "Code": "SOM",
    "Year": 2010,
    "FemalePerc": 50.0778256054331
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1960,
    "FemalePerc": 50.0037291951297
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1970,
    "FemalePerc": 50.0131877104199
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1980,
    "FemalePerc": 50.2741706543097
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 1990,
    "FemalePerc": 50.6162254449971
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 2000,
    "FemalePerc": 50.9267560703408
  },
  {
    "Entity": "South Africa",
    "Code": "ZAF",
    "Year": 2010,
    "FemalePerc": 50.8978161709247
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1960,
    "FemalePerc": 49.6682913908874
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1970,
    "FemalePerc": 49.779916178917
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1980,
    "FemalePerc": 49.892596457737
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 1990,
    "FemalePerc": 49.8720200507279
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 2000,
    "FemalePerc": 49.8255772642863
  },
  {
    "Entity": "South Korea",
    "Code": "KOR",
    "Year": 2010,
    "FemalePerc": 49.8949091621278
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1960,
    "FemalePerc": 49.7715003686788
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1970,
    "FemalePerc": 50.1299447542893
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1980,
    "FemalePerc": 50.2709009664787
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 1990,
    "FemalePerc": 50.2939246103744
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 2000,
    "FemalePerc": 50.1890110624825
  },
  {
    "Entity": "South Sudan",
    "Code": "SSD",
    "Year": 2010,
    "FemalePerc": 50.0133800911396
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1960,
    "FemalePerc": 51.4303377664613
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1970,
    "FemalePerc": 51.2052799801909
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1980,
    "FemalePerc": 50.9355753081405
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 1990,
    "FemalePerc": 51.0152557726084
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 2000,
    "FemalePerc": 50.9157361396904
  },
  {
    "Entity": "Spain",
    "Code": "ESP",
    "Year": 2010,
    "FemalePerc": 50.5589467525494
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1960,
    "FemalePerc": 47.5090035102601
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1970,
    "FemalePerc": 48.505712512264
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1980,
    "FemalePerc": 49.0126765671359
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 1990,
    "FemalePerc": 49.5086071221701
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 2000,
    "FemalePerc": 50.1219521934623
  },
  {
    "Entity": "Sri Lanka",
    "Code": "LKA",
    "Year": 2010,
    "FemalePerc": 51.3381928037722
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1960,
    "FemalePerc": 50.0534031555181
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1970,
    "FemalePerc": 49.9864662392728
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1980,
    "FemalePerc": 49.9059243013218
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 1990,
    "FemalePerc": 49.8541264881679
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 2000,
    "FemalePerc": 49.8546927664102
  },
  {
    "Entity": "Sudan",
    "Code": "SDN",
    "Year": 2010,
    "FemalePerc": 50.1155282529402
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1960,
    "FemalePerc": 49.9963789732147
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1970,
    "FemalePerc": 50.0950795651659
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1980,
    "FemalePerc": 49.4951499665087
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 1990,
    "FemalePerc": 49.2114718211001
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 2000,
    "FemalePerc": 49.5487886196933
  },
  {
    "Entity": "Suriname",
    "Code": "SUR",
    "Year": 2010,
    "FemalePerc": 49.7130746348093
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1960,
    "FemalePerc": 50.1219773616859
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1970,
    "FemalePerc": 50.0704849676142
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1980,
    "FemalePerc": 50.4669066202391
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 1990,
    "FemalePerc": 50.601508630123
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 2000,
    "FemalePerc": 50.5467344889605
  },
  {
    "Entity": "Sweden",
    "Code": "SWE",
    "Year": 2010,
    "FemalePerc": 50.1907156610907
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1960,
    "FemalePerc": 51.5616069515107
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1970,
    "FemalePerc": 51.14270528618
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1980,
    "FemalePerc": 51.3557795331751
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 1990,
    "FemalePerc": 51.1881683250196
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 2000,
    "FemalePerc": 51.1455371510045
  },
  {
    "Entity": "Switzerland",
    "Code": "CHE",
    "Year": 2010,
    "FemalePerc": 50.7655739611773
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1960,
    "FemalePerc": 51.3625025275006
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1970,
    "FemalePerc": 51.0043418639367
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1980,
    "FemalePerc": 50.6811068139359
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 1990,
    "FemalePerc": 50.4307278322837
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 2000,
    "FemalePerc": 49.9105885487064
  },
  {
    "Entity": "Tajikistan",
    "Code": "TJK",
    "Year": 2010,
    "FemalePerc": 49.60038599125
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1960,
    "FemalePerc": 51.0147399841699
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1970,
    "FemalePerc": 50.823558569461
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1980,
    "FemalePerc": 50.6393566483093
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 1990,
    "FemalePerc": 50.5335155932463
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 2000,
    "FemalePerc": 50.511141161601
  },
  {
    "Entity": "Tanzania",
    "Code": "TZA",
    "Year": 2010,
    "FemalePerc": 50.6501423741873
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1960,
    "FemalePerc": 49.92559817114
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1970,
    "FemalePerc": 49.8827840500202
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1980,
    "FemalePerc": 49.9226522167928
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 1990,
    "FemalePerc": 50.4667299579558
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 2000,
    "FemalePerc": 50.6086691362278
  },
  {
    "Entity": "Thailand",
    "Code": "THA",
    "Year": 2010,
    "FemalePerc": 50.9922613709954
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1960,
    "FemalePerc": 49.2539164386411
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1970,
    "FemalePerc": 49.2149555876885
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1980,
    "FemalePerc": 49.2958177959395
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 1990,
    "FemalePerc": 49.3988145188854
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 2000,
    "FemalePerc": 49.2875221143498
  },
  {
    "Entity": "Timor",
    "Code": "TLS",
    "Year": 2010,
    "FemalePerc": 49.2216029733559
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1960,
    "FemalePerc": 50.7257793064002
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1970,
    "FemalePerc": 50.6530775855794
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1980,
    "FemalePerc": 50.6043549131057
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 1990,
    "FemalePerc": 50.6711360659023
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 2000,
    "FemalePerc": 50.4075757831821
  },
  {
    "Entity": "Togo",
    "Code": "TGO",
    "Year": 2010,
    "FemalePerc": 50.2212381895836
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1960,
    "FemalePerc": 49.2369634391844
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1970,
    "FemalePerc": 48.7957804906957
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1980,
    "FemalePerc": 49.0710876015998
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 1990,
    "FemalePerc": 49.2948569747157
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 2000,
    "FemalePerc": 49.1395130704294
  },
  {
    "Entity": "Tonga",
    "Code": "TON",
    "Year": 2010,
    "FemalePerc": 49.9174141010621
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1960,
    "FemalePerc": 49.8195005415573
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1970,
    "FemalePerc": 50.3600430444885
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1980,
    "FemalePerc": 50.3091294068217
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 1990,
    "FemalePerc": 50.1910133692991
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 2000,
    "FemalePerc": 50.2665260757062
  },
  {
    "Entity": "Trinidad and Tobago",
    "Code": "TTO",
    "Year": 2010,
    "FemalePerc": 50.5096405146326
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1960,
    "FemalePerc": 50.142364050174
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1970,
    "FemalePerc": 49.849458421831
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1980,
    "FemalePerc": 49.7364941162837
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 1990,
    "FemalePerc": 49.7200404674134
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 2000,
    "FemalePerc": 49.8308981630931
  },
  {
    "Entity": "Tunisia",
    "Code": "TUN",
    "Year": 2010,
    "FemalePerc": 50.4122864695
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1960,
    "FemalePerc": 50.1584576305292
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1970,
    "FemalePerc": 50.3278160757127
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1980,
    "FemalePerc": 50.3926217250369
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 1990,
    "FemalePerc": 50.6131243290038
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 2000,
    "FemalePerc": 50.7527625973662
  },
  {
    "Entity": "Turkey",
    "Code": "TUR",
    "Year": 2010,
    "FemalePerc": 50.8285429424338
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1960,
    "FemalePerc": 51.239541582307
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1970,
    "FemalePerc": 51.0877314461555
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1980,
    "FemalePerc": 51.0408233567122
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 1990,
    "FemalePerc": 50.8554749391758
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 2000,
    "FemalePerc": 50.7801267679703
  },
  {
    "Entity": "Turkmenistan",
    "Code": "TKM",
    "Year": 2010,
    "FemalePerc": 50.8077318639222
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1960,
    "FemalePerc": 50.2918512204748
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1970,
    "FemalePerc": 50.2944663447903
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1980,
    "FemalePerc": 50.2512878747614
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 1990,
    "FemalePerc": 50.3554695460828
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 2000,
    "FemalePerc": 50.5631286277103
  },
  {
    "Entity": "Uganda",
    "Code": "UGA",
    "Year": 2010,
    "FemalePerc": 50.3450671496604
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1960,
    "FemalePerc": 55.3891556723012
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1970,
    "FemalePerc": 54.5283167409469
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1980,
    "FemalePerc": 54.074148698407
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 1990,
    "FemalePerc": 53.4953493332403
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 2000,
    "FemalePerc": 53.4518322959683
  },
  {
    "Entity": "Ukraine",
    "Code": "UKR",
    "Year": 2010,
    "FemalePerc": 53.8426517614618
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1960,
    "FemalePerc": 49.9589792305367
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1970,
    "FemalePerc": 36.6976645435244
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1980,
    "FemalePerc": 30.3992662993687
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 1990,
    "FemalePerc": 34.3844883494895
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 2000,
    "FemalePerc": 32.5070374142253
  },
  {
    "Entity": "United Arab Emirates",
    "Code": "ARE",
    "Year": 2010,
    "FemalePerc": 25.502044450506
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1960,
    "FemalePerc": 51.7097975083253
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1970,
    "FemalePerc": 51.4736757739486
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1980,
    "FemalePerc": 51.3531495353616
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 1990,
    "FemalePerc": 51.4004464517425
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 2000,
    "FemalePerc": 51.2775159956565
  },
  {
    "Entity": "United Kingdom",
    "Code": "GBR",
    "Year": 2010,
    "FemalePerc": 50.8745902595525
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1960,
    "FemalePerc": 50.4606095270032
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1970,
    "FemalePerc": 50.7559654782378
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1980,
    "FemalePerc": 50.9727993306357
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 1990,
    "FemalePerc": 51.0025703921557
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 2000,
    "FemalePerc": 50.7475330771359
  },
  {
    "Entity": "United States",
    "Code": "USA",
    "Year": 2010,
    "FemalePerc": 50.6068652910281
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1960,
    "FemalePerc": 50.4239973443583
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1970,
    "FemalePerc": 50.017768026822
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1980,
    "FemalePerc": 51.73530866191
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 1990,
    "FemalePerc": 51.1724736157294
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 2000,
    "FemalePerc": 51.714338269107
  },
  {
    "Entity": "United States Virgin Islands",
    "Code": "VIR",
    "Year": 2010,
    "FemalePerc": 52.1422918943362
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1960,
    "FemalePerc": 49.9629331425762
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1970,
    "FemalePerc": 50.2959106356642
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1980,
    "FemalePerc": 50.9481342721791
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 1990,
    "FemalePerc": 51.4951017511638
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 2000,
    "FemalePerc": 51.6013879136854
  },
  {
    "Entity": "Uruguay",
    "Code": "URY",
    "Year": 2010,
    "FemalePerc": 51.7784553598444
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1960,
    "FemalePerc": 51.9748242440051
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1970,
    "FemalePerc": 51.3576925312832
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1980,
    "FemalePerc": 50.8552866881229
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 1990,
    "FemalePerc": 50.527668613125
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 2000,
    "FemalePerc": 50.2714987101452
  },
  {
    "Entity": "Uzbekistan",
    "Code": "UZB",
    "Year": 2010,
    "FemalePerc": 50.2626205818805
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1960,
    "FemalePerc": 48.3869448499976
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1970,
    "FemalePerc": 47.0692259945893
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1980,
    "FemalePerc": 47.2070638496597
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 1990,
    "FemalePerc": 48.5729678858102
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 2000,
    "FemalePerc": 48.8595405739853
  },
  {
    "Entity": "Vanuatu",
    "Code": "VUT",
    "Year": 2010,
    "FemalePerc": 49.2319410943253
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1960,
    "FemalePerc": 49.0365168266938
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1970,
    "FemalePerc": 49.2292295419406
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1980,
    "FemalePerc": 49.4545723055683
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 1990,
    "FemalePerc": 49.6138723893119
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 2000,
    "FemalePerc": 49.7960111395024
  },
  {
    "Entity": "Venezuela",
    "Code": "VEN",
    "Year": 2010,
    "FemalePerc": 50.0812868987953
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1960,
    "FemalePerc": 50.6709008474738
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1970,
    "FemalePerc": 50.7080999527959
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1980,
    "FemalePerc": 50.8653251431652
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 1990,
    "FemalePerc": 50.7636379864415
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 2000,
    "FemalePerc": 50.7365913162596
  },
  {
    "Entity": "Vietnam",
    "Code": "VNM",
    "Year": 2010,
    "FemalePerc": 50.625266565864
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1960,
    "FemalePerc": 49.9846511251518
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1970,
    "FemalePerc": 49.8739292017406
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1980,
    "FemalePerc": 49.7772958325
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 1990,
    "FemalePerc": 49.7103683459281
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 2000,
    "FemalePerc": 49.6690838828334
  },
  {
    "Entity": "World",
    "Code": "OWID_WRL",
    "Year": 2010,
    "FemalePerc": 49.5829283155242
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1960,
    "FemalePerc": 49.9436305411681
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1970,
    "FemalePerc": 50.7210258493394
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1980,
    "FemalePerc": 51.0657788880552
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 1990,
    "FemalePerc": 50.4647242665324
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 2000,
    "FemalePerc": 49.422010785283
  },
  {
    "Entity": "Yemen",
    "Code": "YEM",
    "Year": 2010,
    "FemalePerc": 49.4705231219271
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1960,
    "FemalePerc": 50.3293927933934
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1970,
    "FemalePerc": 50.3145360781519
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1980,
    "FemalePerc": 50.3058890411254
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 1990,
    "FemalePerc": 50.4377841261584
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 2000,
    "FemalePerc": 50.5457441433407
  },
  {
    "Entity": "Zambia",
    "Code": "ZMB",
    "Year": 2010,
    "FemalePerc": 50.4384248531917
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1960,
    "FemalePerc": 50.1426199861183
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1970,
    "FemalePerc": 50.1772638210038
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1980,
    "FemalePerc": 50.3686544218291
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 1990,
    "FemalePerc": 50.3697395511825
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 2000,
    "FemalePerc": 50.8535866265551
  },
  {
    "Entity": "Zimbabwe",
    "Code": "ZWE",
    "Year": 2010,
    "FemalePerc": 51.3058976485423
  }
]