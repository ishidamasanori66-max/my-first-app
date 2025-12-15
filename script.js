// HTMLの要素を取得
const itemNameInput = document.getElementById("itemName");
const itemQtyInput = document.getElementById("itemQty");
const addBtn = document.getElementById("addBtn");
const inventoryList = document.getElementById("inventoryList");

// ■ データを入れておく箱（配列）
// アプリ起動時に、保存されたデータがあれば読み込む。なければ空っぽでスタート。
let items = JSON.parse(localStorage.getItem("stockData")) || [];

// ■ 画面を描画（表示）する関数
function renderList() {
    // 1. 一旦リストを全部空にする
    inventoryList.innerHTML = "";

    // 2. データの数だけループしてリストを作る
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.qty}個 `;

        // 削除ボタン
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        
        // 削除ボタンが押されたら
        deleteBtn.addEventListener("click", function() {
            deleteItem(index); // その場所（index）のデータを消す関数を呼ぶ
        });

        li.appendChild(deleteBtn);
        inventoryList.appendChild(li);
    });
}

// ■ データを保存する関数
function saveData() {
    // itemsの中身を文字に変換して、ブラウザの倉庫（localStorage）にしまう
    localStorage.setItem("stockData", JSON.stringify(items));
}

// ■ データを追加する処理
addBtn.addEventListener("click", function() {
    const name = itemNameInput.value;
    const qty = itemQtyInput.value;

    if (name === "") {
        alert("商品名を入力してください！");
        return;
    }

    // データを箱（配列）に追加する
    items.push({ name: name, qty: qty });

    saveData();   // 保存！
    renderList(); // 画面更新！

    // 入力欄クリア
    itemNameInput.value = "";
    itemQtyInput.value = "1";
});

// ■ データを削除する関数
function deleteItem(index) {
    // 配列から、その場所（index）のデータを1つ取り除く
    items.splice(index, 1);

    saveData();   // 保存！
    renderList(); // 画面更新！
}

// 最後に、最初の1回画面を描画する（保存データがあればこれで表示される）
renderList();