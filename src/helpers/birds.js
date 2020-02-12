const birdsData = [
  [
    {
      id: 1,
      name: 'Курица',
      species: 'Gallus gallus',
      description: 'Курица, или домаашняя кукрица — самая многочисленная и распространённая домашняя птица, которая является одомашненной формой банкивской джунглевой курицы.',
      image: 'https://live.staticflickr.com/670/21535633069_878336ae8d_n.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2017/01/zvuk-kuricy.mp3?_=8'
    },
    {
      id: 2,
      name: 'Домашняя канарейка',
      species: 'Serinus canaria domestica',
      description: 'Канарейка несколько больше, чем дикий предок, канарский канареечный вьюрок. Певчие и цветные канарейки длиной примерно от 13,5 до 14,5 см. Имеются декоративные канарейки длиной от 11 см до 23 см.',
      image: 'https://live.staticflickr.com/8238/29420108322_4ef37ae2d4_h.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2017/02/penie-kanarejki.mp3?_=7'
    },
    {
      id: 3,
      name: 'Снегирь',
      species: 'Pyrrhula pyrrhula',
      description: 'Птица мелких размеров, чуть больше воробья. Голова сверху, вокруг клюва и глаз — чёрная. Маховые и рулевые перья тоже чёрные, с синим металлическим отливом.',
      image: 'https://live.staticflickr.com/65535/49449554501_db4406670c_n.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC527080-2018-10-30%20Ouessant%20Bouvreuil%20pivoine%20migr%20PAS.mp3'
    },
    {
      id: 4,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Одна из самых известных птиц, обитающих по соседству с жилищем человека (отсюда её видовое название «домовый») и хорошо узнаваемых как по внешнему виду, так и по характерному чириканью.',
      image: 'https://live.staticflickr.com/1845/44801909221_9741cbd150_n.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/URREFGVMYF/XC511411-190108_1250-ampl-cut.mp3'
    },
    {
      id: 5,
      name: 'Страус',
      species: 'Struthio camelus',
      description: 'Африканский страус — самая крупная из современных птиц: высотой до 270 см и массой до 156 кг. Страус имеет плотное телосложение, длинную шею и небольшую уплощённую голову.',
      image: 'https://live.staticflickr.com/8165/7301077800_5ea347830f_n.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XKXDFWNSPA/XC208128-Common%20Ostrich.mp3'
    },
    {
      id: 6,
      name: 'Черный аист',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com/7338/9736588980_f53a9f3cad_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC421078-Zwooi%28j%29_Karula_20180612_1656.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Обыкновенные сороки являются оседлыми птицами. Они обитают в небольших лесах, в парках, садах, рощах, перелесках, часто неподалёку от человеческого жилья. Избегают густого леса.',
      image: 'https://live.staticflickr.com/897/42319334651_e2e2af2353_h.jpg',
      audio: 'https://zvukipro.com/uploads/files/2018-10/1540831167_zvuki-obyknovennoj-soroki.mp3'
    },
    {
      id: 2,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'хищная птица из семейства совиных, один из наиболее крупных представителей отряда совообразных. Наиболее характерные черты включают в себя массивное «бочкообразное» телосложение, рыхлое оперение с преобладанием рыжеватых и охристых оттенков.',
      image: 'https://live.staticflickr.com/4523/38710299192_644e508ee1_h.jpg',
      audio: 'https://zvukipro.com/uploads/files/2017-09/1504528895_filin.mp3'
    },
    {
      id: 3,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Сойка размером с галку. Имеет яркое, рыхлое оперение, заметный широкий хохол на голове и довольно длинный хвост. Цвет туловища рыжевато-коричневый, крылья, хвост.',
      image: 'https://live.staticflickr.com/1514/25171750355_f366b3334f_b.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2018/08/zvuki-sojki.mp3?_=5'
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos',
      description: 'Это мелкие и среднего размера птицы, ведущие преимущественно древесный образ жизни. Питаются насекомыми, которых с помощью клюва добывают из-под коры стволов деревьев. ',
      image: 'https://live.staticflickr.com/65535/49443732326_8cc75c197c_h.jpg',
      audio: 'https://noisefx.ru/noise_base/06/02855.mp3'
    },
    {
      id: 5,
      name: 'Ворона',
      species: 'Corvus corax',
      description: 'Это крупнейший представитель воробьинообразных птиц. В окраске перьевого покрова половые отличия отсутствуют. Окраска всего тела однотонная, как у чёрной вороны и грача.',
      image: 'https://live.staticflickr.com/65535/47808985721_d44b3fb6af_h.jpg',
      audio: 'https://noisefx.ru/noise_base/priroda/ptici/00220.mp3'
    },
    {
      id: 6,
      name: 'Гусь',
      species: 'Anser',
      description: 'Гуси отличаются клювом, имеющим при основании большую высоту, чем ширину, и оканчивающимся ноготком с острым краем. По краям клюва идут мелкие зубчики.',
      image: 'https://live.staticflickr.com/7876/33383448188_4c0530cffc_h.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2016/09/Gus_-_Zvuki_gusya.mp3?_=12'
    }
  ],
  [
    {
      id: 1,
      name: 'Орел',
      species: 'Aquila',
      description: 'Большинство видов орлов отличают внушительные размеры, длина тела некоторых особей достигает 80-95 см, причем самка орла гораздо крупнее самца.',
      image: 'https://live.staticflickr.com/959/41734752561_df7a2757f4_h.jpg',
      audio: 'https://noisefx.ru/noise_base/09/04382.mp3'
    },
    {
      id: 2,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Размером немного крупнее воробья и имеет неяркую, но привлекательную окраску оперения. Спина у него серого цвета, иногда коричнево-жёлтая с пёстрыми вкраплениями, оперение живота белого цвета.',
      image: 'https://live.staticflickr.com/2860/33692601321_f1715198e1_h.jpg',
      audio: 'https://zvukipro.com/uploads/files/2019-02/1551342935_523027.mp3'
    },
    {
      id: 3,
      name: 'Перепелка',
      species: 'Coturnix coturnix',
      description: 'Птица ведёт наземный образ жизни, питается семенами и насекомыми, которые ползают по земле. Когда поспевают хлеба, перепела переселяются в поля, быстро откармливаются и сильно жиреют.',
      image: 'https://givotniymir.ru/wp-content/uploads/2016/08/perepel-ptica-obraz-zhizni-i-sreda-obitaniya-pticy-perepel-1.jpg',
      audio: 'https://zvukipro.com/uploads/files/2019-04/1554804819_manok-na-perepela-mikro.mp3'
    },
    {
      id: 4,
      name: 'Сова',
      species: 'Strigiformes',
      description: 'В древние времена сов боялись, их считали дурным знаком, связывали с мистическими событиями, поэтому эти птицы подвергались гонениям.',
      image: 'https://live.staticflickr.com/65535/49129132236_1386d72dda_h.jpg',
      audio: 'https://zvukipro.com/uploads/files/2017-09/1504620123_zvuk-zov-ptencov-sovy-ushastoy.mp3'
    },
    {
      id: 5,
      name: 'Чайка',
      species: 'Larus Linnaeus',
      description: 'наиболее многочисленный род птиц семейства чайковых, обитающих как на морских просторах, так и на внутренних водоёмах. Многие виды считаются синантропными — они живут вблизи человека и получают от этого выгоду.',
      image: 'https://live.staticflickr.com/4794/39896112325_26a3e2c956_h.jpg',
      audio: 'https://zvukipro.com/uploads/files/2017-09/1504687975_zvuki_ptic_-_29__sizaya_chajka.mp3'
    },
    {
      id: 6,
      name: 'Фазан',
      species: 'Phasianus colchicus',
      description: 'Обыкновенный фазан живёт в лесах с подлеском, или в зарослях кустарника. Держится преимущественно возле воды, в зарослях по долинам рек и берегам озёр, в густых лесных зарослях.',
      image: 'https://live.staticflickr.com/1812/44197073601_01e19422de_h.jpg',
      audio: 'http://mp3hunter.ru/wp-content/uploads/2019/05/fazan-golos-1.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Размером немного крупнее обыкновенного скворца: длина 24—25 см, размах крыльев около 45 см, масса 50—90 г. Тело несколько удлинённое. В окрасе хорошо выраженный половой диморфизм: самцы и самки заметно отличаются друг от друга. ',
      image: 'https://live.staticflickr.com/789/40851495621_7b628c23c3_h.jpg',
      audio: 'https://dibird.com/media/xeno/379180.mp3'
    },
    {
      id: 2,
      name: 'Лебедь',
      species: 'Cygnus Bechstein',
      description: 'Оперение лебедей по своей окраске бывает либо чисто белого, либо серого или чёрного цвета. Самок и самцов внешне весьма трудно различить. Лебедей от гусей отличает очень длинная шея.',
      image: 'https://live.staticflickr.com/8526/28572983584_fbd8b11f66_h.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2017/08/zvuki-lebedej.mp3?_=9'
    },
    {
      id: 3,
      name: 'Индейка',
      species: 'Meleagris gallopavo ',
      description: 'Верхняя сторона индейки буровато-жёлтая и буровато-рыжая, с металлическим блеском, перья с чёрными каёмками, нижняя часть спины и кроющие перья хвоста бурые с зелёными и чёрными полосками.',
      image: 'https://zooclub.ru/attach/5221.jpg',
      audio: 'https://noisefx.ru/noise_base/10/04846.mp3'
    },
    {
      id: 4,
      name: 'Ястреб',
      species: 'Accipitrinae',
      description: 'Для всех ястребов характерны широкие и короткие крылья закругленной формы. Также для птицы характерны белые «брови», которые располагаются над глазами и соединяются на затылке.',
      image: 'https://live.staticflickr.com/65535/48798602342_576970f601_h.jpg',
      audio: 'https://zvukipro.com/uploads/files/2017-12/1513082174_zvuk-jastreba.mp3'
    },
    {
      id: 5,
      name: 'Змееяд',
      species: 'Circaetus gallicus ',
      description: 'Очень редкий исчезающий вид птиц, занесён в Красную книгу России и Красную книгу Беларуси.Один из самых пугливых и недоверчивых по отношению к человеку пернатых хищников.',
      image: 'https://live.staticflickr.com/65535/48654790257_b85003b1c3_h.jpg',
      audio: 'https://dibird.com/media/xeno/366054.mp3'
    },
    {
      id: 6,
      name: 'Камышница',
      species: 'Gallinula chloropus',
      description: 'Типичный обитатель разнообразных водоёмов со стоячей или проточной водой и заболоченными, заросшими берегами. Обычно ведёт скрытный образ жизни — несмотря на большую распространённость, эту птицу бывает трудно увидеть в дикой природе.',
      image: 'https://live.staticflickr.com/65535/49115693763_cb53a10dd5_h.jpg',
      audio: 'https://dibird.com/media/xeno/377234.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл. Распространён в Северном полушарии, где обитает преимущественно в горах, в меньшей степени на равнинных открытых и полуоткрытых ландшафтах.',
      image: 'https://live.staticflickr.com/4798/40782628261_fdea17a55a_h.jpg',
      audio: 'https://dibird.com/media/xeno/361309.mp3'
    },
    {
      id: 2,
      name: 'Бекас',
      species: 'Gallinago gallinago',
      description: 'При токовании самец бекаса поднимается на высоту до 100 м и затем стремительно пикирует вниз. При этом он издаёт звук, напоминающий блеянье барашка, причём источником звука являются перья хвоста, вибрирующие под напором воздуха.',
      image: 'https://live.staticflickr.com/65535/48845963028_bd9d1c82aa_h.jpg',
      audio: 'https://dibird.com/media/xeno/372396.mp3'
    },
    {
      id: 3,
      name: 'Чёрный дрозд',
      species: 'Turdus merula',
      description: 'Крупный дрозд, в длину достигающий 26 сантиметров, весит 80—125 граммов. Самцы полностью окрашены в чёрный цвет, с жёлто-оранжевым клювом и с кольцом вокруг глаз.',
      image: 'https://live.staticflickr.com/65535/48922043881_2ee0b6ab85_k.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2018/02/golosa-chernogo-drozda.mp3?_=13'
    },
    {
      id: 4,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'Зяблик размером с воробья, длина тела составляет около 14,5 см. Размах крыльев — 24,5—28,5 см. Масса тела зяблика составляет 15—40 граммов.',
      image: 'https://live.staticflickr.com/65535/32688617757_06b83dd921_h.jpg',
      audio: 'http://boobooka.com/wp-content/uploads/2018/02/penie-zjablika.mp3?_=8'
    },
    {
      id: 5,
      name: 'Рябинник',
      species: 'Turdus pilaris',
      description: 'Рябинник отличается от остальных дроздов прежде всего образом жизни. Хотя некоторые пары и гнездятся изолированно, большинство их собирается в средние по численности колонии, насчитывающие 30-40 пар.',
      image: 'https://live.staticflickr.com/4777/40678391171_c900e03a52_h.jpg',
      audio: 'https://dibird.com/media/xeno/378242.mp3'
    },
    {
      id: 6,
      name: 'Ястребиная славка',
      species: 'Sylvia nisoria',
      description: 'Одна из самых крупных славок, её длина достигает 18 см; вес — 28—32 г. Верхняя часть тела оливково-бурая с серым оттенком, верх головы несколько темнее.',
      image: 'https://live.staticflickr.com/8022/29362588405_e392e9b534_k.jpg',
      audio: 'https://dibird.com/media/xeno/376322.mp3'
    }
  ]
];

export default birdsData;