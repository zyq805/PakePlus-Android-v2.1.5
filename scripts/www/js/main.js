class DIYPCBuilder {
    constructor() {
        this.parts = {
            cpu: [],
            motherboard: [],
            ram: [],
            gpu: [],
            cooling: [],
            storage: [],
            psu: [],
            case: [],
            fans: [],
            custom1: [],
            custom2: []
        };
        
        this.partSuggestions = {
            cpu: [
                // AMD Ryzen 9系列
                { name: 'AMD Ryzen 9 9950X3D', price: 4999 },
                { name: 'AMD Ryzen 9 9950X', price: 3999 },
                { name: 'AMD Ryzen 9 9900X', price: 2999 },
                { name: 'AMD Ryzen 9 7950X', price: 3299 },
                { name: 'AMD Ryzen 9 7950X3D', price: 3699 },
                { name: 'AMD Ryzen 9 7900X', price: 2398 },
                // AMD Ryzen 7系列
                { name: 'AMD Ryzen 7 9800X3D', price: 3699 },
                { name: 'AMD Ryzen 7 9700X', price: 2099 },
                { name: 'AMD Ryzen 7 7800X3D', price: 2169 },
                // AMD Ryzen 5系列
                { name: 'AMD Ryzen 5 9600X', price: 1300 },
                { name: 'AMD Ryzen 5 7600X', price: 1999 },
                { name: 'AMD Ryzen 5 7500F', price: 800 },
                { name: 'AMD Ryzen 5 8500G', price: 1200 },
                // Intel Core i9系列
                { name: 'Intel 酷睿 Ultra 9 285K', price: 3499 },
                { name: 'Intel 酷睿 i9 14900K', price: 3449 },
                { name: 'Intel 酷睿 i9 13900K', price: 1688 },
                // Intel Core i7系列
                { name: 'Intel 酷睿 i7 14700K', price: 2649 },
                { name: 'Intel 酷睿 i7 13700K', price: 2999 },
                // Intel Core i5系列
                { name: 'Intel 酷睿 i5 14600K', price: 2599 },
                { name: 'Intel 酷睿 i5 13400F', price: 1000 },
                { name: 'Intel 酷睿 Ultra 5 245K', price: 1834 },
                { name: 'Intel 酷睿 Ultra 5 230F', price: 2000 },
                // Intel Core i3系列
                { name: 'Intel 酷睿 i3 14100F', price: 600 }
            ],
            motherboard: [
                // 华硕主板
                { name: '华硕 ROG STRIX Z790-A GAMING WIFI S 吹雪', price: 2819 },
                { name: '华硕 ROG MAXIMUS Z790 HERO', price: 4299 },
                { name: '华硕 ROG CROSSHAIR X670E HERO', price: 4999 },
                // 七彩虹主板
                { name: '七彩虹 iGame Z890 VULCAN X V20 DDR5 火神', price: 3249 },
                // 技嘉主板
                { name: '技嘉 B760雕妹主板DDR5 WIFI', price: 1199 },
                { name: '技嘉 Z790 AORUS ELITE AX', price: 2199 },
                // 微星主板
                { name: '微星 Z790 GAMING PLUS WIFI DDR5', price: 1699 },
                { name: '微星 MPG Z790 EDGE WIFI', price: 2599 },
                // AMD平台主板 - B650系列
                { name: '微星 MPG B650I EDGE WIFI', price: 1899 },
                { name: '微星 MAG B650 TOMAHAWK WIFI', price: 1599 },
                { name: '技嘉 B650I AORUS ULTRA', price: 1799 },
                { name: '技嘉 B650 AORUS ELITE AX', price: 1499 },
                { name: '华硕 ROG STRIX B650E-E GAMING WIFI', price: 2099 },
                { name: '华硕 TUF GAMING B650M-PLUS WIFI', price: 1299 },
                { name: '精粤 B650I PRO', price: 899 },
                { name: '精粤 B650M-D4', price: 799 },
                // AMD平台主板 - B850系列
                { name: '微星 MPG B850I EDGE WIFI', price: 2099 },
                { name: '微星 MAG B850 TOMAHAWK WIFI', price: 1799 },
                { name: '技嘉 B850I AORUS ULTRA', price: 1999 },
                { name: '技嘉 B850 AORUS ELITE AX', price: 1699 },
                { name: '华硕 ROG STRIX B850E-E GAMING WIFI', price: 2299 },
                { name: '华硕 TUF GAMING B850M-PLUS WIFI', price: 1499 },
                { name: '精粤 B850I PRO', price: 999 },
                // AMD平台主板 - X870系列
                { name: '微星 MPG X870E CARBON WIFI', price: 2899 },
                { name: '微星 MEG X870E ACE', price: 3699 },
                { name: '技嘉 X870 AORUS XTREME', price: 3999 },
                { name: '技嘉 X870 AORUS MASTER', price: 3299 },
                { name: '华硕 ROG CROSSHAIR X870E HERO', price: 4299 },
                { name: '华硕 ROG STRIX X870E-F GAMING WIFI', price: 2999 }
            ],
            ram: [
                // DDR5内存
                { name: '光威天策 DDR5-6400 32GB(16G×2)', price: 1039 },
                { name: '海盗船 DDR5 32GB (2x16GB) 6400MHz', price: 1899 },
                { name: '芝奇焰光戟 Z5 Neo RGB DDR5-6000 CL30 32GB', price: 4299 },
                { name: '芝奇 DDR5 32GB (2x16GB) 6000MHz', price: 1699 },
                { name: '金士顿 FURY Beast DDR5 32GB (2x16GB) 5600MHz', price: 1299 },
                { name: '美商海盗船 DDR5 64GB (2x32GB) 6000MHz', price: 3299 },
                { name: '英睿达 32GB DDR5 4800 笔记本内存条', price: 1861 },
                // DDR4内存
                { name: '金百达 DDR4 16G×2 套条', price: 800 },
                { name: '三星 32GB×2 3200MHz', price: 1530 }
            ],
            gpu: [
                // NVIDIA RTX 50系列
                { name: 'NVIDIA RTX 5090D', price: 16499 },
                { name: 'NVIDIA RTX 5080 FE', price: 8299 },
                { name: 'NVIDIA RTX 5070 Ti', price: 6299 },
                { name: 'NVIDIA RTX 5070', price: 4599 },
                { name: 'NVIDIA RTX 5060 Ti 16GB', price: 3599 },
                { name: 'NVIDIA RTX 5060 Ti 8GB', price: 3199 },
                // AMD RX 9000系列
                { name: 'AMD RX 9070 XT', price: 4999 },
                { name: 'AMD RX 9070', price: 4499 },
                // AMD RX 7000系列
                { name: 'AMD RX 7900 XTX', price: 7999 },
                { name: 'AMD RX 7800 XT', price: 4599 },
                { name: 'AMD RX 7650 GRE', price: 2000 },
                // Intel Arc系列
                { name: 'Intel Arc B570', price: 1799 }
            ],
            cooling: [
                // 水冷散热器
                { name: '瓦尔基里 B360 GT', price: 540 },
                { name: 'TRYX PANORAMA SE 360', price: 1800 },
                { name: '华硕ROG龙王四代', price: 2600 },
                { name: '利民 AE360', price: 221 },
                { name: '九州风神冰果', price: 359 },
                { name: '利民冰封雅境', price: 359 },
                { name: '钛坦 A080', price: 378 },
                { name: '酷冷至尊龙影2代', price: 449 },
                { name: '钛坦 A090', price: 499 },
                { name: '超频三DS360', price: 511 },
                { name: '钛坦 LA300', price: 519 },
                { name: '先马XW360D', price: 629 },
                // 风冷散热器
                { name: '超频三红海H4', price: 65 },
                { name: '九州风神大霜塔AG620V5', price: 150 },
                { name: '瓦尔基里SL125', price: 290 },
                { name: '超频3青鸟3', price: 28 },
                { name: '超频3红海MINI', price: 39 },
                { name: 'ID-COOLINGSE-30', price: 69 },
                { name: '九州风神AG400LED', price: 89 },
                { name: '利民AXP90-X36', price: 149 },
                { name: '追风者伯乐S5', price: 179 },
                { name: '酷冷至尊暴雪T620S', price: 199 },
                { name: '利民PA120', price: 219 },
                { name: '九州风神AG620', price: 229 },
                { name: '利民FW360 BLACK', price: 499 },
                { name: '美商海盗船H100 RGB', price: 599 },
                { name: '猫头鹰NH-U12A', price: 799 },
                { name: '华硕龙神三代360 ARGB', price: 3199 }
            ],
            storage: [
                // PCIe 5.0 SSD
                { name: '西部数据 SN8100 2TB', price: 1619 },
                { name: '西部数据 SN3000', price: 799 },
                { name: '英睿达 P310', price: 849 },
                { name: '希捷酷玩540', price: 996 },
                { name: '三星990 PRO', price: 999 },
                { name: '致态TiPro9000', price: 1099 },
                { name: '闪迪SN8100', price: 2169 },
                { name: '铠侠VD101T', price: 719 },
                { name: '佰维X5702T', price: 1279 },
                { name: '雷克沙战神2T', price: 1299 },
                // PCIe 4.0 SSD
                { name: '三星 990 PRO 2TB NVMe SSD', price: 1899 },
                { name: '西部数据 Black SN850X 2TB', price: 1599 },
                { name: '金士顿 Fury Renegade 2TB', price: 1299 },
                { name: '英睿达 P5 Plus 4TB', price: 2499 },
                { name: '铠侠SD101T', price: 659 },
                { name: '西数SN50001T', price: 679 },
                { name: '佰维NV74001T', price: 709 },
                { name: '铠侠SE101T', price: 769 },
                { name: '金士顿KC3000', price: 646 },
                { name: '梵想S790', price: 799 },
                { name: '英睿达 美光 T500 Pro', price: 899 },
                { name: '三星990 EVO Plus', price: 899 },
                { name: '致态TiPlus7100', price: 1115 },
                { name: '宏碁掠夺者GM7', price: 1146 },
                { name: '宏碁掠夺者GM7000', price: 1246 },
                { name: '威刚S70Blade', price: 1296 },
                // SATA SSD
                { name: '闪迪加强版系列', price: 479 },
                { name: '英睿达BX500', price: 499 },
                { name: '三星870 EVO', price: 569 },
                { name: '金士顿KC600', price: 646 },
                { name: '西部数据Green', price: 896 }
            ],
            psu: [
                { name: '海盗船 RM1000x Shift 1000W', price: 1699 },
                { name: '振华 LEADEX III 1000W', price: 1499 },
                { name: '海韵 Focus GX-1000 1000W', price: 1599 },
                { name: '酷冷至尊 V850 SFX Gold 850W', price: 1299 }
            ],
            case: [
                { name: 'Lian Li O11 Dynamic EVO', price: 1299 },
                { name: 'NZXT H9 Flow', price: 1099 },
                { name: '海盗船 4000D Airflow', price: 799 },
                { name: 'Fractal Design Meshify 2', price: 999 }
            ],
            fans: [
                { name: 'Lian Li UNI FAN SL120 V2 三联包', price: 899 },
                { name: 'NZXT F140 RGB Core 三联包', price: 799 },
                { name: 'Noctua NF-A12x25 PWM chromax.black', price: 399 },
                { name: '海盗船 iCUE SP120 RGB ELITE', price: 299 }
            ],
            custom1: [],
            custom2: []
        };

        this.currentPartType = '';
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadFromLocalStorage();
        this.updateSummary();
    }

    bindEvents() {
        console.log('Binding events...');
        
        // Setup search functionality for all part types
        const partTypes = ['cpu', 'motherboard', 'ram', 'gpu', 'cooling', 'storage', 'psu', 'case', 'fans', 'custom1', 'custom2'];
        
        partTypes.forEach(type => {
            const searchInput = document.getElementById(`${type}-search`);
            const suggestionsContainer = document.getElementById(`${type}-suggestions`);
            
            if (searchInput && suggestionsContainer) {
                console.log(`Setting up search for ${type}`);
                
                // 移除现有的事件监听器
                const newInput = searchInput.cloneNode(true);
                searchInput.parentNode.replaceChild(newInput, searchInput);
                
                newInput.addEventListener('input', (e) => {
                    console.log(`${type} input: ${e.target.value}`);
                    this.showPartSuggestions(type, e.target.value);
                });
                
                newInput.addEventListener('focus', (e) => {
                    console.log(`${type} focus`);
                    if (e.target.value.trim()) {
                        this.showPartSuggestions(type, e.target.value);
                    }
                });
                
                newInput.addEventListener('blur', () => {
                    console.log(`${type} blur`);
                    setTimeout(() => suggestionsContainer.classList.add('hidden'), 200);
                });
            } else {
                console.log(`Missing elements for ${type}: input=${!!searchInput}, container=${!!suggestionsContainer}`);
            }
        });

        // Modal close buttons
        const closeModalBtn = document.getElementById('close-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => this.closeModal());
        }

        const cancelCustomBtn = document.getElementById('cancel-custom');
        if (cancelCustomBtn) {
            cancelCustomBtn.addEventListener('click', () => this.closeModal());
        }

        // Custom form submission
        const customForm = document.getElementById('custom-form');
        if (customForm) {
            customForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addCustomPart();
            });
        }

        // Clear all button
        const clearAllBtn = document.getElementById('clear-all');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => this.clearAll());
        }

        // Save config button
        const saveConfigBtn = document.getElementById('save-config');
        if (saveConfigBtn) {
            saveConfigBtn.addEventListener('click', () => this.saveConfig());
        }

        // Load config button
        const loadConfigBtn = document.getElementById('load-config');
        if (loadConfigBtn) {
            loadConfigBtn.addEventListener('click', () => this.loadConfig());
        }
    }

    openAddPartModal(partType) {
        this.currentPartType = partType;
        const modalTitle = document.getElementById('modal-title');
        const partNames = {
            cpu: 'CPU',
            motherboard: '主板',
            ram: '内存',
            gpu: '显卡',
            cooling: '散热',
            storage: '固态',
            psu: '电源',
            case: '机箱',
            fans: '风扇',
            custom1: document.getElementById('custom-part-1-title').textContent.trim(),
            custom2: document.getElementById('custom-part-2-title').textContent.trim()
        };
        
        modalTitle.textContent = `添加${partNames[partType]}`;
        
        // Reset form
        document.getElementById('part-name').value = '';
        document.getElementById('part-price').value = '';
        document.getElementById('part-quantity').value = '1';
        document.getElementById('part-note').value = '';
        
        document.getElementById('part-modal').classList.remove('hidden');
        document.getElementById('part-name').focus();
    }

    closeModal() {
        document.getElementById('part-modal').classList.add('hidden');
        this.hideSuggestions();
    }

    showSuggestions(input) {
        if (!input.trim() || !this.currentPartType) {
            this.hideSuggestions();
            return;
        }

        const suggestions = this.partSuggestions[this.currentPartType].filter(part => 
            part.name.toLowerCase().includes(input.toLowerCase())
        );

        const suggestionsContainer = document.getElementById('suggestions');
        suggestionsContainer.innerHTML = '';

        if (suggestions.length > 0) {
            suggestions.forEach(part => {
                const div = document.createElement('div');
                div.className = 'px-4 py-2 hover:bg-gray-600 cursor-pointer';
                div.textContent = `${part.name} - ¥${part.price}`;
                div.addEventListener('click', () => {
                    document.getElementById('part-name').value = part.name;
                    document.getElementById('part-price').value = part.price;
                    this.hideSuggestions();
                });
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.classList.remove('hidden');
        } else {
            this.hideSuggestions();
        }
    }

    hideSuggestions() {
        document.getElementById('suggestions').classList.add('hidden');
    }

    showPartSuggestions(partType, input) {
        const suggestionsContainer = document.getElementById(`${partType}-suggestions`);
        suggestionsContainer.innerHTML = '';

        if (!input.trim()) {
            suggestionsContainer.classList.add('hidden');
            return;
        }

        const partNames = {
            cpu: 'CPU',
            motherboard: '主板',
            ram: '内存',
            gpu: '显卡',
            cooling: '散热器',
            storage: '固态硬盘',
            psu: '电源',
            case: '机箱',
            fans: '风扇',
            custom1: document.getElementById('custom-part-1-title').textContent.trim(),
            custom2: document.getElementById('custom-part-2-title').textContent.trim()
        };

        // Add custom input option for all part types
        const customDiv = document.createElement('div');
        customDiv.className = 'px-4 py-3 hover:bg-gray-700 cursor-pointer border border-green-500 rounded-lg mb-2';
        customDiv.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="text-green-400 font-bold">+ 添加自定义型号</span>
                <span class="bg-green-500 text-white px-2 py-1 rounded text-xs">自定义</span>
            </div>
            <div class="grid grid-cols-3 gap-2 text-sm">
                <div>
                    <label class="text-gray-400">型号</label>
                    <div class="text-white">${input}</div>
                </div>
                <div>
                    <label class="text-gray-400">单价</label>
                    <div class="text-yellow-400">¥<input type="number" id="custom-price-${partType}" placeholder="0" step="0.01" class="bg-transparent border-none outline-none w-16 text-yellow-400"></div>
                </div>
                <div>
                    <label class="text-gray-400">数量</label>
                    <div class="text-white"><input type="number" id="custom-quantity-${partType}" value="1" min="1" class="bg-transparent border-none outline-none w-8 text-white"></div>
                </div>
            </div>
        `;
        customDiv.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'INPUT') return; // Let input clicks pass through
            e.preventDefault();
            
            const priceInput = document.getElementById(`custom-price-${partType}`);
            const quantityInput = document.getElementById(`custom-quantity-${partType}`);
            
            const customPart = {
                name: input,
                price: parseFloat(priceInput.value) || 0,
                quantity: parseInt(quantityInput.value) || 1
            };
            
            this.selectPart(partType, customPart);
        });
        suggestionsContainer.appendChild(customDiv);
        
        // For standard parts, show matching suggestions with price and quantity
        const suggestions = this.partSuggestions[partType].filter(part => 
            part.name.toLowerCase().includes(input.toLowerCase())
        );

        if (suggestions.length > 0) {
            const suggestionsTitle = document.createElement('div');
            suggestionsTitle.className = 'px-4 py-2 text-sm text-gray-400 border-b border-gray-700 mb-2';
            suggestionsTitle.textContent = '快速选择（点击添加）：';
            suggestionsContainer.appendChild(suggestionsTitle);
            
            suggestions.forEach(part => {
                const div = document.createElement('div');
                div.className = 'px-4 py-3 hover:bg-gray-700 cursor-pointer border border-gray-700 rounded-lg mb-2';
                div.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium">${part.name}</span>
                        <span class="text-yellow-400 font-bold">¥${part.price}</span>
                    </div>
                    <div class="flex items-center text-sm">
                        <span class="text-gray-400 mr-2">数量:</span>
                        <input type="number" value="1" min="1" id="quantity-${partType}-${part.name}" class="bg-gray-800 border border-gray-600 rounded px-2 py-1 w-12 text-center">
                    </div>
                `;
                div.addEventListener('mousedown', (e) => {
                    if (e.target.tagName === 'INPUT') return; // Let input clicks pass through
                    e.preventDefault();
                    
                    const quantityInput = document.getElementById(`quantity-${partType}-${part.name}`);
                    const quantity = parseInt(quantityInput.value) || 1;
                    
                    const selectedPart = {
                        ...part,
                        quantity: quantity
                    };
                    
                    this.selectPart(partType, selectedPart);
                });
                suggestionsContainer.appendChild(div);
            });
        } else if (partType !== 'custom1' && partType !== 'custom2') {
            const div = document.createElement('div');
            div.className = 'px-4 py-3 text-center text-gray-400';
            div.textContent = `未找到匹配的${partNames[partType]}型号，可使用上方自定义添加`;
            suggestionsContainer.appendChild(div);
        }
        
        suggestionsContainer.classList.remove('hidden');
    }

    selectPart(partType, part) {
        // Check if this part is already added (except for custom parts which can have duplicates)
        if (partType !== 'custom1' && partType !== 'custom2') {
            const existingPart = this.parts[partType].find(p => p.name === part.name);
            if (existingPart) {
                this.showToast(`该${part.name}已添加到配置中`, 'error');
                return;
            }
        }

        const newPart = {
            id: Date.now().toString(),
            name: part.name,
            price: part.price,
            quantity: 1,
            note: '',
            type: partType
        };

        this.parts[partType].push(newPart);
        document.getElementById(`${partType}-search`).value = '';
        document.getElementById(`${partType}-suggestions`).classList.add('hidden');
        this.renderParts();
        this.updateSummary();
        this.saveToLocalStorage();
        this.showToast(`已添加 ${part.name}`);
    }

    addPart() {
        const name = document.getElementById('part-name').value.trim();
        const price = parseFloat(document.getElementById('part-price').value) || 0;
        const quantity = parseInt(document.getElementById('part-quantity').value) || 1;
        const note = document.getElementById('part-note').value.trim();

        if (!name) {
            this.showToast('请输入配件名称', 'error');
            return;
        }

        const part = {
            id: Date.now().toString(),
            name,
            price,
            quantity,
            note,
            type: this.currentPartType
        };

        this.parts[this.currentPartType].push(part);
        this.renderParts();
        this.updateSummary();
        this.saveToLocalStorage();
        this.closeModal();
        this.showToast('配件添加成功！');

        // Add to suggestions if it's a custom part
        if (this.currentPartType === 'custom1' || this.currentPartType === 'custom2') {
            if (!this.partSuggestions[this.currentPartType].find(p => p.name === name)) {
                this.partSuggestions[this.currentPartType].push({ name, price });
            }
        }
    }

    deletePart(type, id) {
        this.parts[type] = this.parts[type].filter(part => part.id !== id);
        this.renderParts();
        this.updateSummary();
        this.saveToLocalStorage();
        this.showToast('配件删除成功！');
    }

    updatePartPrice(type, id, newPrice) {
        const part = this.parts[type].find(p => p.id === id);
        if (part) {
            part.price = parseFloat(newPrice) || 0;
            this.updateSummary();
            this.saveToLocalStorage();
        }
    }

    updatePartQuantity(type, id, newQuantity) {
        const part = this.parts[type].find(p => p.id === id);
        if (part) {
            part.quantity = parseInt(newQuantity) || 1;
            this.updateSummary();
            this.saveToLocalStorage();
        }
    }

    renderParts() {
        Object.keys(this.parts).forEach(type => {
            const container = document.getElementById(`${type}-list`);
            if (!container) return;

            container.innerHTML = '';

            if (this.parts[type].length === 0) {
                const partNames = {
                    cpu: 'CPU',
                    motherboard: '主板',
                    ram: '内存',
                    gpu: '显卡',
                    cooling: '散热器',
                    storage: '固态硬盘',
                    psu: '电源',
                    case: '机箱',
                    fans: '风扇',
                    custom1: document.getElementById('custom-part-1-title').textContent.trim(),
                    custom2: document.getElementById('custom-part-2-title').textContent.trim()
                };
                
                const icons = {
                    cpu: 'cpu',
                    motherboard: 'layers',
                    ram: 'memory-stick',
                    gpu: 'monitor-smartphone',
                    cooling: 'snowflake',
                    storage: 'hard-drive',
                    psu: 'zap',
                    case: 'case-sensitive',
                    fans: 'fan',
                    custom1: 'gift',
                    custom2: 'gift'
                };

                container.innerHTML = `
                    <div class="text-center text-gray-400 py-8">
                        <i data-lucide="${icons[type]}" class="w-12 h-12 mx-auto mb-4 opacity-50"></i>
                        <p>请在上方搜索框中输入${partNames[type]}型号</p>
                    </div>
                `;
            } else {
                this.parts[type].forEach(part => {
                    const partElement = document.createElement('div');
                    partElement.className = 'bg-gray-800 rounded-xl p-4 slide-in';
                    
                    // Special styling for different part types
                    const typeStyles = {
                        cpu: 'border-2 border-cyan-500',
                        motherboard: 'border-2 border-purple-500',
                        ram: 'border-2 border-green-500',
                        gpu: 'border-2 border-red-500',
                        cooling: 'border-2 border-blue-500',
                        storage: 'border-2 border-yellow-500',
                        psu: 'border-2 border-orange-500',
                        case: 'border-2 border-indigo-500',
                        fans: 'border-2 border-teal-500',
                        custom1: 'border-2 border-pink-500',
                        custom2: 'border-2 border-lime-500'
                    };
                    
                    if (typeStyles[type]) {
                        partElement.classList.add(...typeStyles[type].split(' '));
                    }
                    
                    partElement.innerHTML = `
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h3 class="text-lg font-bold">${part.name}</h3>
                                ${part.note ? `<p class="text-gray-400 text-sm mt-1">${part.note}</p>` : ''}
                            </div>
                            <button class="delete-part-btn text-red-500 hover:text-red-400" data-type="${type}" data-id="${part.id}">
                                <i data-lucide="trash-2"></i>
                            </button>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center space-x-4">
                                <div>
                                    <label class="text-sm text-gray-400">单价</label>
                                    <div class="flex items-center">
                                        <span class="text-yellow-400 mr-2">¥</span>
                                        <input type="number" value="${part.price}" step="0.01" 
                                            class="update-price-input bg-gray-700 border border-gray-600 rounded p-1 text-white w-24"
                                            data-type="${type}" data-id="${part.id}">
                                    </div>
                                </div>
                                <div>
                                    <label class="text-sm text-gray-400">数量</label>
                                    <input type="number" value="${part.quantity}" min="1" 
                                        class="update-quantity-input bg-gray-700 border border-gray-600 rounded p-1 text-white w-16"
                                        data-type="${type}" data-id="${part.id}">
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-sm text-gray-400">小计</div>
                                <div class="text-xl font-bold text-yellow-400">¥${(part.price * part.quantity).toFixed(2)}</div>
                            </div>
                        </div>
                    `;
                    container.appendChild(partElement);
                });

                // Bind events for new elements
                container.querySelectorAll('.delete-part-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const type = e.currentTarget.dataset.type;
                        const id = e.currentTarget.dataset.id;
                        this.deletePart(type, id);
                    });
                });

                container.querySelectorAll('.update-price-input').forEach(input => {
                    input.addEventListener('change', (e) => {
                        const type = e.target.dataset.type;
                        const id = e.target.dataset.id;
                        this.updatePartPrice(type, id, e.target.value);
                    });
                });

                container.querySelectorAll('.update-quantity-input').forEach(input => {
                    input.addEventListener('change', (e) => {
                        const type = e.target.dataset.type;
                        const id = e.target.dataset.id;
                        this.updatePartQuantity(type, id, e.target.value);
                    });
                });
            }
        });

        lucide.createIcons();
    }

    updateSummary() {
        const summaryList = document.getElementById('summary-list');
        const totalPriceElement = document.getElementById('total-price');
        
        summaryList.innerHTML = '';
        
        let total = 0;
        let hasParts = false;

        Object.keys(this.parts).forEach(type => {
            this.parts[type].forEach(part => {
                hasParts = true;
                const subtotal = part.price * part.quantity;
                total += subtotal;

                const item = document.createElement('div');
                item.className = 'flex justify-between items-center p-3 bg-gray-800 rounded-lg';
                item.innerHTML = `
                    <div class="flex-1">
                        <div class="font-medium">${part.name}</div>
                        <div class="text-sm text-gray-400">¥${part.price.toFixed(2)} × ${part.quantity}</div>
                    </div>
                    <div class="text-yellow-400 font-bold">¥${subtotal.toFixed(2)}</div>
                `;
                summaryList.appendChild(item);
            });
        });

        if (!hasParts) {
            summaryList.innerHTML = `
                <div class="text-center text-gray-400 py-8">
                    <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-4 opacity-50"></i>
                    <p>还没有添加任何配件</p>
                </div>
            `;
        }

        totalPriceElement.textContent = `¥${total.toFixed(2)}`;
        lucide.createIcons();
    }

    clearAll() {
        if (confirm('确定要清空所有配件吗？此操作不可恢复。')) {
            Object.keys(this.parts).forEach(type => {
                this.parts[type] = [];
            });
            this.renderParts();
            this.updateSummary();
            this.saveToLocalStorage();
            this.showToast('已清空所有配件');
        }
    }

    saveConfig() {
        const configName = prompt('请输入配置名称：');
        if (configName) {
            const config = {
                name: configName,
                parts: JSON.parse(JSON.stringify(this.parts)),
                totalPrice: this.calculateTotal(),
                timestamp: Date.now()
            };

            const savedConfigs = JSON.parse(localStorage.getItem('savedConfigs') || '[]');
            savedConfigs.push(config);
            localStorage.setItem('savedConfigs', JSON.stringify(savedConfigs));
            
            this.showToast('配置保存成功！');
        }
    }
    
    shareConfig() {
        const configData = {
            parts: this.parts,
            shopName: document.getElementById('shop-name').textContent,
            customTitles: {
                custom1: document.getElementById('custom-part-1-title').textContent,
                custom2: document.getElementById('custom-part-2-title').textContent
            }
        };
        
        const encodedData = btoa(JSON.stringify(configData));
        const shareUrl = `${window.location.origin}${window.location.pathname}?config=${encodedData}`;
        
        navigator.clipboard.writeText(shareUrl).then(() => {
            this.showToast('配置链接已复制到剪贴板！');
        }).catch(() => {
            prompt('配置链接:', shareUrl);
        });
    }

    loadSharedConfig() {
        const urlParams = new URLSearchParams(window.location.search);
        const configData = urlParams.get('config');
        
        if (configData) {
            try {
                const decodedData = JSON.parse(atob(configData));
                this.parts = decodedData.parts;
                
                if (decodedData.shopName) {
                    document.getElementById('shop-name').textContent = decodedData.shopName;
                }
                
                if (decodedData.customTitles) {
                    if (decodedData.customTitles.custom1) {
                        document.getElementById('custom-part-1-title').innerHTML = `<i data-lucide="gift" class="mr-2"></i> ${decodedData.customTitles.custom1}`;
                    }
                    if (decodedData.customTitles.custom2) {
                        document.getElementById('custom-part-2-title').innerHTML = `<i data-lucide="gift" class="mr-2"></i> ${decodedData.customTitles.custom2}`;
                    }
                }
                
                this.renderParts();
                this.updateSummary();
                this.showToast('已加载共享配置');
            } catch (e) {
                console.error('Failed to load shared config:', e);
            }
        }
    }

    calculateTotal() {
        let total = 0;
        Object.keys(this.parts).forEach(type => {
            this.parts[type].forEach(part => {
                total += part.price * part.quantity;
            });
        });
        return total;
    }

    editShopName() {
        const newName = prompt('请输入店铺名称：', document.getElementById('shop-name').textContent);
        if (newName) {
            document.getElementById('shop-name').textContent = newName;
            localStorage.setItem('shopName', newName);
        }
    }

    editCustomPartTitle(type) {
        const currentTitle = type === 'custom1' 
            ? document.getElementById('custom-part-1-title').textContent.trim()
            : document.getElementById('custom-part-2-title').textContent.trim();
        
        const newTitle = prompt('请输入配件类别名称：', currentTitle);
        if (newTitle) {
            const element = type === 'custom1' 
                ? document.getElementById('custom-part-1-title')
                : document.getElementById('custom-part-2-title');
            
            element.innerHTML = `<i data-lucide="gift" class="mr-2"></i> ${newTitle}`;
            localStorage.setItem(`${type}Title`, newTitle);
            lucide.createIcons();
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('pcParts', JSON.stringify(this.parts));
    }

    loadFromLocalStorage() {
        // Load parts
        const savedParts = localStorage.getItem('pcParts');
        if (savedParts) {
            this.parts = JSON.parse(savedParts);
        }

        // Load shop name
        const savedShopName = localStorage.getItem('shopName');
        if (savedShopName) {
            document.getElementById('shop-name').textContent = savedShopName;
        }

        // Load custom part titles
        const custom1Title = localStorage.getItem('custom1Title');
        if (custom1Title) {
            document.getElementById('custom-part-1-title').innerHTML = `<i data-lucide="gift" class="mr-2"></i> ${custom1Title}`;
        }

        const custom2Title = localStorage.getItem('custom2Title');
        if (custom2Title) {
            document.getElementById('custom-part-2-title').innerHTML = `<i data-lucide="gift" class="mr-2"></i> ${custom2Title}`;
        }

        this.renderParts();
        
        // Check for shared config
        this.loadSharedConfig();
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        
        // Set color based on type
        if (type === 'error') {
            toast.className = toast.className.replace('bg-green-500', 'bg-red-500');
        } else {
            toast.className = toast.className.replace('bg-red-500', 'bg-green-500');
        }
        
        toast.classList.remove('translate-y-20', 'opacity-0');
        
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DIYPCBuilder();
});