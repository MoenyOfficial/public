const products = [
    {
        id: "modern-ui-kit",
        name: "Modern UI Kit",
        description: "Complete UI system with modern design elements",
        category: "interface",
        price: "free",
        priceTag: "Free",
        priceTagColor: "green",
        image: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800",
        badge: "Interface",
        badgeColor: "blue",
        details: {
            longDescription: "A comprehensive UI kit built for Roblox games, featuring modern design elements and smooth animations.",
            features: ["20+ Pre-built components", "Customizable themes", "Responsive layouts", "Animation system", "Touch support"]
        },
        sourceStructure: {
            'ReplicatedStorage': {
                type: 'folder',
                icon: 'database',
                color: 'blue',
                children: {
                    'UIKit': {
                        type: 'folder',
                        icon: 'layer-group',
                        color: 'purple',
                        children: {
                            'Components': {
                                type: 'folder',
                                icon: 'puzzle-piece',
                                color: 'green',
                                children: {
                                    'Button.lua': {
                                        type: 'file',
                                        icon: 'code',
                                        color: 'yellow',
                                        content: `
local Button = {}
Button.__index = Button

function Button.new(text, theme)
    local self = setmetatable({}, Button)
    self.text = text
    self.theme = theme or "default"
    return self
end

return Button`
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "combat-pro",
        name: "Combat System Pro",
        description: "Advanced combat mechanics with hitbox detection",
        category: "systems",
        price: "paid",
        priceTag: "R$ 799",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        badge: "Systems",
        badgeColor: "purple",
        details: {
            longDescription: "Professional combat system with hitbox detection and damage calculations.",
            features: ["Dynamic hitboxes", "Damage system", "Effect manager", "Animation integration"]
        },
        sourceStructure: {
            'ServerScriptService': {
                type: 'folder',
                icon: 'server',
                color: 'red',
                children: {
                    'CombatSystem': {
                        type: 'folder',
                        icon: 'swords',
                        color: 'purple',
                        children: {
                            'DamageCalculator.lua': {
                                type: 'file',
                                icon: 'calculator',
                                color: 'blue',
                                content: `
local DamageCalculator = {}

function DamageCalculator:Calculate(base, multiplier)
    return base * multiplier
end

return DamageCalculator`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "inventory-system",
        name: "Inventory System",
        description: "Flexible inventory management solution",
        category: "systems",
        price: "paid",
        priceTag: "R$ 599",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800",
        badge: "Systems",
        badgeColor: "purple",
        details: {
            longDescription: "Complete inventory system with drag-and-drop functionality.",
            features: ["Item database", "Drag & drop", "Data saving", "Categories"]
        },
        sourceStructure: {
            'ReplicatedStorage': {
                type: 'folder',
                icon: 'database',
                color: 'blue',
                children: {
                    'InventorySystem': {
                        type: 'folder',
                        icon: 'box',
                        color: 'orange',
                        children: {
                            'ItemManager.lua': {
                                type: 'file',
                                icon: 'code',
                                color: 'yellow',
                                content: `
local ItemManager = {}

function ItemManager:AddItem(player, itemId)
    -- Implementation
end

return ItemManager`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "animation-framework",
        name: "Animation Framework",
        description: "Professional animation system",
        category: "frameworks",
        price: "free",
        priceTag: "Free",
        priceTagColor: "green",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        badge: "Framework",
        badgeColor: "yellow",
        details: {
            longDescription: "Advanced animation framework with state management.",
            features: ["State machine", "Blend trees", "Custom events", "Timeline editor"]
        },
        sourceStructure: {
            'ReplicatedFirst': {
                type: 'folder',
                icon: 'zap',
                color: 'yellow',
                children: {
                    'AnimationFramework': {
                        type: 'folder',
                        icon: 'film',
                        color: 'purple',
                        children: {
                            'Animator.lua': {
                                type: 'file',
                                icon: 'code',
                                color: 'blue',
                                content: `
local Animator = {}

function Animator:PlayAnimation(animationId)
    -- Implementation
end

return Animator`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "debug-suite",
        name: "Debug Suite",
        description: "Professional debugging tools",
        category: "tools",
        price: "free",
        priceTag: "Free",
        priceTagColor: "green",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
        badge: "Tools",
        badgeColor: "red",
        details: {
            longDescription: "Comprehensive debugging toolkit with performance monitoring.",
            features: ["Performance profiler", "Network monitor", "Console commands", "Visual debugging"]
        },
        sourceStructure: {
            'ServerStorage': {
                type: 'folder',
                icon: 'hard-drive',
                color: 'orange',
                children: {
                    'DebugTools': {
                        type: 'folder',
                        icon: 'bug',
                        color: 'red',
                        children: {
                            'Profiler.lua': {
                                type: 'file',
                                icon: 'chart-line',
                                color: 'green',
                                content: `
local Profiler = {}

function Profiler:StartProfiling(tag)
    -- Implementation
end

return Profiler`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "notification-system",
        name: "Notification System",
        description: "Dynamic notification manager",
        category: "interface",
        price: "paid",
        priceTag: "R$ 299",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800",
        badge: "Interface",
        badgeColor: "blue",
        details: {
            longDescription: "Feature-rich notification system with animations.",
            features: ["Multiple styles", "Queue system", "Custom animations", "Sound effects"]
        },
        sourceStructure: {
            'StarterGui': {
                type: 'folder',
                icon: 'desktop',
                color: 'purple',
                children: {
                    'NotificationSystem': {
                        type: 'folder',
                        icon: 'bell',
                        color: 'blue',
                        children: {
                            'NotificationManager.lua': {
                                type: 'file',
                                icon: 'code',
                                color: 'yellow',
                                content: `
local NotificationManager = {}

function NotificationManager:Show(message, type)
    -- Implementation
end

return NotificationManager`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "data-framework",
        name: "Data Framework",
        description: "Robust data management solution",
        category: "frameworks",
        price: "paid",
        priceTag: "R$ 899",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        badge: "Framework",
        badgeColor: "yellow",
        details: {
            longDescription: "Complete data management framework with caching.",
            features: ["Auto-saving", "Data migration", "Backup system", "Analytics"]
        },
        sourceStructure: {
            'ServerScriptService': {
                type: 'folder',
                icon: 'server',
                color: 'red',
                children: {
                    'DataFramework': {
                        type: 'folder',
                        icon: 'database',
                        color: 'blue',
                        children: {
                            'DataStore.lua': {
                                type: 'file',
                                icon: 'save',
                                color: 'green',
                                content: `
local DataStore = {}

function DataStore:SaveData(player, data)
    -- Implementation
end

return DataStore`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "quest-system",
        name: "Quest System",
        description: "Dynamic quest management system",
        category: "systems",
        price: "paid",
        priceTag: "R$ 699",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
        badge: "Systems",
        badgeColor: "purple",
        details: {
            longDescription: "Complete quest system with progress tracking.",
            features: ["Quest builder", "Progress tracking", "Reward system", "Quest chains"]
        },
        sourceStructure: {
            'ReplicatedStorage': {
                type: 'folder',
                icon: 'database',
                color: 'blue',
                children: {
                    'QuestSystem': {
                        type: 'folder',
                        icon: 'map',
                        color: 'yellow',
                        children: {
                            'QuestManager.lua': {
                                type: 'file',
                                icon: 'scroll',
                                color: 'purple',
                                content: `
local QuestManager = {}

function QuestManager:StartQuest(player, questId)
    -- Implementation
end

return QuestManager`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "physics-toolkit",
        name: "Physics Toolkit",
        description: "Advanced physics simulation tools",
        category: "tools",
        price: "paid",
        priceTag: "R$ 499",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
        badge: "Tools",
        badgeColor: "red",
        details: {
            longDescription: "Professional physics toolkit for realistic simulations.",
            features: ["Constraint builder", "Joint system", "Physics debugger", "Performance optimizer"]
        },
        sourceStructure: {
            'Workspace': {
                type: 'folder',
                icon: 'box',
                color: 'green',
                children: {
                    'PhysicsToolkit': {
                        type: 'folder',
                        icon: 'atom',
                        color: 'blue',
                        children: {
                            'PhysicsSimulator.lua': {
                                type: 'file',
                                icon: 'code',
                                color: 'yellow',
                                content: `
local PhysicsSimulator = {}

function PhysicsSimulator:ApplyForce(part, force)
    -- Implementation
end

return PhysicsSimulator`
                            }
                        }
                    }
                }
            }
        }
    },
    {
        id: "dialogue-system",
        name: "Dialogue System",
        description: "Advanced dialogue management",
        category: "systems",
        price: "paid",
        priceTag: "R$ 599",
        priceTagColor: "blue",
        image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800",
        badge: "Systems",
        badgeColor: "purple",
        details: {
            longDescription: "Feature-rich dialogue system with branching conversations.",
            features: ["Dialogue editor", "Branching paths", "Character system", "Event triggers"]
        },
        sourceStructure: {
            'ReplicatedStorage': {
                type: 'folder',
                icon: 'database',
                color: 'blue',
                children: {
                    'DialogueSystem': {
                        type: 'folder',
                        icon: 'comments',
                        color: 'purple',
                        children: {
                            'DialogueManager.lua': {
                                type: 'file',
                                icon: 'code',
                                color: 'yellow',
                                content: `
local DialogueManager = {}

function DialogueManager:StartDialogue(npcId, playerId)
    -- Implementation
end

return DialogueManager`
                            }
                        }
                    }
                }
            }
        }
    }
];



function getProductById(productId) {
    return products.find(p => p.id === productId);
}

async function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const loadingState = document.getElementById('loadingState');
    const noResults = document.getElementById('noResults');

    try {
        // Show loading state
        loadingState.classList.remove('hidden');
        productsGrid.innerHTML = '';

        // Simulate loading delay (remove in production)
        await new Promise(resolve => setTimeout(resolve, 500));

        function createProductCard(product) {
            return `
            <div class="product-card rounded-xl overflow-hidden relative group" data-category="${product.category}" data-price="${product.price}">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500">
    
                <div class="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                    <div class="space-y-3">
                        <div class="flex items-center space-x-2">
                            <span class="category-badge">${product.category}</span>
                            ${product.price === 'free' ? 
                                '<span class="free-badge">Free</span>' : 
                                `<span class="price-badge">${product.priceTag}</span>`
                            }
                        </div>
            
                        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">${product.name}</h3>
                        <p class="text-gray-300 text-sm line-clamp-2">${product.description}</p>
            
                        <div class="flex items-center justify-between pt-4">
                            <div class="flex items-center space-x-4">
                                <span class="flex items-center space-x-1">
                                    <i class="fas fa-download text-blue-400"></i>
                                    <span class="text-sm text-gray-300">1.2k</span>
                                </span>
                                <span class="flex items-center space-x-1">
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <span class="text-sm text-gray-300">4.8</span>
                                </span>
                            </div>
                            <a href="product-details.html?id=${product.id}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                                <span>View Details</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
        // Hide loading state
        loadingState.classList.add('hidden');

        // Show no results if needed
        if (products.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    } catch (error) {
        console.error('Error rendering products:', error);
        loadingState.classList.add('hidden');
    }
}

function filterProducts() {
    const selectedCategory = document.querySelector('.category-filter:checked').dataset.category;
    const selectedPrice = document.querySelector('.price-filter:checked').dataset.price;
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();

    document.querySelectorAll('.product-card').forEach(card => {
        const matchesCategory = selectedCategory === 'all' || card.dataset.category === selectedCategory;
        const matchesPrice = selectedPrice === 'all' || card.dataset.price === selectedPrice;
        const matchesSearch = card.textContent.toLowerCase().includes(searchTerm);

        card.style.display = (matchesCategory && matchesPrice && matchesSearch) ? '' : 'none';
    });
}

// Event listeners
document.querySelectorAll('.category-filter, .price-filter').forEach(radio => {
    radio.addEventListener('change', filterProducts);
});

document.getElementById('productSearch').addEventListener('input', filterProducts);

// Initialize products
renderProducts();
