import React, { useState } from 'react';

// Array de años editable
const AÑOS = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => 2006 + i);

// Datos de recaudación por año (ejemplo con 2006, puedes copiar y pegar para más años)
const RECAUDACION = {
  2006: [
    { mes: 'Enero', iibb: '13,087,910', conv: '6,853,090', inmobiliario: '1,522,472', ipa: '497,323', sellos: '2,261,328', tasa: '0', minera: '10,976', emergencia: '30,467', total: '24,263,566' },
    { mes: 'Febrero', iibb: '12,364,854', conv: '6,133,058', inmobiliario: '7,070,340', ipa: '518,076', sellos: '1,726,290', tasa: '176,834', minera: '11,247', emergencia: '29,415', total: '28,030,114' },
    { mes: 'Marzo', iibb: '14,084,619', conv: '6,787,949', inmobiliario: '3,504,680', ipa: '526,536', sellos: '1,948,457', tasa: '262,502', minera: '22,377', emergencia: '29,415', total: '27,166,534' },
    { mes: 'Abril', iibb: '17,961,135', conv: '8,720,231', inmobiliario: '1,956,096', ipa: '410,112', sellos: '1,979,099', tasa: '318,508', minera: '6,907', emergencia: '29,415', total: '31,381,502' },
    { mes: 'Mayo', iibb: '17,516,388', conv: '9,398,720', inmobiliario: '2,481,197', ipa: '498,681', sellos: '2,251,246', tasa: '376,439', minera: '14,660', emergencia: '29,415', total: '32,566,746' },
    { mes: 'Junio', iibb: '15,862,253', conv: '8,998,541', inmobiliario: '2,380,173', ipa: '368,212', sellos: '2,548,156', tasa: '185,002', minera: '18,256', emergencia: '29,415', total: '30,390,007' },
    { mes: 'Julio', iibb: '14,470,657', conv: '8,605,147', inmobiliario: '2,410,993', ipa: '436,683', sellos: '2,720,650', tasa: '620,545', minera: '9,654', emergencia: '29,415', total: '29,303,745' },
    { mes: 'Agosto', iibb: '14,981,903', conv: '9,312,691', inmobiliario: '2,471,341', ipa: '346,563', sellos: '2,864,213', tasa: '195,379', minera: '10,976', emergencia: '29,415', total: '30,212,482' },
    { mes: 'Septiembre', iibb: '20,968,100', conv: '9,502,960', inmobiliario: '2,129,051', ipa: '224,749', sellos: '3,086,347', tasa: '572,247', minera: '24,830', emergencia: '29,415', total: '36,537,698' },
    { mes: 'Octubre', iibb: '19,751,578', conv: '9,244,847', inmobiliario: '1,972,568', ipa: '194,744', sellos: '3,183,446', tasa: '412,922', minera: '17,237', emergencia: '29,415', total: '34,806,756' },
    { mes: 'Noviembre', iibb: '20,244,567', conv: '9,353,170', inmobiliario: '1,530,397', ipa: '210,506', sellos: '2,893,031', tasa: '435,224', minera: '12,785', emergencia: '29,415', total: '34,709,095' },
    { mes: 'Diciembre', iibb: '21,628,055', conv: '8,954,511', inmobiliario: '1,245,788', ipa: '196,310', sellos: '3,101,656', tasa: '356,399', minera: '11,314', emergencia: '29,415', total: '35,523,448' },
    { mes: 'Total', iibb: '202,922,019', conv: '101,864,916', inmobiliario: '30,675,095', ipa: '4,428,495', sellos: '30,563,919', tasa: '3,912,002', minera: '171,220', emergencia: '354,026', total: '374,891,694' },
    { mes: '% Porcentaje', iibb: '54,13', conv: '27,17', inmobiliario: '8,18', ipa: '1,18', sellos: '8,15', tasa: '1,04', minera: '0,05', emergencia: '0,09', total: '100,00' },
  ],

  2007: [
    { mes: 'Enero', iibb: '28,239,294', conv: '9,342,277', inmobiliario: '1,427,564', ipa: '323,402', sellos: '4,688,514', tasa: '341,837', minera: '7,700', emergencia: '29,415', total: '44,400,002' },
    { mes: 'Febrero', iibb: '30,563,033', conv: '7,901,313', inmobiliario: '8,120,298', ipa: '652,788', sellos: '3,000,241', tasa: '359,807', minera: '10,713', emergencia: '29,415', total: '50,637,606' },
    { mes: 'Marzo', iibb: '21,333,864', conv: '7,273,485', inmobiliario: '2,846,561', ipa: '561,404', sellos: '3,496,561', tasa: '321,399', minera: '22,253', emergencia: '29,415', total: '35,884,941' },
    { mes: 'Abril', iibb: '20,084,900', conv: '7,963,509', inmobiliario: '3,064,484', ipa: '582,226', sellos: '3,877,948', tasa: '545,292', minera: '16,009', emergencia: '29,415', total: '36,163,782' },
    { mes: 'Mayo', iibb: '20,629,408', conv: '10,594,284', inmobiliario: '2,651,841', ipa: '522,816', sellos: '5,151,278', tasa: '376,347', minera: '21,424', emergencia: '29,415', total: '39,976,812' },
    { mes: 'Junio', iibb: '37,880,791', conv: '10,474,683', inmobiliario: '2,284,330', ipa: '458,140', sellos: '3,854,703', tasa: '194,878', minera: '34,781', emergencia: '29,415', total: '55,211,721' },
    { mes: 'Julio', iibb: '25,036,685', conv: '8,979,475', inmobiliario: '2,284,310', ipa: '529,890', sellos: '4,308,995', tasa: '412,609', minera: '22,102', emergencia: '29,415', total: '41,603,481' },
    { mes: 'Agosto', iibb: '21,204,444', conv: '10,428,674', inmobiliario: '2,293,582', ipa: '407,333', sellos: '4,796,353', tasa: '437,154', minera: '21,339', emergencia: '29,415', total: '39,618,294' },
    { mes: 'Septiembre', iibb: '21,196,276', conv: '10,578,732', inmobiliario: '2,114,218', ipa: '680,156', sellos: '4,489,758', tasa: '448,000', minera: '29,239', emergencia: '29,415', total: '39,565,792' },
    { mes: 'Octubre', iibb: '21,121,748', conv: '10,614,213', inmobiliario: '2,085,700', ipa: '1,364,513', sellos: '4,246,152', tasa: '368,030', minera: '9,998', emergencia: '29,415', total: '39,839,770' },
    { mes: 'Noviembre', iibb: '22,376,539', conv: '10,883,589', inmobiliario: '1,657,658', ipa: '391,136', sellos: '4,731,866', tasa: '442,334', minera: '22,109', emergencia: '29,415', total: '40,534,645' },
    { mes: 'Diciembre', iibb: '22,852,885', conv: '8,671,257', inmobiliario: '1,672,145', ipa: '392,420', sellos: '4,122,856', tasa: '376,447', minera: '23,386', emergencia: '29,415', total: '38,140,810' },
    { mes: 'Total', iibb: '292,519,867', conv: '113,705,492', inmobiliario: '32,502,691', ipa: '6,866,223', sellos: '50,765,223', tasa: '4,624,132', minera: '241,053', emergencia: '352,974', total: '501,577,654' },
    { mes: '% Porcentaje', iibb: '58,32', conv: '22,67', inmobiliario: '6,48', ipa: '1,37', sellos: '10,12', tasa: '0,92', minera: '0,05', emergencia: '0,07', total: '100,00' },
  ],

  2008: [
    { mes: 'Enero', iibb: '25,279,035', conv: '17,768,153', inmobiliario: '2,269,901', ipa: '479,038', sellos: '5,541,916', tasa: '339,509', minera: '13,319', emergencia: '29,415', total: '51,720,284' },
    { mes: 'Febrero', iibb: '23,585,469', conv: '16,516,624', inmobiliario: '9,980,738', ipa: '826,720', sellos: '4,469,789', tasa: '2,486,908', minera: '19,452', emergencia: '29,415', total: '57,915,116' },
    { mes: 'Marzo', iibb: '56,115,408', conv: '8,095,919', inmobiliario: '2,555,102', ipa: '743,083', sellos: '3,959,811', tasa: '922,348', minera: '14,515', emergencia: '29,415', total: '72,435,600' },
    { mes: 'Abril', iibb: '63,846,523', conv: '11,720,276', inmobiliario: '2,706,013', ipa: '808,015', sellos: '5,048,857', tasa: '884,331', minera: '16,238', emergencia: '29,415', total: '85,059,667' },
    { mes: 'Mayo', iibb: '39,109,444', conv: '15,233,917', inmobiliario: '2,352,437', ipa: '609,868', sellos: '4,896,744', tasa: '986,899', minera: '17,199', emergencia: '29,415', total: '63,235,922' },
    { mes: 'Junio', iibb: '36,131,904', conv: '11,886,570', inmobiliario: '2,173,096', ipa: '634,495', sellos: '5,529,990', tasa: '1,342,729', minera: '15,934', emergencia: '29,415', total: '57,744,131' },
    { mes: 'Julio', iibb: '32,921,997', conv: '17,855,492', inmobiliario: '2,480,197', ipa: '707,932', sellos: '5,029,335', tasa: '796,867', minera: '16,268', emergencia: '29,415', total: '59,837,502' },
    { mes: 'Agosto', iibb: '31,934,420', conv: '15,860,980', inmobiliario: '2,203,511', ipa: '542,414', sellos: '4,862,314', tasa: '766,042', minera: '33,568', emergencia: '29,415', total: '56,232,663' },
    { mes: 'Septiembre', iibb: '29,230,193', conv: '16,889,519', inmobiliario: '2,286,589', ipa: '475,144', sellos: '5,009,585', tasa: '1,046,038', minera: '19,190', emergencia: '29,415', total: '54,985,673' },
    { mes: 'Octubre', iibb: '29,396,535', conv: '18,382,100', inmobiliario: '2,070,395', ipa: '399,135', sellos: '4,746,914', tasa: '1,013,611', minera: '19,702', emergencia: '29,415', total: '56,057,806' },
    { mes: 'Noviembre', iibb: '27,586,528', conv: '17,179,822', inmobiliario: '1,633,055', ipa: '313,612', sellos: '4,152,868', tasa: '903,435', minera: '14,271', emergencia: '29,415', total: '51,813,005' },
    { mes: 'Diciembre', iibb: '25,940,086', conv: '16,625,213', inmobiliario: '1,645,279', ipa: '513,995', sellos: '3,728,337', tasa: '852,030', minera: '19,680', emergencia: '58,829', total: '49,383,448' },
    { mes: 'Total', iibb: '421,077,542', conv: '184,014,584', inmobiliario: '34,356,312', ipa: '7,053,452', sellos: '56,976,459', tasa: '12,340,746', minera: '219,335', emergencia: '382,389', total: '716,420,820' },
    { mes: '% Porcentaje', iibb: '58,78', conv: '25,69', inmobiliario: '4,80', ipa: '0,98', sellos: '7,95', tasa: '1,72', minera: '0,03', emergencia: '0,05', total: '100,00' },
  ],

  2009: [
    { mes: 'Enero', iibb: '27,766,376', conv: '17,282,874', inmobiliario: '2,252,514', ipa: '447,414', sellos: '4,753,671', tasa: '217,930', minera: '12,902', emergencia: '00', total: '52,733,683' },
    { mes: 'Febrero', iibb: '28,792,296', conv: '14,471,274', inmobiliario: '7,240,250', ipa: '1,135,146', sellos: '3,751,138', tasa: '166,719', minera: '16,897', emergencia: '29,415', total: '55,603,135' },
    { mes: 'Marzo', iibb: '31,176,113', conv: '15,322,803', inmobiliario: '4,038,286', ipa: '1,008,629', sellos: '4,021,752', tasa: '200,000', minera: '15,152', emergencia: '29,415', total: '55,812,150' },
    { mes: 'Abril', iibb: '37,051,608', conv: '18,637,496', inmobiliario: '1,877,816', ipa: '750,312', sellos: '4,124,233', tasa: '202,519', minera: '24,189', emergencia: '29,415', total: '62,697,587' },
    { mes: 'Mayo', iibb: '40,581,346', conv: '18,066,541', inmobiliario: '1,943,235', ipa: '785,778', sellos: '3,851,854', tasa: '212,377', minera: '11,134', emergencia: '29,415', total: '65,481,679' },
    { mes: 'Junio', iibb: '30,643,241', conv: '17,332,296', inmobiliario: '2,033,257', ipa: '770,075', sellos: '4,070,916', tasa: '316,636', minera: '33,920', emergencia: '29,415', total: '55,229,755' },
    { mes: 'Julio', iibb: '32,559,509', conv: '18,869,341', inmobiliario: '1,831,833', ipa: '605,628', sellos: '5,081,980', tasa: '362,763', minera: '13,358', emergencia: '29,415', total: '59,353,827' },
    { mes: 'Agosto', iibb: '29,633,480', conv: '17,645,096', inmobiliario: '1,751,469', ipa: '608,596', sellos: '4,749,162', tasa: '422,715', minera: '21,387', emergencia: '29,415', total: '54,861,318' },
    { mes: 'Septiembre', iibb: '29,722,804', conv: '19,556,560', inmobiliario: '1,815,705', ipa: '460,670', sellos: '4,899,925', tasa: '431,272', minera: '22,083', emergencia: '29,511', total: '56,938,531' },
    { mes: 'Octubre', iibb: '28,159,264', conv: '18,816,711', inmobiliario: '1,677,619', ipa: '343,326', sellos: '4,874,230', tasa: '154,606', minera: '21,190', emergencia: '29,415', total: '54,076,361' },
    { mes: 'Noviembre', iibb: '29,066,615', conv: '23,482,488', inmobiliario: '1,285,302', ipa: '364,702', sellos: '5,315,804', tasa: '218,084', minera: '13,000', emergencia: '29,415', total: '59,775,409' },
    { mes: 'Diciembre', iibb: '32,559,423', conv: '19,943,001', inmobiliario: '1,407,265', ipa: '354,852', sellos: '5,047,942', tasa: '234,688', minera: '15,408', emergencia: '29,415', total: '59,591,994' },
    { mes: 'Total', iibb: '377,712,075', conv: '219,426,482', inmobiliario: '29,154,552', ipa: '7,635,129', sellos: '54,542,606', tasa: '3,140,308', minera: '220,620', emergencia: '323,656', total: '692,155,429' },
    { mes: '% Porcentaje', iibb: '54,57', conv: '31,70', inmobiliario: '4,21', ipa: '1,10', sellos: '7,88', tasa: '0,45', minera: '0,03', emergencia: '0,05', total: '100,00' },
  ],

  2010: [
    { mes: 'Enero', iibb: '32,585,063', conv: '21,186,685', inmobiliario: '3,178,819', ipa: '572,237', sellos: '5,790,457', tasa: '225,213', minera: '20,504', tasa_admin: '00', emergencia: '29,415', total: '63,588,392' },
    { mes: 'Febrero', iibb: '29,456,184', conv: '19,132,360', inmobiliario: '9,172,947', ipa: '1,282,700', sellos: '4,842,827', tasa: '320,506', minera: '24,341', tasa_admin: '00', emergencia: '29,415', total: '64,261,279' },
    { mes: 'Marzo', iibb: '33,567,950', conv: '20,196,109', inmobiliario: '3,020,512', ipa: '1,395,864', sellos: '5,746,326', tasa: '434,114', minera: '20,301', tasa_admin: '00', emergencia: '29,415', total: '64,410,590' },
    { mes: 'Abril', iibb: '41,955,838', conv: '23,880,930', inmobiliario: '2,123,825', ipa: '1,057,168', sellos: '6,992,315', tasa: '573,323', minera: '13,670', tasa_admin: '23,222', emergencia: '29,415', total: '76,649,706' },
    { mes: 'Mayo', iibb: '38,809,760', conv: '22,287,047', inmobiliario: '2,428,150', ipa: '925,535', sellos: '6,527,473', tasa: '512,210', minera: '26,750', tasa_admin: '26,780', emergencia: '29,415', total: '71,573,119' },
    { mes: 'Junio', iibb: '40,813,750', conv: '23,438,242', inmobiliario: '2,439,011', ipa: '1,028,390', sellos: '9,648,468', tasa: '517,175', minera: '20,970', tasa_admin: '28,665', emergencia: '29,415', total: '77,964,086' },
    { mes: 'Julio', iibb: '41,066,444', conv: '25,335,580', inmobiliario: '2,267,431', ipa: '1,386,658', sellos: '7,236,913', tasa: '576,915', minera: '13,521', tasa_admin: '29,548', emergencia: '29,415', total: '77,942,424' },
    { mes: 'Agosto', iibb: '45,105,715', conv: '23,236,949', inmobiliario: '2,274,334', ipa: '861,461', sellos: '8,172,832', tasa: '581,514', minera: '28,827', tasa_admin: '30,105', emergencia: '29,415', total: '80,321,152' },
    { mes: 'Septiembre', iibb: '46,758,983', conv: '24,682,414', inmobiliario: '2,304,933', ipa: '791,170', sellos: '8,300,831', tasa: '571,216', minera: '30,888', tasa_admin: '32,255', emergencia: '29,415', total: '83,502,105' },
    { mes: 'Octubre', iibb: '45,313,357', conv: '25,732,663', inmobiliario: '1,901,269', ipa: '614,009', sellos: '7,266,789', tasa: '593,766', minera: '17,529', tasa_admin: '28,073', emergencia: '29,415', total: '81,496,867' },
    { mes: 'Noviembre', iibb: '43,581,611', conv: '25,466,925', inmobiliario: '1,720,354', ipa: '589,819', sellos: '6,471,263', tasa: '563,404', minera: '21,226', tasa_admin: '32,258', emergencia: '29,415', total: '78,476,274' },
    { mes: 'Diciembre', iibb: '51,918,330', conv: '28,685,293', inmobiliario: '1,876,076', ipa: '612,398', sellos: '9,451,507', tasa: '450,027', minera: '40,480', tasa_admin: '38,553', emergencia: '29,415', total: '93,102,079' },
    { mes: 'Total', iibb: '490,932,984', conv: '283,261,196', inmobiliario: '34,707,662', ipa: '11,117,409', sellos: '86,448,001', tasa: '5,919,382', minera: '279,008', tasa_admin: '269,458', emergencia: '352,975', total: '913,288,074' },
    { mes: '% Porcentaje', iibb: '53,75', conv: '31,02', inmobiliario: '3,80', ipa: '1,22', sellos: '9,47', tasa: '0,65', minera: '0,03', tasa_admin: '0,03', emergencia: '0,04', total: '100,00' },
  ],

  2011: [
    { mes: 'Enero', iibb: '59,899,881', conv: '28,407,622', inmobiliario: '2,453,624', ipa: '838,332', sellos: '9,701,818', tasa: '477,122', minera: '16,986', tasa_admin: '23,985', emergencia: '29,415', total: '101,848,785' },
    { mes: 'Febrero', iibb: '54,854,181', conv: '24,059,987', inmobiliario: '11,452,348', ipa: '1,637,246', sellos: '8,426,967', tasa: '511,181', minera: '14,344', tasa_admin: '28,308', emergencia: '29,415', total: '101,013,975' },
    { mes: 'Marzo', iibb: '52,116,840', conv: '27,007,161', inmobiliario: '3,072,892', ipa: '1,735,780', sellos: '8,442,108', tasa: '461,583', minera: '22,331', tasa_admin: '32,153', emergencia: '29,415', total: '92,920,262' },
    { mes: 'Abril', iibb: '61,715,526', conv: '28,852,900', inmobiliario: '2,650,045', ipa: '1,358,766', sellos: '9,501,866', tasa: '578,482', minera: '36,760', tasa_admin: '33,140', emergencia: '29,492', total: '104,756,976' },
    { mes: 'Mayo', iibb: '56,307,609', conv: '28,498,982', inmobiliario: '2,734,707', ipa: '1,309,549', sellos: '10,730,737', tasa: '669,167', minera: '29,423', tasa_admin: '38,345', emergencia: '29,415', total: '100,347,933' },
    { mes: 'Junio', iibb: '61,035,472', conv: '27,638,923', inmobiliario: '3,053,086', ipa: '1,124,439', sellos: '11,131,771', tasa: '664,601', minera: '53,741', tasa_admin: '37,458', emergencia: '29,415', total: '104,768,906' },
    { mes: 'Julio', iibb: '59,785,598', conv: '31,000,928', inmobiliario: '2,610,526', ipa: '1,300,216', sellos: '10,504,439', tasa: '565,268', minera: '36,861', tasa_admin: '31,885', emergencia: '29,415', total: '105,865,136' },
    { mes: 'Agosto', iibb: '58,296,347', conv: '32,876,765', inmobiliario: '3,059,814', ipa: '1,115,481', sellos: '12,362,035', tasa: '594,750', minera: '20,320', tasa_admin: '37,055', emergencia: '29,415', total: '108,391,982' },
    { mes: 'Septiembre', iibb: '62,298,479', conv: '31,003,803', inmobiliario: '3,012,439', ipa: '836,939', sellos: '11,398,146', tasa: '659,139', minera: '34,088', tasa_admin: '33,248', emergencia: '29,415', total: '109,305,693' },
    { mes: 'Octubre', iibb: '60,367,934', conv: '35,283,790', inmobiliario: '2,621,575', ipa: '1,854,953', sellos: '11,117,130', tasa: '660,522', minera: '16,247', tasa_admin: '33,103', emergencia: '29,415', total: '111,984,668' },
    { mes: 'Noviembre', iibb: '78,251,432', conv: '36,748,608', inmobiliario: '2,449,836', ipa: '1,060,706', sellos: '10,961,774', tasa: '627,139', minera: '54,860', tasa_admin: '36,548', emergencia: '29,415', total: '130,220,317' },
    { mes: 'Diciembre', iibb: '92,739,584', conv: '32,828,211', inmobiliario: '2,253,039', ipa: '621,059', sellos: '9,249,046', tasa: '606,755', minera: '21,320', tasa_admin: '40,320', emergencia: '29,415', total: '138,388,749' },
    { mes: 'Total', iibb: '757,668,883', conv: '364,207,679', inmobiliario: '41,423,931', ipa: '14,793,466', sellos: '123,527,838', tasa: '7,075,709', minera: '357,281', tasa_admin: '405,545', emergencia: '353,051', total: '1,309,813,382' },
    { mes: '% Porcentaje', iibb: '57,85', conv: '27,81', inmobiliario: '3,16', ipa: '1,13', sellos: '9,43', tasa: '0,54', minera: '0,03', tasa_admin: '0,03', emergencia: '0,03', total: '100,00' },
  ],

  2012: [
    { mes: 'Enero', iibb: '102,154,388', conv: '34,862,067', inmobiliario: '1,877,711', ipa: '1,134,294', sellos: '13,453,405', tasa: '785,296', minera: '21,706', tasa_admin: '26,758', emergencia: '29,415', total: '154,345,039' },
    { mes: 'Febrero', iibb: '90,490,169', conv: '30,972,556', inmobiliario: '14,081,912', ipa: '2,159,867', sellos: '10,201,735', tasa: '491,394', minera: '15,112', tasa_admin: '25,055', emergencia: '29,415', total: '148,467,215' },
    { mes: 'Marzo', iibb: '73,881,631', conv: '29,714,764', inmobiliario: '9,677,517', ipa: '1,692,713', sellos: '9,801,947', tasa: '1,912,367', minera: '15,239', tasa_admin: '33,150', emergencia: '29,415', total: '126,758,742' },
    { mes: 'Abril', iibb: '75,649,366', conv: '33,020,650', inmobiliario: '2,902,398', ipa: '1,404,837', sellos: '11,895,876', tasa: '590,640', minera: '15,839', tasa_admin: '32,875', emergencia: '29,415', total: '125,541,894' },
    { mes: 'Mayo', iibb: '99,436,341', conv: '35,786,220', inmobiliario: '3,448,728', ipa: '1,436,557', sellos: '11,019,746', tasa: '600,309', minera: '23,709', tasa_admin: '38,608', emergencia: '29,415', total: '151,819,632' },
    { mes: 'Junio', iibb: '122,059,320', conv: '34,079,461', inmobiliario: '3,468,003', ipa: '1,626,020', sellos: '13,157,317', tasa: '721,046', minera: '37,590', tasa_admin: '36,370', emergencia: '29,415', total: '175,214,541' },
    { mes: 'Julio', iibb: '84,945,338', conv: '40,341,209', inmobiliario: '3,508,553', ipa: '1,644,137', sellos: '14,615,033', tasa: '465,536', minera: '27,136', tasa_admin: '36,000', emergencia: '29,415', total: '145,612,357' },
    { mes: 'Agosto', iibb: '109,212,804', conv: '39,554,396', inmobiliario: '3,846,748', ipa: '1,228,277', sellos: '13,464,588', tasa: '377,398', minera: '26,453', tasa_admin: '40,255', emergencia: '29,415', total: '167,780,333' },
    { mes: 'Septiembre', iibb: '102,157,499', conv: '40,333,485', inmobiliario: '3,083,635', ipa: '765,123', sellos: '13,526,808', tasa: '431,380', minera: '51,954', tasa_admin: '131,618', emergencia: '29,415', total: '160,510,917' },
    { mes: 'Octubre', iibb: '96,943,153', conv: '45,430,806', inmobiliario: '3,685,947', ipa: '818,975', sellos: '12,693,645', tasa: '609,385', minera: '50,616', tasa_admin: '155,110', emergencia: '29,415', total: '160,417,053' },
    { mes: 'Noviembre', iibb: '108,468,626', conv: '42,314,300', inmobiliario: '3,005,425', ipa: '697,436', sellos: '13,531,828', tasa: '379,028', minera: '57,754', tasa_admin: '160,398', emergencia: '29,415', total: '168,644,208' },
    { mes: 'Diciembre', iibb: '98,975,731', conv: '41,840,723', inmobiliario: '3,142,416', ipa: '674,833', sellos: '13,874,674', tasa: '440,809', minera: '53,867', tasa_admin: '184,590', emergencia: '29,415', total: '159,217,056' },
    { mes: 'Total', iibb: '1,164,374,367', conv: '448,250,637', inmobiliario: '55,728,992', ipa: '15,283,069', sellos: '151,236,601', tasa: '7,804,587', minera: '396,974', tasa_admin: '900,785', emergencia: '352,974', total: '1,844,328,988' },
    { mes: '% Porcentaje', iibb: '63,13', conv: '24,30', inmobiliario: '3,02', ipa: '0,83', sellos: '8,20', tasa: '0,42', minera: '0,02', tasa_admin: '0,05', emergencia: '0,02', total: '100,00' },
  ],

  2013: [
    { mes: 'Enero', iibb: '101,751,887', conv: '45,579,541', inmobiliario: '4,754,755', ipa: '1,254,468', sellos: '20,582,317', tasa: '411,335', minera: '34,750', tasa_admin: '107,030', emergencia: '29,415', tasa_serv_indust: '0', total: '174,505,498' },
    { mes: 'Febrero', iibb: '98,914,739', conv: '44,749,084', inmobiliario: '17,086,967', ipa: '4,369,680', sellos: '12,889,245', tasa: '654,031', minera: '43,851', tasa_admin: '136,730', emergencia: '29,415', tasa_serv_indust: '0', total: '178,873,741' },
    { mes: 'Marzo', iibb: '102,935,078', conv: '47,382,969', inmobiliario: '6,185,836', ipa: '2,402,451', sellos: '16,515,334', tasa: '800,919', minera: '40,664', tasa_admin: '146,390', emergencia: '29,415', tasa_serv_indust: '0', total: '176,439,056' },
    { mes: 'Abril', iibb: '105,146,741', conv: '51,474,395', inmobiliario: '4,655,982', ipa: '2,174,368', sellos: '19,934,218', tasa: '708,949', minera: '74,412', tasa_admin: '160,368', emergencia: '29,415', tasa_serv_indust: '0', total: '184,358,847' },
    { mes: 'Mayo', iibb: '117,011,218', conv: '52,550,076', inmobiliario: '5,449,783', ipa: '1,984,743', sellos: '22,063,348', tasa: '752,546', minera: '68,478', tasa_admin: '193,750', emergencia: '29,415', tasa_serv_indust: '0', total: '200,103,358' },
    { mes: 'Junio', iibb: '122,175,118', conv: '51,666,019', inmobiliario: '4,455,502', ipa: '1,895,257', sellos: '17,594,958', tasa: '796,787', minera: '62,167', tasa_admin: '160,510', emergencia: '29,415', tasa_serv_indust: '3,763', total: '198,839,496' },
    { mes: 'Julio', iibb: '121,877,539', conv: '58,085,187', inmobiliario: '5,053,043', ipa: '2,058,237', sellos: '21,501,894', tasa: '618,003', minera: '41,229', tasa_admin: '164,410', emergencia: '29,415', tasa_serv_indust: '8,390', total: '209,437,346' },
    { mes: 'Agosto', iibb: '131,250,660', conv: '62,578,304', inmobiliario: '4,475,145', ipa: '1,986,892', sellos: '19,114,868', tasa: '805,788', minera: '56,630', tasa_admin: '165,330', emergencia: '29,415', tasa_serv_indust: '13,829', total: '220,476,860' },
    { mes: 'Septiembre', iibb: '132,263,712', conv: '65,594,577', inmobiliario: '4,370,264', ipa: '1,395,322', sellos: '17,401,515', tasa: '809,457', minera: '74,006', tasa_admin: '157,130', emergencia: '29,415', tasa_serv_indust: '8,904', total: '222,104,301' },
    { mes: 'Octubre', iibb: '131,983,111', conv: '62,709,164', inmobiliario: '4,534,823', ipa: '1,416,046', sellos: '18,766,635', tasa: '888,204', minera: '74,289', tasa_admin: '173,850', emergencia: '29,415', tasa_serv_indust: '17,309', total: '220,592,845' },
    { mes: 'Noviembre', iibb: '139,631,587', conv: '63,116,917', inmobiliario: '3,412,842', ipa: '1,117,891', sellos: '20,430,652', tasa: '775,672', minera: '75,857', tasa_admin: '174,100', emergencia: '29,415', tasa_serv_indust: '12,968', total: '228,777,902' },
    { mes: 'Diciembre', iibb: '136,011,121', conv: '65,563,636', inmobiliario: '3,777,879', ipa: '1,196,017', sellos: '18,144,667', tasa: '821,148', minera: '159,814', tasa_admin: '194,590', emergencia: '29,569', tasa_serv_indust: '17,808', total: '225,916,249' },
    { mes: 'Total', iibb: '1,440,952,511', conv: '671,049,869', inmobiliario: '68,212,822', ipa: '23,251,370', sellos: '224,939,652', tasa: '8,842,839', minera: '806,150', tasa_admin: '1,934,188', emergencia: '353,129', tasa_serv_indust: '82,971', total: '2,440,425,499' },
    { mes: '% Porcentaje', iibb: '59,05', conv: '27,50', inmobiliario: '2,80', ipa: '0,95', sellos: '9,22', tasa: '0,36', minera: '0,03', tasa_admin: '0,08', emergencia: '0,01', tasa_serv_indust: '0,00', total: '100,00' },
  ],
  2014: [
    { mes: 'Enero', iibb: '160,130,580', conv: '69,283,800', inmobiliario: '9,918,143', ipa: '1,875,912', sellos: '25,700,849', tasa: '708,852', minera: '55,361', tasa_admin: '135,060', emergencia: '29,415', tasa_serv_indust: '1,087', tasa_adm_inmob: '00', total: '267,839,058' },
    { mes: 'Febrero', iibb: '155,649,001', conv: '88,923,475', inmobiliario: '32,138,617', ipa: '6,840,615', sellos: '31,964,605', tasa: '738,069', minera: '63,788', tasa_admin: '177,560', emergencia: '29,415', tasa_serv_indust: '8,468', tasa_adm_inmob: '00', total: '316,533,612' },
    { mes: 'Marzo', iibb: '167,937,973', conv: '77,586,024', inmobiliario: '6,450,617', ipa: '3,972,584', sellos: '21,043,676', tasa: '714,764', minera: '57,355', tasa_admin: '157,220', emergencia: '29,415', tasa_serv_indust: '17,234', tasa_adm_inmob: '10', total: '277,966,872' },
    { mes: 'Abril', iibb: '202,542,876', conv: '84,171,454', inmobiliario: '5,762,052', ipa: '2,772,232', sellos: '15,830,316', tasa: '754,664', minera: '79,743', tasa_admin: '177,050', emergencia: '29,415', tasa_serv_indust: '11,398', tasa_adm_inmob: '8,750', total: '312,139,951' },
    { mes: 'Mayo', iibb: '227,402,341', conv: '95,099,487', inmobiliario: '6,761,105', ipa: '2,310,344', sellos: '21,906,643', tasa: '772,704', minera: '85,162', tasa_admin: '188,750', emergencia: '29,415', tasa_serv_indust: '7,570', tasa_adm_inmob: '14,870', total: '354,578,391' },
    { mes: 'Junio', iibb: '247,034,484', conv: '99,811,927', inmobiliario: '6,543,476', ipa: '3,130,760', sellos: '24,243,294', tasa: '891,073', minera: '70,472', tasa_admin: '186,880', emergencia: '29,415', tasa_serv_indust: '19,547', tasa_adm_inmob: '14,270', total: '381,975,597' },
    { mes: 'Julio', iibb: '245,562,410', conv: '103,396,766', inmobiliario: '5,926,509', ipa: '3,208,672', sellos: '21,649,718', tasa: '836,009', minera: '66,770', tasa_admin: '199,800', emergencia: '29,415', tasa_serv_indust: '12,877', tasa_adm_inmob: '13,660', total: '380,902,606' },
    { mes: 'Agosto', iibb: '265,264,085', conv: '104,784,554', inmobiliario: '6,285,013', ipa: '3,164,220', sellos: '18,176,286', tasa: '551,497', minera: '123,932', tasa_admin: '200,530', emergencia: '29,415', tasa_serv_indust: '19,457', tasa_adm_inmob: '11,630', total: '398,610,618' },
    { mes: 'Septiembre', iibb: '287,794,063', conv: '117,941,193', inmobiliario: '6,933,764', ipa: '2,238,448', sellos: '27,955,494', tasa: '642,589', minera: '100,623', tasa_admin: '222,200', emergencia: '29,415', tasa_serv_indust: '40,120', tasa_adm_inmob: '13,671', total: '443,911,580' },
    { mes: 'Octubre', iibb: '306,441,264', conv: '126,999,767', inmobiliario: '6,290,450', ipa: '1,468,740', sellos: '25,437,442', tasa: '850,068', minera: '83,209', tasa_admin: '223,060', emergencia: '29,415', tasa_serv_indust: '32,796', tasa_adm_inmob: '14,165', total: '467,870,374' },
    { mes: 'Noviembre', iibb: '309,546,112', conv: '117,439,504', inmobiliario: '5,054,659', ipa: '1,193,287', sellos: '26,000,925', tasa: '697,009', minera: '122,443', tasa_admin: '207,340', emergencia: '29,415', tasa_serv_indust: '13,836', tasa_adm_inmob: '12,327', total: '460,316,856' },
    { mes: 'Diciembre', iibb: '277,691,125', conv: '121,200,979', inmobiliario: '5,860,636', ipa: '1,331,494', sellos: '24,060,794', tasa: '805,702', minera: '131,356', tasa_admin: '228,210', emergencia: '29,415', tasa_serv_indust: '16,881', tasa_adm_inmob: '10,942', total: '431,367,533' },
    { mes: 'Total', iibb: '2,852,996,314', conv: '1,206,638,929', inmobiliario: '103,925,041', ipa: '33,507,308', sellos: '283,970,043', tasa: '8,963,000', minera: '1,040,215', tasa_admin: '2,303,660', emergencia: '352,974', tasa_serv_indust: '201,272', tasa_adm_inmob: '114,294', total: '4,494,013,049' },
    { mes: '% Porcentaje', iibb: '63,48', conv: '26,85', inmobiliario: '2,31', ipa: '0,75', sellos: '6,32', tasa: '0,20', minera: '0,02', tasa_admin: '0,05', emergencia: '0,00', tasa_serv_indust: '0,00', tasa_adm_inmob: '0,00', total: '100,00' },
  ],
  2015: [
    { mes: 'Enero', iibb: '311,968,849', conv: '122,163,484', inmobiliario: '15,831,935', ipa: '3,257,229', sellos: '28,904,923', tasa: '515,008', minera: '70,576', tasa_admin: '181,200', emergencia: '29,415', tasa_serv_indust: '00', tasa_adm_inmob: '8,013', total: '482,930,631' },
    { mes: 'Febrero', iibb: '257,054,091', conv: '114,916,856', inmobiliario: '29,744,184', ipa: '9,475,702', sellos: '22,643,720', tasa: '403,121', minera: '70,671', tasa_admin: '190,820', emergencia: '29,415', tasa_serv_indust: '5,830', tasa_adm_inmob: '8,971', total: '434,543,381' },
    { mes: 'Marzo', iibb: '250,318,572', conv: '120,717,254', inmobiliario: '10,279,792', ipa: '4,259,822', sellos: '21,701,457', tasa: '552,381', minera: '113,663', tasa_admin: '183,960', emergencia: '29,415', tasa_serv_indust: '28,006', tasa_adm_inmob: '10,894', total: '408,195,217' },
    { mes: 'Abril', iibb: '292,384,654', conv: '138,179,282', inmobiliario: '9,236,570', ipa: '4,500,217', sellos: '30,843,690', tasa: '871,505', minera: '85,147', tasa_admin: '208,560', emergencia: '29,415', tasa_serv_indust: '11,542', tasa_adm_inmob: '14,090', total: '476,364,671' },
    { mes: 'Mayo', iibb: '319,817,296', conv: '144,660,652', inmobiliario: '4,621,274', ipa: '2,647,790', sellos: '28,774,271', tasa: '1,078,438', minera: '98,861', tasa_admin: '210,560', emergencia: '29,415', tasa_serv_indust: '14,410', tasa_adm_inmob: '13,284', total: '501,966,249' },
    { mes: 'Junio', iibb: '300,386,989', conv: '147,552,320', inmobiliario: '5,661,088', ipa: '3,743,139', sellos: '31,331,889', tasa: '1,273,287', minera: '116,775', tasa_admin: '302,280', emergencia: '29,415', tasa_serv_indust: '12,733', tasa_adm_inmob: '17,922', total: '490,427,836' },
    { mes: 'Julio', iibb: '329,379,385', conv: '153,077,520', inmobiliario: '5,605,128', ipa: '4,101,935', sellos: '36,379,184', tasa: '1,235,623', minera: '76,609', tasa_admin: '273,520', emergencia: '29,415', tasa_serv_indust: '17,604', tasa_adm_inmob: '17,616', total: '530,193,537' },
    { mes: 'Agosto', iibb: '325,351,928', conv: '150,824,203', inmobiliario: '5,037,300', ipa: '4,948,920', sellos: '34,812,543', tasa: '1,194,868', minera: '101,866', tasa_admin: '272,186', emergencia: '29,415', tasa_serv_indust: '8,822', tasa_adm_inmob: '16,651', total: '522,598,700' },
    { mes: 'Septiembre', iibb: '337,218,063', conv: '167,625,987', inmobiliario: '4,834,423', ipa: '3,237,011', sellos: '33,605,081', tasa: '1,243,632', minera: '159,320', tasa_admin: '289,710', emergencia: '29,415', tasa_serv_indust: '25,398', tasa_adm_inmob: '17,668', total: '548,285,707' },
    { mes: 'Octubre', iibb: '412,811,542', conv: '166,746,643', inmobiliario: '4,769,472', ipa: '2,577,912', sellos: '32,911,174', tasa: '1,404,773', minera: '126,837', tasa_admin: '270,320', emergencia: '29,415', tasa_serv_indust: '12,725', tasa_adm_inmob: '17,428', total: '621,678,239' },
    { mes: 'Noviembre', iibb: '346,783,883', conv: '167,795,183', inmobiliario: '3,169,074', ipa: '1,622,963', sellos: '41,941,591', tasa: '1,365,737', minera: '104,359', tasa_admin: '255,740', emergencia: '29,415', tasa_serv_indust: '12,836', tasa_adm_inmob: '15,840', total: '563,096,621' },
    { mes: 'Diciembre', iibb: '335,845,486', conv: '167,650,432', inmobiliario: '2,549,833', ipa: '2,018,156', sellos: '29,260,120', tasa: '1,226,728', minera: '123,431', tasa_admin: '243,270', emergencia: '00', tasa_serv_indust: '9,733', tasa_adm_inmob: '12,943', total: '538,940,132' },
    { mes: 'Total', iibb: '3,819,320,737', conv: '1,761,909,817', inmobiliario: '101,340,072', ipa: '46,390,795', sellos: '373,109,643', tasa: '12,365,101', minera: '1,248,114', tasa_admin: '2,882,126', emergencia: '323,560', tasa_serv_indust: '59,640', tasa_adm_inmob: '171,317', total: '6,119,220,921' },
    { mes: '% Porcentaje', iibb: '62,42', conv: '28,79', inmobiliario: '1,66', ipa: '0,76', sellos: '6,10', tasa: '0,20', minera: '0,02', tasa_admin: '0,05', emergencia: '0,00', tasa_serv_indust: '0,00', tasa_adm_inmob: '0,00', total: '100,00' },
  ],
  2016: [
    { mes: 'Enero', iibb: '366,560,082', conv: '152,276,491', inmobiliario: '12,627,515', ipa: '1,956,476', sellos: '33,561,712', tasa_org_externo: '00', tasa: '1,124,948', minera: '56,688', tasa_admin: '188,400', tasa_serv_indust: '4,377', tasa_adm_inmob: '6,657', total: '568,363,350' },
    { mes: 'Febrero', iibb: '331,735,148', conv: '140,637,411', inmobiliario: '29,082,512', ipa: '14,978,879', sellos: '27,925,639', tasa_org_externo: '00', tasa: '1,225,715', minera: '82,699', tasa_admin: '193,280', tasa_serv_indust: '2,367', tasa_adm_inmob: '11,117', total: '545,874,788' },
    { mes: 'Marzo', iibb: '367,220,552', conv: '176,363,090', inmobiliario: '11,951,660', ipa: '6,671,200', sellos: '30,569,251', tasa_org_externo: '00', tasa: '1,371,087', minera: '103,167', tasa_admin: '216,200', tasa_serv_indust: '23,208', tasa_adm_inmob: '12,911', total: '594,502,330' },
    { mes: 'Abril', iibb: '387,449,032', conv: '171,347,698', inmobiliario: '10,955,802', ipa: '6,600,925', sellos: '32,025,385', tasa_org_externo: '00', tasa: '1,521,591', minera: '89,679', tasa_admin: '247,612', tasa_serv_indust: '40,310', tasa_adm_inmob: '15,208', total: '610,293,246' },
    { mes: 'Mayo', iibb: '382,698,849', conv: '160,704,522', inmobiliario: '10,498,367', ipa: '6,216,819', sellos: '43,139,951', tasa_org_externo: '00', tasa: '1,476,740', minera: '91,520', tasa_admin: '236,012', tasa_serv_indust: '39,478', tasa_adm_inmob: '17,419', total: '605,119,677' },
    { mes: 'Junio', iibb: '411,238,108', conv: '168,366,945', inmobiliario: '10,366,646', ipa: '6,043,424', sellos: '37,749,369', tasa_org_externo: '244,149', tasa: '1,634,518', minera: '99,984', tasa_admin: '261,685', tasa_serv_indust: '14,512', tasa_adm_inmob: '14,762', total: '636,034,102' },
    { mes: 'Julio', iibb: '423,992,732', conv: '183,159,280', inmobiliario: '9,632,383', ipa: '6,720,864', sellos: '52,820,258', tasa_org_externo: '219,261', tasa: '1,566,819', minera: '128,562', tasa_admin: '244,981', tasa_serv_indust: '13,791', tasa_adm_inmob: '12,500', total: '678,511,431' },
    { mes: 'Agosto', iibb: '436,538,901', conv: '179,273,577', inmobiliario: '10,687,097', ipa: '5,859,583', sellos: '42,651,180', tasa_org_externo: '291,581', tasa: '1,566,517', minera: '91,183', tasa_admin: '262,398', tasa_serv_indust: '32,045', tasa_adm_inmob: '16,523', total: '677,270,585' },
    { mes: 'Septiembre', iibb: '469,726,267', conv: '175,804,504', inmobiliario: '8,204,876', ipa: '3,605,786', sellos: '39,409,496', tasa_org_externo: '306,287', tasa: '1,738,964', minera: '105,835', tasa_admin: '276,597', tasa_serv_indust: '140,270', tasa_adm_inmob: '15,047', total: '699,333,928' },
    { mes: 'Octubre', iibb: '452,008,986', conv: '178,123,990', inmobiliario: '7,475,530', ipa: '2,960,139', sellos: '50,973,555', tasa_org_externo: '222,147', tasa: '1,758,332', minera: '157,409', tasa_admin: '266,069', tasa_serv_indust: '113,407', tasa_adm_inmob: '13,303', total: '694,072,868' },
    { mes: 'Noviembre', iibb: '456,886,312', conv: '183,799,538', inmobiliario: '3,949,315', ipa: '2,902,869', sellos: '41,185,155', tasa_org_externo: '282,416', tasa: '1,633,407', minera: '212,795', tasa_admin: '298,697', tasa_serv_indust: '379,488', tasa_adm_inmob: '13,647', total: '691,543,637' },
    { mes: 'Diciembre', iibb: '442,738,601', conv: '183,645,060', inmobiliario: '4,278,953', ipa: '2,874,267', sellos: '43,842,199', tasa_org_externo: '233,222', tasa: '1,525,296', minera: '143,561', tasa_admin: '343,769', tasa_serv_indust: '11,250', tasa_adm_inmob: '16,140', total: '679,652,318' },
    { mes: 'Total', iibb: '4,928,793,572', conv: '2,053,502,107', inmobiliario: '129,710,658', ipa: '67,391,251', sellos: '475,853,152', tasa_org_externo: '1,799,063', tasa: '18,143,936', minera: '1,363,085', tasa_admin: '2,847,487', tasa_serv_indust: '814,504', tasa_adm_inmob: '165,233', total: '7,680,572,259' },
    { mes: '% Porcentaje', iibb: '64,17', conv: '26,74', inmobiliario: '1,69', ipa: '0,88', sellos: '6,20', tasa_org_externo: '0,02', tasa: '0,24', minera: '0,02', tasa_admin: '0,04', tasa_serv_indust: '0,01', tasa_adm_inmob: '0,00', total: '100' },
  ],
  2017: [
    { mes: 'Enero', iibb: '478,001,023', conv: '193,673,997', inmobiliario: '18,754,665', ipa: '8,887,501', sellos: '56,864,154', tasa_org_externo: '106,364', tasa: '1,717,772', minera: '91,624', tasa_admin: '225,109', tasa_serv_indust: '1,061', tasa_adm_inmob: '8,366', total: '758,331,635' },
    { mes: 'Febrero', iibb: '438,633,504', conv: '199,958,771', inmobiliario: '48,631,073', ipa: '16,997,204', sellos: '46,697,518', tasa_org_externo: '148,727', tasa: '1,431,182', minera: '82,130', tasa_admin: '217,736', tasa_serv_indust: '16,729', tasa_adm_inmob: '11,475', total: '752,826,049' },
    { mes: 'Marzo', iibb: '432,526,967', conv: '210,498,640', inmobiliario: '14,020,209', ipa: '11,795,718', sellos: '44,714,450', tasa_org_externo: '236,265', tasa: '1,610,920', minera: '90,787', tasa_admin: '290,001', tasa_serv_indust: '34,997', tasa_adm_inmob: '14,037', total: '715,832,990' },
    { mes: 'Abril', iibb: '492,096,229', conv: '206,291,396', inmobiliario: '7,622,243', ipa: '7,024,420', sellos: '51,908,256', tasa_org_externo: '257,106', tasa: '1,450,162', minera: '118,127', tasa_admin: '259,304', tasa_serv_indust: '26,783', tasa_adm_inmob: '13,877', total: '767,067,903' },
    { mes: 'Mayo', iibb: '493,384,117', conv: '216,219,052', inmobiliario: '7,681,033', ipa: '8,821,898', sellos: '56,267,592', tasa_org_externo: '272,709', tasa: '1,399,032', minera: '130,479', tasa_admin: '300,665', tasa_serv_indust: '40,664', tasa_adm_inmob: '17,322', total: '784,534,564' },
    { mes: 'Junio', iibb: '524,045,570', conv: '202,902,576', inmobiliario: '8,921,298', ipa: '7,805,346', sellos: '58,147,675', tasa_org_externo: '255,405', tasa: '1,455,925', minera: '117,679', tasa_admin: '302,609', tasa_serv_indust: '22,782', tasa_adm_inmob: '15,050', total: '803,991,915' },
    { mes: 'Julio', iibb: '537,397,407', conv: '218,656,466', inmobiliario: '7,529,072', ipa: '10,113,561', sellos: '57,099,557', tasa_org_externo: '279,715', tasa: '1,775,093', minera: '144,549', tasa_admin: '307,123', tasa_serv_indust: '64,196', tasa_adm_inmob: '14,062', total: '833,380,800' },
    { mes: 'Agosto', iibb: '600,982,740', conv: '236,168,421', inmobiliario: '7,181,640', ipa: '7,291,236', sellos: '62,345,660', tasa_org_externo: '288,187', tasa: '1,737,311', minera: '238,655', tasa_admin: '310,307', tasa_serv_indust: '33,133', tasa_adm_inmob: '14,722', total: '916,592,012' },
    { mes: 'Septiembre', iibb: '616,180,105', conv: '232,809,403', inmobiliario: '6,701,784', ipa: '5,994,165', sellos: '64,290,576', tasa_org_externo: '281,484', tasa: '2,052,764', minera: '154,809', tasa_admin: '320,712', tasa_serv_indust: '64,900', tasa_adm_inmob: '16,668', total: '928,867,370' },
    { mes: 'Octubre', iibb: '540,515,923', conv: '231,487,092', inmobiliario: '5,169,421', ipa: '5,041,184', sellos: '71,848,264', tasa_org_externo: '239,478', tasa: '1,741,862', minera: '296,880', tasa_admin: '306,951', tasa_serv_indust: '39,166', tasa_adm_inmob: '14,833', total: '856,700,606' },
    { mes: 'Noviembre', iibb: '562,236,915', conv: '242,547,716', inmobiliario: '4,317,407', ipa: '4,333,682', sellos: '65,169,618', tasa_org_externo: '287,046', tasa: '1,714,297', minera: '168,531', tasa_admin: '321,861', tasa_serv_indust: '37,074', tasa_adm_inmob: '15,835', total: '881,149,984' },
    { mes: 'Diciembre', iibb: '584,831,582', conv: '244,152,198', inmobiliario: '5,467,026', ipa: '4,111,180', sellos: '67,419,526', tasa_org_externo: '243,885', tasa: '1,732,625', minera: '258,247', tasa_admin: '362,678', tasa_serv_indust: '18,067', tasa_adm_inmob: '14,161', total: '908,611,175' },
    { mes: 'Total', iibb: '6,300,832,082', conv: '2,635,365,727', inmobiliario: '141,996,872', ipa: '98,217,095', sellos: '702,772,846', tasa_org_externo: '2,896,371', tasa: '19,818,946', minera: '1,892,497', tasa_admin: '3,525,056', tasa_serv_indust: '399,552', tasa_adm_inmob: '169,957', total: '9,907,887,002' },
    { mes: '% Porcentaje', iibb: '63,59', conv: '26,60', inmobiliario: '1,43', ipa: '0,99', sellos: '7,09', tasa_org_externo: '0,03', tasa: '0,20', minera: '0,02', tasa_admin: '0,04', tasa_serv_indust: '0,00', tasa_adm_inmob: '0,00', total: '100' },
  ],
};

