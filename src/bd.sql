CREATE TABLE "fr_apprastreo" (
  "apprast_id" int4 NOT NULL,
  "apprast_gls" varchar(255),
  PRIMARY KEY ("apprast_id")
);

CREATE TABLE "fr_cias" (
  "cia_id" int4 NOT NULL,
  "cia_gls" varchar(255),
  PRIMARY KEY ("cia_id")
);

CREATE TABLE "fr_espexclusiva" (
  "espex_id" int4 NOT NULL,
  "espx_marcagls" varchar(255),
  "espx_modelo" varchar(255),
  "espx_caracteristica" varchar(255),
  "espx_nserie" varchar(255),
  "espx_obs" varchar(255),
  "frm_id" int4,
  "marca_id" int4,
  PRIMARY KEY ("espex_id")
);

CREATE TABLE "fr_marcas" (
  "marca_id" int4 NOT NULL,
  "marca_gls" varchar(255),
  PRIMARY KEY ("marca_id")
);

CREATE TABLE "fr_tipodisp" (
  "tipdisp_id" int4 NOT NULL,
  "tipdisp_gls" varchar(255),
  PRIMARY KEY ("tipdisp_id")
);

CREATE TABLE "frobos_dispositivos" (
  "disp_id" int4 NOT NULL,
  "disp_cuenta" varchar(255),
  "disp_netflix" bool,
  "disp_apprastreo" bool,
  "disp_ip" varchar(255),
  "frm_id" int4,
  "marca_id" int4,
  "cia_id" int4,
  "tipdisp_ip" int4,
  "apprast_id" int4,
  PRIMARY KEY ("disp_id")
);

CREATE TABLE "frobos_main" (
  "frm_id" int2 NOT NULL,
  "frm_lugar" varchar(255),
  "frm_fecha" date,
  "frm_hora" time(255),
  "frm_imp_nombre" varchar(255),
  "frm_imp_apodo" varchar(255),
  "frm_imp_domicilio" varchar(255),
  "frm_imp_otrodado" varchar(255),
  "frm_cam" bool,
  "frm_dato_cam" varchar(255),
  "frm_observaciones" varchar(255),
  "frm_medio_transp" bool,
  "frm_medio_trans_patente" varchar(255),
  "frm_medio_trans_color" varchar(255),
  "frm_medio_trans_detalles" varchar(255),
  PRIMARY KEY ("frm_id")
);

CREATE TABLE "frrobos_camRedpublica" (
  "camrp_id" int4 NOT NULL,
  "camrp_indent" varchar(255),
  "camrp_responsalbe" varchar(255),
  "camrp_dato" varchar(255),
  "frm_id" int4,
  CONSTRAINT "_copy_1" PRIMARY KEY ("camrp_id")
);

CREATE TABLE "frrobos_camSacfi" (
  "camsacfi_id" int4 NOT NULL,
  "camsacfi_indent" varchar(255),
  "camsacfi_responsalbe" varchar(255),
  "camsacfi_dato" varchar(255),
  "frm_id" int4,
  CONSTRAINT "_copy_2" PRIMARY KEY ("camsacfi_id")
);

ALTER TABLE "fr_espexclusiva" ADD CONSTRAINT "fk_esexp_frm" FOREIGN KEY ("frm_id") REFERENCES "frobos_main" ("frm_id");
ALTER TABLE "fr_espexclusiva" ADD CONSTRAINT "fk_marca_espec" FOREIGN KEY ("marca_id") REFERENCES "fr_marcas" ("marca_id");
ALTER TABLE "frobos_dispositivos" ADD CONSTRAINT "fk_frmdisp" FOREIGN KEY ("frm_id") REFERENCES "frobos_main" ("frm_id");
ALTER TABLE "frobos_dispositivos" ADD CONSTRAINT "fk_aprastreo" FOREIGN KEY ("apprast_id") REFERENCES "fr_apprastreo" ("apprast_id");
ALTER TABLE "frobos_dispositivos" ADD CONSTRAINT "fk_marca" FOREIGN KEY ("marca_id") REFERENCES "fr_marcas" ("marca_id");
ALTER TABLE "frobos_dispositivos" ADD CONSTRAINT "fk_tipodistp" FOREIGN KEY ("tipdisp_ip") REFERENCES "fr_tipodisp" ("tipdisp_id");
ALTER TABLE "frobos_dispositivos" ADD CONSTRAINT "fk_cia" FOREIGN KEY ("cia_id") REFERENCES "fr_cias" ("cia_id");
ALTER TABLE "frrobos_camRedpublica" ADD CONSTRAINT "fk_frid_copy_1" FOREIGN KEY ("frm_id") REFERENCES "frobos_main" ("frm_id");
ALTER TABLE "frrobos_camSacfi" ADD CONSTRAINT "fk_frid" FOREIGN KEY ("frm_id") REFERENCES "frobos_main" ("frm_id");

