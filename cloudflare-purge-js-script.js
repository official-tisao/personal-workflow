function treaturl(forminp){
    document.querySelector("button.c_mj.c_mk.c_ml.c_mm.c_mn.c_mo.c_mp.c_mq.c_mr.c_ms.c_mt.c_mu.c_mv.c_ab.c_s.c_t.c_mw.c_eg.c_eb.c_mx.c_my.c_mz.c_na.c_nb.c_nc.c_nd.c_ne.c_n.c_u.c_nf.c_ng.c_kw.c_av.c_nh.c_ni.c_al.c_hc.c_dx.c_ed.c_cl.c_bq.c_bm.c_lc.c_ld.c_nj.c_nk.c_ew.c_fs.c_k").click();

    document.querySelector("#cf-form-input4").value = forminp;

    document.querySelector("div.c_n.c_mg.c_nu.c_fs.c_nv .c_mj.c_mk.c_ml.c_mm.c_mn.c_mo.c_mp.c_mq.c_mr.c_ms.c_mt.c_mu.c_mv.c_ab.c_s.c_t.c_mw.c_eg.c_eb.c_mx.c_my.c_mz.c_na.c_nb.c_nc.c_nd.c_ne.c_n.c_u.c_nf.c_ng.c_kw.c_av.c_nh.c_ni.c_al.c_hc.c_dx.c_ed.c_bd.c_bq.c_bm.c_lc.c_ld.c_nj.c_nk.c_ew.c_fs.c_nl").click();
}

var last_index=0;
var forminp="";

var timerts = setInterval(function () {
    forminp="";
    for(var i =last_index; i<urls.length; i++){
        forminp += "\r\n" + urls[i];
    }
    last_index = i;
    
    treaturl(forminp);
    if(i ==urls.length){ clearInterval(timerts); } 
}, 5000);


