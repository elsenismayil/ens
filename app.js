
const a =[]
const b =[]
const result =[]



function randomIntFromInterval() { // min and max included 
    let word =[
        'surround',
        'consider',
        'discord',
        'significant',
        'enjoyable',
        'attractive',
        'amount',
        'torture',
        'deliver',
        'illegible',
        ' maid',
        ' representative',
        'achievement',
        ' reliable',
        ' rely on',
        ' promise',
        'temper',
        'inhospitable',
        ' hospitable',
        ' initial',
        ' amusing',
        'suffer from',
        'otherwise',
        'break off',
        'assist',
        ' trouble',
        'greet',
        `smart`,
        `tiresome`,
        `charming`,
        `graceful`,
        `rare`,
        `rarely`,
        `fortune`,
        ` fate-tale`,
        `affect`,
        `influence`,
        ` fair`,
        ` reasonable`,
        `therefore`,
        ` defendant`,
        ` guilty`,
        `fraud`,
        `unconscious`,
        `ashamed`,
        `innocent`,
        `shy`,
        `embarrassed`,
        `regret`,
        `regretful`,
        `easy- going`,
        `generation`,
        ` resource`,
        `close`,
        `in order`,
        `abundance`,
        `astonish`,
        ` concern`,
        ` descendant`,
        `wonder`,
        `boundary`,
        `concerned`,
        `remarkable`,
        `plain`,
        `dense`,
        ` thick`,
        ` ambition`,
        ` garbage`,
        `property`,
        ` consciousness`,
        `enlightenment`,
        ` own`,
        ` to be aware of`,
        ` statement`,
        ` description`,
        ` capable`,
        ` steal`,
        `decide`,
        ` decision`,
        ` situation`,
        `greedy`,
        `bound`,
        `distinguish`,
        ` predictability `,
        `be engaged in`,
        `infancy`,
        `infant`,
        ` entire`,
        `pattern`,
        `vary`,
        `
        dəyişmək, fərqləndirmək `,
        ` assigned`,
        ` create`,
        `significance`,
        ` to be banned`,
        `fortunately `,
        ` luckily /happily `,
        `unfortunately `,
        ` unluckily/unhappily`,
        `immense`,



    ]




    let aze =[ `əhatə etmək`, 
    `düşünmək, hesab etmək`,
    `nifaq,ixtilaf`,
    `mühüm, əhəmiyyətli, önəmli`,
    `xoş,gözəl`,
    `cəlbedici`,
    `miqdar`,
    `işgəncə, əzab`,
    `çatdirmaq `,
    `qeyri-qanuni;oxunmaz`,
    `qulluqçu,xadimə`,
    `nümayəndə`,
    `nailiyyət,uğur`,
    `etibarlı,inamlı`,
    `-etibar etmək,bel bağlamaq`,
    `söz vermək`,
    `xasiyyət;yüngülləşdirmək`,
    `qonaqsevməz`,
    `qonaqpərvər`,
    `ilkin`,
    `əyləncəli`,
    `əziyyət çəkmək`,
    `başqa cür,əks təqdirdə, yoxsa`,
    `kəsmək, dayandırmaq`,
    ` yardım,kömək etmək`,
    `narahatlıq`,
    ` salamlamaq, qarşılamaq
    `,
    ` 
    zirək,zehinli,yaxşı görünüşlü
    `,
    ` yorucu,bezdirici `,
    `cazibədar, cəzbedici`,
    `
    zərif,nəfis`,
    `seyrək`,
    ` nadir halda`,
    `
    bəxt,tale; var-dövlət`,
    ` bəxt`,
    `təsir etmək`,
    `təsir etmək`,
    `ədalətli; sarışın; yarmarka`,
    ` idraklı,ağlabatan; münasib`,
    `
    nəticədə; buna görədə`,
    ` müttəhim , təqsirkar`,
    `günahkar`,
    ` fırıldaqçılıq; k ələkbaz; aldatmaq`,
    ` düşüncəsiz; bihuş;bixəbər`,
    ` utancaq;xəcalətli`,
    ` günahsız , məsum, pak`,
    ` utancaq`,
    ` çaşqın; xəcalətli`,
    `peşman olmaq;peşmanlıq`,
    `təəssüflü `,
    ` yolagedən`,
    `nəsil`,
    ` imkan;vəsait; bacarıq `,
    `yaxın ,baglamaq `,
    ` üçün ,ondan ötrü`,
    ` bolluq, bərəkət,coxluq`,
    ` heyrətləndirmək`,
    ` qayğı; maraq, narahat olmaq`,
    `nəsil,kök`,
    `təəccüb etmək;görəsən; möcüzə`,
    `sərhəd; hüdud `,
    `narahat`,
    ` görkəmli;əlamətdar `,
    ` düzənlik; aşkar; sadə; çirkin `,
    ` sıx`,
    ` sıx; qalın `,
    `  şöhrətpərəstlik; can atma,meyl`,
    ` tullantı, zibil`,
    ` mal, əmlak `,
    `şüur`,
    ` maariflənmə, maarifçilik`,
    `
    şəxsi, öz; sahiblənmək`,
    ` şüurunda olmaq; agah olmaq `,
    `bəyanat; təsdiq etmə`,
    ` təsvir`,
    ` qadir , bacarıqlı, qabiliyyətli`,
    ` oğurlamaq`,
    `qərara gəlmək`,
    `qərar`,
    `vəziyyət ; hal`,
    `tamahkar, acgöz`,
    `hədd qoymaq; serhed; sıçramaq `,
    `
    fərqləndirmək`,
    ` qabaqcadan;ön görmə
    `,
    `
    m əşğul olmaq`,
    ` körpəlik`,
    ` körpə`,
    ` bütöv; tam`,
    `model; naxış; nümunə; şablon `,
    `
    dəyişmək, fərqləndirmək `,
    `
    təxminən `,
    `
    təyin; təyin etmək`,
    ` yaratmaq
    `,
     `
     əhəmiyyət; önəmlilik `,
     ` qadağan olunmuş `,
     ` xoşbəxtlikdən, yaxşı ki`,
     ` xoşbəxtlikdən; yaxşı ki`,
     `
     bədbəxtlikdən; təəssüf ki`,
     `bədbəxtlikdən;təəssüf ki`,
     `möhtəşəm; hədsiz`,










    ]
    let ozu = document.querySelector( ".ozu").value
    let second = document.querySelector(".second").value
    b[0]=second
    a[0]=ozu
    let randomu = Math.floor(Math.random()*((a[0]*1)-(b[0]*1))+(b[0])*1)
    document.querySelector(".English").innerHTML = word[randomu]
    document.querySelector(".Aze").innerHTML = aze[randomu]
    console.log(aze.length,word.length)

  }

  randomIntFromInterval()







  


 