const COLUMNAS = [
  { key: 'mes', label: 'Mes' },
  { key: 'iibb', label: 'IIBB DIRECTO' },
  { key: 'conv', label: 'CONV. MULT.' },
  { key: 'inmobiliario', label: 'INMOBILIARIO' },
  { key: 'ipa', label: 'IPA' },
  { key: 'sellos', label: 'SELLOS' },
  { key: 'tasa_org_externo', label: 'TASA ORG.EXTERNO' },
  { key: 'tasa', label: 'TASA FORESTAL' },
  { key: 'minera', label: 'CONC. MINERA' },
  { key: 'tasa_admin', label: 'TASA ADMIN.' },
  { key: 'tasa_serv_indust', label: 'TASA SERV.INDUST.' },
  { key: 'tasa_adm_inmob', label: 'TASA ADM.INMOB' },
  { key: 'total', label: 'TOTAL' },
];

export default function HeroEstadisticas() {
  const [año, setAño] = useState(AÑOS[0]);
  const mostrarTasaAdmin = año >= 2010;
  const mostrarTasaServIndust = año >= 2013;
  const mostrarTasaAdmInmob = año >= 2014;
  const mostrarTasaOrgExterno = año >= 2016;
  const columnasFiltradas = COLUMNAS.filter(col => {
    if (col.key === 'tasa_admin') return mostrarTasaAdmin;
    if (col.key === 'tasa_serv_indust') return mostrarTasaServIndust;
    if (col.key === 'tasa_adm_inmob') return mostrarTasaAdmInmob;
    if (col.key === 'tasa_org_externo') return mostrarTasaOrgExterno;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-pink-200">
      {/* Hero Section */}
      <div className="relative h-[420px] flex items-center justify-center bg-center bg-cover mb-12 shadow-lg" style={{ backgroundImage: `url('/normativas.png')` }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-8 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight animate-fade-in">
            Gráficos de Recaudación y PBG
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl drop-shadow font-medium animate-fade-in delay-100">
            Accedé a los datos de recaudación fiscal por año. Selecciona un año para ver el detalle mensual.
          </p>
        </div>
      </div>
      {/* Select de año */}
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg font-semibold text-blue-900 mb-2">Seleccione el año:</label>
        <select
          className="w-56 px-4 py-2 rounded-lg border-2 border-pink-300 shadow focus:outline-none focus:ring-2 focus:ring-pink-400 text-blue-900 font-semibold bg-white"
          value={año}
          onChange={e => setAño(Number(e.target.value))}
        >
          {AÑOS.map(y => (
            <option key={y} value={y}>{`Año ${y}`}</option>
          ))}
        </select>
        <h2 className="mt-6 text-2xl font-bold text-blue-900">Recursos Fiscales - Año {año}</h2>
      </div>
      {/* Tabla de recaudación */}
      <table className="w-full table-fixed text-center rounded-2xl border-separate border-spacing-0 mb-12 text-sm">
          <thead>
            <tr>
            {columnasFiltradas.map(col => (
              <th
                key={col.key}
                className="px-2 py-2 bg-blue-700 text-white font-bold uppercase border border-blue-200 first:rounded-tl-2xl last:rounded-tr-2xl"
              >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
        <tbody className="bg-blue-50">
            {(RECAUDACION[año] || []).map((fila, idx) => (
            <tr key={idx} className="">
              {columnasFiltradas.map(col => (
                <td
                  key={col.key}
                  className={`px-2 py-2 text-blue-900 font-medium border border-blue-200 ${col.key !== 'mes' ? 'text-pink-500 font-bold' : 'font-bold text-blue-900'}`}
                >
                    {col.key === 'mes' ? (
                    <span>{fila[col.key]}</span>
                    ) : (
                    fila[col.key] ? <span>{`$${fila[col.key]}`}</span> : <span></span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {(!RECAUDACION[año] || RECAUDACION[año].length === 0) && (
              <tr>
              <td colSpan={columnasFiltradas.length} className="py-8 text-gray-400 text-lg">No hay datos para este año.</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}