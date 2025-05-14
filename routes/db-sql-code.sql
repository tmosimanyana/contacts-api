-- Type: account_ type

-- DROP TYPE IF EXISTS public."account_ type";

CREATE TYPE public."account_ type" AS ENUM
    (' Admin');

ALTER TYPE public."account_ type"
    OWNER TO cse340_niqv_user;

