(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


   // Service-carousel
   $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {$('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // ==========================================
    // CUSTOM MOBILE MENU (HAMBURGER TOGGLE)
    // ==========================================
    $(document).ready(function() {
        const $openBtn =$('#openMenuBtn');
        const $closeBtn =$('#closeMenuBtn');
        const $mobileMenu =$('#customMobileMenu');

        if ($openBtn.length && $closeBtn.length &&$mobileMenu.length) {
            
            // Fungsi membuka menu
            $openBtn.on('click', function(e) {
                e.preventDefault();
                $mobileMenu.removeClass('d-none').addClass('active-mobile');$('body').css('overflow', 'hidden'); // Mencegah scrolling latar belakang
            });

            // Fungsi menutup menu
            $closeBtn.on('click', function(e) {                 e.preventDefault();$mobileMenu.removeClass('active-mobile');
                if ($(window).width() < 992) {$mobileMenu.addClass('d-none');
                }
                $('body').css('overflow', 'auto'); // Mengembalikan scrolling
            });

            // Pastikan tampilan kembali normal jika layar di-resize ke ukuran Desktop
            $(window).on('resize', function() {
                if ($(window).width() >= 992) {
                    $mobileMenu.removeClass('active-mobile d-none');$('body').css('overflow', 'auto');
                } else if (!$mobileMenu.hasClass('active-mobile')) {$mobileMenu.addClass('d-none');
                }
            });
        }
    });
    // ==========================================


    // ==========================================
    // MVNET MAP SVG SCRIPT
    // ==========================================
    const nodes = [
        { id:'sg', name:'Singapore', type:'Data Center', x:280, y:138,
        ip:'103.21.4.1/30', capacity:'400 Gbps', latency:'3 ms', since:'2019',
        desc:'Gateway internasional yang menghubungkan backbone MVnet ke jalur submarine cable regional Asia Tenggara.',
        conns:['Batam','Pekanbaru'] },
        { id:'batam', name:'Batam', type:'Data Center Facility', x:300, y:152,
        ip:'103.21.8.14/29', capacity:'100 Gbps', latency:'5 ms', since:'2020',
        desc:'Fasilitas data center pesisir yang menjembatani lalu lintas domestik dengan gateway Singapore. Titik pendaratan submarine cable pertama MVnet dari Batam ke Singapore.',
        conns:['Singapore'] },
        { id:'pekanbaru', name:'Pekanbaru', type:'Data Center', x:218, y:157,
        ip:'103.21.12.2/29', capacity:'60 Gbps', latency:'9 ms', since:'2021',
        desc:'Titik distribusi Sumatra bagian utara, melayani trafik korporat dan pemerintahan daerah.',
        conns:['Singapore','Palembang'] },
        { id:'palembang', name:'Palembang', type:'Data Center', x:302, y:240,
        ip:'103.21.16.6/29', capacity:'80 Gbps', latency:'8 ms', since:'2020',
        desc:'Simpul regional Sumatra Selatan, meneruskan trafik ke Prime Center Jakarta melalui jalur ganda. MVnet mengoperasikan bisnis residensial di kota ini.',
        conns:['Pekanbaru','Jakarta'] },
        { id:'jakarta', name:'Jakarta', type:'Prime Center', x:350, y:309,
        ip:'103.21.1.1/28', capacity:'800 Gbps', latency:'1 ms', since:'2017',
        desc:'Prime Center — jantung backbone nasional MVnet. Seluruh trafik antar-pulau utama diarahkan lewat titik ini sebelum didistribusikan ke node regional.',
        conns:['Palembang','Bandung','Yogyakarta','Surabaya','Makassar'] },
        { id:'bandung', name:'Bandung', type:'Data Center', x:379, y:332,
        ip:'103.21.20.3/29', capacity:'70 Gbps', latency:'2 ms', since:'2021',
        desc:'Simpul Jawa Barat yang menopang beban riset, kampus, dan startup teknologi lokal.',
        conns:['Jakarta'] },
        { id:'yogyakarta', name:'Yogyakarta', type:'Fiber Backbone', x:442, y:350,
        ip:'103.21.24.9/29', capacity:'55 Gbps', latency:'4 ms', since:'2022',
        desc:'Simpul backbone fiber yang menghubungkan Jawa Tengah–DIY ke jalur utama Jakarta–Surabaya.',
        conns:['Jakarta','Malang'] },
        { id:'surabaya', name:'Surabaya', type:'Data Center', x:495, y:338,
        ip:'103.21.32.7/29', capacity:'90 Gbps', latency:'3 ms', since:'2019',
        desc:'Simpul strategis Jawa Timur, penghubung utama menuju Denpasar dan Makassar.',
        conns:['Jakarta','Malang','Denpasar','Makassar'] },
        { id:'malang', name:'Malang', type:'Data Center', x:518, y:358,
        ip:'103.21.28.5/29', capacity:'40 Gbps', latency:'6 ms', since:'2022',
        desc:'Titik distribusi Jawa Timur selatan, melayani trafik pendidikan dan agroindustri.',
        conns:['Yogyakarta','Surabaya'] },
        { id:'denpasar', name:'Denpasar', type:'Denpasar DC', x:560, y:365,
        ip:'103.21.36.2/29', capacity:'50 Gbps', latency:'7 ms', since:'2021',
        desc:'Data center Bali, memprioritaskan latensi rendah untuk sektor pariwisata dan perhotelan. Menjadi kantor cabang pertama MVnet di Bali.',
        conns:['Surabaya','Makassar'] },
        { id:'makassar', name:'Makassar', type:'Regional Hub', x:668, y:290,
        ip:'103.21.2.1/28', capacity:'300 Gbps', latency:'2 ms', since:'2020',
        desc:'Hub regional Indonesia Timur, mendistribusikan trafik ke Sulawesi, Maluku, dan Papua.',
        conns:['Jakarta','Surabaya','Denpasar'] },
    ];

    const links = [
        ['sg','pekanbaru'], ['sg','batam'],
        ['pekanbaru','palembang'], ['palembang','jakarta'],
        ['jakarta','bandung'], ['jakarta','yogyakarta'],
        ['yogyakarta','malang'], ['malang','surabaya'],
        ['jakarta','surabaya'], ['surabaya','denpasar'],
        ['jakarta','makassar'], ['surabaya','makassar'], ['denpasar','makassar']
    ];

    const byId = Object.fromEntries(nodes.map(n=>[n.id,n]));
    const NS='http://www.w3.org/2000/svg';
    function el(tag, attrs){ const e=document.createElementNS(NS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); return e; }

    const svg = document.getElementById('mvmapSvg');

    // Mencegah error jika SVG map tidak ada di halaman saat ini
    if(svg) {
        const defs = el('defs',{});
        const grad = el('linearGradient',{id:'mvmapFlowGrad', x1:'0%',y1:'0%',x2:'100%',y2:'0%'});
        grad.appendChild(el('stop',{offset:'0%','stop-color':'#fff3d6'}));
        grad.appendChild(el('stop',{offset:'100%','stop-color':'#f5b942'}));
        defs.appendChild(grad);
        svg.appendChild(defs);

        function curvePath(a,b){
            const mx=(a.x+b.x)/2, my=(a.y+b.y)/2 - Math.abs(a.x-b.x)*0.12 - 14;
            return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
        }

        const linkGroup = el('g',{fill:'none'});
        links.forEach(([a,b],i)=>{
            const A=byId[a], B=byId[b];
            const d = curvePath(A,B);
            const speedClass = i%3===0 ? 'mvmap-flow-slow' : (i%3===1 ? '' : 'mvmap-flow-fast');
            const p = el('path',{d, stroke:'url(#mvmapFlowGrad)', 'stroke-width':2, class:`mvmap-flow ${speedClass}`, opacity:.95});
            linkGroup.appendChild(p);
        });
        svg.appendChild(linkGroup);

        const nodeGroup = el('g',{});
        nodes.forEach(n=>{
            const g = el('g',{class:'mvmap-node-hit'});
            g.appendChild(el('circle',{cx:n.x, cy:n.y, r:14, fill:'transparent'}));
            g.appendChild(el('circle',{cx:n.x, cy:n.y, r:6, class:'mvmap-pulse-ring'}));
            g.appendChild(el('circle',{cx:n.x, cy:n.y, r:9, class:'mvmap-node-ring'}));
            g.appendChild(el('circle',{cx:n.x, cy:n.y, r:5, class:'mvmap-node-core'}));
            g.addEventListener('click', ()=>openMvmapPanel(n.id));
            nodeGroup.appendChild(g);
        });
        svg.appendChild(nodeGroup);

        const overlay = document.getElementById('mvmapOverlay');
        const panel = document.getElementById('mvmapPanel');
        const panelBody = document.getElementById('mvmapPanelBody');

        function openMvmapPanel(id){
            const n = byId[id];
            [...nodeGroup.children].forEach((g,idx)=>{ g.classList.toggle('active', nodes[idx].id===id); });

            panelBody.innerHTML = `
            <div class="mvmap-panel-kicker">${n.type}</div>
            <h2>${n.name}</h2>
            <div class="mvmap-loc">Node ID: ${n.id.toUpperCase()} &middot; Indonesia</div>
            <div class="mvmap-status-pill"><i></i> Online</div>
            <div class="mvmap-kv">
                <div class="mvmap-cell"><div class="mvmap-k">Kapasitas</div><div class="mvmap-v">${n.capacity}</div></div>
                <div class="mvmap-cell"><div class="mvmap-k">Latensi ke Prime</div><div class="mvmap-v">${n.latency}</div></div>
                
                <div class="mvmap-cell"><div class="mvmap-k">Beroperasi Sejak</div><div class="mvmap-v">${n.since}</div></div>
            </div>
            <div class="mvmap-panel-section">
                <h3>Tentang node ini</h3>
                <p style="font-size:14px;line-height:1.6;color:#6c757d;margin:0;">${n.desc}</p>
            </div>
            <div class="mvmap-panel-section">
                <h3>Terhubung langsung ke</h3>
                <ul class="mvmap-conn-list">
                ${n.conns.map(c=>`<li><b>${c}</b><span>fiber &middot; aktif</span></li>`).join('')}
                </ul>
            </div>
            `;
            overlay.classList.add('show');
            panel.classList.add('show');
        }
        function closeMvmapPanel(){
            overlay.classList.remove('show');
            panel.classList.remove('show');
            [...nodeGroup.children].forEach(g=>g.classList.remove('active'));
        }
        overlay.addEventListener('click', closeMvmapPanel);
        document.getElementById('mvmapPanelClose').addEventListener('click', closeMvmapPanel);
        document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMvmapPanel(); });
    }

})(jQuery);