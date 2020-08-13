const DATA = {

    HOMEPAGE: {
        MOTTO: 'Learn . Donate . Change life',
        DESC: "Fast Forward India (FFI) is a unique effort and an initiative undertaken by the students of IIT(ISM) Dhanbad. This is an organization completely managed and administered by the young and enthusiastic students of the institution.",
        ABOUT_US: 'Fast Forward India (FFI) is a unique effort and an initiative undertaken by the students of IIT(ISM) Dhanbad. This is an organization completely managed and administered by young and enthusiastic students of the institution. Creative and powerful ways are implemented to tackle problems of the millions of underprivileged people in India. The organization conducts blood donation camps, imparts basic computer and English education, and numerous careers counseling sessions in schools to help the deprived students shape their future.',

        SECTORS: [
            {
                NAME: 'BLOODLINE',
                FA: 'fa fa-medkit fa-stack-1x fa-inverse',
                HREF: 'initiatives/bloodline'
            },
            {
                NAME: 'DISHA',
                FA: 'fa fa-medkit fa-stack-1x fa-inverse',
                HREF: 'initiatives/disha'
            },
            {
                NAME: 'ESCAPE',
                FA: 'fa fa-medkit fa-stack-1x fa-inverse',
                HREF: 'initiatives/escape'
            },
            {
                NAME: 'JAGRITI',
                FA: 'fa fa-medkit fa-stack-1x fa-inverse',
                HREF: 'initiatives/jagriti'
            }
        ], // SECTORS [ ] :: ENDS here

        JOURNEY: [
            {
                FLAG: 'LEFT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: 'rgb(33, 150, 243)', color: '#ffffff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  rgb(33, 150, 243)' },
                ICON_STYLE: { background: "rgb(33, 150, 243)", color: '#ffffff' },
                YEAR: '2007',
                DESC: 'Fast Forward India (FFI) was started with a chapter "BLOODLINE"',
                IMG_URL: 'assets/images/blood.png',
                IMG_STYLE: {height: "120px", width: "100px", verticalAlign: "center"}
            },
            {
                FLAG: 'RIGHT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#FFC444", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #FFC444' },
                ICON_STYLE: { background: "#FFC444", color: '#fff' },
                YEAR: '2008',
                DESC: 'FFI introduced two more new chapters named "ESCAPE" and "JAGRATI"',
                IMG_URL: 'assets/images/disha.png',
                IMG_STYLE: {height: "120px", width: "140px", verticalAlign: "center"}
            },
            {
                FLAG: 'LEFT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#35801F", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #35801F' },
                ICON_STYLE: { background: '#35801F', color: '#fff' },
                YEAR: '2009',
                DESC: 'FFI launced a new and overall its fourth chapter named "DISHA"',
                IMG_URL: 'assets/images/mentor.png',
                IMG_STYLE: {height: "100px", width: "150px", verticalAlign: "center"}
            },
            {
                FLAG: 'RIGHT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#1472b5", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #1472b5' },
                ICON_STYLE: { background: '#1472b5', color: '#fff' },
                YEAR: '2010',
                DESC: 'FFI launched the quiz event "BRAINSTORM"',
                IMG_URL: 'assets/images/quiz.png',
                IMG_STYLE: {height: "120px", width: "120px", verticalAlign: "center"}
            },
            {
                FLAG: 'LEFT',
                CLASS_NAME: 'vertical-timeline-element--education',
                CONTENT_STYLE: { background: "#15e8e8", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #15e8e8' },
                ICON_STYLE: { background: '#15e8e8', color: '#fff' },
                YEAR: '2014',
                DESC: 'FFI set the milestone of a record blood donation of "905" units in a single day',
                IMG_URL: 'assets/images/donate.png',
                IMG_STYLE: {height: "120px", width: "120px", verticalAlign: "center"}
            },
            {
                FLAG: 'RIGHT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#b52ec7", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #b52ec7' },
                ICON_STYLE: { background: "#b52ec7", color: '#fff' },
                YEAR: '2015',
                DESC: 'FFI launched its Annual Festival UMEED, (previously known as "CARRUS") a Career Development Fest',
                IMG_URL: 'assets/images/umeed.png',
                IMG_STYLE: {height: "120px", width: "120px", verticalAlign: "center"}
            },
            {
                FLAG: 'LEFT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#F00", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #F00' },
                ICON_STYLE: { background: '#F00', color: '#fff' },
                YEAR: '2016',
                DESC: 'FFI started a campaign known as MEGA BLOOD DONATION CAMP (MBDC) in which Blood donation events are organized at various hospitals of city',
                IMG_URL: 'assets/images/bld_donate.png',
                IMG_STYLE: {height: "150px", width: "150px", verticalAlign: "center"}
            },
            {
                FLAG: 'RIGHT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#33909B", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #33909B' },
                ICON_STYLE: { background: '#33909B', color: '#fff' },
                YEAR: '2016',
                DESC: 'FFI initiated an campaign ISM to IIT (ISM) Movement which later helped ISM to become IIT',
                IMG_URL: 'assets/images/ism2iit.png',
                IMG_STYLE: {height: "120px", width: "170px", verticalAlign: "center"}
            },
            {
                FLAG: 'LEFT',
                CLASS_NAME: 'vertical-timeline-element--education',
                CONTENT_STYLE: { background: "#9F2B2B", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #9F2B2B' },
                ICON_STYLE: { background: '#9F2B2B', color: '#fff' },
                YEAR: '2019',
                DESC: 'Initiative started to prepare students for Navodaya Entrance Examination',
                IMG_URL: 'assets/images/books.png',
                IMG_STYLE: {height: "100px", width: "90px", verticalAlign: "center"}
            },
            {
                FLAG: 'RIGHT',
                CLASS_NAME: 'vertical-timeline-element--work',
                CONTENT_STYLE: { background: "#2B2C97", color: '#fff' },
                CONTENT_ARROW_STYLE: { borderRight: '7px solid  #2B2C97' },
                ICON_STYLE: { background: '#2B2C97', color: '#fff' },
                YEAR: '2020',
                DESC: 'Started an Online Education System "AAGAZ"',
                IMG_URL: 'assets/images/aagaz.png',
                IMG_STYLE: {height: "100px", width: "150px", verticalAlign: "center"}
            },

        ], // JOURNEY [ ] :: ENDS here

        TESTIMONIALS: [
            {
                AUTHOR: 'Prof. Rajeev Shekhar',
                DESIGNATION: 'Director IIT(ISM) Dhanbad',
                MSSG: 'ROCKS'
            },
            {
                AUTHOR: 'Prof. Rajeev Shekhar',
                DESIGNATION: 'Director IIT(ISM) Dhanbad',
                MSSG: 'ROCKS'
            },
            {
                AUTHOR: 'Prof. Rajeev Shekhar',
                DESIGNATION: 'Director IIT(ISM) Dhanbad',
                MSSG: 'ROCKS'
            },
            {
                AUTHOR: 'Prof. Rajeev Shekhar',
                DESIGNATION: 'Director IIT(ISM) Dhanbad',
                MSSG: 'ROCKS'
            }
        ]  // TESTIMONIALS [ ] :: ENDS here

    }, // HOMEPAGE { } :: ENDS here
};

export default DATA;