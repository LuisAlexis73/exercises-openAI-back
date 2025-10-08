# exercises-openAI-back

## Descripción

Este repositorio es un proyecto práctico construido con [NestJS](https://nestjs.com/), que tiene como objetivo explorar y practicar el consumo de la API de OpenAI a través de la construcción de una API RESTful. Aquí aprenderás tanto el funcionamiento de la API de OpenAI como el desarrollo backend moderno usando NestJS.

El proyecto incluye varios módulos y servicios que permiten interactuar con diferentes capacidades de OpenAI, como chat, corrección ortográfica, traducción, pros y contras, síntesis de voz y transcripción de audio, todo mediante endpoints diseñados para distintos casos de uso.

### Características principales

- **Consumo de la API de OpenAI:** El proyecto implementa varios casos de uso (use cases) donde se realizan peticiones a OpenAI utilizando su SDK oficial. Esto incluye la generación de texto, corrección ortográfica, traducción, discusión de pros y contras, síntesis de voz y transcripción de audio.
- **Arquitectura modular con NestJS:** La API está dividida en módulos y servicios siguiendo buenas prácticas de NestJS, lo que facilita la escalabilidad y el mantenimiento.
- **Práctica de integración real:** Ideal para quienes desean aprender cómo integrar servicios de IA como OpenAI en aplicaciones Node.js/NestJS.

## Instalación

Instala las dependencias del proyecto:
```bash
npm install
```

## Variables de entorno

Debes agregar la variable `OPENAI_API_KEY` en tu entorno para autenticarte con la API de OpenAI.

## Ejecución de la aplicación

Ejecuta el proyecto en modo desarrollo:
```bash
npm run start:dev
```


## Estructura del proyecto

- `src/gpt/`: Servicios relacionados con procesamiento de texto, audio, traducción y más usando OpenAI.
- `src/mentor-assistant/`: Implementa un asistente tipo "mentor" que utiliza hilos y mensajes gestionados por OpenAI.
- `src/app.module.ts`: Configuración principal del módulo de NestJS.

## Ejemplos de Endpoints y Funcionalidades

- **Corrección ortográfica:** Envía textos en español y recibe correcciones con un score, usando el modelo de OpenAI.
- **Pros y contras:** Envía una pregunta y recibe una respuesta en markdown con listas de pros y contras.
- **Traducción de textos:** Traduce textos a distintos idiomas utilizando los modelos de OpenAI.
- **Texto a audio:** Convierte texto en audios MP3 usando las voces de OpenAI.
- **Transcripción de audio:** Convierte audios en texto utilizando modelos de OpenAI.

## Práctica y aprendizaje

Este repositorio está pensado para quienes quieren aprender sobre:

- El uso efectivo de la API de OpenAI en proyectos reales.
- Cómo construir APIs robustas y escalables con NestJS.
- Buenas prácticas de arquitectura y desarrollo backend.
