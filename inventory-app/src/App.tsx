import React, { useState, useEffect } from 'react';
import './App.css';

interface StockItem {
  id: number;
  name: string;
  quantity: number;
}

function App() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number | string>(1);

  // 初期データ読み込み（保存機能付き）
  const [items, setItems] = useState<StockItem[]>(() => {
    const savedItems = localStorage.getItem('inventoryData');
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [
        { id: 1, name: 'ぶどう', quantity: 8 },
        { id: 2, name: 'お米', quantity: 1 },
        { id: 3, name: '焼酎', quantity: 5 },
      ];
    }
  });

  // データ変更時に自動保存
  useEffect(() => {
    localStorage.setItem('inventoryData', JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (name === '' || quantity === '') return;
    const newItem: StockItem = {
      id: Date.now(),
      name: name,
      quantity: Number(quantity),
    };
    setItems([...items, newItem]);
    setName('');
    setQuantity(1);
  };

  const handleDelete = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  // ★新機能：在庫を1つ増やす
  const handleIncrement = (id: number) => {
    setItems(items.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // ★新機能：在庫を1つ減らす（0未満にはしない）
  const handleDecrement = (id: number) => {
    setItems(items.map((item) => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // ★新機能：合計個数を計算する（reduceという機能を使います）
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <div className="main-card">
        <h1>📦 在庫管理アプリ</h1>
        
        {/* ★ここに追加：合計数の表示エリア */}
        <div className="summary-card">
          <span className="summary-text">総在庫数:</span>
          <span className="summary-count">{totalQuantity} 個</span>
        </div>
        
        <div className="input-group">
          <input
            type="text"
            placeholder="商品名"
            className="input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="input-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="add-button" onClick={handleAdd}>
            追加
          </button>
        </div>

        <div className="list-section">
          <h2>現在の在庫リスト</h2>
          <div className="inventory-list">
            {items.map((item) => (
              <div key={item.id} className="inventory-item">
                {/* 商品名 */}
                <span className="item-name">{item.name}</span>

                {/* 操作エリア（ー 個数 ＋） */}
                <div className="quantity-controls">
                  <button 
                    className="qty-btn" 
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  
                  <span className="item-quantity">{item.quantity}個</span>
                  
                  <button 
                    className="qty-btn" 
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* 削除ボタン */}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  削除
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;