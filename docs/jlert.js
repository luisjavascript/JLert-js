let jlert = (function () {
    let utilities = {
        listJlerts: [],
        count: 0,
        countInArray: 0,
        time: 0,
        bg: '',
        base: '',
        round: false,
        color: '',
        leftIcon: false,
        rightIcon: false,
        position: 'top-right',
        closeButton: false,
        icon: '',
        firstElement: false,
        animation: {},
        progressBar: {
            active: false,
            intervalId: null,
            hideEta: null,
            maxHideTime: null
        },
        createTemplate: function (typeJlert, textJlert, options) {
            this.count = this.listJlerts.length;
            this.firstElement = options.firstElement;
            this.animation = options.animation;
            this.time = options.time;
            this.progressBar.active = options.progressBar;
            if (options) {
                switch (options.bg) {
                    case 'wrong':
                        this.bg = '#EA2027';
                        break;
                    case 'warning':
                        this.bg = '#FFC312';
                        break;
                    case 'info':
                        this.bg = '#00a8ff';
                        break;
                    case 'done':
                        this.bg = '#4cd137';
                        break;
                    default:
                        this.bg = options.bg;
                }
                switch (options.base) {
                    case 'wrong':
                        this.base = '#e0111c';
                        break;
                    case 'warning':
                        this.base = '#f4d822';
                        break;
                    case 'info':
                        this.base = '#0097e6';
                        break;
                    case 'done':
                        this.base = '#44bd32';
                        break;
                    default:
                        this.base = options.base;
                }
                this.color = options.color ? options.color : '';
                this.round = options.round ? options.round : options.round;
                this.closeButton = options.closeButton ? true : false;
                switch (options.positionIcon) {
                    case 'left':
                        this.leftIcon = true;
                        this.rightIcon = false;
                        break;
                    case 'right':
                        this.rightIcon = true;
                        this.leftIcon = false;
                        break;
                }
                switch (options.icon) {
                    case 'wrong':
                        this.icon = 'fas fa-times-circle';
                        break;
                    case 'warning':
                        this.icon = 'fas fa-exclamation-circle';
                        break;
                    case 'info':
                        this.icon = 'fas fa-info-circle';
                        break;
                    case 'done':
                        this.icon = 'fas fa-check-circle';
                        break;
                    default:
                        this.icon = options.icon;
                        break;
                }
                switch (options.position) {
                    case 'top-left':
                        this.position = 'top-left-jlert';
                        break;
                    case 'top-right':
                        this.position = 'top-right-jlert';
                        break;
                    case 'bottom-left':
                        this.position = 'bottom-left-jlert';
                        break;
                    case 'bottom-right':
                        this.position = 'bottom-right-jlert';
                        break;
                    case 'top-center':
                        this.position = 'top-center-jlert';
                        break;
                    case 'bottom-center':
                        this.position = 'bottom-center-jlert';
                        break;

                }
            }
            let tpl = '';
            if (typeJlert === 'simple') {
                tpl = `<div class="jlert-container ${this.position}">
                        <div class="style-jlert" style="background:${this.bg};">
                            <div class="text-jlert" style="color:${this.color};">
                                ${textJlert}
                            </div>
                        </div>
                    </div>`;
            } else if (typeJlert === 'icon') {
                tpl = `<div class="jlert-container ${this.position}" >
                        <div class="container-btn-close-jlert" style="display:${this.closeButton === true ? 'block' : 'none'};">
                            <div class="btn-close-jlert">
                                <i class="fas fa-times"></i>
                            </div> 
                        </div>
                        <div class="style-jlert ${this.round === true ? 'round' : ''}" style="background:${this.bg};">
                            <div class="text-jlert ${this.leftIcon === true ? 'left-jlert-text' : ''} ${this.rightIcon === true ? 'right-jlert-text' : ''}" style="color:${this.color};">
                                ${textJlert}
                            </div>
                            <div class="icon-jlert ${this.leftIcon === true ? 'left-jlert' : ''} ${this.rightIcon === true ? 'right-jlert' : ''}" style="background: ${this.base}">
                                <i class="${this.icon}"></i>
                            </div>
                            <div class="progressBar-jlert"></div>
                        </div>
                    </div>`;
            }
            return tpl;
        },
        deleteJlert: function (jlert) {
            try {
                this.clearAnimation(jlert);
                this.setAnnimation(jlert, false);

                setTimeout(() => {
                    for (let i = 0; i < this.listJlerts.length; i++) {
                        if (this.listJlerts[i].jlert === jlert) {
                            this.listJlerts.splice(i, 1);
                            this.rearrangeJlerts(i);
                        }
                    }
                    jlert.remove();
                }, this.animation.timeEnd);
            } catch (e) {
                console.warn(e);
            }
        },
        rearrangeJlerts: function (index) {
            if (this.firstElement === false) {
                for (let i = index; i < this.listJlerts.length; i++) {
                    if (/^bottom/.test(this.position)) {
                        this.listJlerts[i].jlert.style.bottom = (parseInt(this.listJlerts[i].jlert.style.bottom, 10) - (this.listJlerts[i].jlert.clientHeight+5)) + 'px';
                    } else {
                        this.listJlerts[i].jlert.style.top = (parseInt(this.listJlerts[i].jlert.style.top, 10) - (this.listJlerts[i].jlert.clientHeight+5)) + 'px';
                    }
                }
            } else {
                for (let i = index - 1; i >= 0; i--) {
                    if (/^bottom/.test(this.position)) {
                        this.listJlerts[i].jlert.style.bottom = (parseInt(this.listJlerts[i].jlert.style.bottom, 10) - (this.listJlerts[i].jlert.clientHeight+5)) + 'px';
                    } else {
                        this.listJlerts[i].jlert.style.top = (parseInt(this.listJlerts[i].jlert.style.top, 10) - (this.listJlerts[i].jlert.clientHeight+5)) + 'px';
                    }
                }
            }
        },
        rearrangeNewJlert: function () {
            let count = 0;
            if (this.firstElement) {
                count = 0;
            } else {
                count = this.listJlerts.length - 1;
            }
            for (let i = this.listJlerts.length - 1; i >= 0; i--) { //[j1]
                if (/^bottom/.test(this.position)) {
                    this.listJlerts[i].jlert.style.bottom = (count * (this.listJlerts[i].jlert.clientHeight+5)) + 'px';
                } else {
                    this.listJlerts[i].jlert.style.top = (count * (this.listJlerts[i].jlert.clientHeight+5)) + 'px';
                }
                if (this.firstElement) {
                    count += 1;
                } else {
                    count -= 1;
                }
            }
        },
        setAnnimation: function (jlert, init) {
            if (init) {
                jlert.classList.add('jlert-' + this.animation.init + '-animation');
            } else {
                jlert.classList.add('jlert-' + this.animation.end + '-animation');
            }
        },
        clearAnimation: function (jlert) {
            for (let i in jlert.classList) {
                if (/^jlert-[a-zA-Z]+-animation/.test(jlert.classList[i])) {
                    jlert.classList.remove(jlert.classList[i]);
                }
            }
        },
        closeProgressBar: function() {
            clearInterval(utilities.progressBar.intervalId);
        },
        updateProgressBar: function(jlert) {
            console.log('update');
            var percentage = ((this.progressBar.hideEta - (new Date().getTime())) / this.progressBar.maxHideTime) * 100;
            let progressBar = jlert.querySelector('.progressBar-jlert');
            progressBar.style.width = percentage + '%';
        }
    }

    return {
        jlert: null,
        count: 0,
        createAlert: function (typeJlert, textJlert, options) {
            let tpl = utilities.createTemplate(typeJlert, textJlert, options);
            let parser = new DOMParser();
            let parsedHTML = parser.parseFromString(tpl, 'text/html');
            this.jlert = parsedHTML.getElementsByClassName('jlert-container')[0];
            this.jlert.classList.add('jlert-' + this.count);
            let count = this.count;
            let jlert2 = this.jlert;
            utilities.listJlerts.push({ jlert: this.jlert });

            jlert2.querySelector('.container-btn-close-jlert').addEventListener('click', function (event) {
                utilities.deleteJlert(jlert2);
            });

            if (options.time && options.time > 0) {
                let time = options.time ? options.time : 1000;
                let count = this.count;
                setTimeout(() => {
                    utilities.deleteJlert(jlert2);
                }, time);
            }

            this.count += 1;
            return this;
        },
        openJlert: function () {
            let body = document.querySelector('body');
            utilities.setAnnimation(this.jlert, true);

            setTimeout(() => {
                utilities.clearAnimation(this.jlert);
            }, utilities.animation.timeInit);
            let jlertCurrent = this.jlert;
            body.appendChild(this.jlert);
            if (utilities.time > 0) {
                setTimeout(utilities.closeProgressBar, utilities.time);
                utilities.progressBar.maxHideTime = parseFloat(utilities.time);
                utilities.progressBar.hideEta = new Date().getTime() + utilities.progressBar.maxHideTime;
                if (utilities.progressBar.active) {
                    utilities.progressBar.intervalId = setInterval(function() {
                        utilities.updateProgressBar(jlertCurrent);
                    }, 10);
                }
            }
            utilities.rearrangeNewJlert();
            return this;
        }
    };
})();

/**
 * bg : ['warning','wrong','info','done', otros colores por nombre o rgb, hexadecimal, rgba]
 * base: ['warning','wrong','info','done', otros colores por nombre o rgb, hexadecimal, rgba]
 * round: [true, false]
 * color: [cualquier color rgb, rgba, hex, nombre]
 * positionIcon: ['left', 'right']
 * icon ['wrong', 'warning', 'info', 'done', otra clase de fontawesome]
 * time [cualquier tiempo numerico en milisegundos]
 * closeButton: [true, false]
 * position: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center']
 * firstElement: [true, false] indica si la ultima jlert se colocara en primer lugar
 * animation: [{init: [gum, fade], end: [gum], timeInit: ms, timeEnd: ms}]
 */
