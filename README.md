# frontend

## Как подготовить приложение к запуску

1. Запустить `npm install`
2. Сгенерировать клиент по файлу в формате OpenAPI с помощью команды `docker run -it --rm -v ${PWD}:/local        openapitools/openapi-generator-cli /bin/bash -c "/usr/local/bin/docker-entrypoint.sh generate     -i ${OPENAPI}     -g typescript     -o /local/hierarchy-metric-client    --package-name hierarchy-metric-client"`. В команде надо заменить `${PWD}` на директорию, в которой будет генерироваться API (например, текущую), и `${OPENAPI}` на URL, по которому осуществляется доступ к OpenAPI-документации.
3. Добавить в проект пакет `hierarchy-metric-client`. Можно либо положить его в `src/hierarchy-metric-client` (сейчас этот путь в `.gitignore`), либо опубликовать `hierarchy-metric-client` как пакет и импортировать его в проект с помощью `npm install hierarchy-metric-client`. Во втором случае импорт пакета, будет отличаться: например, `import { ... } from 'hierarchy-metric-client'`. Импорты в коде в этом случае нужно будет заменить.
4. Добавить файл `.env` с переменными:

```
NEXT_PUBLIC_BACKEND=%адрес_бэкенда%

NEXT_PUBLIC_COOKIE_DOMAIN=%любое_значение%
NEXT_KEYCLOAK_CLIENT_SECRET=%любое_значение%
NEXT_KEYCLOAK_CLIENT_ID=%любое_значение%
NEXT_KEYCLOAK_ISSUER=https://google.com
```

В `NEXT_PUBLIC_BACKEND` слеш в конце не нужен.

## Скрипты

-   `npm run dev` - запуск приложения в development моде
-   `npm run build` - сборка приложения
-   `npm run start` - запуск готовой сборки
-   `npm run check-types` - проверка тайпскриптом
-   `npm run lint` - проверка ESLint
-   `npm run check` - проверка ESLint и тайпскриптом
-   `npm run lint:fix` - фиксы ошибок ESLint
-   `npm run format` - форматирование кода с помощью Prettier

