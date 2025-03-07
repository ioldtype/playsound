function calculatePlaysound() {
    let basePlaysound = parseFloat(document.getElementById("basePlaysound").value);
    let pitchbend = parseInt(document.getElementById("pitchbend").value);

    if (isNaN(basePlaysound) || isNaN(pitchbend)) {
        document.getElementById("result").textContent = "正しい値を入力してください。";
        return;
    }

    // クリック数を求める (補正値 682.67)
    let n = 12 + (pitchbend / 682.67);

    // playsound を計算
    let newPlaysound = basePlaysound * Math.pow(2, (n - 12) / 12);

    // 結果を表示
    document.getElementById("result").textContent = `Playsound: ${newPlaysound.toFixed(9)}`;

    // 履歴を追加
    let history = document.getElementById("history");
    let listItem = document.createElement("li");
    listItem.textContent = `基準: ${basePlaysound}, Pitchbend: ${pitchbend} → ${newPlaysound.toFixed(9)}`;
    
    // コピー機能を追加
    listItem.addEventListener("click", function () {
        navigator.clipboard.writeText(newPlaysound.toFixed(9));
        alert("コピーしました: " + newPlaysound.toFixed(9));
    });

    history.appendChild(listItem);

    // 履歴が 10 個を超えたら最古のものを削除
    if (history.children.length > 10) {
        history.removeChild(history.children[0]);
    }
}

function clearHistory() {
    document.getElementById("history").innerHTML = "";
}
