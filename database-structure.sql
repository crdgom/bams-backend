BEGIN;

-- Creación de tablas

CREATE TABLE IF NOT EXISTS public."user"
(
    id serial NOT NULL,
    name text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    phone text NOT NULL,
    role_id integer NOT NULL,
    property_id integer NOT NULL,
    birthdate date NOT NULL,
    crated_at date NOT NULL,
    updated_at date NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public."user"
    IS 'User table';

CREATE TABLE IF NOT EXISTS public.role
(
    id serial NOT NULL,
    type text NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.role
    IS 'Roles table';

CREATE TABLE IF NOT EXISTS public.condominium
(
    id serial NOT NULL,
    user_id integer NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    city integer NOT NULL,
    state integer NOT NULL,
    postal_code text NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.condominium
    IS 'Condominium table';

CREATE TABLE IF NOT EXISTS public.property
(
    id serial NOT NULL,
    condominium_id integer NOT NULL,
    property_number text NOT NULL,
    due_date date NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.property
    IS 'Property table';

CREATE TABLE IF NOT EXISTS public.transaction
(
    id serial NOT NULL,
    amount double precision NOT NULL,
    detail text NOT NULL,
    transaction_type_id integer NOT NULL,
    property_id integer NOT NULL,
    payment_type_id integer NOT NULL,
    payment_status_id integer NOT NULL,
    created_at date NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.transaction
    IS 'Transaction table';

CREATE TABLE IF NOT EXISTS public.transaction_type
(
    id serial NOT NULL,
    name text NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.transaction_type
    IS 'Transactions type table';

CREATE TABLE IF NOT EXISTS public.payment_type
(
    id serial NOT NULL,
    type text NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.payment_type
    IS 'Payments type table';

CREATE TABLE IF NOT EXISTS public.payment_status
(
    id serial NOT NULL,
    status text NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public.payment_status
    IS 'Payments status table';

CREATE TABLE IF NOT EXISTS public.property_transaction
(
    id serial NOT NULL,
    property_id integer NOT NULL,
    transaction_property_id integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.property_user
(
    id serial NOT NULL,
    property_id integer NOT NULL,
    user_property_id integer NOT NULL,
    PRIMARY KEY (id)
);

-- Definición de claves foráneas

ALTER TABLE IF EXISTS public."user"
    ADD FOREIGN KEY (role_id)
    REFERENCES public.role (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.condominium
    ADD FOREIGN KEY (user_id)
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.property
    ADD FOREIGN KEY (condominium_id)
    REFERENCES public.condominium (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.transaction
    ADD FOREIGN KEY (transaction_type_id)
    REFERENCES public.transaction_type (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.transaction
    ADD FOREIGN KEY (payment_type_id)
    REFERENCES public.payment_type (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.transaction
    ADD FOREIGN KEY (payment_status_id)
    REFERENCES public.payment_status (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.property_transaction
    ADD FOREIGN KEY (property_id)
    REFERENCES public.property (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.property_transaction
    ADD FOREIGN KEY (transaction_property_id)
    REFERENCES public.transaction (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.property_user
    ADD FOREIGN KEY (property_id)
    REFERENCES public.property (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.property_user
    ADD FOREIGN KEY (user_property_id)
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;
