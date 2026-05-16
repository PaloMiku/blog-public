import{bo as e}from"./CXSSZLwc.js";async function o(t){return e("content",t.path,{fields:["date","title","type"]}).order("date","ASC").where("stem","LIKE","posts/%")}export{o as default};
