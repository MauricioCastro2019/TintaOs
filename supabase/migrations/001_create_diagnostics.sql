-- TintaOS: Tabla de diagnósticos de tatuadores
-- Ejecuta esto en el SQL Editor de tu proyecto en supabase.com

create table if not exists diagnostics (
  id                      uuid        default gen_random_uuid() primary key,
  created_at              timestamptz default now(),

  -- Bloque 1: Quién eres
  nombre                  text        not null,
  nombre_artistico        text,
  ciudad                  text        not null,
  contacto                text        not null,
  instagram               text,
  tiene_sitio_web         text,

  -- Bloque 2: Etapa actual
  etapa_actual            text,
  etapa_detalle           text,

  -- Bloque 3: Cómo trabaja hoy
  trabaja_solo            text,
  donde_atiende           text,
  como_recibe_solicitudes text,
  como_organiza_citas     text,
  maneja_anticipos        text,
  trabaja_multi_sesion    text,
  vende_disenos           text,

  -- Bloque 4: Dolores
  dolores                 text[],
  otro_dolor              text,

  -- Bloque 5: Herramientas de interés
  herramientas_interes    text[],

  -- Bloque 6: Identidad artística
  estilos                 text[],
  que_te_diferencia       text,
  tipo_presencia          text,
  que_sienta_al_entrar    text,
  tipo_cliente_quieres    text,

  -- Bloque 7: Visión de crecimiento
  vision_crecimiento      text,
  metas_interes           text[],

  -- Bloque 8: Cierre
  quieres_propuesta       text,
  acepta_conversacion     text,
  una_cosa_herramienta    text
);

-- Índices útiles para análisis
create index if not exists idx_diagnostics_etapa    on diagnostics (etapa_actual);
create index if not exists idx_diagnostics_ciudad   on diagnostics (ciudad);
create index if not exists idx_diagnostics_created  on diagnostics (created_at desc);

-- RLS: solo permite INSERT público (anon), SELECT solo autenticados o service role
alter table diagnostics enable row level security;

create policy "Cualquiera puede enviar diagnóstico"
  on diagnostics for insert
  to anon
  with check (true);

-- Para leer los datos desde tu dashboard usa la service_role key o desactiva RLS temporalmente.
-- create policy "Solo admins pueden leer"
--   on diagnostics for select
--   to authenticated
--   using (true);
