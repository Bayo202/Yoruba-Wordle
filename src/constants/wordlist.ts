import { CONFIG } from './config'

export const WORDS = [
  'ARẸWÀ',
  'ELÉRÉ',
  'ÈÉFÍN',
  'AKỌ́LẸ́',
  'ÒṢÌṢẸ́',
  'ỌMỌWỌ́',
  'BÁYÌÍ',
  'LẸ́GBẸ̀Ẹ́',
  'ÌGBOYÀ',
  'ÀLEJÒ',
  'Ọ̀MÙTÍ',
  'ṢỌ́Ọ̀ṢÌ',
  'Ẹ̀Ẹ̀KAN',
  'SÀÁRÈ',
  'ÌDỌ̀TÍ',
  'BỌ̀Ọ̀LÌ',
  'AGBÁRA',
  'Ọ̀GBẸ́NI',
  'ÌTỌ́JÚ',
  'ÀTÍKÉ',
  'ÒTÍTỌ́',
  'ALÁSÈ',
  'DÙǸDÚ',
  'ÌṢÍRÍ',
  'LÁÌPẸ́',
  'GBỌ́RÀN',
  'ORÚKỌ',
  'ÌGBÀLÀ',
  'ÌWÚRE',
  'ÒṢOGBO',
  'ÒPỌ́PỌ́',
  'ÈKEJE',
  'MÁÌLÌ',
  'Ọ̀DÁJÚ',
  'RÁNTÍ',
  'ABÚLÉ',
  'ṢÒFIN',
  'ORÓGBÓ',
  'DÁKUN',
  'ÈTÙTÙ',
  'ÌRẸ̀LẸ̀',
  'JOGÚN',
  'ÀÌSÀN',
  'KẸWÀÁ',
  'ÀMÀLÀ',
  'ÌGBÀGBỌ́',
  'ṢẸ́Ẹ̀TÌ',
  'ÌRÍRÍ',
  'YÒÓWÙ',
  'ÌNÀKÍ',
  'Ọ̀MỌ̀WẸ́',
  'AHÉRÉ',
  'EHORO',
  'ỌMỌGE',
  'OÒGÙN',
  'ONÍJÓ',
  'ÌMỌ́LẸ̀',
  'ÌKÓKÓ',
  'NỌ́ḾBÀ',
  'ÌRẸSÌ',
  'ẸẸ́RIN',
  'ÌJẸJỌ',
  'ÌKÌLỌ',
  'ALÁṢỌ',
  'ÌJOYÈ',
  'KÚNLẸ̀',
  'ỌPỌLỌ',
  'ÌṢẸ́JÚ',
  'SÌNKÚ',
  'WÁDÌÍ',
  'JÓKÒÓ',
  'SÚNMỌ́',
  'PINNU',
  'RÉDÍÒ',
  'ÌDAJÌ',
  'ÌṢÒRO',
  'NÍPỌN',
  'ÌGBÁLẸ̀',
  'ÀGBẸ̀DẸ',
  'ÒRÙKA',
  'ỌGỌ́TA',
  'OGÓJÌ',
  'ÒPÙRỌ́',
  'GBAM̄GBA',
  'JÌNNÀ',
  'KÌÍNÍ',
  'GAÀRÍ',
  'AGBÁDÁ',
  'ÌKỌ́ṢẸ́',
  'ÒDODO',
  'Ọ̀KỌ́ṢẸ́',
  'EÉLÒÓ',
  'ÒÓRÙN',
  'OLÓRÍ',
  'APẸ̀RẸ̀',
  'ÌṢÍLÉ',
  'ÌRÀWỌ̀',
  'ÀRÓBỌ̀',
  'AFỌ́JÚ',
  'ṢỌ̀Ọ́BÙ',
  'ÌJÁDE',
  'AKỌ̀WÉ',
  'Ọ̀LẸ̀LẸ̀',
  'AYẸYẸ',
  'WỌ̀NYÍ',
  'OLÙKỌ́',
  'ẸBỌRA',
  'ÌYÀTỌ̀',
  'ÈKEJÌ',
  'OLÓYÈ',
  'AṢÓGBÓ',
  'ṢETÁN',
  'AGOLO',
  'FẸ́RÀN',
  'OLÓWÓ',
  'ÌDÍKỌ̀',
  'OGÓJE',
  'ÌYÀRÁ',
  'ABALA',
  'ÌBEJÌ',
  'ÌNÁWÓ',
  'Ọ̀GBẸLẸ̀',
  'OLÓWÓ',
  'OÚNJẸ',
  'ADÁJỌ́',
  'LỌ́GBỌ́N',
  'Ẹ̀KẸFÀ',
  'ÌDÚRÓ',
  'MÁÀPÙ',
  'ÌGBÓNÁ',
  'AFÁRÁ',
  'Ọ̀KẸ́RẸ́',
  'Ẹ̀KẸJỌ',
  'ALÁRA',
  'ÒṢÙPÁ',
  'ÀLÚFÀ',
  'TẸ̀YIN',
  'ÌJỌBA',
  'ÌKÒKÒ',
  'DẸ̀HÌN',
  'ÀPÓTÍ',
  'ÀTÙPÀ',
  'JIYÀN',
  'ỌMỌDÉ',
  'ÌDÁNA',
  'BAÁLẸ̀',
  'PANLA',
  'ABIYA',
  'ÌRẸ̀LẸ̀',
  'MẸ́WÀÁ',
  'YANJÚ',
  'ÌYÀWÓ',
  'ẸẸ́WÀÁ',
  'ADITÍ',
  'GẸ̀Ẹ́SÌ',
  'EÉGÚN',
  'ÀKÓKÒ',
  'TỌ́Ọ̀BÙ',
  'ÒTÚTÙ',
  'KÁALẸ́',
  'ÌTUMỌ̀',
  'ÌRỌ̀LẸ́',
  'AYABA',
  'EWÚRẸ́',
  'BẸ́Ẹ̀NI',
  'ÌRẸ́PỌ̀',
  'YỌ̀ǸDA',
  'ÌJÀPÁ',
  'EWÉDÚ',
  'BỌ́Ọ̀LÙ',
  'ÌGBÉSÍ',
  'ÒRÓRÓ',
  'SANWÓ',
  'ALÁGBE',
  'ỌLỌ́ṢÀ',
  'AÀFIN',
  'JÀǸBÁ',
  'ÀJÈJÌ',
  'ÈLÙBỌ́',
  'LÓYÚN',
  'ÒKÌKÍ',
  'ÀKÀRÀ',
  'OLÙFẸ́',
  'SỌKÚN',
  'PÍNYÀ',
  'ÀWÀDÀ',
  'ÌBÀJẸ́',
  'KEEKI',
  'RỌRÙN',
  'ÌLERA',
  'OORUN',
  'RẸ́ǸTÍ',
  'ÒRÙLÉ',
  'ÌSÚRE',
  'ÒṢÈLÚ',
  'ÌṢIRÒ',
  'ÀJỌYỌ̀',
  'MẸ́RIN',
  'GBÙRÒÓ',
  'ỌLỌ́RỌ̀',
  'BÉÈRÈ',
  'YÒÓKÙ',
  'Ẹ̀GÚSÍ',
  'RẸ́RÌN',
  'Ọ̀GẸ̀DẸ̀',
  'ÌTÌJÚ',
  'OTÚTÙ',
  'ÒWÚRỌ̀',
  'ỌLUDÉ',
  'DÁHÙN',
  'Ẹ̀FỌ́RÍ',
  'ÌṢÈLÚ',
  'AWAKỌ̀',
  'FIHÀN',
  'OÓGUN',
  'ÀBÚRÒ',
  'ISIMI',
  'ÀṢÀRÒ',
  'ẸLẸ́DẸ̀',
  'ÒGÈDÈ',
  'ÀṢÁRÓ',
  'Ọ̀DÀLẸ̀',
  'NÁÍRÀ',
  'ÀDÚRÀ',
  'SANRA',
  'ỌJỌ́RÚ',
  'PẸ́Ẹ̀NÌ',
  'ÀYẸ̀WÒ',
  'ÀTIJỌ́',
  'Ẹ̀KẸTA',
  'GÉŃDÉ',
  'ỌJỌ́BỌ̀',
  'ONÍLÉ',
  'ÒJÍṢẸ́',
  'LÓṢÒÓ',
  'FÉÈLÌ',
  'ÀRÒKỌ',
  'ÌTỌRẸ',
  'SÀNṢẸ́',
  'Ọ̀TAYÒ',
  'ADÚGBÒ',
  'TÒÒRÒ',
  'LÁNÀÁ',
  'LẸ́HÌN',
  'AGÍDÍ',
  'ÌDÁJÍ',
  'ÀRÀBÀ',
  'ỌGỌ́FÀ',
  'ÒKÚTA',
  'ÒDÒDÓ',
  'EGBÒGI',
  'AGBÒJÒ',
  'ÌRORA',
  'ÌYAKỌ',
  'ÌGBÓJÚ',
  'LÁÌFA',
  'DÍNKÙ',
  'NǸKAN',
  'ÌPÀDÉ',
  'ÌSÀLẸ̀',
  'BẸ́Ẹ̀KỌ́',
  'OÒRÙN',
  'Ọ̀RÌṢÀ',
  'TÀWỌN',
  'ALÁTA',
  'OÓKAN',
  'ÒMÙGỌ̀',
  'ÌLẸ̀KẸ̀',
  'RÒHÌN',
  'BỌ́Ọ̀SÌ',
  'LÓPIN',
  'ÌKÍNI',
  'ABẸ́RẸ́',
  'RÍRAN',
  'ṢÉǸJÌ',
  'ÈJÌKÁ',
  'KỌRIN',
  'ÀWÚRE',
  'ṢÀÁNÚ',
  'AGOGO',
  'ÌBẸ̀RẸ̀',
  'Ẹ̀RẸ̀KẸ́',
  'EEGUN',
  'PỌ́Ọ̀SÌ',
  'ARIWO',
  'ṢÙGBỌ́N',
  'ỌMỌSẸ̀',
  'GBẸ̀SAN',
  'ỌGỌ́JỌ',
  'SINMI',
  'AJÍLẸ̀',
  'ÀRÍWÁ',
  'KỌ́Ọ̀TÙ',
  'ÌPARÍ',
  'ÌBỌ̀SẸ̀',
  'ÀRÍYÁ',
  'LÁÌSÍ',
  'ÌṢÒWÒ',
  'AFẸ́FẸ́',
  'ÌJẸTA',
  'KẸ́KỌ̀Ọ́',
  'ÒṢÈRÉ',
  'ABÚLÉ',
  'LẸ́YÌN',
  'ỌLỌ́JÀ',
  'ÀÌSÙN',
  'OLÓGBÒ',
  'ÀKỌLÉ',
  'ÀGBÀDO',
  'OLÚWA',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
