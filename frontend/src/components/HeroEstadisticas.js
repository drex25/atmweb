import React, { useState } from 'react';
import { TrendingUp, Calendar, DollarSign, BarChart3, PieChart } from 'lucide-react';
import BlurText from './BlurText';

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
  2018: [
    { mes: 'Enero', iibb: '611,252,424', conv: '253,002,749', inmobiliario: '27,467,471', ipa: '11,596,964', sellos: '81,221,246', tasa_varias_cod_fiscal: '119,261', tasa: '1,510,251', minera: '133,437', tasa_admin: '264,716', tasa_serv_indust: '9,372', tasa_adm_inmob: '11,841', total: '986,589,732' },
    { mes: 'Febrero', iibb: '548,804,950', conv: '254,953,609', inmobiliario: '40,776,328', ipa: '22,574,994', sellos: '72,549,191', tasa_varias_cod_fiscal: '186,283', tasa: '1,482,911', minera: '259,395', tasa_admin: '224,303', tasa_serv_indust: '21,414', tasa_adm_inmob: '10,331', total: '941,843,709' },
    { mes: 'Marzo', iibb: '559,298,671', conv: '259,447,310', inmobiliario: '13,965,328', ipa: '11,935,667', sellos: '72,500,124', tasa_varias_cod_fiscal: '241,127', tasa: '1,447,460', minera: '184,469', tasa_admin: '281,825', tasa_serv_indust: '15,279', tasa_adm_inmob: '13,588', total: '919,330,848' },
    { mes: 'Abril', iibb: '593,560,493', conv: '252,824,084', inmobiliario: '15,635,263', ipa: '8,797,012', sellos: '82,443,778', tasa_varias_cod_fiscal: '248,605', tasa: '1,630,360', minera: '212,067', tasa_admin: '312,063', tasa_serv_indust: '53,761', tasa_adm_inmob: '14,729', total: '955,732,214' },
    { mes: 'Mayo', iibb: '656,813,124', conv: '275,315,663', inmobiliario: '14,940,830', ipa: '10,684,943', sellos: '100,801,754', tasa_varias_cod_fiscal: '318,292', tasa: '1,726,623', minera: '272,930', tasa_admin: '314,940', tasa_serv_indust: '169,027', tasa_adm_inmob: '13,880', total: '1,061,372,006' },
    { mes: 'Junio', iibb: '667,502,272', conv: '291,665,199', inmobiliario: '14,859,737', ipa: '9,450,380', sellos: '84,084,577', tasa_varias_cod_fiscal: '294,017', tasa: '1,927,837', minera: '272,341', tasa_admin: '399,897', tasa_serv_indust: '51,047', tasa_adm_inmob: '17,193', total: '1,070,524,497' },
    { mes: 'Julio', iibb: '664,292,739', conv: '308,005,682', inmobiliario: '15,593,187', ipa: '11,681,220', sellos: '85,079,933', tasa_varias_cod_fiscal: '432,549', tasa: '1,425,114', minera: '300,605', tasa_admin: '802,258', tasa_serv_indust: '41,202', tasa_adm_inmob: '35,262', total: '1,087,689,750' },
    { mes: 'Agosto', iibb: '733,441,114', conv: '305,550,674', inmobiliario: '14,752,693', ipa: '8,110,774', sellos: '82,362,530', tasa_varias_cod_fiscal: '528,705', tasa: '1,753,594', minera: '362,096', tasa_admin: '855,926', tasa_serv_indust: '38,726', tasa_adm_inmob: '36,851', total: '1,147,793,685' },
    { mes: 'Septiembre', iibb: '767,901,023', conv: '305,753,528', inmobiliario: '13,371,890', ipa: '5,415,408', sellos: '78,397,913', tasa_varias_cod_fiscal: '459,317', tasa: '1,937,418', minera: '379,582', tasa_admin: '864,989', tasa_serv_indust: '35,581', tasa_adm_inmob: '33,892', total: '1,174,550,541' },
    { mes: 'Octubre', iibb: '754,171,073', conv: '339,557,388', inmobiliario: '13,748,159', ipa: '6,346,793', sellos: '70,544,592', tasa_varias_cod_fiscal: '531,006', tasa: '1,964,163', minera: '351,879', tasa_admin: '918,474', tasa_serv_indust: '52,438', tasa_adm_inmob: '36,703', total: '1,188,222,668' },
    { mes: 'Noviembre', iibb: '869,803,491', conv: '357,303,397', inmobiliario: '4,446,409', ipa: '4,372,735', sellos: '74,917,478', tasa_varias_cod_fiscal: '496,018', tasa: '1,965,478', minera: '297,589', tasa_admin: '873,398', tasa_serv_indust: '161,519', tasa_adm_inmob: '30,225', total: '1,314,667,737' },
    { mes: 'Diciembre', iibb: '958,586,463', conv: '358,456,181', inmobiliario: '6,281,965', ipa: '4,871,620', sellos: '64,674,835', tasa_varias_cod_fiscal: '516,847', tasa: '1,879,102', minera: '289,675', tasa_admin: '1,024,761', tasa_serv_indust: '145,208', tasa_adm_inmob: '34,966', total: '1,396,761,623' },
    { mes: 'Total', iibb: '8,385,427,836', conv: '3,561,835,464', inmobiliario: '195,839,259', ipa: '115,838,511', sellos: '949,577,951', tasa_varias_cod_fiscal: '4,372,028', tasa: '20,650,311', minera: '3,316,064', tasa_admin: '7,137,552', tasa_serv_indust: '794,573', tasa_adm_inmob: '289,460', total: '13,245,079,010' },
    { mes: '% Porcentaje', iibb: '63,31', conv: '26,89', inmobiliario: '1,48', ipa: '0,87', sellos: '7,17', tasa_varias_cod_fiscal: '0,03', tasa: '0,16', minera: '0,03', tasa_admin: '0,05', tasa_serv_indust: '0,01', tasa_adm_inmob: '0,00', total: '100,00' },
  ],
  2019: [
    { mes: 'Enero', ingresos_brutos: '1,360,464,139', inmobiliario: '30,529,113', sellos: '70,657,791', parque_automotor: '15,277,623', minera: '175,939', tasa_varias_cod_fiscal: '266,934', tasa: '2,054,444', tasa_admin: '812,508', tasa_serv_indust: '6,353', tasa_adm_inmob: '23,427', total: '1,480,268,272' },
    { mes: 'Febrero', ingresos_brutos: '1,350,732,068', inmobiliario: '58,207,782', sellos: '71,712,272', parque_automotor: '29,321,193', minera: '259,252', tasa_varias_cod_fiscal: '405,885', tasa: '1,994,714', tasa_admin: '780,997', tasa_serv_indust: '39,426', tasa_adm_inmob: '24,378', total: '1,513,477,967' },
    { mes: 'Marzo', ingresos_brutos: '1,261,451,543', inmobiliario: '31,294,019', sellos: '74,780,040', parque_automotor: '22,023,216', minera: '274,244', tasa_varias_cod_fiscal: '363,488', tasa: '1,685,783', tasa_admin: '838,241', tasa_serv_indust: '70,126', tasa_adm_inmob: '27,213', total: '1,392,807,914' },
    { mes: 'Abril', ingresos_brutos: '1,286,936,677', inmobiliario: '23,429,119', sellos: '72,511,863', parque_automotor: '15,557,897', minera: '253,542', tasa_varias_cod_fiscal: '452,706', tasa: '2,167,928', tasa_admin: '897,392', tasa_serv_indust: '40,512', tasa_adm_inmob: '30,020', total: '1,402,277,657' },
    { mes: 'Mayo', ingresos_brutos: '1,395,639,898', inmobiliario: '22,967,219', sellos: '84,200,652', parque_automotor: '13,305,912', minera: '412,380', tasa_varias_cod_fiscal: '504,987', tasa: '2,045,560', tasa_admin: '1,018,843', tasa_serv_indust: '78,689', tasa_adm_inmob: '39,006', total: '1,520,213,146' },
    { mes: 'Junio', ingresos_brutos: '1,415,117,352', inmobiliario: '23,328,142', sellos: '94,425,206', parque_automotor: '12,794,515', minera: '333,621', tasa_varias_cod_fiscal: '442,128', tasa: '1,773,778', tasa_admin: '905,227', tasa_serv_indust: '50,586', tasa_adm_inmob: '28,223', total: '1,549,198,779' },
    { mes: 'Julio', ingresos_brutos: '1,337,332,470', inmobiliario: '24,985,006', sellos: '96,400,921', parque_automotor: '15,945,768', minera: '453,999', tasa_varias_cod_fiscal: '426,104', tasa: '2,008,242', tasa_admin: '999,586', tasa_serv_indust: '58,782', tasa_adm_inmob: '36,395', total: '1,478,647,273' },
    { mes: 'Agosto', ingresos_brutos: '1,488,170,162', inmobiliario: '22,605,118', sellos: '93,308,077', parque_automotor: '12,169,769', minera: '447,828', tasa_varias_cod_fiscal: '433,200', tasa: '2,560,053', tasa_admin: '926,900', tasa_serv_indust: '40,067', tasa_adm_inmob: '31,296', total: '1,620,692,471' },
    { mes: 'Septiembre', ingresos_brutos: '1,507,510,124', inmobiliario: '21,987,882', sellos: '82,281,112', parque_automotor: '9,354,057', minera: '549,760', tasa_varias_cod_fiscal: '585,717', tasa: '2,990,820', tasa_admin: '1,106,697', tasa_serv_indust: '54,673', tasa_adm_inmob: '38,950', total: '1,626,459,791' },
    { mes: 'Octubre', ingresos_brutos: '1,608,968,376', inmobiliario: '8,501,580', sellos: '91,265,876', parque_automotor: '7,637,376', minera: '629,541', tasa_varias_cod_fiscal: '743,257', tasa: '2,612,125', tasa_admin: '1,504,807', tasa_serv_indust: '25,004', tasa_adm_inmob: '54,943', total: '1,721,942,885' },
    { mes: 'Noviembre', ingresos_brutos: '1,719,482,525', inmobiliario: '6,360,462', sellos: '102,522,742', parque_automotor: '7,302,831', minera: '446,825', tasa_varias_cod_fiscal: '747,468', tasa: '2,843,776', tasa_admin: '1,537,969', tasa_serv_indust: '41,168', tasa_adm_inmob: '50,577', total: '1,841,336,343' },
    { mes: 'Diciembre', ingresos_brutos: '1,640,601,681', inmobiliario: '9,092,708', sellos: '104,897,882', parque_automotor: '6,359,306', minera: '599,170', tasa_varias_cod_fiscal: '651,597', tasa: '2,527,158', tasa_admin: '1,648,975', tasa_serv_indust: '34,311', tasa_adm_inmob: '70,274', total: '1,766,483,063' },
    { mes: 'Acumulado', ingresos_brutos: '17,372,407,018', inmobiliario: '283,288,149', sellos: '1,038,964,434', parque_automotor: '167,049,464', minera: '4,836,102', tasa_varias_cod_fiscal: '6,023,470', tasa: '27,264,380', tasa_admin: '12,978,144', tasa_serv_indust: '539,697', tasa_adm_inmob: '454,703', total: '18,913,805,560' },
    { mes: '% Porcentaje', ingresos_brutos: '91,85', inmobiliario: '1,50', sellos: '5,49', parque_automotor: '0,89', minera: '0,03', tasa_varias_cod_fiscal: '0,03', tasa: '0,14', tasa_admin: '0,07', tasa_serv_indust: '0,00', tasa_adm_inmob: '0,00', total: '100,00' },
  ],
  2020: [
    { mes: 'Enero', ingresos_brutos: '1.781.838.098,08', inmobiliario: '51.255.770,33', sellos: '96.004.293,15', parque_automotor: '28.511.901,36', minera: '430.199,95', tasa_varias_cod_fiscal: '327.106,01', tasa: '2.706.302,13', tasa_admin: '1.290.339,80', tasa_serv_indust: '7.214,18', tasa_adm_inmob: '46.807,43', total: '1.962.418.032,42' },
    { mes: 'Febrero', ingresos_brutos: '1.906.895.102,47', inmobiliario: '206.419.512,12', sellos: '96.148.906,16', parque_automotor: '52.800.609,12', minera: '337.722,11', tasa_varias_cod_fiscal: '584.672,32', tasa: '2.202.922,14', tasa_admin: '1.051.516,43', tasa_serv_indust: '5.883,21', tasa_adm_inmob: '41.715,76', total: '2.266.488.561,84' },
    { mes: 'Marzo', ingresos_brutos: '1.798.072.508,45', inmobiliario: '78.133.499,96', sellos: '94.282.906,50', parque_automotor: '19.452.518,16', minera: '199.995,06', tasa_varias_cod_fiscal: '514.108,96', tasa: '1.806.289,32', tasa_admin: '1.068.408,97', tasa_serv_indust: '40.305,42', tasa_adm_inmob: '30.757,91', total: '1.993.601.298,71' },
    { mes: 'Abril', ingresos_brutos: '1.851.757.471,85', inmobiliario: '3.650.170,10', sellos: '38.165.579,28', parque_automotor: '9.780.398,52', minera: '161.906,30', tasa_varias_cod_fiscal: '22.660,32', tasa: '1.684.623,54', tasa_admin: '396.046,26', tasa_serv_indust: '0,00', tasa_adm_inmob: '8.576,44', total: '1.905.627.432,61' },
    { mes: 'Mayo', ingresos_brutos: '2.312.866.576,96', inmobiliario: '8.429.265,54', sellos: '68.864.404,05', parque_automotor: '12.178.632,97', minera: '394.661,53', tasa_varias_cod_fiscal: '164.005,67', tasa: '2.931.693,58', tasa_admin: '614.832,40', tasa_serv_indust: '3.336,45', tasa_adm_inmob: '12.945,78', total: '2.406.460.354,93' },
    { mes: 'Junio', ingresos_brutos: '2.544.622.874,22', inmobiliario: '14.787.890,30', sellos: '117.369.101,99', parque_automotor: '21.843.820,81', minera: '450.130,37', tasa_varias_cod_fiscal: '538.013,18', tasa: '2.387.922,07', tasa_admin: '702.982,54', tasa_serv_indust: '32.901,32', tasa_adm_inmob: '32.003,84', total: '2.702.767.640,64' },
    { mes: 'Julio', ingresos_brutos: '2.950.550.132,28', inmobiliario: '19.832.361,96', sellos: '116.095.806,88', parque_automotor: '22.175.917,70', minera: '494.673,64', tasa_varias_cod_fiscal: '643.321,89', tasa: '2.588.053,76', tasa_admin: '1.164.667,64', tasa_serv_indust: '8.382,83', tasa_adm_inmob: '47.348,86', total: '3.113.600.667,44' },
    { mes: 'Agosto', ingresos_brutos: '3.246.786.579,95', inmobiliario: '18.729.548,92', sellos: '155.447.738,99', parque_automotor: '18.622.435,55', minera: '684.259,17', tasa_varias_cod_fiscal: '590.043,93', tasa: '3.031.399,23', tasa_admin: '2.116.488,47', tasa_serv_indust: '32.875,95', tasa_adm_inmob: '71.824,89', total: '3.446.113.195,05' },
    { mes: 'Septiembre', ingresos_brutos: '3.072.193.494,82', inmobiliario: '17.465.822,73', sellos: '156.927.522,27', parque_automotor: '14.650.443,32', minera: '602.735,81', tasa_varias_cod_fiscal: '696.148,71', tasa: '3.540.944,55', tasa_admin: '1.630.923,56', tasa_serv_indust: '1.019.745,52', tasa_adm_inmob: '73.381,05', total: '3.268.801.162,34' },
    { mes: 'Octubre', ingresos_brutos: '2.969.770.293,81', inmobiliario: '14.930.144,91', sellos: '193.123.517,84', parque_automotor: '12.243.883,55', minera: '996.497,78', tasa_varias_cod_fiscal: '1.160.255,97', tasa: '403.376.276,56', tasa_admin: '1.372.776,97', tasa_serv_indust: '332.172,74', tasa_adm_inmob: '89.421,23', total: '3.597.395.241,36' },
    { mes: 'Noviembre', ingresos_brutos: '3.461.349.273,91', inmobiliario: '13.301.793,59', sellos: '162.499.081,09', parque_automotor: '9.285.088,13', minera: '654.574,39', tasa_varias_cod_fiscal: '1.338.643,38', tasa: '18.435.923,65', tasa_admin: '1.978.276,04', tasa_serv_indust: '361.307,97', tasa_adm_inmob: '101.933,81', total: '3.669.305.895,87' },
    { mes: 'Diciembre', ingresos_brutos: '3.568.491.522,49', inmobiliario: '22.406.209,03', sellos: '166.033.293,18', parque_automotor: '12.048.775,10', minera: '845.477,77', tasa_varias_cod_fiscal: '1.208.288,30', tasa: '19.629.181,26', tasa_admin: '2.354.043,68', tasa_serv_indust: '40.947,73', tasa_adm_inmob: '116.209,56', total: '3.793.173.948,10' },
    { mes: 'Acumulado', ingresos_brutos: '31.465.193.929,29', inmobiliario: '469.341.989,49', sellos: '1.460.962.151,29', parque_automotor: '233.594.424,29', minera: '6.252.833,88', tasa_varias_cod_fiscal: '7.787.268,64', tasa: '464.321.531,79', tasa_admin: '15.741.302,76', tasa_serv_indust: '1.885.073,32', tasa_adm_inmob: '672.926,56', total: '34.125.753.431,31' },
    { mes: '% Porcentaje', ingresos_brutos: '91,969', inmobiliario: '1,473', sellos: '4,269', parque_automotor: '0,730', minera: '0,022', tasa_varias_cod_fiscal: '0,006', tasa: '1,466', tasa_admin: '0,044', tasa_serv_indust: '0,006', tasa_adm_inmob: '0,002', total: '100,00' },
  ],
  2021: [
    { mes: 'Enero', ingresos_brutos: '3.904.172.460,32', inmobiliario: '50.238.127,97', sellos: '161.686.460,50', parque_automotor: '9.639.138,48', minera: '579.117,74', tasa_varias_cod_fiscal: '560.828,85', tasa: '9.014.670,49', tasa_admin: '1.623.423,30', tasa_serv_indust: '2.722,30', tasa_adm_inmob: '78.521,85', total: '4.137.595.471,79' },
    { mes: 'Febrero', ingresos_brutos: '3.691.234.427,65', inmobiliario: '355.770.630,16', sellos: '167.434.662,55', parque_automotor: '66.591.856,72', minera: '634.751,56', tasa_varias_cod_fiscal: '1.217.729,09', tasa: '9.101.216,12', tasa_admin: '1.531.549,21', tasa_serv_indust: '10.265,48', tasa_adm_inmob: '73.878,63', total: '4.293.600.967,17' },
    { mes: 'Marzo', ingresos_brutos: '3.943.476.453,98', inmobiliario: '186.148.224,61', sellos: '186.139.112,01', parque_automotor: '63.078.949,87', minera: '728.469,91', tasa_varias_cod_fiscal: '1.309.016,76', tasa: '11.488.766,17', tasa_admin: '2.020.343,25', tasa_serv_indust: '60.884,93', tasa_adm_inmob: '115.950,86', total: '4.394.566.172,31' },
    { mes: 'Abril', ingresos_brutos: '4.638.694.174,39', inmobiliario: '23.449.303,69', sellos: '245.061.420,51', parque_automotor: '42.273.787,36', minera: '1.203.470,96', tasa_varias_cod_fiscal: '1.270.868,56', tasa: '13.038.691,56', tasa_admin: '2.011.138,94', tasa_serv_indust: '158.984,24', tasa_adm_inmob: '94.250,72', total: '4.967.256.090,93' },
    { mes: 'Mayo', ingresos_brutos: '4.807.684.826,39', inmobiliario: '21.428.325,79', sellos: '212.184.879,29', parque_automotor: '37.853.967,36', minera: '742.099,09', tasa_varias_cod_fiscal: '1.177.246,60', tasa: '11.067.272,03', tasa_admin: '1.864.966,63', tasa_serv_indust: '20.028,93', tasa_adm_inmob: '94.678,92', total: '5.094.118.291,03' },
    { mes: 'Junio', ingresos_brutos: '4.793.677.067,64', inmobiliario: '23.942.009,77', sellos: '235.164.569,13', parque_automotor: '36.602.146,93', minera: '1.125.241,69', tasa_varias_cod_fiscal: '1.729.205,20', tasa: '15.792.825,75', tasa_admin: '2.112.632,94', tasa_serv_indust: '69.029,16', tasa_adm_inmob: '101.294,68', total: '5.110.316.022,89' },
    { mes: 'Julio', iibb: '4.864.320.934,61', inmobiliario: '26.038.524,18', sellos: '246.497.466,51', parque_automotor: '37.615.460,61', minera: '1.026.477,33', tasa_varias_cod_fiscal: '1.686.061,61', tasa: '14.215.702,08', tasa_admin: '1.973.751,48', tasa_serv_indust: '46.738,80', tasa_adm_inmob: '99.297,27', total: '5.193.520.414,48' },
    { mes: 'Agosto', ingresos_brutos: '5.287.824.232,22', inmobiliario: '26.448.454,64', sellos: '259.699.543,14', parque_automotor: '35.081.343,64', minera: '1.093.323,58', tasa_varias_cod_fiscal: '2.088.057,10', tasa: '15.964.380,81', tasa_admin: '2.752.323,86', tasa_serv_indust: '111.929,29', tasa_adm_inmob: '147.705,24', total: '5.631.211.293,52' },
    { mes: 'Septiembre', ingresos_brutos: '5.834.386.823,91', inmobiliario: '23.762.521,84', sellos: '268.986.976,84', parque_automotor: '25.797.879,50', minera: '1.121.972,37', tasa_varias_cod_fiscal: '2.457.554,93', tasa: '16.439.149,21', tasa_admin: '3.265.364,40', tasa_serv_indust: '79.074,10', tasa_adm_inmob: '153.512,69', total: '6.176.450.829,79' },
    { mes: 'Octubre', ingresos_brutos: '5.854.050.384,06', inmobiliario: '21.946.126,08', sellos: '332.704.050,07', parque_automotor: '22.087.874,12', minera: '1.107.689,32', tasa_varias_cod_fiscal: '2.309.853,77', tasa: '16.852.861,29', tasa_admin: '3.354.914,81', tasa_serv_indust: '96.513,66', tasa_adm_inmob: '159.480,80', total: '6.254.669.747,98' },
    { mes: 'Noviembre', ingresos_brutos: '6.088.581.657,25', inmobiliario: '18.922.354,54', sellos: '279.090.824,81', parque_automotor: '17.153.717,20', minera: '1.421.594,72', tasa_varias_cod_fiscal: '2.508.873,51', tasa: '17.261.615,78', tasa_admin: '3.489.211,75', tasa_serv_indust: '299.664,00', tasa_adm_inmob: '183.185,53', total: '6.428.912.699,09' },
    { mes: 'Diciembre', ingresos_brutos: '6.570.416.106,36', inmobiliario: '19.792.743,77', sellos: '268.863.307,03', parque_automotor: '18.021.706,93', minera: '1.502.964,57', tasa_varias_cod_fiscal: '2.482.381,85', tasa: '29.860.658,89', tasa_admin: '3.809.039,94', tasa_serv_indust: '477.289,25', tasa_adm_inmob: '227.870,46', total: '6.915.454.069,05' },
    { mes: 'Acumulado', ingresos_brutos: '60.278.518.211,27', inmobiliario: '797.887.208,80', sellos: '2.863.513.272,39', parque_automotor: '411.797.828,72', minera: '12.287.172,84', tasa_varias_cod_fiscal: '20.797.677,15', tasa: '180.097.810,17', tasa_admin: '29.808.651,78', tasa_serv_indust: '1.433.124,14', tasa_adm_inmob: '1.529.627,65', total: '64.597.670.584,91' },
    { mes: '% Porcentaje', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
  ],
  2022: [
    { mes: 'Enero', ingresos_brutos: '6.509.522.748,34', inmobiliario: '378.277.392,11', sellos: '308.857.511,61', parque_automotor: '18.960.340,42', minera: '2.349.922,61', tasa_varias_cod_fiscal: '1.046.070,89', tasa: '19.531.032,03', tasa_admin: '2.794.690,98', tasa_serv_indust: '1.794,00', tasa_adm_inmob: '115.676,13', total: '7.241.457.179,12' },
    { mes: 'Febrero', ingresos_brutos: '6.203.764.926,51', inmobiliario: '397.937.841,22', sellos: '312.276.610,02', parque_automotor: '106.772.617,22', minera: '1.003.014,49', tasa_varias_cod_fiscal: '1.407.632,46', tasa: '22.951.210,18', tasa_admin: '2.693.181,97', tasa_serv_indust: '101.609,89', tasa_adm_inmob: '122.933,20', total: '7.049.031.577,16' },
    { mes: 'Marzo', ingresos_brutos: '6.580.225.847,66', inmobiliario: '422.943.424,33', sellos: '362.826.139,04', parque_automotor: '115.926.183,63', minera: '1.590.914,65', tasa_varias_cod_fiscal: '2.231.791,59', tasa: '19.570.877,90', tasa_admin: '3.281.457,52', tasa_serv_indust: '39.443,39', tasa_adm_inmob: '145.604,73', total: '7.508.781.684,44' },
    { mes: 'Abril', ingresos_brutos: '7.463.317.780,21', inmobiliario: '37.734.847,17', sellos: '315.915.708,55', parque_automotor: '88.244.094,51', minera: '1.364.261,05', tasa_varias_cod_fiscal: '2.194.712,51', tasa: '23.982.133,27', tasa_admin: '3.398.197,79', tasa_serv_indust: '89.956,00', tasa_adm_inmob: '165.904,59', total: '7.936.407.595,65' },
    { mes: 'Mayo', ingresos_brutos: '8.438.022.829,60', inmobiliario: '27.796.661,06', sellos: '316.713.521,35', parque_automotor: '77.810.667,00', minera: '1.590.097,99', tasa_varias_cod_fiscal: '2.527.339,78', tasa: '19.702.193,45', tasa_admin: '3.456.318,66', tasa_serv_indust: '83.046,78', tasa_adm_inmob: '173.392,73', total: '8.887.876.068,40' },
    { mes: 'Junio', ingresos_brutos: '9.132.327.469,75', inmobiliario: '29.697.889,18', sellos: '348.881.102,11', parque_automotor: '73.024.706,26', minera: '2.132.842,91', tasa_varias_cod_fiscal: '3.331.618,46', tasa: '24.190.765,32', tasa_admin: '3.720.393,40', tasa_serv_indust: '11.797,48', tasa_adm_inmob: '165.738,33', total: '9.617.484.323,20' },
    { mes: 'Julio', ingresos_brutos: '9.654.146.654,03', inmobiliario: '27.077.669,76', sellos: '430.069.448,28', parque_automotor: '74.382.039,78', minera: '1.586.862,66', tasa_varias_cod_fiscal: '2.533.426,12', tasa: '26.197.001,98', tasa_admin: '3.449.509,83', tasa_serv_indust: '17.452,38', tasa_adm_inmob: '142.624,84', total: '10.219.602.689,66' },
    { mes: 'Agosto', ingresos_brutos: '11.276.680.390,88', inmobiliario: '34.453.207,53', sellos: '457.513.800,37', parque_automotor: '68.616.423,80', minera: '2.976.052,05', tasa_varias_cod_fiscal: '2.871.633,71', tasa: '30.263.263,57', tasa_admin: '4.439.584,75', tasa_serv_indust: '50.947,80', tasa_adm_inmob: '202.375,01', total: '11.878.067.679,47' },
    { mes: 'Septiembre', ingresos_brutos: '11.404.805.478,70', inmobiliario: '27.611.176,68', sellos: '556.377.727,51', parque_automotor: '44.066.961,62', minera: '5.178.837,63', tasa_varias_cod_fiscal: '2.734.186,48', tasa: '43.184.277,82', tasa_admin: '4.124.013,83', tasa_serv_indust: '157.457,31', tasa_adm_inmob: '189.305,66', total: '12.088.429.423,24' },
    { mes: 'Octubre', ingresos_brutos: '11.605.373.940,93', inmobiliario: '25.241.349,46', sellos: '419.946.810,51', parque_automotor: '36.980.901,95', minera: '2.081.412,27', tasa_varias_cod_fiscal: '3.502.860,96', tasa: '31.550.305,49', tasa_admin: '6.404.333,77', tasa_serv_indust: '41.572,71', tasa_adm_inmob: '269.868,59', total: '12.131.393.456,07' },
    { mes: 'Noviembre', ingresos_brutos: '12.236.120.802,72', inmobiliario: '21.565.483,05', sellos: '439.969.197,73', parque_automotor: '31.874.478,13', minera: '2.459.305,96', tasa_varias_cod_fiscal: '4.225.747,61', tasa: '32.435.467,79', tasa_admin: '8.385.394,07', tasa_serv_indust: '245.030,73', tasa_adm_inmob: '303.200,03', total: '12.777.584.107,82' },
    { mes: 'Diciembre', ingresos_brutos: '12.708.749.064,59', inmobiliario: '24.565.462,48', sellos: '464.436.418,02', parque_automotor: '32.214.285,76', minera: '2.952.561,89', tasa_varias_cod_fiscal: '3.195.829,96', tasa: '38.031.069,76', tasa_admin: '9.422.159,71', tasa_serv_indust: '267.247,65', tasa_adm_inmob: '291.540,16', total: '13.284.125.640,00' },
    { mes: 'Total', ingresos_brutos: '113.213.057.933,92', inmobiliario: '1.454.902.404,03', sellos: '4.733.783.995,10', parque_automotor: '768.873.700,08', minera: '27.266.086,16', tasa_varias_cod_fiscal: '31.802.849,96', tasa: '331.589.598,58', tasa_admin: '', tasa_serv_indust: '1.107.356,12', tasa_adm_inmob: '2.288.264,00', total: '120.620.241.424,23' },
    { mes: '% Porcentaje', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
  ],
  2023: [
    { mes: 'Enero', ingresos_brutos: '13.437.193.345,15', inmobiliario: '96.585.407,10', sellos: '553.750.311,03', parque_automotor: '43.397.423,75', minera: '1.082.398,47', tasa_varias_cod_fiscal: '2.169.421,72', tasa: '30.804.200,82', tasa_admin: '6.853.809,80', tasa_serv_indust: '307.845,02', tasa_adm_inmob: '220.721,79', total: '14.172.364.884,65' },
    { mes: 'Febrero', ingresos_brutos: '13.856.817.353,38', inmobiliario: '1.094.570.395,23', sellos: '690.017.729,19', parque_automotor: '188.842.847,40', minera: '2.099.760,14', tasa_varias_cod_fiscal: '1.850.884,81', tasa: '28.747.503,31', tasa_admin: '5.848.234,05', tasa_serv_indust: '14.211,56', tasa_adm_inmob: '258.037,77', total: '15.869.066.956,84' },
    { mes: 'Marzo', ingresos_brutos: '14.376.546.253,52', inmobiliario: '1.060.375.928,42', sellos: '660.081.568,50', parque_automotor: '212.075.574,97', minera: '3.487.666,79', tasa_varias_cod_fiscal: '4.166.850,97', tasa: '36.886.265,06', tasa_admin: '8.462.698,75', tasa_serv_indust: '476.550,17', tasa_adm_inmob: '383.094,96', total: '16.362.942.452,11' },
    { mes: 'Abril', ingresos_brutos: '15.036.020.498,77', inmobiliario: '40.709.526,47', sellos: '758.377.480,16', parque_automotor: '152.853.580,39', minera: '4.350.209,05', tasa_varias_cod_fiscal: '3.601.820,81', tasa: '30.725.335,25', tasa_admin: '8.075.241,28', tasa_serv_indust: '39.534,66', tasa_adm_inmob: '332.163,83', total: '16.035.085.390,67' },
    { mes: 'Mayo', ingresos_brutos: '15.992.432.974,28', inmobiliario: '32.947.544,80', sellos: '792.208.089,33', parque_automotor: '95.417.158,63', minera: '3.070.557,95', tasa_varias_cod_fiscal: '3.470.939,13', tasa: '32.886.343,35', tasa_admin: '7.779.371,26', tasa_serv_indust: '476.645,31', tasa_adm_inmob: '337.922,00', total: '16.961.027.546,04' },
    { mes: 'Junio', ingresos_brutos: '17.582.893.771,68', inmobiliario: '31.133.967,51', sellos: '763.538.332,49', parque_automotor: '97.893.135,80', minera: '3.630.430,58', tasa_varias_cod_fiscal: '3.499.591,95', tasa: '43.168.969,73', tasa_admin: '7.199.438,36', tasa_serv_indust: '86.775,94', tasa_adm_inmob: '295.132,86', total: '18.533.339.546,90' },
    { mes: 'Julio', ingresos_brutos: '19.410.926.666,60', inmobiliario: '37.398.965,28', sellos: '945.740.710,30', parque_automotor: '107.250.301,33', minera: '3.547.304,83', tasa_varias_cod_fiscal: '3.626.028,02', tasa: '48.100.944,92', tasa_admin: '7.714.823,42', tasa_serv_indust: '39.921,99', tasa_adm_inmob: '349.485,61', total: '20.564.695.152,30' },
    { mes: 'Agosto', ingresos_brutos: '22.835.453.796,00', inmobiliario: '36.824.750,43', sellos: '1.086.465.233,65', parque_automotor: '104.947.955,75', minera: '3.204.257,41', tasa_varias_cod_fiscal: '4.616.588,08', tasa: '57.318.812,87', tasa_admin: '7.876.884,78', tasa_serv_indust: '3.754.896,76', tasa_adm_inmob: '333.854,23', total: '24.140.797.029,96' },
    { mes: 'Septiembre', ingresos_brutos: '24.779.873.706,40', inmobiliario: '31.070.865,08', sellos: '1.066.495.379,58', parque_automotor: '74.109.763,09', minera: '3.522.841,63', tasa_varias_cod_fiscal: '4.323.699,66', tasa: '61.181.031,49', tasa_admin: '7.935.454,53', tasa_serv_indust: '74.572,19', tasa_adm_inmob: '412.176,73', total: '26.028.999.489,78' },
    { mes: 'Octubre', ingresos_brutos: '25.023.658.849,06', inmobiliario: '29.891.605,28', sellos: '1.028.493.004,62', parque_automotor: '65.940.885,90', minera: '3.708.001,12', tasa_varias_cod_fiscal: '4.719.436,25', tasa: '55.983.633,57', tasa_admin: '10.775.137,19', tasa_serv_indust: '117.423,54', tasa_adm_inmob: '467.405,90', total: '26.223.755.382,43' },
    { mes: 'Noviembre', ingresos_brutos: '31.739.614.247,91', inmobiliario: '30.096.769,82', sellos: '1.084.548.061,61', parque_automotor: '56.878.704,89', minera: '3.554.746,37', tasa_varias_cod_fiscal: '5.998.058,47', tasa: '62.952.383,39', tasa_admin: '17.132.513,55', tasa_serv_indust: '1.769.992,28', tasa_adm_inmob: '670.613,35', total: '33.003.216.091,64' },
    { mes: 'Diciembre', ingresos_brutos: '37.409.352.862,16', inmobiliario: '47.970.967,14', sellos: '971.503.419,30', parque_automotor: '70.148.549,66', minera: '3.333.932,26', tasa_varias_cod_fiscal: '7.393.033,88', tasa: '67.802.305,31', tasa_admin: '18.061.416,21', tasa_serv_indust: '217.932,74', tasa_adm_inmob: '684.738,10', total: '38.596.469.156,76' },
    { mes: 'Total', ingresos_brutos: '251.480.784.324,91', inmobiliario: '2.569.576.692,56', sellos: '10.401.219.319,76', parque_automotor: '1.269.755.881,56', minera: '38.592.106,60', tasa_varias_cod_fiscal: '49.436.353,15', tasa: '556.557.729,07', tasa_admin: '113.715.023,18', tasa_serv_indust: '7.376.302,16', tasa_adm_inmob: '4.745.347,13', total: '266.491.759.080,08' },
    { mes: '% Porcentaje', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
  ],
  2024: [
    { mes: 'Enero', ingresos_brutos: '42.652.915.203,38', inmobiliario: '1.906.423.044,33', sellos: '1.013.882.243,96', parque_automotor: '88.034.406,87', minera: '4.903.058,59', tasa_varias_cod_fiscal: '3.499.608,75', tasa: '71.799.653,55', tasa_admin: '16.254.842,86', tasa_serv_indust: '38.051,03', tasa_adm_inmob: '447.127,56', total: '45.758.197.240,88' },
    { mes: 'Febrero', ingresos_brutos: '44.472.162.601,98', inmobiliario: '1.754.169.524,06', sellos: '1.385.473.717,87', parque_automotor: '381.540.261,09', minera: '4.511.384,80', tasa_varias_cod_fiscal: '4.676.111,64', tasa: '93.870.041,39', tasa_admin: '14.468.336,96', tasa_serv_indust: '433.350,08', tasa_adm_inmob: '523.050,47', total: '48.111.828.380,34' },
    { mes: 'Marzo', ingresos_brutos: '49.423.446.699,93', inmobiliario: '1.688.923.662,19', sellos: '1.849.711.586,31', parque_automotor: '693.634.406,51', minera: '6.668.980,88', tasa_varias_cod_fiscal: '5.130.557,05', tasa: '121.409.207,04', tasa_admin: '15.405.342,15', tasa_serv_indust: '83.121,83', tasa_adm_inmob: '634.529,12', total: '53.805.048.093,01' },
    { mes: 'Abril', ingresos_brutos: '55.529.099.866,74', inmobiliario: '97.762.335,48', sellos: '1.824.067.476,87', parque_automotor: '374.000.704,52', minera: '3.841.548,12', tasa_varias_cod_fiscal: '9.131.977,57', tasa: '131.317.403,03', tasa_admin: '18.957.731,28', tasa_serv_indust: '1.287.703,10', tasa_adm_inmob: '723.797,95', total: '57.990.190.544,66' },
    { mes: 'Mayo', ingresos_brutos: '59.435.026.465,53', inmobiliario: '98.152.348,39', sellos: '1.918.633.281,05', parque_automotor: '485.943.427,22', minera: '8.798.862,27', tasa_varias_cod_fiscal: '12.313.956,74', tasa: '165.939.287,18', tasa_admin: '34.193.591,49', tasa_serv_indust: '669.529,24', tasa_adm_inmob: '1.336.522,23', total: '62.161.007.271,34' },
    { mes: 'Junio', ingresos_brutos: '59.471.507.767,41', inmobiliario: '108.048.696,26', sellos: '2.462.887.996,05', parque_automotor: '423.742.411,83', minera: '4.564.252,28', tasa_varias_cod_fiscal: '12.839.664,43', tasa: '152.926.295,82', tasa_admin: '31.897.214,05', tasa_serv_indust: '201.217,32', tasa_adm_inmob: '1.176.895,91', total: '62.669.792.411,36' },
    { mes: 'Julio', ingresos_brutos: '61.917.174.812,47', inmobiliario: '109.509.976,39', sellos: '2.595.825.056,78', parque_automotor: '379.916.367,10', minera: '6.441.310,03', tasa_varias_cod_fiscal: '13.918.527,14', tasa: '208.248.227,91', tasa_admin: '38.572.325,87', tasa_serv_indust: '344.332,08', tasa_adm_inmob: '1.294.901,77', total: '65.271.245.837,54' },
    { mes: 'Agosto', ingresos_brutos: '70.554.079.919,59', inmobiliario: '96.851.147,36', sellos: '3.198.776.946,67', parque_automotor: '391.508.989,10', minera: '10.718.185,01', tasa_varias_cod_fiscal: '15.840.503,90', tasa: '212.695.336,50', tasa_admin: '34.246.847,13', tasa_serv_indust: '157.248,39', tasa_adm_inmob: '1.470.853,58', total: '74.516.345.976,78' },
    { mes: 'Septiembre', ingresos_brutos: '71.018.629.098,22', inmobiliario: '102.978.396,53', sellos: '3.863.375.600,10', parque_automotor: '229.693.787,89', minera: '5.290.699,11', tasa_varias_cod_fiscal: '16.895.258,30', tasa: '196.165.302,17', tasa_admin: '33.175.471,16', tasa_serv_indust: '109.927,97', tasa_adm_inmob: '1.422.985,94', total: '75.467.736.527,39' },
    { mes: 'Octubre', ingresos_brutos: '71.857.707.871,92', inmobiliario: '123.005.483,56', sellos: '3.066.779.825,56', parque_automotor: '176.147.294,99', minera: '11.617.008,78', tasa_varias_cod_fiscal: '20.731.746,24', tasa: '161.102.259,94', tasa_admin: '33.400.038,34', tasa_serv_indust: '264.896,20', tasa_adm_inmob: '1.502.856,38', total: '75.452.259.281,91' },
    { mes: 'Noviembre', ingresos_brutos: '73.419.324.668,56', inmobiliario: '82.313.540,11', sellos: '3.204.296.579,96', parque_automotor: '248.831.400,77', minera: '10.449.963,00', tasa_varias_cod_fiscal: '15.316.392,12', tasa: '157.816.269,22', tasa_admin: '28.961.254,31', tasa_serv_indust: '39.585,58', tasa_adm_inmob: '1.170.084,17', total: '77.168.519.737,74' },
    { mes: 'Diciembre', ingresos_brutos: '75.744.200.934,30', inmobiliario: '94.485.350,80', sellos: '3.246.384.556,00', parque_automotor: '186.004.042,74', minera: '9.618.363,83', tasa_varias_cod_fiscal: '18.130.506,72', tasa: '179.462.374,09', tasa_admin: '33.073.054,72', tasa_serv_indust: '456.854,45', tasa_adm_inmob: '1.177.707,27', total: '79.512.993.744,92' },
    { mes: 'Total', ingresos_brutos: '735.495.275.910,03', inmobiliario: '2.662.623.505,46', sellos: '29.630.094.867,12', parque_automotor: '4.057.997.500,63', minera: '87.423.616,70', tasa_varias_cod_fiscal: '148.424.810,60', tasa: '1.852.751.657,39', tasa_admin: '332.606.050,32', tasa_serv_indust: '4.085.817,27', tasa_adm_inmob: '12.881.312,35', total: '777.884.165.047,87' },
    { mes: '% Porcentaje', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
  ],
  2025: [
    { mes: 'Enero', ingresos_brutos: '85.174.032.692,84', inmobiliario: '2.345.953.949,44', sellos: '3.864.852.222,07', parque_automotor: '198.345.074,11', minera: '6.111.742,16', tasa_varias_cod_fiscal: '11.322.791,09', tasa: '202.307.778,52', tasa_admin: '29.020.400,34', tasa_serv_indust: '45.167,65', tasa_adm_inmob: '1.121.941,92', total: '91.833.113.760,14' },
    { mes: 'Febrero', ingresos_brutos: '75.608.574.585,49', inmobiliario: '3.028.630.614,97', sellos: '4.976.507.711,58', parque_automotor: '458.663.120,49', minera: '6.510.839,97', tasa_varias_cod_fiscal: '15.242.900,04', tasa: '203.486.957,14', tasa_admin: '26.287.220,37', tasa_serv_indust: '5.294.648,06', tasa_adm_inmob: '1.021.291,84', total: '84.330.219.889,95' },
    { mes: 'Marzo', ingresos_brutos: '68.283.797.905,43', inmobiliario: '1.850.125.337,30', sellos: '4.601.974.195,91', parque_automotor: '1.571.531.244,03', minera: '3.344.050,81', tasa_varias_cod_fiscal: '18.271.178,97', tasa: '195.979.880,63', tasa_admin: '27.234.593,40', tasa_serv_indust: '69.109,74', tasa_adm_inmob: '1.279.787,57', total: '76.553.607.283,79' },
    { mes: 'Abril', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Mayo', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Junio', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Julio', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Agosto', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Septiembre', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Octubre', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Noviembre', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Diciembre', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
    { mes: 'Total', ingresos_brutos: '229.066.405.183,76', inmobiliario: '7.224.709.901,71', sellos: '13.443.334.129,56', parque_automotor: '2.228.539.438,63', minera: '15.966.632,94', tasa_varias_cod_fiscal: '44.836.870,10', tasa: '601.774.616,29', tasa_admin: '82.542.214,11', tasa_serv_indust: '5.408.925,45', tasa_adm_inmob: '3.423.021,33', total: '252.716.940.933,88' },
    { mes: '% Porcentaje', ingresos_brutos: '', inmobiliario: '', sellos: '', parque_automotor: '', minera: '', tasa_varias_cod_fiscal: '', tasa: '', tasa_admin: '', tasa_serv_indust: '', tasa_adm_inmob: '', total: '' },
  ],
};

// Definir las columnas y desde qué año deben aparecer
const COLUMNAS_DEFINICION = [
  { key: 'mes', label: 'Mes', desde: 2006 },
  { key: 'iibb', label: 'IIBB', desde: 2006, hasta: 2018 },
  { key: 'conv', label: 'CONV', desde: 2006, hasta: 2018 },
  { key: 'ingresos_brutos', label: 'ING. BRUTOS', desde: 2019 },
  { key: 'inmobiliario', label: 'INMOB.', desde: 2006 },
  { key: 'sellos', label: 'SELLOS', desde: 2006 },
  { key: 'parque_automotor', label: 'P. AUTO', desde: 2019 },
  { key: 'ipa', label: 'IPA', desde: 2006, hasta: 2018 },
  { key: 'tasa_varias_cod_fiscal', label: 'T. VARIAS', desde: 2018 },
  { key: 'tasa', label: 'T. FOR.', desde: 2006 },
  { key: 'minera', label: 'MINERA', desde: 2006 },
  { key: 'tasa_admin', label: 'T. ADM', desde: 2010 },
  { key: 'tasa_serv_indust', label: 'T. SERV', desde: 2013 },
  { key: 'tasa_adm_inmob', label: 'T. INM', desde: 2014 },
  { key: 'total', label: 'TOTAL', desde: 2006 },
];

// Datos de Fondo Energético a partir de 2020
const FONDO_ENERGETICO = {
  2020: {
    ENERO: '11.158.166,49',
    FEBRERO: '25.430.940,51',
    MARZO: '8.756.499,55',
    ABRIL: '3.896.790,18',
    MAYO: '5.265.129,49',
    JUNIO: '9.396.182,93',
    JULIO: '8.573.380,04',
    AGOSTO: '7.911.055,97',
    SEPTIEMBRE: '6.654.866,86',
    OCTUBRE: '5.076.215,20',
    NOVIEMBRE: '3.991.888,11',
    DICIEMBRE: '4.952.739,53',
    ACUMULADO: '101.068.854,92',
  },
  2021: {
    ENERO: '4.099.556,38',
    FEBRERO: '29.017.595,15',
    MARZO: '28.754.837,22',
    ABRIL: '18.024.445,42',
    MAYO: '16.082.634,77',
    JUNIO: '15.424.938,94',
    JULIO: '15.850.614,80',
    AGOSTO: '14.647.551,75',
    SEPTIEMBRE: '10.817.818,44',
    OCTUBRE: '9.232.203,40',
    NOVIEMBRE: '7.174.143,41',
    DICIEMBRE: '7.493.655,00',
    ACUMULADO: '176.619.994,68',
  },
  2022: {
    ENERO: '9.957.672,90',
    FEBRERO: '47.611.318,92',
    MARZO: '52.034.886,87',
    ABRIL: '36.620.172,96',
    MAYO: '32.756.922,79',
    JUNIO: '31.370.922,13',
    JULIO: '30.452.936,50',
    AGOSTO: '28.972.946,94',
    SEPTIEMBRE: '18.186.308,81',
    OCTUBRE: '15.323.522,54',
    NOVIEMBRE: '13.213.541,64',
    DICIEMBRE: '13.536.658,46',
    ACUMULADO: '330.037.811,46',
  },
  2023: {
    ENERO: '17.851.867,19',
    FEBRERO: '97.972.444,08',
    MARZO: '130.448.052,86',
    ABRIL: '81.797.149,51',
    MAYO: '49.178.921,37',
    JUNIO: '48.567.062,48',
    JULIO: '57.291.649,22',
    AGOSTO: '49.054.688,50',
    SEPTIEMBRE: '31.495.600,38',
    OCTUBRE: '27.450.481,01',
    NOVIEMBRE: '21.129.607,25',
    DICIEMBRE: '30.037.496,47',
    ACUMULADO: '642.275.020,32',
  },
  2024: {
    ENERO: '37.049.350,24',
    FEBRERO: '236.013.471,82',
    MARZO: '424.413.618,06',
    ABRIL: '215.653.802,71',
    MAYO: '258.856.394,23',
    JUNIO: '321.118.847,69',
    JULIO: '182.020.976,19',
    AGOSTO: '180.268.915,02',
    SEPTIEMBRE: '98.273.314,49',
    OCTUBRE: '75.063.171,72',
    NOVIEMBRE: '104.341.946,05',
    DICIEMBRE: '78.078.001,71',
    ACUMULADO: '2.121.151.809,93',
  },
  2025: {
    ENERO: '82.877.022,41',
    FEBRERO: '216.879.531,31',
    MARZO: '776.480.017,23',
    ABRIL: '',
    MAYO: '',
    JUNIO: '',
    JULIO: '',
    AGOSTO: '',
    SEPTIEMBRE: '',
    OCTUBRE: '',
    NOVIEMBRE: '',
    DICIEMBRE: '',
    ACUMULADO: '',
  },
};

export default function HeroEstadisticas() {
  const [año, setAño] = useState(AÑOS[0]);
  const [loading, setLoading] = useState(false);

  // Filtrar columnas según el año seleccionado
  const columnasFiltradas = COLUMNAS_DEFINICION.filter(col => {
    if (col.desde && año < col.desde) return false;
    if (col.hasta && año > col.hasta) return false;
    return true;
  });

  const handleYearChange = (newYear) => {
    setLoading(true);
    setTimeout(() => {
      setAño(Number(newYear));
      setLoading(false);
    }, 300);
  };

  const formatValue = (value, key) => {
    if (!value || value === '00' || value === '') return '-';
    if (key === 'mes') return value;
    return `$${value}`;
  };

  const getRowClass = (mes) => {
    if (mes === 'Total' || mes === 'Acumulado') {
      return 'bg-gradient-to-r from-blue-100 to-blue-50 border-blue-300 font-bold text-blue-900';
    }
    if (mes === '% Porcentaje') {
      return 'bg-gradient-to-r from-purple-100 to-purple-50 border-purple-300 font-semibold text-purple-900';
    }
    return 'bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-purple-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-8 h-8 text-white" />
                <BarChart3 className="w-8 h-8 text-white/80" />
                <PieChart className="w-8 h-8 text-white/60" />
              </div>
            </div>

            {/* Título animado en dos líneas */}
            <div className="mb-2 flex flex-col items-center w-full">
              <BlurText
                text="Estadísticas de Recaudación"
                delay={30}
                animateBy="letters"
                direction="top"
                className="text-5xl md:text-6xl font-bold text-white leading-tight text-center"
              />
              <BlurText
                text="Fiscal"
                delay={30}
                animateBy="letters"
                direction="top"
                className="text-5xl md:text-6xl font-bold text-white leading-tight text-center"
              />
            </div>

            {/* Párrafo animado con BlurText */}
            <div className="mb-8 flex justify-center w-full">
              <BlurText
                text="Accede a los datos históricos de recaudación fiscal organizados por año. Información detallada y actualizada para análisis y consulta."
                delay={80}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-center"
              />
            </div>

            <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <Calendar className="w-6 h-6 text-white" />
              <div className="flex flex-col">
                <label className="text-sm font-medium text-white/80 mb-2">Seleccionar Año</label>
                <select
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  value={año}
                  onChange={e => handleYearChange(e.target.value)}
                >
                  {AÑOS.map(y => (
                    <option key={y} value={y} className="bg-blue-900 text-white">{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <span className="ml-4 text-white text-lg">Cargando datos...</span>
            </div>
          ) : (
            <>
              {/* Título de la tabla */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
                  <DollarSign className="w-8 h-8 text-white" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Recursos Fiscales - Año {año}
                  </h2>
                </div>
              </div>

              {/* Tabla principal */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-12">
                <div className="w-full">
                  <table className="w-full text-xs md:text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                        {columnasFiltradas.map(col => (
                          <th
                            key={col.key}
                            className="px-2 py-4 text-white font-bold text-center border-r border-white/20 last:border-r-0"
                          >
                            {col.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(RECAUDACION[año] || []).map((fila, idx) => (
                        <tr key={idx} className={getRowClass(fila.mes)}>
                          {columnasFiltradas.map(col => (
                            <td
                              key={col.key}
                              className="px-2 py-3 text-center border-r border-gray-200 last:border-r-0 font-medium"
                            >
                              {formatValue(fila[col.key], col.key)}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {(!RECAUDACION[año] || RECAUDACION[año].length === 0) && (
                        <tr>
                          <td colSpan={columnasFiltradas.length} className="py-12 text-center text-gray-500 text-lg">
                            No hay datos disponibles para este año
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tabla Fondo Energético */}
              {año >= 2020 && FONDO_ENERGETICO[año] && (
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
                    <h3 className="text-lg font-bold text-white text-center">
                      Fondo Energético (Antes denominado Tasa Org. Externos)
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                      {Object.entries(FONDO_ENERGETICO[año]).map(([mes, valor]) => (
                        <div key={mes} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-200">
                          <div className="text-xs font-semibold text-green-800 mb-1">{mes}</div>
                          <div className="text-sm font-bold text-green-900">
                            {valor ? `$${valor}` : '-'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}